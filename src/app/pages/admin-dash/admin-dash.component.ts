import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { InventoryService } from 'src/app/services/inventory.service';
import { MatDialog } from '@angular/material/dialog';
import { AddmodalComponent } from './addmodal/addmodal.component';
import { EditmodalComponent } from './editmodal/editmodal.component';




@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.sass']
})
export class AdminDashComponent implements OnInit {
  items:any


  
  
  constructor( private inventoryservice: InventoryService, public dialog: MatDialog) { 
    this.inventoryservice.items.subscribe(elem =>{
      this.items = elem;
    })
  }
  
  dataSource = this.inventoryservice.items;
  displayedColumns: string[] = ['Imagen', 'Nombre', 'Precio', 'stockSinPedido','buttons'];
  
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  ngOnInit(): void {
    
  }

  openAdd(){
    const dialogRef = this.dialog.open(AddmodalComponent)
  }

  openEdit(data:any){
    const dialogRef = this.dialog.open(EditmodalComponent, {
      data: data,

    })
  }

  delete(data:any){
    this.inventoryservice.deleteItem(data);
  }




}
