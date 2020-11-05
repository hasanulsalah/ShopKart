import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  signinForm;
  email;
  password;

  constructor() { }

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      email:new FormControl(""),
      password:new FormControl("")
    });
  }

  onSubmit(){
    console.log(this.signinForm.value);
  }

}
