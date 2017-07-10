import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';
import { Promise } from 'firebase';

import { Hero } from '../models';

import {
  AngularFireDatabase,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2/database';

@Injectable()
export class HeroService {

  heroes: FirebaseListObservable<Hero[]>;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.heroes = this.db.list('/heroes');
  }

  getHeroes(): FirebaseListObservable<Hero[]> {
    //return this.db.list('/heroes');
    return this.heroes;
  }

  getHero(key: string): FirebaseObjectObservable<Hero> {
    return this.db.object(`/heroes/${key}`);
    //.map(heroes => heroes.filter(hero => hero.id === id)[0]);
  }

  create(name: string): void {
    this.db.list('/heroes').push({
      id: 100, name: name
    });
  }

  update(hero: Hero): Promise<void> {

    // return this.db.list('/heroes')
    //   .update(hero.$key, { name: hero.name })
    //   .toPromise()
    //   .catch(this.handleError);
    return this.heroes.update(hero.$key, { name: hero.name });
  }

  delete(hero: Hero): Promise<void> {
    // this.db.list('/heroes').remove(hero.$key);
    return this.heroes.remove(hero.$key);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}
