import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutComponent, HomeComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing_blog';
}
