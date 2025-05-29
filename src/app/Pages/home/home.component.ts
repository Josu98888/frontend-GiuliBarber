import { Component } from '@angular/core';
import { MysliderComponent } from '../../MicroComponents/myslider/myslider.component';

@Component({
  selector: 'app-home',
  imports: [MysliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
