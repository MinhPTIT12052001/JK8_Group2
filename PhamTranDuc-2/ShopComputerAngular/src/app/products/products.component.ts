import { Component } from '@angular/core';
import { ProductService } from '../services/product-service.service';
import { ProductDto } from '../dtos/productDto';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  private products: ProductDto[] = [];
  size: number = 10;
  currentPage: number = 1;
  constructor(private productService: ProductService) {}

  onInit() {
    this.productService.getAll(this.size, this.currentPage).subscribe({
      next: (response: any) => {
        debugger;
        response.products.forEach((product: ProductDto) => {
          product.thumbnail = '';
        });
        this.products = response.products;
      },
      complete: () => {
        debugger;
      },
      error: (error: any) => {
        debugger;
        console.error('Error fetching products: ', error);
      },
    });
  }
}
