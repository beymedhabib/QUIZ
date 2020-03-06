import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ServiceService) { }
  LoginForm: FormGroup;
  ngOnInit() {
    this.LoginForm = new FormGroup({
      email : new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.minLength(6)])
    });
  }
  log() {
this.service.login(this.LoginForm.value);
  }

}
