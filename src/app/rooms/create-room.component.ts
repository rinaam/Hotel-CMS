import { RoomsService } from './../core/services/rooms.service';
import { FileUpload } from './../core/models/fileUpload.model';
import { FileUploadService } from './../core/services/upload-image.service';
import { IRoom } from './../core/models/rooms.model';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-room-page',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss'],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
  ],
})
export class CreateRoomComponent implements OnInit {
  form: FormGroup;
  percentage = 0;
  currentFileUpload!: FileUpload;
  @Input() roomData?: IRoom;

  constructor(
    private fb: FormBuilder,
    private roomsService: RoomsService,
    private router: Router,
    private fileUploadService: FileUploadService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  save(): void {
    if (this.roomData) {
      return this.edit(this.roomData);
    }
    if (this.currentFileUpload && this.form.valid) {
      const { imageName } = this.fileUploadService.pushFileToStorage(
        this.currentFileUpload
      );

      this.roomsService
        .createRoom({ ...this.form.value, imageName })
        .then(() => {
          this.router.navigate(['/home']);
        });
    } else {
      alert(1);
    }
  }

  edit(roomData: IRoom): void {
    if (this.form.valid) {
      let imageName = roomData.imageName;
      if (this.currentFileUpload) {
        imageName = this.fileUploadService.pushFileToStorage(
          this.currentFileUpload
        ).imageName;
      }
      this.roomsService
        .updateRoom(roomData.id, {
          ...this.form.value,
          imageName,
        })
        .then(() => {
          this.router.navigate(['/home']);
        });
    }
  }

  cancel(): void {
    this.form.reset();
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    if (this.roomData) {
      const { name, type, description } = this.roomData;
      this.form.setValue({
        name,
        type,
        description,
      });
    }
  }

  getCurrentFileUpload(fileUpload: FileUpload): void {
    this.currentFileUpload = fileUpload;
  }
}
