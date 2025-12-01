import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./component/home/home";
import { Navbar } from "./component/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [Home, Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
