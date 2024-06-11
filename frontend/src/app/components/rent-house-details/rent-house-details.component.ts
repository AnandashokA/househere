import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentItem } from '../rent.model';
@Component({
  selector: 'app-rent-house-details',
  templateUrl: './rent-house-details.component.html',
  styleUrl: './rent-house-details.component.css'
})
export class RentHouseDetailsComponent implements OnInit {
  // rentalItem!: RentItem;
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
      // this.rentalItem = history.state.data;
  }
}
