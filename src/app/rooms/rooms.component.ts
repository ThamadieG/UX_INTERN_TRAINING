import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/sevice.service';

export class Rooms {
  constructor(
    public RoomId:string,
    public RoomNo: String,
    public RoomTypeId: string,
    public Price: string,
    public RoomStatus: string,
    public IsActive: string,
  ) {
  }
}

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms=null as any;

  constructor(private service:ServiceService) { }

  ngOnInit(): void{
    this.getRooms();
  }

  getRooms(){
    this.service.getRooms().subscribe(
      (response) => {
        console.log(response);
        this.rooms = response;
      },
      (error) =>{
        console.log(error);
      }
    );
  }

  deleteItem(room){
    this.service.deleteRoom(room.RoomId)
        .subscribe(response => {
          this.rooms = this.rooms.filter(item => item.id !== room.RoomId);
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
