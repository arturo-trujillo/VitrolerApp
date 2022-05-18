import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-detalles-pedido',
  templateUrl: './detalles-pedido.component.html',
  styleUrls: ['./detalles-pedido.component.sass']
})
export class DetallesPedidoComponent implements OnInit {
  productos=''
  total=''
  fecha=''
  estado=''
  id=''
  usuario={
    nombre: '',
    apellido:'',
    telefono:'',
    correo:'',
  }

  direccion={
    calle:'',
    colonia:'',
    codigoPostal:'',
    estado:'',
    municipio:''
  }

  constructor( public dialogRef: MatDialogRef<DetallesPedidoComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any,) { }

    dataSource = this.data.venta.articulos;
    displayedColumns: string[] = ['Imagen', 'Nombre', 'Cantidad', 'precioUnitario', 'precioTotal'];
  ngOnInit(): void {
    
    this.productos = this.data.venta.articulos;
    this.total = this.data.venta.total;
    this.fecha = this.data.venta.fecha;
    this.estado = this.data.venta.estado;
    this.id = this.data.id;
    this.usuario.nombre = this.data.userData.contacto.firstCtrl;
    this.usuario.apellido= this.data.userData.contacto.firstCtrl1;
    this.usuario.telefono= this.data.userData.contacto.firstCtrl2;
    this.usuario.correo = this.data.userData.contacto.firstCtrl3;
    this.direccion.calle = this.data.userData.direccion.secondCtrl;
    this.direccion.colonia =this.data.userData.direccion.secondCtrl1;
    this.direccion.codigoPostal=this.data.userData.direccion.secondCtrl2;
    this.direccion.estado = this.data.userData.direccion.secondCtrl3;
    this.direccion.municipio = this.data.userData.direccion.secondCtrl4;
  }

}
