import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';
import { UserService } from '../../services/user.service'
import { User } from 'src/app/models/user.model';


@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    user!: User | null
    currentRate!: number

    constructor(private bitcoinService: BitcoinService, private userService: UserService) { }

    ngOnInit(): void {
        this.userService.getUser().subscribe(user => {
            this.user = user;
        });
        this.bitcoinService.getRate().subscribe(rate => {
            this.currentRate = rate.bpi.USD.rate;
        });
    }
}
