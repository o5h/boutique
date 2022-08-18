import { Component, OnInit } from '@angular/core';
import { AuthStorage } from '../services/auth.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  constructor(public authStorage: AuthStorage) { }

  ngOnInit(): void {

  }
  onLogin() {
    this.authStorage.login(this.email, this.password);
  }

}
