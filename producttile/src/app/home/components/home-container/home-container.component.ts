import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Ad } from 'src/app/shared/domain';
import { HomeService } from '../../services';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent  implements OnInit{
  ad$:Observable<Ad>;
  products$:Observable<Product[]>;
  constructor(
    private service:HomeService
  ) {}
  ngOnInit(): void {
    this.ad$ =  this.service.getAds('men').pipe(
      filter(ads => ads.length > 0),
      map(ads =>ads[0])
    )
    this.products$ = this.service.getProductsByTab('men')
  }
}
