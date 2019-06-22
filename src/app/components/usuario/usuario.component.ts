import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  
})


export class UsuarioComponent implements OnInit {


  @Input() userName: string
  @Input() userNombre: string
  @Input() usuario: Object
  @Input() indice: number
  

  @Output() onEliminar = new EventEmitter<number>()
  

  constructor() { }

  ngOnInit() {
  }


  eliminar() {
    this.onEliminar.emit(this.indice);
  }
}
