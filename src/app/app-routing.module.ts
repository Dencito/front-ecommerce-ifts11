import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'create-product', component: CreateProductComponent},
  { path: 'edit-product/:id', component: EditProductComponent},
  { path: 'store/:id', component: UserDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
