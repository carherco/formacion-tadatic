import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indexed-db',
  templateUrl: './indexed-db.page.html',
  styleUrls: ['./indexed-db.page.scss'],
})
export class IndexedDBPage implements OnInit {

  version = 5;
  db;
  customersStore;
  productsStore;
  constructor() { }

  ngOnInit() {
  }

  createStore() {
    const request = window.indexedDB.open('TadaticDatabase', this.version);
    request.onerror = (event) => {
      console.error('No se puede abrir/crear la base de datos');
    };

    // When you create a new database or increase the version number of an existing
    // database (by specifying a higher version number than you did previously, when
    // Opening a database), the onupgradeneeded event will be triggered. In the handler
    // for this event, you should create the object stores needed for this version of
    // the database
    request.onupgradeneeded = (event: any) => {
      this.db = event.target.result;
      // Crear un store 'customers'
      this.customersStore = this.db.createObjectStore('customers', { keyPath: 'ssn' });

      // Crear índices para hacer búsquedas
      this.customersStore.createIndex('name', 'name', { unique: false });
      this.customersStore.createIndex('email', 'email', { unique: true });

      // Crear otro store
      this.productsStore = this.db.createObjectStore('products', { keyPath: 'id' });
      this.productsStore.createIndex('name', 'name', { unique: false });
    };
  }

  add() {
    const customerData = [
      { ssn: '444-44-4444', name: 'Bill', age: 35, email: 'bill@company.com' },
      { ssn: '555-55-5555', name: 'Donna', age: 32, email: 'donna@home.org' }
    ];

    const request = window.indexedDB.open('TadaticDatabase', this.version);
    request.onerror = (event) => {
      console.error('No se puede abrir/crear la base de datos');
    };
    request.onsuccess = (event: any) => {
      const db = event.target.result;
      const customerObjectStore = db.transaction('customers', 'readwrite').objectStore('customers');
      customerObjectStore.add(customerData[0]);
      customerObjectStore.add(customerData[1]);
    };
  }

  delete() {
    const request = window.indexedDB.open('TadaticDatabase', this.version);
    request.onerror = (event) => {
      console.error('No se puede abrir/crear la base de datos');
    };
    request.onsuccess = (event: any) => {
      const db = event.target.result;
      const request = db.transaction(['customers'], 'readwrite')
                .objectStore('customers')
                .delete('444-44-4444');
      request.onsuccess = (event) => {
        console.log('elemento borrado');
      };
    };
  }

  read() {
    const request = window.indexedDB.open('TadaticDatabase', this.version);
    request.onerror = (event) => {
      console.error('No se puede abrir/crear la base de datos');
    };
    request.onsuccess = (event: any) => {
      const db = event.target.result;
      const transaction = db.transaction(['customers']);
      const objectStore = transaction.objectStore('customers');
      const request = objectStore.get('444-44-4444');
      request.onerror = (event) => {
        // Handle errors!
      };
      request.onsuccess = (event) => {
        // Do something with the request.result!
        console.log('Name for SSN 444-44-4444 is ' + request.result.name);
      };
    };

    
  }

}
