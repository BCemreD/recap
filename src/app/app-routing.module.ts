import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/guards/admin.guard';
import { LoginGuard } from 'src/guards/login.guard';
import { AccountPageComponent } from './components/pages/account-page/account-page.component';
import { AdminDashboardPageComponent } from './components/pages/admin-dashboard-page/admin-dashboard-page.component';
import { BrandAddFormComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brand-add-form/brand-add-form.component';
import { BrandEditFormComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brand-edit-form/brand-edit-form.component';
import { BrandsDashboardComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brands-dashboard.component';
import { ProductAddFormComponent } from './components/pages/admin-dashboard-page/products-dashboard/product-add-form/product-add-form.component';
import { ProductEditFormComponent } from './components/pages/admin-dashboard-page/products-dashboard/product-edit-form/product-edit-form.component';
import { CarImageFormComponent } from './components/pages/admin-dashboard-page/products-dashboard/car-image-form/car-image-form.component';
import { ProductsDashboardComponent } from './components/pages/admin-dashboard-page/products-dashboard/products-dashboard.component';
import { ColorAddFormComponent } from './components/pages/admin-dashboard-page/colors-dashboard/color-add-form/color-add-form.component';
import { ColorEditFormComponent } from './components/pages/admin-dashboard-page/colors-dashboard/color-edit-form/color-edit-form.component';
import { ColorsDashboardComponent } from './components/pages/admin-dashboard-page/colors-dashboard/colors-dashboard.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { LogoutPageComponent } from './components/pages/logout-page/logout-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { WalletPageComponent } from './components/pages/wallet-page/wallet-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  {
    path: 'brand/:brandName',
    component: HomepageComponent,
  },
  {
    path: 'products',
    component: ProductsPageComponent,
  },
  {
    path: 'product/:id',
    component: ProductPageComponent,
  },
  { path: 'checkout', component: CheckoutPageComponent },
  {
    path: 'admin',
    component: AdminDashboardPageComponent,
    canActivate: [LoginGuard, AdminGuard],
    children: [
      {
        path: 'products',
        component: ProductsDashboardComponent,
      },
      {
        path: 'products/add',
        component: ProductAddFormComponent,
      },
      {
        path: 'products/edit/:id',
        component: ProductEditFormComponent,
      },
      {
        path: 'products/edit/images/:id',
        component: CarImageFormComponent,
      },
      {
        path: 'brands',
        component: BrandsDashboardComponent,
      },
      {
        path: 'brands/add',
        component: BrandAddFormComponent,
      },
      {
        path: 'brands/edit/:id',
        component: BrandEditFormComponent,
      },
      {
        path: 'colors',
        component: ColorsDashboardComponent,
      },
      {
        path: 'colors/add',
        component: ColorAddFormComponent,
      },
      {
        path: 'colors/edit/:id',
        component: ColorEditFormComponent,
      },
    ],
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: RegisterPageComponent },
  { path: 'logout', component: LogoutPageComponent },
  {
    path: 'account',
    canActivate: [LoginGuard],
    component: AccountPageComponent,
  },
  {
    path: 'wallet',
    canActivate: [LoginGuard],
    component: WalletPageComponent,
  },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}