import { Component } from '@angular/core';
import { MysliderComponent } from '../../MicroComponents/myslider/myslider.component';
import { CardComponent } from '../../Components/card/card.component';
import { TitleComponent } from '../../MicroComponents/title/title.component';
import { FormComponent } from '../../Components/form/form.component';

@Component({
  selector: 'app-home',
  imports: [MysliderComponent, CardComponent, TitleComponent, FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
