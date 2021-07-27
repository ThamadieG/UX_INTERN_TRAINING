import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guest } from '../guest';
import { ServiceService } from '../service/sevice.service';
    
export class Guests {
  constructor(
    public GuestId:string,
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
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {
  formGroup!: FormGroup;
  guest= new Guest;
  guests=[];

  constructor(private service:ServiceService, private router: Router, private httpClient:HttpClient, private fb:FormBuilder) {
    this.formGroup = new FormGroup({
          GuestId: new FormControl('',[Validators.required]),
          Name: new FormControl('',[Validators.required]),
          PhoneNo: new FormControl('',[Validators.required]),
          Email: new FormControl('',[Validators.required]),
          IdNo: new FormControl('',[Validators.required]),
          DateOfBirth: new FormControl('',[Validators.required]),
          IsActive: new FormControl('',[Validators.required])
        })
   }

  
  ngOnInit(){
  }

  public addGuest():void {
    this.service.create(this.formGroup.value).subscribe(result =>{
      console.log(result);
      alert("Data added successfully");
    })
      error => {
        console.log(error);
      };
    this.guests.push (this.formGroup.value);
    console.log("Data added successfully");
    
  }

}
