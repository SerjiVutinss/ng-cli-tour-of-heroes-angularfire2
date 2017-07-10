import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Hero } from '../models';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class HeroService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getHeroes(): Observable<Hero[]> {
    return this.db.list('/heroes');
  }

  getHero(id: number): Observable<Hero> {
    return this.getHeroes()
      .map(heroes => heroes.filter(hero => hero.id === id)[0]);
  }
}
