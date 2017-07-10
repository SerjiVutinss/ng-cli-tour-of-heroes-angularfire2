import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from '../../models';
import { HeroService } from '../../services';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  save(hero: Hero): void {
    this.heroService.update(hero);
    this.goBack();
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}
