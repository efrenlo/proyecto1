import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.page.html',
  styleUrls: ['./canchas.page.scss'],
})
export class CanchasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideOpts = {
    initialSlide:0,
    speed:400,
    grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94
  }
    
  };
  
  gallery = [
    {
      img: "http://www.tepic.tecnm.mx/images/2012/315/principal.jpg",
      subtitle: "Destino",
      title: "Canchas de futbol",
      content: "Se encuentran ubicadas detras del edificio de los A, hasta el fondo a la derecha"
    },
    {
      img: "http://www.tepic.tecnm.mx/images/2012/438/galeria/bol_2.jpg",
      subtitle: "Destino",
      title: "Domo",
      content: "Este lugar se encuentra ubicado a un lado del kiosko y asi mismo esta a un lado de todas las canchas"
    }
  ]

}
