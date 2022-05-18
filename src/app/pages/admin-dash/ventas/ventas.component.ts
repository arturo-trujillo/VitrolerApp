import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VentasService } from 'src/app/services/ventas.service';
import { DetallesPedidoComponent } from '../detalles-pedido/detalles-pedido.component';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.sass']
})
export class VentasComponent implements OnInit {

  constructor(private ventasServ: VentasService, public dialog: MatDialog) { }

  dataSource = this.ventasServ.items;
  displayedColumns: string[] = ['id', 'total','buttons'];


openView(item:any){
  const dialogRef = this.dialog.open(DetallesPedidoComponent, {
    data:item
  });
}
  ngOnInit(): void {
  }

}
