import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import anime, {AnimeInstance} from 'animejs';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SplashScreenComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.animate()
  }
  animate(){
    var textWrapper = document.querySelector('.ml11 .letters')!;
    textWrapper.innerHTML = textWrapper.textContent!.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    // anime.timeline({loop: false})
    //   .add({
    //     targets: '.ml16 .letter',
    //     translateY: [-100,0],
    //     easing: "easeOutExpo",
    //     duration: 1400,
    //     delay: (el, i) => 30 * i
    //   }).add({
    //     targets: '.ml16',
    //     opacity: 0,
    //     duration: 1000,
    //     easing: "easeOutExpo",
    //     delay: 1000
    //   }).add({
    //     targets:'.splash-screen',
    //     opacity:0,
    //     duration:1000,
    //     easing:'easeInOutExpo',
    //     complete:()=>{
    //       document.querySelector('.splash-screen')!.remove()
    //     }
    //   });
 

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters')!.getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  }).add({
    targets:'.splash-screen',
    opacity:0,
    duration:1000,
    easing:'easeInOutExpo',
    complete:()=>{
      document.querySelector('.splash-screen')!.remove()
      // this.router.navigate(['/search'])
    }
  });
  

   
      

    }
    


}
