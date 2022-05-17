import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  
   

  users:any
  cart:any
  dataSource2:any[] = [];
  total:any = 0


  constructor(private cartServ: CartService) { 
   


    this.cartServ.users.subscribe ( elem =>{
     this.total = 0;
      this.users = elem
     const userid = localStorage.getItem("user");
     var json = JSON.parse(userid || "")
     const id = json["uid"];
     const articulos  = elem.find((element:any) => element.id == id).carrito;
     this.dataSource2 =Object.keys(articulos).map(key => {     return articulos[key]; })
      this.dataSource2.forEach(x => {
      this.total = this.total + x.precioTotal
     })
    
   })
  }

 
  
  displayedColumns: string[] = ['Imagen', 'Nombre', 'Cantidad', 'precioUnitario','precioTotal', 'buttons'];
  ngOnInit(): void {
     
  }
 
  updateElem(element:any, event:any){
    console.log(event.target.value)
   this.cartServ.updatecart(event.target.value, element.item.id, element.item)
  }

  deleteElem(element:any){
    this.cartServ.deleteFromCart(element.item.id, element.item);
  }
}


