import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  Imagen = ''
  Nombre = ''
  Precio = ''
  constructor(public dialogRef: MatDialogRef<ProductComponent>, @Inject(MAT_DIALOG_DATA)public data:any) { }

  ngOnInit(): void {
    this.Imagen = this.data.Imagen
    this.Nombre = this.data.Nombre
    this.Precio = this.data.Precio
  }

  

}
