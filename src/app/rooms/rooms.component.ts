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
  totalLength:any;
  page:number=1;

  constructor(private service:ServiceService) { }

  ngOnInit(): void{
    this.getRooms();
  }

  getRooms(){
    this.service.getRooms().subscribe(
      (response) => {
        console.log(response);
        this.rooms = response;

        this.totalLength=response.length;
      },
      (error) =>{
        console.log(error);
      }
    );
  }

  deleteItem(room){
    this.service.deleteRoom(room).subscribe((result)=>{
      console.log("Result", result);
      alert("Room deleted successful!!     id:"+room);
      })
        error => {
          console.log(error);
        };
  }
}
