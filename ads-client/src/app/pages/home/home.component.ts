import { Component } from '@angular/core';
import { Ad } from '../../models/ad.model';
import { AdsService } from '../../services/ads.service';
import { AdCardComponent } from '../../components/ad-card/ad-card.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AdCardComponent,RouterOutlet, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    ads: Ad[] = [];

  constructor(private adsService: AdsService) { }

  ngOnInit(): void {
    this.adsService.getAllAds().subscribe({
      next: (data) => {
        console.log('data', data)
        this.ads = data
      },
      error: (err) => console.error(err)
    });
  }
}
