import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSwiperComponent } from './review-swiper.component';

describe('ReviewSwiperComponent', () => {
  let component: ReviewSwiperComponent;
  let fixture: ComponentFixture<ReviewSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewSwiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
