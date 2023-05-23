import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { error } from 'console';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.css'],
})
export class SignUpPage implements OnInit {

  formReg: FormGroup;

  constructor(private userService: UserService) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
   }
    
  ngOnInit(): void {
  }

  onSumbit() {
    this.userService.register(this.formReg.value)
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log(error));
  }

}
