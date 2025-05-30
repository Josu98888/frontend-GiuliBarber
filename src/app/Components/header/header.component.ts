import { Component, HostListener } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [DropdownComponent, NgIf],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public dropdown: boolean = false;

  togleMenu() {
    this.dropdown = !this.dropdown;
  }
}
