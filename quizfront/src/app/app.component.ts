import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;
  submitted = false;
  enter = true; 
  status : any;
  ath : any;
  bool = false;

  constructor(private apiService: ApiService){}

  ngOnInit() {
  }   

  auth(username: string, email: any, password: any) {

    this.data = {
    "username" : username,
    "email" : email,
    "password": password
    };

    this.apiService.register(this.data).subscribe(res =>{
      this.submitted = true;
      this.ath = res;
      this.status = false;
      this.enter = false;
    },
      err => {
        this.status = err;
        this.ath = false;
      }
    )
  }

  login(username: string, password: any) {

    this.data = {
      "username" : username,
      "password": password
    }

    this.apiService.login(this.data).subscribe(res =>{
      this.ath = true;
      this.status = false;
      this.submitted = true;
      this.enter = true;
      this.bool = true; 
    },
      err => {
        this.status = err;
        this.ath = false;
      }
      )

  }
  getContacts() {


  }

}
