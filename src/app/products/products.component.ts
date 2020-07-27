import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productName = 'A book';
  isDisabled: boolean = true;
  products = ['A Book', 'A Tree'];

  constructor() { 
    setTimeout(() => {
      // this.productName = 'A Tree';
      this.isDisabled = false;
    },3000);
  }

  ngOnInit(): void {
  }

  onAddProduct(form) {
    // this.products.push(this.productName);
    if(form.valid) {
      this.products.push(form.value.productName);
    }
    console.log(form); 
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(item => item !== productName);
  }
}
