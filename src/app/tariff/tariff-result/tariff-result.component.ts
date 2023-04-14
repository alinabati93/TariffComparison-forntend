import { Component, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Tariff } from 'src/models/tariff';

@Component({
  selector: 'app-tariff-result',
  templateUrl: './tariff-result.component.html',
  styleUrls: ['./tariff-result.component.scss']
})
export class TariffResultComponent {
  tariffs: Tariff[] = []
  constructor(@Inject(DIALOG_DATA) public data: Tariff[]) {
    if (this.data) {
      this.tariffs = data;
    }
  }
}
