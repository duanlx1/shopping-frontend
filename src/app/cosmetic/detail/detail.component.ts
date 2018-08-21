import { Component, OnInit } from '@angular/core';
import { CosmeticService } from '../cosmetic.service';
import { Product } from '../../common/object/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [CosmeticService]
})
export class DetailComponent implements OnInit {

  product = new Product();
  public id: string;

  constructor(private cosmeticService: CosmeticService
    , private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.cosmeticService.getProductById(this.id).then(product => {
      this.product = product;
    });
  }

}
