import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
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
  imageName: string = '';

  constructor(
    private fb: FormBuilder,
    private angularFirestore: AngularFirestore,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  save() {
    if (this.imageName && this.form.valid) {
      this.angularFirestore
        .collection('rooms')
        .add({ ...this.form.value, imageName: this.imageName })
        .then(() => {
          this.router.navigate(['/home']);
        });
    } else {
      alert('missing image');
    }
  }

  cancel() {
    this.form.reset();
  }

  ngOnInit() {}

  getImageUrl(imageName: string) {
    this.imageName = imageName;
  }
}
