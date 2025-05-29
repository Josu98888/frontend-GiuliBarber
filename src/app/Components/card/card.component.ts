import { Component, Input } from '@angular/core';
import { TitleComponent } from '../../MicroComponents/title/title.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [TitleComponent, NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() image:string = '';
  @Input() title:string = '';
  @Input() is_product!:boolean;
}
