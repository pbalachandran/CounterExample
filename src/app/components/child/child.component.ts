import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  count: number;

  @Output()
  countEventEmitter = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.count++;
    this.countEventEmitter.emit(this.count);
  }

  decrement() {
    this.count--;
    this.countEventEmitter.emit(this.count);
  }

  isCountDefined(): boolean {
    return !isNullOrUndefined(this.count);
  }
}
