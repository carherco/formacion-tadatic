import { Component, OnInit } from '@angular/core';

class LayerGroup {
  id;
  name;
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}


@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.page.html',
  styleUrls: ['./arrays.page.scss'],
})
export class ArraysPage implements OnInit {


  workspace = {
    layers: [
      {id: 2},
      {id: 15},
    ]
  };

  viewSub = {
    vista1: { name: 'es la vista cuya clave es vista1', otrosdatos: 'Otros datos'},
    vista2: { name: 'es la vista cuya clave es vista2', otrosdatos: 'Otros datos'},
    vista32: { name: 'es la vista cuya clave es vista32', otrosdatos: 'Otros datos'},
  };

  layerGroupNameArray = [
    {id: 2, name: 'nombre del layer'},
    {id: 15, name: 'nombre del layer'},
    {id: 17, name: 'nombre del layer'},
  ];

  layerGroupNameConClaves = {
    2: {name: 'nombre del layer 2'},
    15: {name: 'nombre del layer 15'},
    17: {name: 'nombre del layer 17'},
  };


  constructor() {

    // let viewname = 'vista32';
    // console.log(this.viewSub.vista2);

    // console.log(this.viewSub[viewname]);

    // let layerPos = 15;
    
    // this.layerGroupNameArray[layerPos]; // Posición 15 del array (no existe)
    
    // this.layerGroupNameConClaves[layerPos.toString()]; // Clave 15 del objeto/mapa

    // this.layerGroupName = null;
    // for (let k = 0; k < this.workspace.layers.length; k++) {
    //   const layerPos = this.workspace.layers[k].id;
    // layerPos = 24; 15
    //   const cadena = layerG.findGroupLayerName(layerPos, layergroup) 
    // cadena = 'RedDeFibra'; 'RedDeCobre'
    //   // console.log(ob);
    //   this.layerGroupName[layerPos.toString()] = cadena;
    //   this.layerGroupName[24.toString()] = 'RedDeFibra';
    // }

    // this.layerGroupName = {
    //   24: 'RedDeFribra',
    //   15: 'RedDeCobre'
    // }


    

    let layerG: LayerGroup = new LayerGroup(5, 'name');

    console.log(layerG.id);
    
    // const array1 = [5, 12, 8, 130, 44];
    
    // const found = array1.find(element => element > 10);
    
    
    
    
    // public getLayerById(id) {
    //   return this.workspace.layers.find(
    //     layer => layer.id.toString() === id.toString()
    //   );
    // }


    // this.viewSub[viewname]


   }

  ngOnInit() {
  }

}
