import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  public faChevronLeft: IconDefinition = faChevronLeft;

  constructor() {

  }

  ngOnInit() {

  }

}
