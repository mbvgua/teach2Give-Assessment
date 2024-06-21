import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-spinning-wheel',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './spinning-wheel.component.html',
  styleUrl: './spinning-wheel.component.css'
})
export class SpinningWheelComponent implements OnInit {

  outcomes: string[] = ['Prize 1', 'Prize 2', 'Try Again', 'Bonus!'];
  result: string | null = null;
  extraSpin: boolean = false;

  spin() {
    this.result = this.outcomes[Math.floor(Math.random() * this.outcomes.length)];
    this.extraSpin = this.result === 'Try Again';
  }

  ngOnInit() {
  }
}
