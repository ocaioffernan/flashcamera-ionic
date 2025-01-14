import { Component, OnInit } from '@angular/core';
import {Camera, CameraResultType} from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  foto: any;
    constructor() { }
    ngOnInit() {
    }
    tirarFoto = async() => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });
  
      var imageurl = image.webPath;
      this.foto = imageurl;
      };
    }
