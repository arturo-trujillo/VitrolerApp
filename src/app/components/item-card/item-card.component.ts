import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.sass']
})
export class ItemCardComponent implements OnInit {

  

  @Input() item: any  
  constructor(public dialog: MatDialog) { }

  

  loadAdd(data:any){
    if(localStorage.getItem("user")== null){
      alert("Inicie sesion porfavor")
    }else{

      const dialogRef = this.dialog.open(ProductComponent,{
        data:data
      });
    }
  }
  ngOnInit(): void {

    
    
    
   
  }

}
