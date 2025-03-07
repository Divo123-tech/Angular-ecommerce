import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/products.model';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-card',
  imports: [PrimaryButtonComponent],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.scss',
})
export class CartCardComponent {
  item = input.required<Product>();
  cartService = inject(CartService);
}
