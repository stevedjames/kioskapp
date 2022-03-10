import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  todayNumber: number = Date.now();
  sanitizerLevel: number = 100;
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();

  handleClick(event: Event) { 
    // console.log("Clicked", event) 
    this.sanitizerLevel=-1;

  } 
  ngOnInit(): void {
    setInterval(() => {         
      this.todayDate = new Date();
    }, 1000);
    setInterval(() => {         
      this.sanitizerLevel-=1;
      if(this.sanitizerLevel<=0){
        this.sanitizerLevel=100;
      }
    }, 5000);
    
  }

}
