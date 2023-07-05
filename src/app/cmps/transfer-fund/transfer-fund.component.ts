import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'transfer-fund',
    templateUrl: './transfer-fund.component.html',
    styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent {
    @Input() contact!: Contact;
    amount!: number;
    errorMessage: string = '';

    constructor(private userService: UserService) { }

    onTransfer() {
        if (this.amount > 0) {
            this.userService.addMove(this.contact, this.amount);
            this.errorMessage = ''; 
        } else {
            this.errorMessage = 'Please enter a valid amount.'; 
        }
    }
}
