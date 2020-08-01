import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { FbResponse, Product } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  type = 'Phone';
  cartProducts: Product[] = [];
  selectedLink = null;

  constructor(
    private http: HttpClient
  ) { }

  create(product) {
    return this.http.post(`${environment.fbDbUrl}/products.json`, product)
      .pipe(
        map((res: FbResponse) => {
          return {
            ...product,
            id: res.name,
            date: new Date(product.date)
          }
        })
      );
  }

  getAll() {
    return this.http.get(`${environment.fbDbUrl}/products.json`)
      .pipe(
        map(res => {
          // console.log('res', res)
          return Object.keys(res).map(key => {
            return {
              ...res[key],
              id: key,
              date: new Date(res[key].date)
            };
          })
        })
      );
  }

  getById(id) {
    return this.http.get(`${environment.fbDbUrl}/products/${id}.json`)
      .pipe(map((res: Product) => {
        return {
          ...res,
          id,
          date: new Date(res.date)
        }
      })
      );
  }

  remove(id) {
    return this.http.delete(`${environment.fbDbUrl}/products/${id}.json`);
  }

  update(product: Product) {
    return this.http.patch(`${environment.fbDbUrl}/products/${product.id}.json`, product);
  }

  setType(type) {
    this.type = type;
  }

  addProduct(product) {
    this.cartProducts.push(product);
  }

  selecteLink(event) {
    let li = event.target.closest('li');

    if (!li) return;

    if (this.selectedLink) {
      this.selectedLink.classList.remove('active');
    }

    this.selectedLink = li;
    this.selectedLink.classList.add('active');
  }

  unselectLink() {
    if (this.selectedLink) {
      this.selectedLink.classList.remove('active');
    }
  }
}
