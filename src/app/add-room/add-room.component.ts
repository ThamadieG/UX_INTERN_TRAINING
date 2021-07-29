import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from '../room';
import { ServiceService } from '../service/sevice.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  formGroup!: FormGroup;
  room= new Room;
  rooms=[];

  constructor(private service:ServiceService, private router: Router, private httpClient:HttpClient, private fb:FormBuilder) {
    this.formGroup = new FormGroup({
      RoomId: new FormControl('',[Validators.required]),
      RoomNo: new FormControl('',[Validators.required]),
      RoomTypeId: new FormControl('',[Validators.required]),
      Price: new FormControl('',[Validators.required]),
      RoomStatus: new FormControl('',[Validators.required]),
      IsActive: new FormControl('',[Validators.required])
      })
   }

  
  ngOnInit(){
  }

  public addRoom():void {
    this.service.createRoom(this.formGroup.value).subscribe(result =>{
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

