import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { TariffService } from 'src/services/tariff.service';
import { TariffFilters } from 'src/models/tarrif-filters';
import { Dialog } from '@angular/cdk/dialog';
import { TariffResultComponent } from './tariff-result/tariff-result.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor(private tariffService: TariffService, public dialog: Dialog, private snackBar: MatSnackBar) { }


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

    this.tariffService.getTariffs(filters).subscribe({
      next: res => {
        this.dialog.open(TariffResultComponent, {
          data: res,
          width: '700px',
          maxWidth: '95vw'
        });
      },
      error: err => {
        this.snackBar.open('Error: ' + err.message, null, {
          panelClass: 'error-alert',
          duration: 3000
        });
        this.isLoading = false
      },
      complete: () => {
        this.isLoading = false
      }
    });


  }
}
