import { Component, OnInit } from '@angular/core';
import 'rxjs';
import { Product } from '../../common/object/product';
import { CosmeticService } from '../cosmetic.service';
import { Category } from '../../common/object/category';
import { Brand } from '../../common/object/Brand';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

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
  itemsPerPage = 6;
  sortKey = '';
  sortValue = '';
  brand;
  brandForm: FormGroup;
  brandArr = [];

  constructor(private cosmeticService: CosmeticService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.brandForm = this.fb.group({
      brandId: this.fb.array([])
    });

    // Get all product.
    this.getProductsByCategory();

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
    this.spinner.show();
    this.cosmeticService.getProducts(this.categoryId, this.sortKey, this.sortValue, this.brandArr).then(products => {
      this.products = products;
      this.spinner.hide();
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

  
  onChange(brandId: string, isChecked: boolean) {
    const emailFormArray = <FormArray>this.brandForm.controls.brandId;

    if (isChecked) {
      emailFormArray.push(new FormControl(brandId));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == brandId)
      emailFormArray.removeAt(index);
    }

    this.brandArr = emailFormArray.value;

  }

  onSubmit() {
    this.getProductsByCategory();
  }

  /**
   * Clear srach by brand
   */
  clearSearchByBrands() {
    this.brandArr = [];
    this.getProductsByCategory();
  }

}
