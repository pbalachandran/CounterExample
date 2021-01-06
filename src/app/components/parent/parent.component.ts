import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  initialCount: number;
  modifiedCount: number;
  anotherCount: number;

  constructor() { }

  ngOnInit() {
  }

  updateCount(value: number) {
    this.modifiedCount = value;
  }

  register($event: any) {
    this.anotherCount = $event.target.value();
  }
}
