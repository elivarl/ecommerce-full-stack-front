import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/common/user';
import { UserType } from 'src/app/common/user-type';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  implements OnInit{
  
  username : string = '';
  name : string = '';
  surname : string = '';
  email : string = '';
  address : string = '';
  cellphone : string = '';
  password : string = '';
  userType : string = '';

  ngOnInit(): void {
  }

  constructor(private authetication : AuthenticationService, private router : Router,
    private toastr:ToastrService
    ){}

  register(){
    this.username = this.email;
    this.userType = UserType.USER
    let user = new User (0, this.username, this.name, this.surname, this.email, this.address, this.cellphone, this.password, this.userType);
    this.authetication.register(user).subscribe(
      res => {
        this.toastr.success('Usuario registrado', 'Usuario');
      console.log(res)}
    );


    console.log(user);
    this.router.navigate(['user/login']);
  }

}
