import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {
  ImageCroppedEvent,
  ImageCropperComponent,
  LoadedImage,
} from 'ngx-image-cropper';
import { DialogData } from 'src/app/models/dialog-data';

@Component({
  selector: 'app-image-cropper',
  standalone: true,
  imports: [ImageCropperComponent],
  templateUrl: './image-cropper.component.html',
  styleUrl: './image-cropper.component.css',
})
export class CustomImageCropperComponent implements OnInit {
  @Input() imageBase64!: string;
  croppedImage: SafeUrl = '';

  constructor(
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<CustomImageCropperComponent>
  ) {}

  ngOnInit(): void {
    this.imageBase64 = this.data?.extras?.imageBase64;
  }

  imageCropped(event: ImageCroppedEvent) {
    if (event && event.objectUrl) {
      this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(
        event.objectUrl
      );
    }
  }

  

  imageLoaded(image: LoadedImage) {
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }
}
