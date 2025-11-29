import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { ContentComponent } from './componentes/content/content.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContenedorComponent } from './componentes/contenedor/contenedor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    ContenedorComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-base';
}
