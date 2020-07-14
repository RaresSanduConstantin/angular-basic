import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment41',
  templateUrl: './assigment41.component.html',
  styleUrls: ['./assigment41.component.css']
})
export class Assigment41Component implements OnInit {

  showSecret = false;
  log = []

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1)
    this.log.push(new Date())

  }

}
