import { Component, OnInit } from '@angular/core';
import { CosmeticService } from '../cosmetic.service';
import { Product } from '../../common/object/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private cosmeticService: CosmeticService) { }

  product = new Product();

  ngOnInit() {
  }

  // getproductById(id: string) {
  //   this.cosmeticService.getProductById(id).subscribe(product => {
  //     this.product = product;
  //   }); 
  // }

}
