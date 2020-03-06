import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  list = JSON.parse(localStorage.getItem('listusers')) || [];
  listtest = JSON.parse(localStorage.getItem('listtest')) || [];
  connect = JSON.parse(localStorage.getItem('connect')) || {};
  constructor(private route: Router) { }
  registe(user) {
    this.list.push(user);
    localStorage.setItem('listusers', JSON.stringify(this.list));
    this.route.navigateByUrl('/login');
  }
  login(user) {
// tslint:disable-next-line: prefer-for-of
for (let i = 0; i < this.list.length; i++) {
  if ((user.email === this.list[i].email) && (user.pass === this.list[i].password)) {
    this.connect = this.list[i];
    localStorage.setItem('connect', JSON.stringify(this.connect));
    if (this.connect.poste === 'Cotche') {
      this.route.navigateByUrl('/cotch');
    } else {
      this.route.navigateByUrl('/condidat');
    }
  }
}
  }
  addtest(test) {
this.listtest.push(test);
localStorage.setItem('listtest', JSON.stringify(this.listtest));
  }
  Remove(i) {
    this.listtest.splice(i, 1);
    localStorage.setItem('listtest', JSON.stringify(this.listtest));
  }
  UPDATE(i , f) {
    this.listtest[i] = f;
    localStorage.setItem('listtest', JSON.stringify(this.listtest));

  }
}
