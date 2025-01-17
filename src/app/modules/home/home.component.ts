import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import getLandingPageFormGroup from 'src/app/shared/form-group/landing-page-form';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  newsletter = getLandingPageFormGroup(this.formBuilder);

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
