import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //En el home card
  productsList: any[] = [
    {
    id: 1,
    name: 'Manzana de agua',
    image: './assets/home/manzana.jpg',
    description: 'Esta es la descripción del producto',
    price: 5000

  },
  {
    id: 2,
    name: 'Durazno rey negro',
    image: './assets/home/Durazno.jpg',
    description: 'Esta es la descripción del producto',
    price: 5000
  },
  {
    id: 3,
    name: 'Fresas',
    image: './assets/home/Fresa.jpg',
    description: 'Esta es la descripción del producto',
    price: 5000
  },
  {
    id: 4,
    name: 'papa',
    image: './assets/home/Papa.jpg',
    description: 'Esta es la descripción del producto',
    price: 5000
  },
  {
    id: 5,
    name: 'lechuga',
    image: './assets/home/Lechuga1.jpg',
    description: 'Esta es la descripción del producto',
    price: 5000
  },
  {
    id: 6,
    name: 'papa dulce',
    image: './assets/home/Papa dulce.jpg',
    description: 'Esta es la descripción del producto',
    price: 5000
  },
  {
    id: 7,
    name: 'maíz',
    image: './assets/home/Maíz.jpg',
    description: 'Esta es la descripción del producto',
    price: 5000

  },
  {
    id: 8,
    name: 'alcachofa',
    image: './assets/home/Alcachofa1.jpg',
    description: 'Esta es la descripción del producto',
    price: 5000
  },
  {
    id: 9,
    name: 'arverja',
    image: './assets/home/Arvejas.jpg',
    ddescription: 'Esta es la descripción del producto',
    price: 5000
  }
  ,
  {
    id: 10,
    name: 'habichuela',
    image: './assets/home/Habichuela.jpg',
    description: 'Esta es la descripción del producto',
    price: 5000
  } ,
  {
    id: 11,
    name: 'zanahoria',
    image: './assets/home/Zanahoria.jpg',
    description: 'Esta es la descripción del producto',
    price: 5000
  },
  {
    id: 12,
    name: 'remolacha',
    image: './assets/home/Remolacha.jpg',
    description: 'Esta es la descripción del producto',
    price: 5000
  }



  ]
  constructor() { }

  ngOnInit(): void {
  }

}
