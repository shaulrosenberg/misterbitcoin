import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, pipe, takeUntil } from 'rxjs';
import { ContactFilter } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'contact-filter',
    templateUrl: './contact-filter.component.html',
    styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit, OnDestroy {

    constructor(private contactService: ContactService) { }

    contactFilter!: ContactFilter
    destroySubject$ = new Subject

    ngOnInit(): void {
        this.contactService.contactFilter$
            .pipe(takeUntil(this.destroySubject$))
            .subscribe(contactFilter => {
                this.contactFilter = contactFilter
            })
    }

    onSetFilter(value: string) {
        this.contactService.setContactFilter(this.contactFilter)
    }

    ngOnDestroy(): void {
        this.destroySubject$.next(null)
    }

}
