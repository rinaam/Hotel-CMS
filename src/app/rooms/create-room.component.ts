import { RoomsService } from './../core/services/rooms.service';
import { FileUpload } from './../core/models/fileUpload.model';
import { FileUploadService } from './../core/services/upload-image.service';
import { IRoom } from './../core/models/rooms.model';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

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
  errorMessage: string = '';
  currentFileUpload!: FileUpload;
  isSubmitting = false;
  @Input() roomData?: IRoom;

  constructor(
    private fb: FormBuilder,
    private roomsService: RoomsService,
    private router: Router,
    private fileUploadService: FileUploadService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      type: ['Standard', Validators.required],
      description: ['', Validators.required],
    });
  }

  async save(): Promise<void> {
    if (this.roomData) {
      return this.edit(this.roomData);
    }
    if (this.currentFileUpload && this.form.valid) {
      this.isSubmitting = true;

      const imageName = await this.fileUploadService.pushFileToStorage(
        this.currentFileUpload
      );

      this.roomsService
        .createRoom({ ...this.form.value, image: { name: imageName } })
        .then(() => {
          this.isSubmitting = false;
          this.router.navigate(['/home']);
        });
    } else {
      this.isSubmitting = false;
      this.errorMessage = 'Image is required';
    }
  }

  async edit(roomData: IRoom): Promise<void> {
    if (this.form.valid) {
      this.isSubmitting = true;

      let imageName = roomData.image.name;
      if (this.currentFileUpload) {
        imageName = await this.fileUploadService.pushFileToStorage(
          this.currentFileUpload
        );
      }
      this.roomsService
        .updateRoom(roomData.id, {
          ...this.form.value,
          image: { name: imageName },
        })
        .then(() => {
          this.isSubmitting = false;
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
