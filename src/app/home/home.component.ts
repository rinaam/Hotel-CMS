import { RoomsService } from './../core/services/rooms.service';
import { IRoom } from './../core/models/rooms.model';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  rooms: Observable<IRoom[]> = this.roomsService.getRooms();
  constructor(private router: Router, private roomsService: RoomsService) {}

  getDetails(id: string) {
    this.router.navigate(['/room', id]);
  }

  deleteRoom(room: IRoom) {
    this.roomsService.deleteRoom(room.id, room.imageName);
  }
}
