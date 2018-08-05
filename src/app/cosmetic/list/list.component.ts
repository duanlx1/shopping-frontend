import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs';
import * as _ from 'lodash'
import { Product } from '../../common/object/product';
import { CosmeticService } from '../cosmetic.service';
import { groupBy } from '../../../../node_modules/rxjs/internal/operators/groupBy';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [AngularFireDatabase, CosmeticService]
})
export class ListComponent implements OnInit {

  products: any[];
  categories: any[];
  productsFiltered: any[];
  filters = {};
  constructor(private cosmeticService: CosmeticService) { }

  ngOnInit() {

    // Get all product.
    this.cosmeticService.getProducts().valueChanges().subscribe(products => {
      this.products = products;
      this.applyFilters();
    });

    // Get all categories.
    this.cosmeticService.getCategory().valueChanges().subscribe (categories => {
      this.categories = categories;
      console.log(this.categories);
    })

  }

  private applyFilters() {
    this.productsFiltered = _.filter(this.products, _.conforms(this.filters) )
  }

  filterByCategory(property: string, rule: any) {
    this.filters[property] = val => val == rule
    this.applyFilters()
  }

}
