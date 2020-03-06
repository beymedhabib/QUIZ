import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;
  i = Math.floor(Math.random() * 1000) + 1;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.registerform = new FormGroup({
      id: new FormControl( this.i),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.minLength(6)]),
      poste:  new FormControl('', [Validators.required])
    });
  }
  reg() {
this.service.registe(this.registerform.value);
}
}
