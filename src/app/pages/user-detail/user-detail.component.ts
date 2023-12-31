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
    this.route.params.subscribe(params => {
      const id = params['id']; 
      this.getUser(id)
      
    });
  }
  products:any
  userData:any


  getProducts() {
    this.http
      .get(`http://localhost:3000/api/products`)
      .subscribe((response) => {
        this.products = response;
        this.products = this.products.filter((user:any)=> user?.userId == this.userData?._id)
      });
  }

  getUser(id:any) {
    this.http
      .get(`http://localhost:3000/api/auth/user/${id}`)
      .subscribe((response) => {
        this.userData = response;
        this.userData = this.userData?.data
        this.getProducts()
        console.log(this.userData)
      });
  }
}
