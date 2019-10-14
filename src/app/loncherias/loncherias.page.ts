import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loncherias',
  templateUrl: './loncherias.page.html',
  styleUrls: ['./loncherias.page.scss'],
})
export class LoncheriasPage implements OnInit {

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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROZA4DEtuAOeQDwWkFE1tx5Sd8KouG7lFsUF0xoZbZfPJK6Bg1",
      subtitle: "Destino",
      title: "El comedor",
      content: "Se encuentra ubicado al final del pasillo principal, de lado izquierdo"
    },
    {
      img: "https://cdn2.traveler.es/uploads/images/thumbs/es/trav/3/s/2019/04/les_mauvais_garcons_5365_940x627.jpg",
      subtitle: "Destino",
      title: "Kiosco",
      content: "Este lugar se encuentra a un lado de los edificios de Arquitectura"
    }
  ]

}
