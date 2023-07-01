import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 email:string="";
 password:string="";
  constructor(private http: HttpClient) {}

   login() {
    const apiUrl = 'http://localhost:3000/api/auth/login';
  
    const requestBody = {
      username: this.email,
      password: this.password
    };
    console.log(requestBody);
  
    this.http.post(apiUrl, requestBody).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('Error during login:', error);
      }
    );
  }
  
}
