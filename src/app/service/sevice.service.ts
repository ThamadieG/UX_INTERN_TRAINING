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
    return this.httpClient.delete(this.GUESTS+'/'+GuestId);
  }
  public deleteReservation(OrdersId){
    return this.httpClient.delete(this.ORDERS+'/'+OrdersId);
  }
  public deleteRoom(RoomId){
    return this.httpClient.delete(this.ROOMS+'/'+RoomId);
  }
  public deleteRoomType(RoomTypeId){
    return this.httpClient.delete(this.ROOMTYPES+'/'+RoomTypeId);
  }
  public createGuest(data:any):Observable<any>{
    return this.httpClient.post(this.GUESTS, data);
  }
  public createOrder(data:any):Observable<any>{
    return this.httpClient.post(this.ORDERS, data);
  }
  public createRoom(data:any):Observable<any>{
    return this.httpClient.post(this.ROOMS, data);
  }
  public createRoomType(data:any):Observable<any>{
    return this.httpClient.post(this.ROOMTYPES, data);
  }
  public getCurrentGuest(id){
    return this.httpClient.get(this.GUESTS+'/'+id);
  }
  public getCurrentOrder(id){
    return this.httpClient.get(this.ORDERS+'/'+id);
  }
  public getCurrentRoom(id){
    return this.httpClient.get(this.ROOMS+'/'+id);
  }
  public getCurrentRoomType(id){
    return this.httpClient.get(this.ROOMTYPES+'/'+id);
  }
  public updateGuest(id,data){
    return this.httpClient.put(this.GUESTS+'/'+id,data);
  }
  public updateOrder(id,data){
    return this.httpClient.put(this.ORDERS+'/'+id,data);
  }
  public updateRoom(id,data){
    return this.httpClient.put(this.ROOMS+'/'+id,data);
  }
  public updateRoomType(id,data){
    return this.httpClient.put(this.ROOMTYPES+'/'+id,data);
  }
  
}
