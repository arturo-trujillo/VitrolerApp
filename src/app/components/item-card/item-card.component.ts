import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.sass']
})
export class ItemCardComponent implements OnInit {

  

  @Input() item: any  
  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) { }



  loadAdd(data:any){
    if(localStorage.getItem("user")== "null"){
      //alert("Inicie sesion porfavor")
      this._snackBar.open("Necesita Iniciar sesion", "Cerrar")

    }else{

      const dialogRef = this.dialog.open(ProductComponent,{
        data:data
      });
    }
  }
  ngOnInit(): void {

    
    
    
   
  }

}
