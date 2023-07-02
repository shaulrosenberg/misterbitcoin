import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private contactService: ContactService) { }

    title = 'misterbitcoin';

    ngOnInit(): void {
        this.contactService.loadContacts()
            .pipe(take(1))
            .subscribe({
                error: err => {
                    console.log('err:', err)
                }
            })
    }
}
