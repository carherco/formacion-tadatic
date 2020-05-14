import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.page.html',
  styleUrls: ['./form-reactive.page.scss'],
})
export class FormReactivePage implements OnInit {

  user: User;
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private usersService: UsersService) {
    this.createForm();
    this.usersService.getUser(2).subscribe(
      user => {
        this.user = user;
        this.userForm.patchValue(this.user); // No es necesario que this.user y userForm coincidan exactamente
        // this.userForm.setValue(this.user); // this.user y userForm tienen que coincidir exactamente
      }
    );
  }

  ngOnInit() {}

  createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required ],
      username: ['', [Validators.required] ],
      email: ['', [Validators.email] ],
      address: this.fb.group({
        street: '',
        city: '',
        zipcode: ''
      }),
    });

    // TO-DO:
    // - Completar formulario con el resto de campos del usuario.
    // - Añadir un validador al username para que tenga que tener al menos 8 caracteres
    // - No permitir que el usuario envíe el formulario si no es válido
    // - Mostrar mensajes de error en los campos que no sean válidos
    // - Cuando se le de a submit, hacer una petición PUT a https://jsonplaceholder.typicode.com/users y mostrar en la consola la respuesta de la petición 
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

}