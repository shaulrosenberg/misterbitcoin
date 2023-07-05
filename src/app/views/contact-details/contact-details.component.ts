import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, lastValueFrom, map, switchMap } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

    constructor(
        private contactService: ContactService,
        private route: ActivatedRoute,
        private router: Router
    ) { }
    @Output() back = new EventEmitter<void>()
    subscription!: Subscription

    contact$!: Observable<Contact>
    contact!: Contact

    ngOnInit(): void {
        this.contact$ = this.route.params.pipe(
            switchMap(params => this.contactService.getContactById(params['id']))) 
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe()
    }

}
