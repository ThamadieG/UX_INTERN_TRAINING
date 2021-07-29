import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomType } from '../room-type';
import { ServiceService } from '../service/sevice.service';

@Component({
  selector: 'app-add-room-type',
  templateUrl: './add-room-type.component.html',
  styleUrls: ['./add-room-type.component.css']
})
export class AddRoomTypeComponent implements OnInit {
  formGroup!: FormGroup;
  room= new RoomType;
  rooms=[];

  constructor(private service:ServiceService, private router: Router, private httpClient:HttpClient, private fb:FormBuilder) {
    this.formGroup = new FormGroup({
      RoomTypeId: new FormControl('',[Validators.required]),
      Code: new FormControl('',[Validators.required]),
      Name: new FormControl('',[Validators.required])
      })
   }

  
  ngOnInit(){
  }

  public addRoomType():void {
    this.service.createRoomType(this.formGroup.value).subscribe(result =>{
      console.log(result);
      alert("Data added successfully");
    })
      error => {
        console.log(error);
      };
    this.rooms.push (this.formGroup.value);
    console.log("Data added successfully");
    
  }

}
