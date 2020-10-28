// Angular
import { Component, Input } from '@angular/core';

// App
import { ProductModel } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: ProductModel;
  @Input() isWide: boolean = false;

  constructor() { }

}
