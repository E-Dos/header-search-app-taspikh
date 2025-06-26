import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { SearchBarMobileComponent } from '../search-bar-mobile/search-bar-mobile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, SearchBarMobileComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent  {

  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }


}
