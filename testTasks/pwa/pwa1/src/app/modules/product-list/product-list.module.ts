// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from 'src/app/core/services/product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule, // for animation - почему именно здесь ???
  ],
  exports: [
    ProductListComponent
  ],
  providers: [ProductService]
})
export class ProductListModule { }
