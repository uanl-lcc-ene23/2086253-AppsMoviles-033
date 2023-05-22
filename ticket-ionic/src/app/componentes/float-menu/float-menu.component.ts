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
    {nombre: 'Sign-up',enlace:'/sign-up',
    icono:'book-outline'},
    {nombre: 'Login',enlace:'/login',
    icono:'log-in-outline'},
    {nombre: 'Choose-artist',enlace:'/choose-artist',
    icono:'person-outline'},
    {nombre: 'Search',enlace:'/search',
    icono:'search-outline'},
    {nombre: 'Album',enlace:'/album',
    icono:'albums-outline'},
    {nombre: 'Playlist',enlace:'/playlist',
    icono:'musical-notes-outline'},
    {nombre: 'Library',enlace:'/library',
    icono:'library-outline'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  navegar(link: string){
    this.router.navigate([link]);
  }

}
