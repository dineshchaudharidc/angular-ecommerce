import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-table.component.html',
 // templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProducts();
  }

  listProducts() {
    // Provide a valid URL as an argument
    const targetUrl = 'http://localhost:8080/api/products';
    
    this.productService.getProductList(targetUrl).subscribe(
      data => {
        console.log('Raw API Response:', data);
        if (data && data.length > 0) {
          // Use the received data directly
          this.products = data;
        } else {
          console.error('API returned null, undefined, or an empty array.');
        }
      },
      error => {
        console.error('Error fetching product data:', error);
      }
    );
  }
}
