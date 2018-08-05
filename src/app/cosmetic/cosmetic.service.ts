import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Product } from '../common/object/product';
import { Category } from '../common/object/catogory';

@Injectable()
export class CosmeticService {
    private productPath = 'products';
    private categoryPath = 'category';

    products: any[];

    constructor(private db: AngularFireDatabase) { }

    getProducts(): AngularFireList<Product[]> {

        return this.db.list(this.productPath);
    }

    getCategory(): AngularFireList<Category[]> {

        return this.db.list(this.categoryPath);
    }

}
