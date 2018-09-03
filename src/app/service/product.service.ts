import { Category } from './../common/object/category';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Product } from '../common/object/product';
import 'rxjs';
import { Brand } from '../common/object/Brand';

@Injectable()
export class ProductService {
    private apiPath = 'https://api.mlab.com/api/1/databases/cosmetic/';
    private apiKey = 'apiKey=3R_4OYNyEJdK0Y6snh0WSM5gtdi2arXD';
    private httpOptions = {
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    };

    /**
     * The constructer
     * @param http http client
     */
    constructor(private http: Http) { }

    /**
     * Get product by category
     * @param categoryId category
     */
    getProducts(categoryId: string, sortKey: string, sortValue: string, brands: string[]): Promise<Product[]> {

        // s={"priority": 1, "difficulty": -1}
        const collectionsPath = this.apiPath + 'collections/Products';
        let query = '';
        if (categoryId !== '') {
            query = query.concat('{categoryId:' + categoryId + '}');
        }

        // {brandId:{$in:[1,3]}}
        if (brands.length > 0) {
            // brands.forEach(element => {
                
            // });
            query = query.concat('{brandId:{$in:[' + brands + ']}}');
        }

        if (sortKey !== '' || sortValue !== '') {
            query = query.concat('&s=').concat('{' + sortKey + ':' + sortValue + '}');
        } else {
            // Sort default.
            sortKey = 'productName';
            sortValue = '1';
            query = query.concat('&s=').concat('{' + sortKey + ':' + sortValue + '}');
        }

        return this.http.get(collectionsPath + '?q=' + query + '&' + this.apiKey)
            .toPromise()
            .then(res => res.json() as Product[])
            .catch(this.handleError);
    }

    /**
     * Get all categories for left menu.
     */
    getCategory(): Promise<Category[]> {
        const collectionsPath = this.apiPath + 'collections/Categories';

        return this.http.get(collectionsPath + '?' + this.apiKey)
            .toPromise()
            .then(res => res.json() as Category[])
            .catch(this.handleError);
    }

    /**
     * Get all brands for left menu.
     */
    getBrands(): Promise<Brand[]> {
        const collectionsPath = this.apiPath + 'collections/Brands';

        return this.http.get(collectionsPath + '?' + this.apiKey)
            .toPromise()
            .then(res => res.json() as Brand[])
            .catch(this.handleError);
    }

    /**
     * Get products by ID
     * @param id productId
     */
    getProductById(id: string): Promise<Product> {
        const collectionsPath = this.apiPath + 'collections/Products/' + id + '?' + this.apiKey;
        return this.http.get(collectionsPath)
            .toPromise()
            .then(res => res.json() as Product)
            .catch(this.handleError);
    }

    /**
     * Handle error.
     * @param error Error
     */
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
