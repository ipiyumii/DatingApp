import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Input() userFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  accountService = inject(AccountService);
  private toast = inject(ToastrService);
  model:any = {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: Response => {
        console.log(Response);
        this.cancel();
      },
      error: error => this.toast.error("Register fail")
    })
  }

  cancel() {
    console.log("cancel");
    this.cancelRegister.emit(false);
  }
}
