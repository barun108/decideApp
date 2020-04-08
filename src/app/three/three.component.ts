import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AppValues } from './../app.component';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
    @Input() appValues: AppValues;

  constructor() { }

  ngOnInit() {
  }

}
