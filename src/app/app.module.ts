import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'  
import { DemoMaterialModule } from './material-module';
import { UserViewComponent } from './userview/userview.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserAddComponent } from './user-add/useradd.component';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { ProductListComponent } from './product-list/product-list.component';
// import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
// import { ProductDetailsComponent } from './product-details/product-details.component';
// import { CartComponent } from './cart/cart.component';
// import { ShippingComponent } from './shipping/shipping.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserEditComponent } from './user-edit/useredit.component';
import { UserService } from './services/user.service';
import { ConfirmationDialog } from './modal-popup/confirmation-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        { path: 'userview', component: UserViewComponent },
       { path: '', component: UserViewComponent },
       { path: 'useradd', component: UserAddComponent },
       { path: 'useredit/:id', component: UserEditComponent },
      // { path: 'products/:productId', component: ProductDetailsComponent },
      // { path: 'cart', component: CartComponent },
      // { path: 'shipping', component: ShippingComponent },
    ]),
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatTableModule,
    HttpClientModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        DemoMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule
  ],
  exports: [MatSidenavModule, MatFormFieldModule,
    MatInputModule],
  declarations: [
    AppComponent,
    TopBarComponent,
    UserViewComponent,
    UserAddComponent,
    UserEditComponent,
    ConfirmationDialog,
    UserViewComponent,
    // ProductListComponent,
    // ProductAlertsComponent,
    // ProductDetailsComponent,
    // CartComponent,
    // ShippingComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [UserService],
})
export class AppModule { }
