import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { TariffService } from 'src/services/tariff.service';
import { TariffFilters } from 'src/models/tarrif-filters';
import { catchError, delay } from 'rxjs/operators';
import { Dialog } from '@angular/cdk/dialog';
import { TariffResultComponent } from './tariff-result/tariff-result.component';
import { environment } from 'src/environments/environment';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss']
})
export class TariffComponent {
  constructor(private tariffService: TariffService, public dialog: Dialog) { }


  title = 'TariffComparison';
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  form = new FormGroup({
    consumeFormControl: new FormControl('', [Validators.required, Validators.pattern("^[1-9][0-9]*$")])
  });

  matcher = new MyErrorStateMatcher();

  isLoading = false;


  getTariffs() {
    let filters: TariffFilters = {
      consumption: +this.form.controls['consumeFormControl'].value
    }

    this.isLoading = true;

    this.tariffService.getTariffs(filters).pipe(
      delay(environment.production ? 0 : 750)
    ).subscribe(res => {
      this.isLoading = false;

      this.dialog.open(TariffResultComponent, {
        data: res,
        width: '700px',
        maxWidth: '95vw'
      });
    });


  }
}
