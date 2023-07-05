import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User, Move } from '../../models/user.model';
import { Contact } from '../../models/contact.model';

@Component({
    selector: 'move-list',
    templateUrl: './move-list.component.html',
    styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
    @Input() contact: Contact | null;
    user: User | null = null
    moves: Move[] = []

    constructor(private userService: UserService) {
        this.user = null;
        this.moves = [];
        this.contact = null;
    }

    ngOnInit(): void {
        this.userService.getUser().subscribe(user => {
            this.user = user;
            if (user) {
                this.moves = this.contact ?
                    user.moves.filter(move => move.toId === this.contact?._id) :
                    user.moves;
            }
        });
    }
}
