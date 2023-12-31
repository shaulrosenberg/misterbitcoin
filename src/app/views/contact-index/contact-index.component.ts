import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
	selector: 'contact-index',
	templateUrl: './contact-index.component.html',
	styleUrls: ['./contact-index.component.scss']
})
export class ContactIndexComponent implements OnInit, OnDestroy {

	constructor(private contactService: ContactService) { }
	contacts: Contact[] | null = null
	contacts$!: Observable<Contact[]>
	subscription!: Subscription

    // can simple subscribe to $contacts, and then call loadContacts()
	ngOnInit(): void {
		this.contacts$ = this.contactService.contacts$
		this.subscription = this.contactService.contacts$.subscribe(contacts => {
			this.contacts = contacts
		})
	}

	onRemoveContact(contactId: string) {
		this.contactService.deleteContact(contactId).subscribe({
			error: err => {
				console.log('err:', err)
			}
		})
	}

	ngOnDestroy(): void {
		this.subscription?.unsubscribe()
	}
}
