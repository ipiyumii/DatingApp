import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule,BsDropdownModule,RouterLink, RouterLinkActive,TitleCasePipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  //inject angular accountService into component
  accountService = inject(AccountService);  //retrieves an instance of AccountService n assigns it to accountService
  // loggedIn = false;
  model: any = {};
  private router = inject(Router);
  private toast = inject(ToastrService);

  login() {
    this.accountService.login(this.model).subscribe({ //call login method using the instance
      next: (response) => {
        // this.loggedIn = true;
        this.router.navigateByUrl('/members');
      },
      error: error => this.toast.error(error.error)
    })
  }

  logout() {
    // this.loggedIn = false;
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
