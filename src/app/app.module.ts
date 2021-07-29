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
import { AddOrderComponent } from './add-order/add-order.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { AddRoomTypeComponent } from './add-room-type/add-room-type.component';
import { EditRoomTypeComponent } from './edit-room-type/edit-room-type.component';

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
    AddOrderComponent,
    EditOrderComponent,
    AddRoomComponent,
    EditRoomComponent,
    AddRoomTypeComponent,
    EditRoomTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'reservation', component: ReservationComponent },
      { path: 'rooms', component: RoomsComponent },
      { path: 'roomTypes', component: RoomTypesComponent },
      { path: 'guests', component: GuestsComponent },
      { path: 'addGuest', component: AddGuestComponent },
      { path: 'addOrder', component: AddOrderComponent },
      { path: 'addRoom', component: AddRoomComponent },
      { path: 'addRoomType', component: AddRoomTypeComponent },
      { path: 'editGuest/:id', component: EditGuestComponent },
      { path: 'editOrder/:id', component: EditOrderComponent },
      { path: 'editRoom/:id', component: EditRoomComponent },
      { path: 'editRoomType/:id', component: EditRoomTypeComponent }

]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
