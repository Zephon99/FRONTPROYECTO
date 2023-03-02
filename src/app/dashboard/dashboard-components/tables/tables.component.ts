import { Component, OnInit } from '@angular/core';
import {Quejas, quejas} from './tables-data';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { ParqueoVistaService } from "../parqueoVistaService";
import {tap} from 'rxjs/operators';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html'

})
export class TablesComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'UsuarioId', 'Description', 'DateRegistration'];
  //quejasData:Quejas[];
  //dataSource = quejas;
  rows: Quejas[] = [];
  dataSource = new MatTableDataSource(this.rows);

  constructor(private parqueoVistaService:ParqueoVistaService) {

    this.getQuejas();
  }

  ngOnInit(): void {
    
  }
  getQuejas():void{

    this.parqueoVistaService.getQuejas().pipe(
      tap(quejas =>  {
        console.log('Quejas ');
        quejas.forEach(queja =>{
        console.log(queja);
        });
      }) 
    ).subscribe(quejas=>{
      this.rows =quejas;
      const queja = {
        Id: this.rows['0'],
        UsuarioId: this.rows['1'],
        Description: this.rows['2'],
        DateRegistration: this.rows['3'],
    }

      this.dataSource = new MatTableDataSource(this.rows);
  })
}
}
