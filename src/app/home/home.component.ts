import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ReviewSwiperComponent } from "../custom/review-swiper/review-swiper.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReviewSwiperComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  

}