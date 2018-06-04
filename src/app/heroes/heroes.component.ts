import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'


@Component({
  selector: 'app-heroes',  //matches the name of the HTML tag that identifies heroes component
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero : Hero;
  
  constructor() { }

  ngOnInit() {
    // initialization logic goes here
  }


  onSelect(hero: Hero) : void {
    this.selectedHero = hero; //Object.assign({}, hero) //this.selectedHero = hero; this only creates a reference between the two objects
  }

}
