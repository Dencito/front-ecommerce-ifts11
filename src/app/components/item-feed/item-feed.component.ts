import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-item-feed',
  templateUrl: './item-feed.component.html',
  styleUrls: ['./item-feed.component.css']
})
export class ItemFeedComponent {
  constructor(public router: Router, private http: HttpClient, private cartService: CartService) {}
  @Input() product: any;
  userData:any

  navigateToUserProfile(id: string) {
    this.router.navigate(['store', id]);
    
  }

  showPopup = false;
    expandedPost: any;

    expandPost(product: any) {
      this.expandedPost = product;
      this.showPopup = true;
    }

    closePopup() {
      this.showPopup = false;
      this.expandedPost = null;
    }

    addItemToCart(item: any, qty: number) {
      this.cartService.addToCart(item, qty);
      console.log(this.cartService.cart);
    }

    isInCart(id: any): boolean {
      return this.cartService?.cart.some((prod:any) => prod?._id === id);
    }
}
