import { Component, OnInit,Inject, NgModule } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InventoryService } from 'src/app/services/inventory.service';
import { FormControl, Validators } from '@angular/forms';

export interface DialogData{
  animal:string,
  name:string
}

@Component({
  selector: 'app-addmodal',
  templateUrl: './addmodal.component.html',
  styleUrls: ['./addmodal.component.sass']
})
export class AddmodalComponent implements OnInit {

  Imagen = ''
  Nombre = ''
  Precio = ''
  stockSinPedido = ''

  constructor(private inventoryservice:InventoryService,
    public dialogRef: MatDialogRef<AddmodalComponent>,
     @Inject(MAT_DIALOG_DATA)public data:DialogData) { }

  ngOnInit(): void {
  }


  createItem(){
    let item = {
      Imagen:this.Imagen,
      Nombre:this.Nombre,
      Precio:this.Precio,
      stockSinPedido:this.stockSinPedido,
    }
    this.inventoryservice.createItem(item)
  }

}
