import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Ad } from '../../models/ad.model';

@Component({
  selector: 'app-ad-form-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ad-form-modal.component.html',
  styleUrls: ['./ad-form-modal.component.scss']
})
export class AdFormModalComponent implements OnInit {
  @Input() ad?: Ad;
  @Output() save = new EventEmitter<Ad>();
  @Output() close = new EventEmitter<void>();

  form = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(1)]],
    imageUrl: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.ad) {
      this.form.patchValue(this.ad);
    }
  }

  submit() {
    if (this.form.invalid) return;

    const result: Ad = {
      id: this.ad?.id ?? 0,
      ...this.form.value as Omit<Ad, 'id'>
    };

    this.save.emit(result);
  }
}
