import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../services/products.service'
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  productName = 'A book';
  isDisabled: boolean = true;
  products = [];
  private productSubscription: Subscription;
  constructor(
    private productService: ProductsService
  ) { 
    
    setTimeout(() => {
      // this.productName = 'A Tree';
      this.isDisabled = false;
      
    },3000);
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productSubscription = this.productService.productsUpdated.subscribe(() => {
      this.products = this.productService.getProducts();
    });
  }

  onAddProduct(form: FormGroup) {
    if(form.valid) {
      this.productService.addProduct(form.value.productName);
    }
  }

  onRemoveProduct(productName: string) {
    this.productService.deleteProduct(productName);
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }
}
