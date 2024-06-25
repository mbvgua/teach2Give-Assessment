import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriesProductComponent } from "./categories-product/categories-product.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RegisterComponent, LoginComponent, CategoriesProductComponent]
})
export class AppComponent {
  title = '3.ecommerce';
}
