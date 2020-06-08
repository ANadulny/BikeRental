import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OpenStreetMapComponent } from './open-street-map/open-street-map.component';
import { ManageUsersPageComponent } from './manage-users-page/manage-users-page.component';
import { ManageStationsPageComponent } from './manage-stations-page/manage-stations-page.component';
import { RentPageComponent } from './rent-page/rent-page.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserStatisticsComponent } from './user-statistics/user-statistics.component';
import { UserStatisticsItemComponent } from './user-statistics-item/user-statistics-item.component';
import { StationItemComponent } from './station-item/station-item.component';
import { BikesSubtableComponent } from './bikes-subtable/bikes-subtable.component';
import { BikeItemComponent } from './bike-item/bike-item.component';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {UserAccountPageComponent} from './user-account-page/user-account-page.component';
import {RentalHistoryComponent} from './rental-history/rental-history.component';
import {RentalHistoryItemComponent} from './rental-history-item/rental-history-item.component';
import { AuthGuard } from './services/guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdminPageComponent,
    UserPageComponent,
    PageNotFoundComponent,
    NavbarComponent,
    OpenStreetMapComponent,
    ManageUsersPageComponent,
    ManageStationsPageComponent,
    RentPageComponent,
    UserItemComponent,
    UserAccountPageComponent,
    UserDetailsComponent,
    UserStatisticsComponent,
    UserStatisticsItemComponent,
    RentalHistoryComponent,
    RentalHistoryItemComponent,
    StationItemComponent,
    BikesSubtableComponent,
    BikeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DatePipe, CurrencyPipe, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
