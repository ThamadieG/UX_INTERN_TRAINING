import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service/sevice.service';
import { Room } from '../room';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {
  formGroup!: FormGroup;
  room= new Room;
  rooms=[];

  constructor(private service:ServiceService, private activerouter: ActivatedRoute, private router:Router) {
    this.formGroup = new FormGroup({
      RoomId: new FormControl('',[Validators.required]),
      RoomNo: new FormControl('',[Validators.required]),
      RoomTypeId: new FormControl('',[Validators.required]),
      Price: new FormControl('',[Validators.required]),
      RoomStatus: new FormControl('',[Validators.required]),
      IsActive: new FormControl('',[Validators.required])
      })
   }

  
  ngOnInit():void{
    console.log(this.activerouter.snapshot.params.id);
    this.service.getCurrentRoom(this.activerouter.snapshot.params.id).subscribe((result)=>{
      this.formGroup = new FormGroup({
        RoomId: new FormControl(result['RoomId']),
        RoomNo: new FormControl(result['RoomNo']),
        RoomTypeId: new FormControl(result['RoomTypeId']),
        Price: new FormControl(result['Price']),
        RoomStatus: new FormControl(result['RoomStatus']),
        IsActive: new FormControl(result['IsActive'])
        })
    })
  }
 
  public updateRoom(){
    this.service.updateRoom(this.activerouter.snapshot.params.id,this.formGroup.value).subscribe((result)=>{
      console.log(result);
      alert("Data Updated Successfull!")
      this.router.navigate(['/rooms']);
    })
  }

}
