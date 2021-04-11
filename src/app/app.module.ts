import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OverlayComponent } from './components/pages/homepage/overlay/overlay.component';
import { SearchComponent } from './components/search/search.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilterByBrandBarComponent } from './components/pages/homepage/filter-by-brand-bar/filter-by-brand-bar.component';
import { FilterByColorComponent } from './components/filter-by-color/filter-by-color.component';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterProductDetailPipe } from './pipes/filter-product-detail.pipe';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { SliceBrandPipe } from './pipes/slice-brand.pipe';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { AdminDashboardPageComponent } from './components/pages/admin-dashboard-page/admin-dashboard-page.component';
import { ProductsDashboardComponent } from './components/pages/admin-dashboard-page/products-dashboard/products-dashboard.component';
import { ProductAddFormComponent } from './components/pages/admin-dashboard-page/products-dashboard/product-add-form/product-add-form.component';
import { ProductEditFormComponent } from './components/pages/admin-dashboard-page/products-dashboard/product-edit-form/product-edit-form.component';
import { CarImageFormComponent } from './components/pages/admin-dashboard-page/products-dashboard/car-image-form/car-image-form.component';
import { BrandsDashboardComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brands-dashboard.component';
import { ColorsDashboardComponent } from './components/pages/admin-dashboard-page/colors-dashboard/colors-dashboard.component';
import { BrandAddFormComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brand-add-form/brand-add-form.component';
import { BrandEditFormComponent } from './components/pages/admin-dashboard-page/brands-dashboard/brand-edit-form/brand-edit-form.component';
import { ColorAddFormComponent } from './components/pages/admin-dashboard-page/colors-dashboard/color-add-form/color-add-form.component';
import { ColorEditFormComponent } from './components/pages/admin-dashboard-page/colors-dashboard/color-edit-form/color-edit-form.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { AuthInterceptor } from 'src/interceptors/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from './store/app.reducer';
import { LogoutPageComponent } from './components/pages/logout-page/logout-page.component';
import { HttpErrorInterceptor } from 'src/interceptors/http-error.interceptor';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { AccountPageComponent } from './components/pages/account-page/account-page.component';
import { HiddenCreditCardNoPipe } from './pipes/hidden-credit-card-no.pipe';
import { WalletPageComponent } from './components/pages/wallet-page/wallet-page.component';
import { HoverDirective } from './directives/hover.directive';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { ProductListComponent } from './components/product-list/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverlayComponent,
    SearchComponent,
    ProductsListComponent,
    ProductCardComponent,
    FilterByBrandBarComponent,
    FilterByColorComponent,
    ProductFilterComponent,
    HomepageComponent,
    FooterComponent,
    ProductPageComponent,
    FilterProductPipe,
    FilterColorPipe,
    FilterBrandPipe,
    FilterProductDetailPipe,
    ProductsPageComponent,
    SliceBrandPipe,
    CheckoutPageComponent,
    NotFoundPageComponent,
    AdminDashboardPageComponent,
    ProductsDashboardComponent,
    ProductAddFormComponent,
    ProductEditFormComponent,
    CarImageFormComponent,
    BrandsDashboardComponent,
    ColorsDashboardComponent,
    BrandAddFormComponent,
    BrandEditFormComponent,
    ColorAddFormComponent,
    ColorEditFormComponent,
    LoginPageComponent,
    RegisterPageComponent,
    LogoutPageComponent,
    LoadingSpinnerComponent,
    AccountPageComponent,
    HiddenCreditCardNoPipe,
    WalletPageComponent,
    HoverDirective,
    PasswordInputComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    StoreModule.forRoot(AppReducers),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}