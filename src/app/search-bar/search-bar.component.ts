import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent {
  isOpen = false;
  isFiltersOpen = false;
  @ViewChild('inputRef') inputRef!: ElementRef;

  history = [
    'закрепить теги',
    'кнопка',
    'приложение',
    'форма',
    'текстовое поле',
    'выпадающий список'
  ];

  toggleSearch() {
    this.isOpen = !this.isOpen;
    this.isFiltersOpen = false;
    setTimeout(() => {
      if (this.isOpen && this.inputRef) {
        this.inputRef.nativeElement.focus();
      }
    }, 0);
  }

  showFilters() {
    this.isFiltersOpen = true;
  }

  @HostListener('document:click', ['$event'])
  onOutsideClick(event: MouseEvent) {

    const clickedInside = (event.target as HTMLElement).closest('.search-wrapper');
    if (!clickedInside) {
      this.isOpen = false;
      this.isFiltersOpen = false;
    }
  }

  onBlur() {
    this.isOpen = false;
    this.isFiltersOpen = false;
  }
}
