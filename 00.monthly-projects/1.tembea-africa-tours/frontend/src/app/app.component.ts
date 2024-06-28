import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { ToursComponent } from "./tours/tours.component";
import { HotelsComponent } from "./hotels/hotels.component";
// import { TestimonialsComponent } from "./testimonials/testimonials.component";
// import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, HomepageComponent, ToursComponent, HotelsComponent]
    // imports: [RouterOutlet, NavbarComponent, HomepageComponent, ToursComponent, HotelsComponent, TestimonialsComponent, FooterComponent]
})
export class AppComponent {
  title = 'frontend';
}
