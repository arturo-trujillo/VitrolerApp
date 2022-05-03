import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  items:any
  constructor( private inventoryservice: InventoryService) { }

  ngOnInit(): void {
    this.inventoryservice.items.subscribe(elem => {
      this.items = elem
      
    })
  }

}
