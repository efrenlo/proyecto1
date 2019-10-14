import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrativos',
  templateUrl: './administrativos.page.html',
  styleUrls: ['./administrativos.page.scss'],
})
export class AdministrativosPage implements OnInit {

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
      img: "https://mapio.net/images-p/73487157.jpg",
      subtitle: "Destino",
      title: "Edificio Administrativo",
      content: "Se encuentra ubicado en frente de la biblioteca. Ahí se realizan los tramites escolares y carga de horarios"
    },
    {
      img: "https://concepto.de/wp-content/uploads/2015/03/biblioteca-e1550105792560.jpg",
      subtitle: "Destino",
      title: "Biblioteca",
      content: "Este edificio se encuetra a un lado del Edificio Administrativo. Forma de llegar a el por el andador del estudiante"
    },
    
  ]

}
