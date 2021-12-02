import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String = "john";
  password: String;
  validLogin: boolean;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  authenticate() {
   
    let authenticated = this.authService.authenticate(this.username, this.password).subscribe(
      userData => {
        this.router.navigate(['']);
        this.validLogin = true;
      },
      error => {
        this.validLogin = false
      }
    )
    
  }

}
