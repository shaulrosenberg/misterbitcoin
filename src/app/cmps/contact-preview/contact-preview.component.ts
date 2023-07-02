import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
	selector: 'contact-preview',
	templateUrl: './contact-preview.component.html',
	styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {

	@Input() contact!: Contact
	@Output() removeContact = new EventEmitter<string>()


	onRemoveContact(ev: MouseEvent) {
		this.removeContact.emit(this.contact._id)
	}
}
