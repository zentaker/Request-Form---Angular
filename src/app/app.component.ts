import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  usuarios = [
    {username: "usuari01", name: "nombre01", email:"correo1@abc.com"},
    
  ];

    desactivado: boolean = false

    agregarUsuario(){
      this.usuarios.push({username:"usuario05", name:"nombre05", email:"correox@abc.com"})
    }


    eliminarUsuario(indice:number){
      this.usuarios.splice(indice, 1)
    }
 
   



}
