// Angular
import { Component, OnInit } from '@angular/core';

// Libs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// App
import { ProductSelectors } from "../../core/store/product/product.selectors";
import { ProductActions } from '../../core/store/product/product.actions';
import { ProductModel } from 'src/app/core/models/product.model';

const PAGE_SIZE = 5;
const NEXT_PAGE_SIZE = 5;
const PRODUCT_LIST_LENGTH = 11;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList$: Observable<Array<ProductModel>>;
  readonly pageSize = PAGE_SIZE;
  readonly nextPageSize = NEXT_PAGE_SIZE;
  readonly productListLength = PRODUCT_LIST_LENGTH;
  public pageIndex$: Observable<number>;
  public loading$: Observable<boolean>;

  private page: number = 1;

  constructor(
    private productSelectors: ProductSelectors,
    private productActions: ProductActions
  ) { }

  ngOnInit(): void {
    this.loading$ = this.productSelectors.selectLoading$();
    this.productActions.loadProductList(this.pageSize);
    this.productList$ = this.productSelectors.selectAllProducts$();
    this.pageIndex$ = this.productSelectors.selectPage$().pipe(
      map((page: number) => page * this.pageSize)
    )
  }

  // loadNextPage(): void {
  // this.productActions.loadNextPage(this.nextPageSize);
  // }

  // loadAnotherPage(event): void {
  onScroll() {
    // const lastDownloadedProduct = this.nextPageSize * (event.pageIndex)
    const lastDownloadedProductPosition = this.nextPageSize * this.page++;
    console.log("🚀 ~ file: product-list.component.ts ~ line 54 ~ ProductListComponent ~ onScroll ~ this.page", this.page)

    this.productActions.loadAnotherPage(lastDownloadedProductPosition, this.nextPageSize);
  }

  // onScroll() {
  //   // console.log('scrolled!!');
  //   this.productActions.loadNextPage(this.nextPageSize);
  // }

}
