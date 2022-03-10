import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-content-left-mode',
  templateUrl: './content-left-mode.component.html',
  styleUrls: ['./content-left-mode.component.css']
})
export class ContentLeftModeComponent implements OnInit {
  @Output() buttonName = new EventEmitter<string>();

  getButtonName(value: string) {
    this.buttonName.emit(value);
    // console.log(value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
