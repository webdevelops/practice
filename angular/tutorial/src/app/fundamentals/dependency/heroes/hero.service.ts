import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private logger: LoggerService
  ) { }

  getHeroes() {
    this.logger.log('Getting heroes...')
    return HEROES;
  }
}
