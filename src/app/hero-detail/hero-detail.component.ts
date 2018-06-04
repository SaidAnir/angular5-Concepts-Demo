
/* 
This component simply receives a hero object through its hero property and displays it.

*/

import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})



export class HeroDetailComponent implements OnInit {

  //hero property is annotated with @Input because the external heroes component will bind to it.
  // hero property will receive value of selectedHero property , this is called property binding
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
