import {
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-myslider',
  imports: [],
  templateUrl: './myslider.component.html',
  styleUrl: './myslider.component.css',
})
export class MysliderComponent implements AfterViewInit {
  @ViewChild('slider', { static: true }) slider!: ElementRef;
  @ContentChildren('slideItem', { descendants: true })
  slideItems!: QueryList<ElementRef>;
  currentIndex: number = 0;

  ngAfterViewInit(): void {
    this.updateSlider();
  }
  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slideItems.length) % this.slideItems.length;
    this.updateSlider();
  }
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slideItems.length;
    this.updateSlider();
  }

  updateSlider() {
    if (this.slider?.nativeElement) {
      this.slider.nativeElement.style.transform = `translateX(-${
        this.currentIndex * 100
      }%)`;
    }
  }
}
