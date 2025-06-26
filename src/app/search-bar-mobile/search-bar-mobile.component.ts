import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar-mobile.component.html',
  styleUrls: ['./search-bar-mobile.component.scss']
})
export class SearchBarMobileComponent {
  isMobSearchOpen = false;
  @ViewChild('inputRef') inputRef!: ElementRef;

  history = [
    'закрепить теги',
    'кнопка',
    'приложение',
    'форма',
    'текстовое поле',
    'выпадающий список',
  ];

  openSearch() {
    this.isMobSearchOpen = true;
    setTimeout(() => {
      this.inputRef?.nativeElement.focus();
    }, 0);
  }

  closeSearch() {
    this.isMobSearchOpen = false;
  }
}
