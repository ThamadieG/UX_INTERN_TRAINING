import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Guests } from '../guests/guests.component';
import { Order } from '../order';
import { ServiceService } from '../service/sevice.service';
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
@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  formGroup!: FormGroup;
  order= new Order;
  orders=[];
  guests=null as any;

  constructor(private service:ServiceService, private activerouter: ActivatedRoute, private router:Router) {
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

  
  ngOnInit():void{
    this.getGuests();
    console.log(this.activerouter.snapshot.params.id);
    this.service.getCurrentOrder(this.activerouter.snapshot.params.id).subscribe((result)=>{
      this.formGroup = new FormGroup({
        OrdersId: new FormControl(result['OrdersId']),
        ReservationNo: new FormControl(result['ReservationNo']),
        GuestId: new FormControl(result['GuestId']),
        RoomId: new FormControl(result['RoomId']),
        ArrivalDate: new FormControl(result['ArrivalDate']),
        DepartureDate: new FormControl(result['DepartureDate']),
        Notes: new FormControl(result['Notes'])
      })
    })
  }
 
  public updateOrder(){
    this.service.updateOrder(this.activerouter.snapshot.params.id,this.formGroup.value).subscribe((result)=>{
      console.log(result);
      alert("Data Updated Successfull!")
      this.router.navigate(['/orders']);
    })
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
