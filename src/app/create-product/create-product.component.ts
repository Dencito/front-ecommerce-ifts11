import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  public selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = new FormData();
      formData.append('name', form.value.name);
      formData.append('price', form.value.price);
      formData.append('descr', form.value.descr);
      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }
      const userId = localStorage.getItem('userId');
      console.log(userId);
      if (userId) {
        const userIdString = userId.toString();
        formData.append('userId', userIdString);
      }
      this.createProduct(formData);
    }
  }
  

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  createProduct(formData: FormData) {
    const apiUrl = 'http://localhost:3000/api/products';
     /* const {
      name,
      price,
      descr,
      season,
      fit,
      gender,
      fabric,
      style,
      specifications,
      avaliable,
      stock,
    } = req.body;*/
    console.log(formData);

    this.http.post(apiUrl, formData).subscribe(
      (response) => {
        console.log('Producto creado:', response);
      },
      (error) => {
        console.error('Error durante la creación del producto:', error);
      }
    );
  }
}
