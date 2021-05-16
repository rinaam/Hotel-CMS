import { RoomsService } from './../core/services/rooms.service';
import { Observable } from 'rxjs';

import { IRoom } from './../core/models/rooms.model';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-room-page',
  templateUrl: './edit-room.component.html',
})
export class EditRoomComponent implements OnInit {
  room$!: Observable<IRoom>;
  constructor(
    private route: ActivatedRoute,
    private roomsService: RoomsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.room$ = this.roomsService.getRoom(params.id);
    });
  }
}
