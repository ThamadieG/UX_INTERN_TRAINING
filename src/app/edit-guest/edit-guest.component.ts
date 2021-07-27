import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-edit-guest',
  templateUrl: './edit-guest.component.html',
  styleUrls: ['./edit-guest.component.css']
})
export class EditGuestComponent implements OnInit {
  formGroup!: FormGroup;
  guest= new Guest;
  guests=[];

  constructor(private service:ServiceService, private activerouter: ActivatedRoute, private router:Router) {
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

  
  ngOnInit():void{
    console.log(this.activerouter.snapshot.params.id);
    this.service.getCurrentGuest(this.activerouter.snapshot.params.id).subscribe((result)=>{
      this.formGroup = new FormGroup({
        GuestId: new FormControl(result['GuestId']),
        Name: new FormControl(result['Name']),
        PhoneNo: new FormControl(result['PhoneNo']),
        Email: new FormControl(result['Email']),
        IdNo: new FormControl(result['IdNo']),
        DateOfBirth: new FormControl(result['DateOfBirth']),
        IsActive: new FormControl(result['IsActive'])
      })
    })
  }

  public updateGuest(){
    this.service.updateGuest(this.activerouter.snapshot.params.id,this.formGroup.value).subscribe((result)=>{
      console.log(result);
      alert("Data Updated Successfull!")
      this.router.navigate(['/guests']);
    })
  }

}
