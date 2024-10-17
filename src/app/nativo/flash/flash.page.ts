import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
@Component({
  selector: 'app-flash',
  templateUrl: './flash.page.html',
  styleUrls: ['./flash.page.scss'],
})
export class FlashPage implements OnInit {
  onoff: string = '';
  constructor(private flashlight: Flashlight) { }

  ngOnInit() {
    this.onoff = "/assets/on.png";
  }
  clicar(){
    if (this.onoff === "/assets/off.png"){
      this.flashlight.switchOff();
      this.onoff = "/assets/on.png";
    } else {
      this.flashlight.switchOn();
      this.onoff = "/assets/off.png";
    }}
}
