import { Component } from '@angular/core';
import { ClueBoxComponent } from './clue-box/clue-box.component';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [ClueBoxComponent, HeaderComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})

export class AboveTheFoldComponent {

  constructor() {
  }
}