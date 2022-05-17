import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  Imagen = ''
  Nombre = ''
  Precio = ''
  id=''
  constructor(public dialogRef: MatDialogRef<ProductComponent>, @Inject(MAT_DIALOG_DATA)public item:any, private carts: CartService) { }

  ngOnInit(): void {
    this.Imagen = this.item.Imagen
    this.Nombre = this.item.Nombre
    this.Precio = this.item.Precio
    this.id= this.item.id
  }

  addToCart(){
    this.carts.addToCart(this.id, document.querySelector('input')?.value, this.item);
  }
  

}
