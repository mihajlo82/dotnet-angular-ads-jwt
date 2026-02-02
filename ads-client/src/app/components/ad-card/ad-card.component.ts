import { Component, Input } from '@angular/core';
import { Ad } from '../../models/ad.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ad-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ad-card.component.html',
  styleUrl: './ad-card.component.scss'
})
export class AdCardComponent {
  @Input() ad!: Ad; // Input property for the ad
}

