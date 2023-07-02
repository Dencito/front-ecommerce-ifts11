import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  constructor(private route: ActivatedRoute,private http: HttpClient, public router: Router) {}
  ngOnInit() {
    this.getProducts()
    this.route.params.subscribe(params => {
      const id = params['id']; 
      
    });
  }
  products:any


  getProducts() {
    this.http
      .get(`http://localhost:3000/api/products`)
      .subscribe((response) => {
        this.products = response;
      });
  }
}
