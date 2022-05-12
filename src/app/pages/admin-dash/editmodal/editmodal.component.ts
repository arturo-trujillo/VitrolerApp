import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InventoryService } from 'src/app/services/inventory.service';
@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.component.html',
  styleUrls: ['./editmodal.component.sass']
})
export class EditmodalComponent implements OnInit {
  Imagen=''
  Nombre=''
  Precio=''
  stockSinPedido=''

  constructor(private inventoryservice:InventoryService,
    public dialogRef: MatDialogRef<EditmodalComponent>,
     @Inject(MAT_DIALOG_DATA)public data:any,) { }

  ngOnInit(): void {
    this.Imagen = this.data.Imagen
    this.Nombre = this.data.Nombre
    this.Precio = this.data.Precio
    this.stockSinPedido = this.data.stockSinPedido
  }

  updateItem(){
    let item = {
      Imagen:this.Imagen,
      Nombre:this.Nombre,
      Precio:this.Precio,
      stockSinPedido:this.stockSinPedido,
    }
    this.inventoryservice.editItem(item)
    
  }

}
