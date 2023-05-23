import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit {

  credenciales = {
    email: null,
    password: null
  }

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {}

  async login() {
    console.log('credenciales -> ', this.credenciales);
    if (this.credenciales.email !== null && this.credenciales.password !== null) {
      const res = await this.auth.login(this.credenciales.email, this.credenciales.password).catch( error => {
        console.log('error');
      })
      if (res) {
        console.log('res ->', res);
        this.router.navigate(['/home'])
      }
    } else {

    }    
  }

}
