import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './home/layout/header/header.component';
import { FooterComponent } from './home/layout/footer/footer.component';
import { ContentComponent } from './home/layout/content/content.component';
import { ToursComponent } from './home/components/tours/tours.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ContentComponent, ToursComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'from1';
}
