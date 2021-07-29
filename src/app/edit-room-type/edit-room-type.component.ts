import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomType } from '../room-type';
import { ServiceService } from '../service/sevice.service';

@Component({
  selector: 'app-edit-room-type',
  templateUrl: './edit-room-type.component.html',
  styleUrls: ['./edit-room-type.component.css']
})
export class EditRoomTypeComponent implements OnInit {
  formGroup!: FormGroup;
  roomType= new RoomType;
  roomTypes=[];

  constructor(private service:ServiceService, private activerouter: ActivatedRoute, private router:Router) {
    this.formGroup = new FormGroup({
      RoomTypeId: new FormControl('',[Validators.required]),
      Code: new FormControl('',[Validators.required]),
      Name: new FormControl('',[Validators.required])
      })
   }

  
  ngOnInit():void{
    console.log(this.activerouter.snapshot.params.id);
    this.service.getCurrentRoomType(this.activerouter.snapshot.params.id).subscribe((result)=>{
      this.formGroup = new FormGroup({
        RoomTypeId: new FormControl(result['RoomTypeId']),
        Code: new FormControl(result['Code']),
        Name: new FormControl(result['Name'])
        })
    })
  }
 
  public updateRoomType(){
    this.service.updateRoomType(this.activerouter.snapshot.params.id,this.formGroup.value).subscribe((result)=>{
      console.log(result);
      alert("Data Updated Successfull!")
      this.router.navigate(['/roomTypes']);
    })
  }
}
