import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit{
    constructor(public userService: UserService) { }

    user!: User | null
    route = inject(Router)
    
    ngOnInit(): void {
        this.userService.getUser().subscribe(user => {
            this.user = user;
          });
        console.log(this.user)
    }

    redirect() {
        this.route.navigateByUrl('/')
    }

    logout() {
        this.userService.logout();
    }
}
