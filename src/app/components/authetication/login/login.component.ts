import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userdto } from 'src/app/common/userdto';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username : string = '';
  password : string = '';


  ngOnInit(): void {

  }

  constructor(private authentication : AuthenticationService, 
    private sessionStorage : SessionStorageService,
    private router: Router
    ){

  }

  login(){
    let userDto = new Userdto(this.username, this.password);
    this.authentication.login(userDto).subscribe(
      token => {
        console.log(token);
        //this.sessionStorage.removeItem('token');
        this.sessionStorage.setItem('token', token);
        if(token.type == 'ADMIN'){
          this.router.navigate(['/admin/product']);
        }else{
          this.router.navigate(['/']);
        }
      }
    );
    console.log(userDto);
  }



}
