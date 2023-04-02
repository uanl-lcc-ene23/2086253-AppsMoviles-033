import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {

  articulos: any[] = [];
  articulo: any = { descripcion: '', precio: '' };
  total: number = 0;

  mostrarCaja: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  agregarArticulo() {
    this.articulos.push(this.articulo);
    this.calcularTotal();
    this.articulo = { descripcion: '', precio: '' };
  }

  calcularTotal() {
    let total = 0;
    for (let i = 0; i < this.articulos.length; i++) {
      total += parseFloat(this.articulos[i].precio);
    }
    this.total = total;

    this.mostrarCaja = true;
    setTimeout(() => {
      this.mostrarCaja = false;
    }, 3000);
  }

  cerrarCaja() {
    this.mostrarCaja = false;
  }  
}
