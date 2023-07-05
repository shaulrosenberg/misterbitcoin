import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'signup-page',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
    name: string = '';

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    onSignup(): void {
        this.userService.signup(this.name);
        this.router.navigate(['/']);
    }
}
