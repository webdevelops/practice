// Angular
import { Injectable } from '@angular/core';

// Libs
import { createAction, props, Store } from '@ngrx/store';

// App
import { RootState } from './../index';
import { ProductModel } from './../../models/product.model';

export const PRODUCT_LIST_LOAD = createAction(
  '[ProductList] Load Product List',
  props<{ itemCountToLoad: number }>()
);

export const PRODUCT_LIST_LOAD_SUCCESS = createAction(
  '[ProductList] Load Product List Success',
  props<{ productList: ProductModel[], lastDownloadedProductId: number }>()
);

export const PRODUCT_LIST_LOAD_FAILURE = createAction(
  '[ProductList] Load Product List Failure',
  props<{ error: TypeError }>()
);

export const LOAD_NEXT_PAGE = createAction(
  '[ProductList] Load Next Page',
  props<{ itemCountToLoad: number }>()
);

export const LOAD_NEXT_PAGE_SUCCESS = createAction(
  '[ProductList] Load Next Page Success',
  props<{ productList: ProductModel[], page: number, lastDownloadedProductId: number }>()
);

export const LOAD_NEXT_PAGE_FAILURE = createAction(
  '[ProductList] Load Next Page Failure',
  props<{ error: TypeError }>()
);

export const LOAD_PRODUCT_BY_ID = createAction(
  '[ProductDetail] Load Product By Id',
  props<{ productId: string }>()
);

export const LOAD_PRODUCT_BY_ID_SUCCESS = createAction(
  '[ProductDetail] Load Product By Id Success',
  props<{ product: ProductModel }>()
);

export const SHOW_LOADER = createAction(
  '[Loading] Show Loader',
);

export const HIDE_LOADER = createAction(
  '[Loading] Hide Loader',
);

export const LOAD_PRODUCT_BY_ID_FAILURE = createAction(
  '[ProductDetail] Load Product By Id Failure',
  props<{ error: TypeError }>()
);

export const BACKGROUND_LIST_LOAD = createAction(
  '[ProductList] BACKGROUND_LIST_LOAD',
   props<{ itemCountToLoad: number }>()
);

@Injectable({
  providedIn: 'root',
})
export class ProductActions {
  constructor(private store$: Store<RootState>) { }

  public loadProductList(itemCountToLoad: number): void {
    this.store$.dispatch(PRODUCT_LIST_LOAD({itemCountToLoad}));
  }

  public loadNextPages(itemCountToLoad: number): void {
    this.store$.dispatch(LOAD_NEXT_PAGE({itemCountToLoad}));
  }

  public loadProductById(productId: string): void {
    this.store$.dispatch(LOAD_PRODUCT_BY_ID({ productId }));
  }

  public loadProductListOnBackground(itemCountToLoad: number): void {
    this.store$.dispatch(BACKGROUND_LIST_LOAD({ itemCountToLoad }));
  }
}
