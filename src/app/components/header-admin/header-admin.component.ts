import { Component } from '@angular/core';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent {

  constructor(private sessionStorage: SessionStorageService){
    

  }

  removeSession(){
    console.log('HeaderAdminComponent:' +sessionStorage.getItem('token'));
    sessionStorage.removeItem('token');
    console.log('HeaderAdminComponent: '+sessionStorage.getItem('token'));
  }

}
