import { Component, OnInit } from '@angular/core';
import { Ad } from '../../models/ad.model';
import { ActivatedRoute } from '@angular/router';
import { AdsService } from '../../services/ads.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ad-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ad-details.component.html',
  styleUrl: './ad-details.component.scss'
})
export class AdDetailsComponent implements OnInit {
  ad?: Ad;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private adsService: AdsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')?.toString();

    this.adsService.getAdById(id).subscribe({
      next: (data) => {
        this.ad = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
}

}