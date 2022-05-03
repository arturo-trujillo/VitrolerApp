import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {
  items: any
  constructor(private inventoryservice: InventoryService) { }

  ngOnInit(): void {
    this.inventoryservice.items.subscribe(elem => {
      this.items = elem
      
    })
  }

}
