import { Injectable } from '@angular/core';
import { User, Move } from '../models/user.model';
import { Contact } from '../models/contact.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private users: User[] = [
        {
            name: "Shaul Rosenberg",
            coins: 1000000,
            moves: []
        }
    ];
    private currentUser: BehaviorSubject<User | null>;

    constructor() {
        const userInStorage = sessionStorage.getItem('currentUser');
        if (userInStorage) {
            this.currentUser = new BehaviorSubject<User | null>(JSON.parse(userInStorage));
        } else {
            this.currentUser = new BehaviorSubject<User | null>(null);
        }
    }

    getUser(): Observable<User | null> {
        return this.currentUser.asObservable();
    }

    getUsers(): User[] {
        return [...this.users];
    }

    signup(name: string) {
        const newUser: User = {
            name,
            coins: 1000000,
            moves: []
        };
        this.users.push(newUser);
        this.login(name);
    }

    login(name: string) {
        const user = this.users.find(user => user.name === name);
        if (user) {
            this.currentUser.next(user);
            sessionStorage.setItem('currentUser', JSON.stringify(user));
        } else {
            throw new Error('User not found');
        }
    }

    logout() {
        this.currentUser.next(null);
        sessionStorage.removeItem('currentUser');
    }

    addMove(contact: Contact, amount: number) {
        const currentUserValue = this.currentUser.value;
        if (!currentUserValue) {
            throw new Error('No user is logged in');
        }
        const newMove: Move = {
            toId: contact._id as string,
            to: contact.name,
            at: Date.now(),
            amount
        };
        currentUserValue.moves.push(newMove);
        currentUserValue.coins -= amount;

        this.currentUser.next(currentUserValue);
        sessionStorage.setItem('currentUser', JSON.stringify(currentUserValue));
    }
}
