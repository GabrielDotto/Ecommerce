import { Component } from '@angular/core';
import { CategoriaService } from "./Servicos/CategoriaService";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce';
  
  constructor( private router: Router) {
    this.router.navigate(['/login'])
   }
}
