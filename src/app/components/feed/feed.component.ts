import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  constructor(public router: Router,
    private http: HttpClient) { }
    ngOnInit() {
      this.getProducts()
      console.log(this.location)
    }

    location:any= window.location.pathname


    products: any

  navigateToUserProfile(id: string) {
    this.router.navigate(['product', id]);
  }
  

  getProducts(){
    this.http.get(`http://localhost:3000/api/products`).subscribe(response=>{
      this.products=response;
    });
  }


  
  
}
