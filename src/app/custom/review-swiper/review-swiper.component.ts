import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import ReviewSwiper from './review-swiper';

@Component({
  selector: 'app-review-swiper',
  standalone: true,
  imports: [CommonModule, ReviewSwiperComponent],
  templateUrl: './review-swiper.component.html',
  styleUrl: './review-swiper.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ReviewSwiperComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  public rootId: string = 'rootId';

  constructor() {}


  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngAfterViewInit(): void {
    this.render();  
  }
  ngOnDestroy(): void {
    
  }

  private render() {
    const container = document.getElementById(this.rootId);
    const root = createRoot(container!); // createRoot(container!) if you use TypeScript
    root.render(React.createElement(ReviewSwiper));
  }
}
