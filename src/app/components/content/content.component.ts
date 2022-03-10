import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  currentButtonName:String =" ";
  getButtonName(buttonName: string) {
    this.currentButtonName = buttonName; 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
