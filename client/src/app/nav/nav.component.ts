import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  //inject angular accountService into component
  accountService = inject(AccountService);  //retrieves an instance of AccountService n assigns it to accountService
  // loggedIn = false;
  model: any = {};

  login() {
    this.accountService.login(this.model).subscribe({ //call login method using the instance
      next: response => {
        console.log(response);
        // this.loggedIn = true;
      },
      error: error => console.log(error)
    })
  }

  logout() {
    // this.loggedIn = false;
    this.accountService.logout();
  }
}