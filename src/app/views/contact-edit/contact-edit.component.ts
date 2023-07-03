import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, filter, map, switchMap } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'contact-edit',
    templateUrl: './contact-edit.component.html',
    styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit, OnDestroy {

    constructor(private contactService: ContactService
        , private route: ActivatedRoute) { }

    router = inject(Router)

    contact = this.contactService.getEmptyContact() as Contact
    subscription!: Subscription

    ngOnInit(): void {
        this.route.params
            .pipe(
                map(params => params['id']),
                filter(id => id),
                switchMap(id => this.contactService.getContactById(id))
            )
            .subscribe(contact => this.contact = contact)
    }

    onSaveContact() {
        this.subscription = this.contactService.saveContact(this.contact)
            .subscribe({
                next: () => this.router.navigateByUrl(''),
                error: err => console.log('err:', err)
            })
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe()
    }

    onBack() {
        this.router.navigateByUrl('/')
    }
}
