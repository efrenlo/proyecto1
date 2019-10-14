import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salones',
  templateUrl: './salones.page.html',
  styleUrls: ['./salones.page.scss'],
})
export class SalonesPage implements OnInit {

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
      img: "assets/img/baston.jpg",
      subtitle: "Destino",
      title: "Ciencias basicas",
      content: "Se encuentra ubicado casi a la entrada. aun lado del labotatorio de computo."
    },
    {
      img: "assets/img/uvp.jpg",
      subtitle: "Destino",
      title: "UD",
      content: "Este edificio se encuentra a un lado del pasillo principal, a mano derecha"
    },
    {
      img: "assets/img/computo.jpg",
      subtitle: "Destino",
      title: "Laboratorio de computo",
      content: "Este edificio se encuentra en frente del ciencias básicas. por le pasillo principla a mano derecha. Viniendo de la entrada"
    },
   
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Edificio_UVP.jpg",
      subtitle: "Destino",
      title: "UVP",
      content: "Este edificio se encuentra atrás del laboratorio de cómputo"
    }
  ]

}
