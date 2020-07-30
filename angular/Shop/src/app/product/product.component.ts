import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  addProduct(product) {
    this.productService.addProduct(product);
  }
}
