import { RoomsService } from './../core/services/rooms.service';
import { Observable } from 'rxjs';
import { IRoom } from './../core/models/rooms.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-page',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  room$!: Observable<IRoom>;
  roomId: string = '';

  constructor(
    private route: ActivatedRoute,
    private roomsService: RoomsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.roomId = params.id;
      this.room$ = this.roomsService.getRoom(params.id);
    });
  }

  editRoom(): void {
    this.router.navigate(['room', this.roomId, 'edit']);
  }
}
