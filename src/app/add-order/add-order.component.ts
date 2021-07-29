import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guest } from '../guest';
import { Guests } from '../guests/guests.component';
import { Order } from '../order';
import { ServiceService } from '../service/sevice.service';

export class Orders {
  constructor(
    public OrdersId: string,
    public ReservationNo: String,
    public Name: Guests,
    public GuestId: string,
    public RoomId: string,
    public ArrivalDate: string,
    public DepartureDate: string,
    public Notes: string,
  ) {
  }
}

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  formGroup!: FormGroup;
  order= new Order;
  // orders: Orders[];
  guests=null as any;


  constructor(private service:ServiceService, private router: Router, private httpClient:HttpClient, private fb:FormBuilder) {
    this.formGroup = new FormGroup({
          OrdersId: new FormControl('',[Validators.required]),
          ReservationNo: new FormControl('',[Validators.required]),
          GuestId: new FormControl('',[Validators.required]),
          // Name: new FormControl('',[Validators.required]),
          RoomId: new FormControl('',[Validators.required]),
          ArrivalDate: new FormControl('',[Validators.required]),
          DepartureDate: new FormControl('',[Validators.required]),
          Notes: new FormControl('',[Validators.required])
        });      
   }

  
  ngOnInit(){
    this.getGuests();
  }

  public addOrder():void {
    this.service.createOrder(this.formGroup.value).subscribe(result =>{
      console.log(result);
      alert("Data added successfully");
    })
      error => {
        console.log(error);
      };
    console.log("Data added successfully");
    
  }

  public getGuests(){
    this.service.getGuests().subscribe(
      (response) => {
        console.log(response);
        this.guests = response;
      },
      (error) =>{
        console.log(error);
      }
    ); 
  }

}

