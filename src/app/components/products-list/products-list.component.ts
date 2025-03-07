import { Component, inject, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  productService = inject(ProductService);
  products = signal<Product[]>([]);

  async ngOnInit() {
    this.products.set(await this.productService.getProducts());
  }
}
