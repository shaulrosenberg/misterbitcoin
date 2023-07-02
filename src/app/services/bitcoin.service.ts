import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BitcoinService {

    constructor(private http: HttpClient) { }

    private urls = {
        rate: 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json',
        tradeVolume: 'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true',
        avgBlockSize: 'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true',
        marketPrice: 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
    };


    getRate(): Observable<any> {
        return this.http.get(this.urls.rate);
    }

    getMarketPrice(): Observable<any> {
        return this.http.get(this.urls.marketPrice);
    }

    getTradeVolume(): Observable<any> {
        return this.http.get(this.urls.tradeVolume);
    }

    getAvgBlockSize(): Observable<any> {
        return this.http.get(this.urls.avgBlockSize);
    }
}
