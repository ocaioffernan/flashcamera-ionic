import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: 'home', icon: 'home' },
    { title: 'Câmera', url: 'camera', icon: 'camera' },
    { title: 'Flash', url: 'flash', icon: 'flashlight' },
  ];
  
  constructor() {}
}
