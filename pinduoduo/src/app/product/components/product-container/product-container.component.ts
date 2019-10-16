import { DialogService } from './../../../dialog/services/dialog.service';
import { ProductVariant } from './../../domain/index';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
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
    private router: Router,
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
    // Subject 既是Observable 也是一个 Observer 
    // Subject 可以 nextTick(xxx) 也可以 subscribe
    // Behavior Subject 是Subject的一种特殊形式
    const formSubmitted = new EventEmitter();
    formSubmitted.subscribe(ev => {
      console.log(ev)
      this.dialogService.saveData(ev)
      this.router.navigate(['/orders/confirm']);
    })
    const selected = new EventEmitter();
    selected.subscribe(ev => {
      console.log(ev)
      this.selectedIndex = ev;
    })
    this.dialogService.open(ProductVariantDialogComponent,{
      inputs: {
        variants: variants,
        selectedVariantIndex: this.selectedIndex
      },
      outputs: {
        formSubmitted,
        selected
      },
      position: {
        top:`${top}%`,
        left:'0',
        width:'100%',
        height:`${100 - top}%`
      }
    })
  }
}
