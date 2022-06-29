import { Component, OnInit } from '@angular/core';
// import * as anime from 'animejs'
import anime, { AnimeInstance } from 'animejs';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    this.animate()
    

  }


  animate(){
    
    // anime({
    //   targets: '.btn',
    //   translateY: 250,
    //   duration: 3000
    // });
    anime.timeline({loop: true})
    .add({
      targets: '.content .box1',
      scale: [0, 3],
      opacity: [1, 0],
      easing: "easeInOutExpo",
      rotateZ: 360,
      duration: 1000,
      
    }).add({
      targets: '.content .box1',
      scale: [0, 1],
      duration: 1000,
      rotate:45,
      opacity: [0, 1],
      // easing: "easeInOutExpo",
      offset: '-=1000',
      
      
    })
    
    .add({
      targets: '.content .box2',
      scale: [0, 1],
      duration: 1000,
      // easing: "easeOutExpo",
      rotateZ: 180,

      offset: '-=600'
    }).add({
      targets: '.content h1',
      scale: [0, 1],
      rotateZ: -180,
      duration: 1100,
      offset: '-=1000',
      

    }).add({
      targets: '.content',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1400
    });

// anime({
//   targets: '.content .box1',
//   rotateZ: 360,
//   duration: 8000,
//   opacity:1,
//   easing: "linear",
//   loop: true
// });
  
  
  }


  onClick(){

  }


  
}
