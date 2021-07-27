import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/sevice.service';
import { Observable, forkJoin, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators'

export class Orders {
  constructor(
    public OrdersId: string,
    public ReservationNo: String,
    public Name: Guests,
    public GuestId: Guests,
    public RoomId: string,
    public ArrivalDate: string,
    public DepartureDate: string,
    public Notes: string,
  ) {
  }
}
export class Guests {
  constructor(
    public GuestId: string,
    public Name: String,
    public PhoneNo: string,
    public Email: string,
    public IdNo: string,
    public DateOfBirth: string,
    public IsActive: string,
  ) {
  }
}


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{
  order=null as any;
  orders: Orders []=[];
  guests: Guests []=[];
  guestId?:string;

  constructor(private service:ServiceService, private http: HttpClient, private router:Router) { }

  ngOnInit(): void{
    this.getOrders();
  }

  getOrders(){
    this.service.getOrders().pipe(
      switchMap(orders =>this.service.getGuests().pipe(map(guests => {
        orders.forEach(order=>{

          const guest = guests.find(guest=> guest.GuestId === order.GuestId);

          order.GuestId = guests ? guest.Name : '';
      });

      return orders;
      }))),
    ).subscribe(
      (response1:any) => {
        console.log(response1);
        this.orders = response1;
      },
      (error) =>{
        console.log(error);
      }
    );
  }

  deleteItem(order){
    this.service.deleteReservation(order).subscribe((result)=>{
      console.log("Result", result);
      alert("Room deleted successful!!     id:"+order);
      })
        error => {
          console.log(error);
        };
  }

}


