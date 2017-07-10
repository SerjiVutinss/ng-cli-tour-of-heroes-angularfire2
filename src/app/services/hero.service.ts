import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Hero } from '../models';
import { HEROES } from '../mock-heroes';

@Injectable()
export class HeroService {

  constructor(private http: Http) { }

  private _heroesUrl = 'http://localhost:3000/heroes';

  // getHeroes(): Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // }

  getHeroes(): Observable<Hero[]> {
    let url = this._heroesUrl;
    return this.http.get(url)
      .map(res => res.json());
  }

  getHero(id: number): Observable<Hero> {
    return this.getHeroes()
      .map(heroes => heroes.filter(hero => hero.id === id)[0]);
  }

  // getHero(id: number): Promise<Hero> {
  //   return this.getHeroes().then(
  //     heroes => heroes.find(hero => hero.id === id)
  //   );
  // }

  // getHeroesSlowly(): Promise<Hero[]> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(this.getHeroes()), 2000);
  //   });
  // }

}
