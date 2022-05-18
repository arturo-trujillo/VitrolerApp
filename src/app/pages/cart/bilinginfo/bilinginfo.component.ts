import { Component, Inject, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CartService } from 'src/app/services/cart.service';
import { PedidosService } from 'src/app/services/pedidos.service';


export interface DialogData {
  animal: string;
  name: string;
  items: any
  amount:any
}

@Component({
  selector: 'app-bilinginfo',
  templateUrl: './bilinginfo.component.html',
  styleUrls: ['./bilinginfo.component.sass']
})
export class BilinginfoComponent implements OnInit {
  @Input() items:any
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  @Input() amount:any
  
  constructor(
    public dialogRef: MatDialogRef<BilinginfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _formBuilder: FormBuilder, private pedidoserv: PedidosService, private cartserv : CartService
    ) { 

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstCtrl1: ['', Validators.required],
      firstCtrl2: ['', Validators.required],
      firstCtrl3: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      secondCtrl1: ['', Validators.required],
      secondCtrl2: ['', Validators.required],
      secondCtrl3: ['', Validators.required],
      secondCtrl4: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  addPurchase(){
    let purchase = {
     venta: this.data,
     userData: {
      contacto: this.firstFormGroup.value,
      direccion: this.secondFormGroup.value
    }
    }
    this.pedidoserv.createPedido(purchase);
    this.cartserv.clearCart();

  }

  ngOnInit(): void {
  }

}
