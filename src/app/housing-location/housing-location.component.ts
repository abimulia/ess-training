import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!:HousingLocation;

}
