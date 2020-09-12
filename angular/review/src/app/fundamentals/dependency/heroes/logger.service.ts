import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logs: string[] = [];

  constructor() { }

  log(message: string) {
    this.logs.push(message);
    console.log(message);
  }
}
