import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-feed',
  templateUrl: './item-feed.component.html',
  styleUrls: ['./item-feed.component.css']
})
export class ItemFeedComponent {
  constructor(public router: Router, private http: HttpClient) {}
  @Input() product: any;

  navigateToUserProfile(id: string) {
    this.router.navigate(['store', id]);
  }

  ngOnInit() {
    console.log(this.product)
  }
}