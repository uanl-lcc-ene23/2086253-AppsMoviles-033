import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interface/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent  implements OnInit {
  datosMenu: Menu[] =[
    {nombre: 'Home',enlace:'/home',
    icono:'home-outline'},
    {nombre: 'Start',enlace:'/start',
    icono:'checkmark-outline'},
    {nombre: 'Singup',enlace:'/singup',
    icono:'book-outline'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  navegar(link: string){
    this.router.navigate([link]);
  }

}
