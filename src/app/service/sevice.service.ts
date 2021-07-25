import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../guest';
import { Guests } from '../reservation/reservation.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private ORDERS = "http://localhost:3000/orders";
  private ROOMS = "http://localhost:3000/rooms";
  private ROOMTYPES = "http://localhost:3000/roomTypes";
  private GUESTS = "http://localhost:3000/contacts";



  constructor(private httpClient: HttpClient) { }

  public getOrders(){
    return this.httpClient.get(this.ORDERS);
  }
  public getRooms(){
    return this.httpClient.get(this.ROOMS);
  }
  public getRoomTypes(){
    return this.httpClient.get(this.ROOMTYPES);
  }
  public getGuests(){
    return this.httpClient.get(this.GUESTS);
  }
  public getGuestNames(guestId:any){
    return this.httpClient.get<Guests[]>("http://localhost:3000/contacts?GuestId="+guestId);
  }
  public deleteGuest(GuestId){
    return this.httpClient.delete(this.GUESTS+'?GuestId='+GuestId);
  }
  public deleteReservation(OrdersId){
    return this.httpClient.delete(this.ORDERS+'?OrdersId='+OrdersId);
  }
  public deleteRoom(RoomId){
    return this.httpClient.delete(this.ROOMS+'?RoomId='+RoomId);
  }
  public deleteRoomType(RoomTypeId){
    return this.httpClient.delete(this.ROOMTYPES+'?RoomTypeId='+RoomTypeId);
  }
  public addGuest(guestData: Guest) {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(guestData);
    console.log("bodyyyyyyyyyyyyyyyyy"+body);
    return this.httpClient.post(this.GUESTS, body, {'headers':headers});
  }
  public create(data:any):Observable<any>{
    return this.httpClient.post(this.GUESTS, data);
  }
  
}
