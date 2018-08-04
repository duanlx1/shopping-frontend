import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Product } from '../../common/object/product';
import { forEach } from '../../../../node_modules/@angular/router/src/utils/collection';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [AngularFireDatabase]
})
export class ListComponent implements OnInit {

  products: Array<[]>;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.list('products').valueChanges().subscribe(products => {
      
    });

    // this.db.list('products').

    // console.log(this.products);
    
    
    
    
  }

  // getproducts(path): Observable<any[]> {
  //   return this.db.list(path).valueChanges();
  // }

}
