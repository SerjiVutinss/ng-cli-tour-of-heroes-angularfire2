import { Component, OnInit } from '@angular/core';

import { Hero } from '../../models';
import { HeroService } from '../../services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[];
  isLoading: Boolean = true;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.slice(1, 5),
          null,
          this.isLoading = false
      });
  }
}
