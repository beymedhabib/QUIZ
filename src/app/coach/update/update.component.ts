import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(private service: ServiceService, private activateroute: ActivatedRoute, private router: Router) { }
  index = this.activateroute.snapshot.paramMap.get('i');
testup: FormGroup;
  ngOnInit() {
    this.testup = new FormGroup({
      idcoach: new FormControl(this.service.listtest[this.index].idcoach),
      testname : new FormControl(this.service.listtest[this.index].testname),
      question: new FormArray([])
    });
    this.initQ();
  }

  get question() { return this.testup.get('question') as FormArray; }
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
  initQ() {
    this.service.listtest[this.index].question.map(q => {
(this.testup.get('question') as FormArray).push(this.quesInit(q));
    });
  }
    quesInit(q): FormGroup {
    return new FormGroup({
      questionname: new FormControl(q.questionname),
      Bonne: new FormControl(q.Bonne),
      option1: new FormControl(q.option1),
      option2: new FormControl(q.option2),
      option3: new FormControl(q.option3),
      option4: new FormControl(q.option4)
    });
  }
  addques() {
    this.question.push(this.ques());
  }
  update() {
    this.service.UPDATE(this.index, this.testup.value);
    this.router.navigateByUrl('/cotch/list');
  }
}
