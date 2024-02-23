import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-curriculo-page',
  templateUrl: './curriculo-page.component.html',
  styleUrl: './curriculo-page.component.css',
})
export class CurriculoPageComponent {
  public curriculo: FormGroup;

  showForm: Boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.curriculo = this.formBuilder.group({
      nome: '',
      email: '',
      telefone: '',
      escola: '',
      curso: '',
      ano: '',
      universidade: '',
      experiencia: '',
    });
  }

  onSubmit() {
    this.showForm = true;
  }
}
