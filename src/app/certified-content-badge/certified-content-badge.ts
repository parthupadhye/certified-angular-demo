import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

type BadgeState = 'LOADING' | 'CERTIFIED' | 'UNCERTIFIED' | 'ERROR';

@Component({
  selector: 'app-certified-content-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="badge" [ngSwitch]="state">
      <p *ngSwitchCase="'LOADING'">Loading...</p>
      <p *ngSwitchCase="'CERTIFIED'">Certified</p>
      <p *ngSwitchCase="'UNCERTIFIED'">Uncertified</p>
      <p *ngSwitchCase="'ERROR'">Error</p>
    </div>
  `,
  styles: [`
    .badge {
      border: 1px solid #ccc;
      padding: 10px;
      margin: 10px 0;
      border-radius: 5px;
    }
  `]
})
export class CertifiedContentBadge implements OnInit {
  @Input() genContentId?: string;
  @Input() userSecret?: string;
  @Input() proxyUrl?: string;

  state: BadgeState = 'LOADING';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      if (this.proxyUrl) {
        this.state = 'CERTIFIED';
      } else {
        const secret = this.userSecret || this.el.nativeElement.parentElement.getAttribute('data-cc-secret');
        if (secret) {
          this.state = 'CERTIFIED';
        } else {
          this.state = 'ERROR';
        }
      }
    }, 1000);
  }
}
