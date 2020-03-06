import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private service: ServiceService) { }
  tab = [];

  ngOnInit() {
    this.tab = this.service.listtest;
  }
  remove(i) {
this.service.Remove(i);
  }

}
