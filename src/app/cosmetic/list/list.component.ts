import { Component, OnInit } from '@angular/core';
import 'rxjs';
import { Product } from '../../common/object/product';
import { CosmeticService } from '../cosmetic.service';
import { Category } from '../../common/object/catogory';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products = new Array<Product>();
  categories = new Array<Category>();
  categoryId = '';
  constructor(private cosmeticService: CosmeticService) { }

  ngOnInit() {

    // Get all product.
    this.cosmeticService.getProducts(this.categoryId).subscribe(products => {
      this.products = products;
    });

    // Get all categories.
    this.cosmeticService.getCategory().subscribe(categories => {
      this.categories = categories;
    });

  }

  getProductsByCategory(category: string) {
    this.cosmeticService.getProducts(category).subscribe(products => {
      this.products = products;
    });
  }

}
