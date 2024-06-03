import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    fistName: new FormControl(''),
    lastName: new FormControl(''),
    date: new FormControl(''),
    phone: new FormControl(''),
    Message: new FormControl(''),
    class: new FormControl(''),

  });

  onSubmit() {
    // La soumission du formulaire est gérée ici
  }

}
