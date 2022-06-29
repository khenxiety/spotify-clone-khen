import { Component, OnInit } from '@angular/core';

import { HostListener } from '@angular/core';

import * as anime from 'animejs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  song:any=[
    {
      name:'This Is Eden',
      img:'assets/playlist-eden.jpg',
      color:'#31373f'
    },
    {
      name:'This Is Bring Me The Horizon',
      // img:'https://thisis-images.scdn.co/37i9dQZF1DZ06evO0VDZny-large.jpg',
      img:'assets/playlist-eden.jpg',

      color:'#631207'
    },
    {
      name:'This Is Joji',
      // img:'https://thisis-images.scdn.co/37i9dQZF1DZ06evO2cV1FC-large.jpg',
      img:'assets/playlist-eden.jpg',

      color:'#b5aeae'
    },
    {
      name:'This Is Keshi',
      // img:'https://thisis-images.scdn.co/37i9dQZF1DZ06evO1YBCTj-default.jpg',
      img:'assets/playlist-eden.jpg',

      color:'#952f69'
    },
    {
      name:'End Credits',
      // img:'https://upload.wikimedia.org/wikipedia/en/1/1d/End_Credits_by_EDEN-Official%2CDecember2015.jpg',
      img:'assets/playlist-eden.jpg',

      color:'#313838'
    },
    {
      name:'Mac Demarco 2',
      // img:'https://media.pitchfork.com/photos/5929c003abf31b7dc71563c8/1:1/w_600/46f10fc3.jpg',
      img:'assets/playlist-eden.jpg',

      color:'#357d77'
    },
    
  ]

  uniquely:any=[
    {
      title:'On Repeat',
      description:"Songs you love right now ",
      img:'assets/on-repeat.png',
    },
    {
      title:'Your Time Capsule',
      description:"Your favorite songs",
      img:'assets/on-repeat.png',
    },{
      title:'Daily Drive',
      description:"A mix of news and music made for you",
      img:'assets/on-repeat.png',
    },
    {
      title:'Your Daily Mix',
      description:"A mix of news and music made for you",
      img:'assets/on-repeat.png',
    },
    {
      title:'Liked Songs',
      description:"85 songs",
      img:'assets/on-repeat.png',
    }
  ]

  navbarfixed:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event']) onscroll(){
    if(window.scrollY>80){
      this.navbarfixed=true;
    }
    else{
      this.navbarfixed=false;
    }

  }

  displayPlay(){
    const play=document.getElementById('play')!;
    play.style.display='block';
  }


  changeColor(e:any){
    // console.log(e)

    const hero=document.getElementById('hero-featured')!;
    // transition
    hero.style.transition='background-color 0.5s ease-in-out';
    hero.style.background='linear-gradient(to bottom,'+e+','+e+',#000000)';
    
  }


 






}
