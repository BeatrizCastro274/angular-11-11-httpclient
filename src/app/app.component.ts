import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Beatriz Castro RA: 50831811004';

  counter = 0;
  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 100);

  constructor(public bitcoinService: BitcoinService) {}

  ngOnInit() {
    this.update();
  }

  getCurrentPrice() {
    return this.bitcoinService.currentPrice;
  }

  update() {
    this.bitcoinService.update();
    if (this.bitcoinService.currentPrice === this.bitcoinService.currentPrice) {
      this.bitcoinService.update();
    }
  }
}
