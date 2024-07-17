import { Component, inject, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  registerMode = false;
  http = inject(HttpClient);
  users: any;

  ngOnInit(): void {
      this.getUsers();
  }

  ToggleRegisterMode() {
    this.registerMode = !this.registerMode;
  }

  cancelRegister(event: boolean) {
    this.registerMode = event;
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: Response => this.users = Response,
      error: error => console.log(error),
      complete: () => console.log("request has completed")
    })
  }
}