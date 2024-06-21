import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinningWheelService {
  private outcomes: string[] = ['Prize 1', 'Prize 2', 'Try Again', 'Bonus!'];

  constructor() { }

  spin(): string {
    const index = Math.floor(Math.random() * this.outcomes.length);
    return this.outcomes[index];
  }
}
