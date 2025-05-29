import { Component } from '@angular/core';
import { TitleComponent } from '../../MicroComponents/title/title.component';

@Component({
  selector: 'app-card',
  imports: [TitleComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
