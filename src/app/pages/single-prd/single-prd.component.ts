import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-prd',
  templateUrl: './single-prd.component.html',
  styleUrls: ['./single-prd.component.css']
})
export class SinglePrdComponent {
  product:any 

  constructor(private route: ActivatedRoute,private http: HttpClient) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id']; 
      this.getProductId(id); 
    });
  }



  getProductId(id:string){
    this.http.get(`http://localhost:3000/api/products/${id}`).subscribe(response=>{
      this.product = response;
      this.product = this.product?.data
      console.log(this.product)
    });
  }

}
