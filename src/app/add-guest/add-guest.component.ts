import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guest } from '../guest';
import { ServiceService } from '../service/sevice.service';
    

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {
  formGroup!: FormGroup;
  guest= new Guest;

  constructor(private service:ServiceService, private router: Router, private httpClient:HttpClient) { }

  
  ngOnInit(){
    // this.initForm();
    this.addGuest();
  }

  addGuest() {
    this.service.addGuest(this.guest)
      .subscribe(data => {
        console.log("dataaaaaaaaa"+data)
      })      
  }

  // initForm(){
  //   this.formGroup = new FormGroup({
  //     GuestNo: new FormControl('',[Validators.required]),
  //     Name: new FormControl('',[Validators.required]),
  //     PhoneNo: new FormControl('',[Validators.required]),
  //     Email: new FormControl('',[Validators.required]),
  //     IdNo: new FormControl('',[Validators.required]),
  //     DateOfBirth: new FormControl('',[Validators.required]),
  //     IsActive: new FormControl('',[Validators.required])
  //   })
  // }

  // GuestNo1?:string;
  // Name1?:string;
  // PhoneNo1?:string;
  // Email1?:string;
  // IdNo1?:string;
  // DateOfBirth1?:string;
  // IsActive1?:string;

  // addGuest(){
  //   if(this.formGroup.valid){
  //     this.service.create(this.formGroup.value).subscribe(result =>{
  //       for(let i=0; i<8; i++){
  //         this.GuestNo1=result[i].GuestNo;
  //         this.Name1=result[i].Name;
  //         this.PhoneNo1=result[i].PhoneNo;
  //         this.Email1=result[i].Email;
  //         this.IdNo1=result[i].IdNo;
  //         this.DateOfBirth1=result[i].DateOfBirth;
  //         this.IsActive1=result[i].IsActive;
  //       }
  //       console.log(result);
  //     })
  //       error => {
  //         console.log(error);
  //       };
  //   }
  // }

}
