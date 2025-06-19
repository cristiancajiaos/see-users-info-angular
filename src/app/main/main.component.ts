import { Component, inject, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnDestroy {
  public faUser: IconDefinition = faUser;

  private router: Router = inject(Router);

  constructor() {}

  ngOnInit() {
    console.log('on init main');
  }

  ngOnDestroy(): void {
    console.log('on destroy main');
  }

}
