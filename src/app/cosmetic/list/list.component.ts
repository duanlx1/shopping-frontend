import { Component, OnInit } from '@angular/core';
import 'rxjs';
import { Product } from '../../common/object/product';
import { CosmeticService } from '../cosmetic.service';
import { Category } from '../../common/object/catogory';
import { Brand } from '../../common/object/Brand';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products = new Array<Product>();
  categories = new Array<Category>();
  brands = new Array<Brand>();
  categoryId = '';
  categoryName = '';
  p = 1;
  itemsPerPage = 12;
  sortKey = '';
  sortValue = '';
  brandArr = [];
  brand;

  constructor(private cosmeticService: CosmeticService) { }

  ngOnInit() {

    // Get all product.
    this.cosmeticService.getProducts(this.categoryId, this.sortKey, this.sortValue, this.brandArr).then(products => {
      this.products = products;
    });

    // Get all categories.
    this.cosmeticService.getCategory().then(categories => {
      this.categories = categories;
    });

    // Get all brands
    this.cosmeticService.getBrands().then(brands => {
      this.brands = brands;
    });

  }

  /**
   * Filter products by category
   * @param category categry
   */
  getProductsByCategory() {
    this.cosmeticService.getProducts(this.categoryId, this.sortKey, this.sortValue, this.brandArr).then(products => {
      this.products = products;
    });
  }

  setProductsNumber(num: number) {
    this.itemsPerPage = num;
  }

  setCategory(catogoryId: string, categoryName: string) {
    this.categoryId = catogoryId;
    this.categoryName = categoryName;
    this.getProductsByCategory();
  }

  setSortKeyValue(e) {
    this.sortKey = e.srcElement.value;
    this.sortValue = '1';
    this.getProductsByCategory();
  }

}
