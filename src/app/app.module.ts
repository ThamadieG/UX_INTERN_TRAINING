import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservationComponent } from './reservation/reservation.component';
import { GuestsComponent } from './guests/guests.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomTypesComponent } from './room-types/room-types.component';
import { LoginComponent } from './login/login.component';
import { AddGuestComponent } from './add-guest/add-guest.component';
import { EditGuestComponent } from './edit-guest/edit-guest.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    GuestsComponent,
    RoomsComponent,
    RoomTypesComponent,
    LoginComponent,
    AddGuestComponent,
    EditGuestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'reservation', component: ReservationComponent },
      { path: 'rooms', component: RoomsComponent },
      { path: 'roomTypes', component: RoomTypesComponent },
      { path: 'guests', component: GuestsComponent },
      { path: 'addGuest', component: AddGuestComponent },
      { path: 'editGuest/:id', component: EditGuestComponent }

]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
