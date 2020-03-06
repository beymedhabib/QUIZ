import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-listtest',
  templateUrl: './listtest.component.html',
  styleUrls: ['./listtest.component.css']
})
export class ListtestComponent implements OnInit {

  constructor(private service: ServiceService) { }
  tab = [];
  ngOnInit() {
    this.tab = this.service.listtest;
  }

}
