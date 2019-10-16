import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductVariant } from '../../domain';
import { DialogService } from 'src/app/dialog';

@Component({
  selector: 'app-product-variant-dialog',
  templateUrl: './product-variant-dialog.component.html',
  styleUrls: ['./product-variant-dialog.component.css']
})
export class ProductVariantDialogComponent implements OnInit {
  @Input() variants : ProductVariant[] = [];
  @Output() formSubmitted = new EventEmitter();
  @Output() selected = new EventEmitter();
  @Input() selectedVariantIndex = 0;
  count = 0;
  constructor(private dialogService : DialogService) { }

  ngOnInit() {
  }
  get price() {
    if(this.selectedVariantIndex < 0 || this.variants.length === 0){
      return 0;
    }
    return this.variants[this.selectedVariantIndex].price;
  }
  get selectedVariantImage() {
    if(this.selectedVariantIndex < 0 || this.variants.length === 0){
      return '';
    }
    return this.variants[this.selectedVariantIndex].productVariantImages[0].imgUrl;
  }
  get selectedVariantName() {
    if(this.selectedVariantIndex < 0 || this.variants.length === 0){
      return '';
    }
    return this.variants[this.selectedVariantIndex].name;
  }
  handleSelected(ind) {
    this.selectedVariantIndex = ind;
    this.selected.emit(this.selectedVariantIndex)
  }
  handleAmountChange(count:number){
    this.count = count;
  }
  handleConfirm() {
    if(this.selectedVariantIndex < 0 || this.variants.length === 0){
      return;
    }
    this.formSubmitted.emit({
      variant: this.variants[this.selectedVariantIndex],
      count: this.count
    })
    this.dialogService.close()
  }
}
