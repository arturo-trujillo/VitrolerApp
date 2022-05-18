import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PedidosService } from 'src/app/services/pedidos.service';
import { VentasService } from 'src/app/services/ventas.service';
import { DetallesPedidoComponent } from '../detalles-pedido/detalles-pedido.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.sass']
})


export class PedidosComponent implements OnInit {
  items:any

  constructor(private pedidosServ:PedidosService, private ventasServ: VentasService, private afs: AngularFirestore, public dialog: MatDialog) { 

  }

  dataSource = this.pedidosServ.items;
  displayedColumns: string[] = ['id','estado', 'total','buttons'];


openView(item:any){
  const dialogRef = this.dialog.open(DetallesPedidoComponent, {
    data:item
  });
}


deleteItem(item:any){
  console.log(item.id)
  this.afs.doc<any>('pedidos/' + item.id).delete();
  this.ventasServ.createVenta(item);
}
  ngOnInit(): void {
  }

}
