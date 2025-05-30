import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common'; 

@Component({
  selector: 'app-dropdown',
  imports: [CommonModule, RouterLink],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {

  constructor(
    private _router: Router,
    private _viewportScroller: ViewportScroller
  ) {

  }

  goToTurn() {
    this._router.navigate([''], { fragment: 'form' }).then(() => {
      setTimeout(() => {
        this._viewportScroller.scrollToAnchor('form');
      }, 0);
    });
  }
}
