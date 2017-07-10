import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Hero } from '../models';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class HeroService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getHeroes(): FirebaseListObservable<Hero[]> {
    return this.db.list('/heroes');
  }

  getHero(id: number): Observable<Hero> {
    return this.getHeroes()
      .map(heroes => heroes.filter(hero => hero.id === id)[0]);
  }

  create(name: string): void {
    this.db.list('/heroes').push({
      id: 100, name: name
    });
  }

  update(hero: Hero): void {
    this.db.list('/heroes').update(hero.$key, { name: hero.name });
  }

  delete(hero: Hero): void {
    this.db.list('/heroes').remove(hero.$key);
  }



}
