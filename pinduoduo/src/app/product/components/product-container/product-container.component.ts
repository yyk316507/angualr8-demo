import { DialogService } from './../../../dialog/services/dialog.service';
import { ProductVariant } from './../../domain/index';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { productService } from '../../services';
import { filter, map, switchMap } from 'rxjs/operators';
import { ProductVariantDialogComponent } from '../product-variant-dialog';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit {
  variants$: Observable<ProductVariant[]>;
  selectedIndex = 0;
  // private route: ActivatedRoute获取当前的productId
  constructor(
    private service: productService,
    private route: ActivatedRoute,
    private dialogService: DialogService
    ) { }

  ngOnInit() {
    const productId$ = this.route.paramMap.pipe(
      filter(params => params.has("productId")),
      map(params => params.get("productId"))
    );
    this.variants$ = productId$.pipe(
      switchMap(productId => this.service.getProductVariantsByProductId(productId))
    )
  }
  handleDirectBuy(variants: ProductVariant[]){

  }
  handleGroupBuy(variants: ProductVariant[]){
    const top = 40;
    this.dialogService.open(ProductVariantDialogComponent,{
      inputs: {},
      outputs: {},
      position: {
        top:`${top}%`,
        left:'0',
        width:'100%',
        height:`${100 - top}%`
      }
    })
  }
}
