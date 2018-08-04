import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs';
import { Product } from '../../common/object/product';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [AngularFireDatabase]
})
export class ListComponent implements OnInit {

  products: Product[];
  constructor(private db: AngularFireDatabase) {
    db.list('products').valueChanges().subscribe(a => {
      this.products = a as Product[];
      // console.log(this.products);
      
    })
  }

  ngOnInit() {

  }

}
