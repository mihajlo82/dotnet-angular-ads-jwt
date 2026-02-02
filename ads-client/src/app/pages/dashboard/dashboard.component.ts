// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './dashboard.component.html',
//   styleUrl: './dashboard.component.scss'
// })
// export class DashboardComponent {

// }
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsService } from '../../services/ads.service';
import { Ad } from '../../models/ad.model';
import { AdFormModalComponent } from '../../components/ad-form-modal/ad-form-modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AdFormModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  ads: Ad[] = [];
  loading = true;
  showModal = false;
  selectedAd?: Ad;

  constructor(private adsService: AdsService) {}

  
  ngOnInit(): void {
    this.loadAds();
  }

  loadAds() {
    this.loading = true;
    this.adsService.getAllAds().subscribe({
      next: (ads) => {
        this.ads = ads;
        this.loading = false;
      },
      error: () => {
        alert('Failed to load ads');
        this.loading = false;
      },
    });
  }

  openCreate() {
    this.selectedAd = undefined;
    this.showModal = true;
  }

  openEdit(ad: Ad) {
    this.selectedAd = ad;
    this.showModal = true;
  }

  saveAd(ad: Ad) {
    if (ad.id === 0) {
      // CREATE
      const { id, ...payload } = ad;

      this.adsService.createAd(payload).subscribe({
        next: (created) => {
          this.ads.unshift(created);
          this.showModal = false;
        },
        error: () => alert('Create failed'),
      });
    } else {
      // UPDATE
      this.adsService.updateAd(ad).subscribe({
        next: () => {
          const index = this.ads.findIndex((a) => a.id === ad.id);
          this.ads[index] = ad;
          this.showModal = false;
        },
        error: () => alert('Update failed'),
      });
    }
  }

  deleteAd(id: number) {
    if (!confirm('Delete this ad?')) return;

    this.adsService.deleteAd(id).subscribe({
      next: () => {
        this.ads = this.ads.filter((a) => a.id !== id);
      },
      error: () => alert('Delete failed'),
    });
  }
}
