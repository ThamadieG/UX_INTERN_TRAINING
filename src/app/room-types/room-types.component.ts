import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/sevice.service';

export class RoomTypes {
  constructor(
    public RoomTypeId:string,
    public Code: String,
    public Name: string,
  ) {
  }
}

@Component({
  selector: 'app-room-types',
  templateUrl: './room-types.component.html',
  styleUrls: ['./room-types.component.css']
})
export class RoomTypesComponent implements OnInit {
  roomTypes=null as any;

  constructor(private service:ServiceService) { }

  ngOnInit(): void{
    this.getRoomTypes();
  }

  getRoomTypes(){
    this.service.getRoomTypes().subscribe(
      (response) => {
        console.log(response);
        this.roomTypes = response;
      },
      (error) =>{
        console.log(error);
      }
    );
  }

  deleteItem(roomType){
    this.service.deleteRoomType(roomType.RoomTypeId)
        .subscribe(response => {
          this.roomTypes = this.roomTypes.filter(item => item.id !== roomType.RoomTypeId);
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
