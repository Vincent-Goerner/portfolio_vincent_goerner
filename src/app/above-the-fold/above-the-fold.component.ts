import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ClueBoxComponent } from './clue-box/clue-box.component';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [NavbarComponent, ClueBoxComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})

export class AboveTheFoldComponent {

}
