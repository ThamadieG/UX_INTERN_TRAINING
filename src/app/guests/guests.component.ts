import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/sevice.service';

export class Guests {
  constructor(
    public GuestId:number,
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
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {
  guests=null as any;
  posts;
  currentProduct= null as any;

  constructor(private service:ServiceService, private httpClient:HttpClient, private router:Router) { }

  ngOnInit(): void{
    this.getGuests();
  }

  getGuests(){
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
  deleteGuest(): void {
    this.service.deleteGuest(this.currentProduct.GuestId)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/guests']);
        },
        error => {
          console.log(error);
        });
  }

  deleteItem(guest){
    this.service.deleteGuest(guest.GuestId)
        .subscribe(response => {
          this.guests = this.guests.filter(item => item.id !== guest.GuestId);
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}