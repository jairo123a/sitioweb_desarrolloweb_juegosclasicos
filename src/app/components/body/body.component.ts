import { Component } from '@angular/core';
//tiene los conponentes necesarios para css 
@Component({
  selector: 'app-body',
  templateUrl:'./body.component.html',
  styleUrls: ['./body.component.css']

})
//tengo el titulo de la pagina
export class BodyComponent{
  listaJuegos:string;
  
  constructor(){
    this.listaJuegos = "En este sitio web creado por jairo henao arbelaez pódras encontrar los mejores juegos clasicos";
    
  }

  
}
