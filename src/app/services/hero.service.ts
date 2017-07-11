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

  create(name: string, isActive: boolean): void {
    this.db.list('/heroes').push({
      id: 100, name: name, isActive: isActive
    });
  }

  update(hero: Hero): Promise<void> {

    //let myKey: string = hero.$key;
    //return this.db.object(`/heroes/{myKey}`).set(hero);

    // return this.db.list('/heroes')
    //   .update(hero.$key, { name: hero.name })
    //   .toPromise()
    //   .catch(this.handleError);
    //this.heroes.update(hero.$key, { name: hero.name });
    //return this.heroes.update(hero.$key, { isActive: hero.isActive });
    return this.heroes.update(hero.$key, hero);
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
