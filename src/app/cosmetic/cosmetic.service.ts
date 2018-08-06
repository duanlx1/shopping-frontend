import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../common/object/product';
import { Category } from '../common/object/catogory';
import { Observable } from 'rxjs';

@Injectable()
export class CosmeticService {
    private apiPath = "https://api.mlab.com/api/1/databases/cosmetic/";
    private apiKey = "apiKey=3R_4OYNyEJdK0Y6snh0WSM5gtdi2arXD";
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    /**
     * The constructer
     * @param http http client
     */
    constructor(private http: HttpClient) { }

    /**
     * Get product by category
     * @param categoryId category
     */
    getProducts(categoryId: string): Observable<Product[]> {

        // https://api.mlab.com/api/1/databases/my-db/collections/my-coll?q={"active": true}&apiKey=myAPIKey
        // https://api.mlab.com/api/1/databases/cosmetic/collections/Products?q={categoryId:2}&apiKey=3R_4OYNyEJdK0Y6snh0WSM5gtdi2arXD
        const collectionsPath = this.apiPath + 'collections/Products';
        let query = ''
        if (categoryId != "") {
            query = '{categoryId:' + categoryId + '}';
        }

        return this.http.get<Product[]>(
            collectionsPath + '?q=' + query + '&' + this.apiKey).pipe();
    }

    /**
     * Get all categories for left menu.
     */
    getCategory(): Observable<Category[]> {
        const collectionsPath = this.apiPath + 'collections/Categories';

        return this.http.get<Category[]>(collectionsPath + '?' + this.apiKey).pipe();
    }

    getProductById(id: string): Observable<Product> {
        const collectionsPath = this.apiPath + 'collections/Products/' + id + '?' + this.apiKey;
        return this.http.get<Product>(collectionsPath).pipe();
    }



}
