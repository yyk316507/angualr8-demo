import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/domain';
import { HomeService } from '../../services';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent  implements OnInit{
  products$:Observable<Product[]>
  constructor(
    private service:HomeService
  ) {}
  ngOnInit(): void {
    this.products$ = this.service.getProductsByTab("hot")
  }
}
