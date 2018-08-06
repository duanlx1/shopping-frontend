import { Component } from '@angular/core';
import { CosmeticService } from './cosmetic/cosmetic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CosmeticService]
})
export class AppComponent {
  title = 'shopping';
}
