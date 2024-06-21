import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SpinningWheelComponent } from "./spinning-wheel/spinning-wheel.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, SpinningWheelComponent]
})
export class AppComponent {
  title = '2.friday-assesment';
}
