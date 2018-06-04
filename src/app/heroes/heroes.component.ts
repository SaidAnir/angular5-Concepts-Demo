import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-heroes',  //matches the name of the HTML tag that identifies heroes component
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero : Hero;
  
  //this does 2 things: declares a private proerty and identifies it as an injection site.
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // initialization logic goes here
    this.getHeroes();
  }


  onSelect(hero: Hero) : void {
    this.selectedHero = hero; //Object.assign({}, hero) //this.selectedHero = hero; this only creates a reference between the two objects
  }

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }

}
