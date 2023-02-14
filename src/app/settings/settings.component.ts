import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AdminsService } from '../admins.service';
import { LightmodeService } from '../lightmode.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  

  constructor(private lightmode:LightmodeService,public admins:AdminsService,private toast:NgToastService) { }



  ngOnInit(): void {
  }

  

  /* istanbul ignore next */
  toggleLightMode(event:Event) {
    let currentTarget = event.currentTarget as HTMLInputElement;
    this.lightmode.isDarkMode = currentTarget.checked
     
  }

  /* istanbul ignore next */
  enterName(event: Event) {
   
    if(this.admins.admins.length<2){
      let target = event.target as HTMLInputElement;
      this.admins.admins.push( target.value);
      target.value=""
    }
    else{
      this.toast.error({detail:"Error Massege",summary:"2 Admins at max",duration:5000})
    }
  }

}
