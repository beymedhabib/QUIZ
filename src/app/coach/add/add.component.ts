import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor( private service: ServiceService, private route: Router) { }
  test: FormGroup;
  ngOnInit() {
    this.test = new FormGroup({
      idcoach: new FormControl(this.service.connect.id),
      testname: new FormControl('', [Validators.required]),
      question: new FormArray([]),
    });
  }
  get question() {return this.test.get('question') as FormArray; }
  ques(): FormGroup {
    return new FormGroup({
      questionname: new FormControl(''),
      Bonne: new FormControl(''),
      option1: new FormControl(''),
      option2: new FormControl(''),
      option3: new FormControl(''),
      option4: new FormControl('')
    });
  }
  addques() {
    this.question.push(this.ques());
  }
  addt() {
    this.service.addtest(this.test.value);
    this.route.navigateByUrl('/cotch/list');
  }
}
