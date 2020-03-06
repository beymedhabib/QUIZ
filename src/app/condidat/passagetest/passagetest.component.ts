import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-passagetest',
  templateUrl: './passagetest.component.html',
  styleUrls: ['./passagetest.component.css']
})
export class PassagetestComponent implements OnInit {
  constructor(private activateroute: ActivatedRoute, private service: ServiceService) { }
  index = this.activateroute.snapshot.paramMap.get('i');
  f: any;
  i = 0;
  j = 0;
  option = '';
  ngOnInit() {
    this.f = this.service.listtest[this.index];
  }
  next() {
    console.log(this.option);
    if (this.option === this.f.question[this.i].Bonne) {
        this.j = this.j + 1;
        console.log(this.j);
}
    this.i = this.i + 1;

  }
  previous() {
    this.i = this.i - 1;
  }
  finish() {
    console.log(this.j);
  }

}
