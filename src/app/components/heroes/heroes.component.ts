import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../models';
import { HeroService } from '../../services';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  cbIsActive = false;
  isLoading: Boolean = true;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes,
          null,
          this.isLoading = false
      });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name, this.cbIsActive);
    this.cbIsActive = false;
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.gotoDetail();
  }

  checkBoxOnClick(): void {
    this.cbIsActive = !this.cbIsActive;
  }

  gotoDetail(): void {
    this.router.navigate(['/hero-detail', this.selectedHero.$key]);
  }

}
