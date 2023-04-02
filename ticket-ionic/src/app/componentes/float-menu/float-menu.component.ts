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
    {nombre: 'Grid',enlace:'/home',
    icono:'grid-outline'},
    {nombre: 'Ticket',enlace:'/ticket',
    icono:'cash-outline'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  navegar(link: string){
    this.router.navigate([link]);
  }

}
