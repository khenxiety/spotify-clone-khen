import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottombar-mobile',
  templateUrl: './bottombar-mobile.component.html',
  styleUrls: ['./bottombar-mobile.component.scss']
})
export class BottombarMobileComponent implements OnInit {
  played:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
onPlay(){
    if(this.played){
      this.played=false;
    }
    else{
      this.played=true;
    }
  } 

}
