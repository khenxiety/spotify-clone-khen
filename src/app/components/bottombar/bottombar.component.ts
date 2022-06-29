import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.scss']
})
export class BottombarComponent implements OnInit {

  constructor() { }

  played:boolean=false;

  ngOnInit(): void {
  }
  // hostlistener click
  onPlay(){
    if(this.played){
      this.played=false;
    }
    else{
      this.played=true;
    }
  } 

}
