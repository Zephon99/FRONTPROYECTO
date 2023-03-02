import { Injectable } from '@angular/core';
import {ParqueoVista} from './parqueoVista';
import {Observable,throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError,tap} from 'rxjs/operators';
import {Router} from  '@angular/router';

/*@Injectable({
  providedIn: 'root'
})*/

@Injectable()
export class ParqueoVistaService {

private urlEndPoint:string='http://tesis3-env.eba-aqm3jchh.us-east-1.elasticbeanstalk.com/reservadia/cantidadFechas';
private urlEndPoint2:string='http://tesis3-env.eba-aqm3jchh.us-east-1.elasticbeanstalk.com/reservadia/cantidadDias';
private urlEndPoint3:string='http://tesis3-env.eba-aqm3jchh.us-east-1.elasticbeanstalk.com/reservadia/cantidadParqueoReservas';
private urlEndPoint4:string='http://tesis3-env.eba-aqm3jchh.us-east-1.elasticbeanstalk.com/reservadia/cantidadReservasParqueo';
private urlEndPoint5:string='http://tesis3-env.eba-aqm3jchh.us-east-1.elasticbeanstalk.com/reservadia/cantidadReservasMes';
private urlEndPoint6:string='http://tesis3-env.eba-aqm3jchh.us-east-1.elasticbeanstalk.com/reservadia/cantidadMesReserva';
private urlEndPoint7:string='http://tesis3-env.eba-aqm3jchh.us-east-1.elasticbeanstalk.com/queja/listaQuejas';
//private urlEndPoint3:string='http://localhost:8080/reservadia/cantidad2';
private httpHeaders = new HttpHeaders ({'Content-Type': 'application/json'});
constructor(private http:HttpClient, private router:Router) { }

  /*getNombreParqueos(): Observable<any []> {
    //return of(CLIENTES);
   return this.http.get<any[]>(this.urlEndPoint)
   .pipe(
     catchError (e => {
       return throwError(e);
     })
   )*/
   
  /*return this.http.get(this.urlEndPoint).pipe(
    tap(response =>{
      let risks=response as Risk[];
      console.log('RiskService: tap 1');
      risks.forEach(risk =>{
        console.log(risk.riskName);
      }

      )
    }),
    map((response) => {
let risks=response as Risk[];

      return risks.map(risk =>{
        risk.riskName = risk.riskName.toUpperCase();

        return risk;

      });

    }),
    tap(response =>{
        console.log('RiskService: tap 2');
      response.forEach(risk =>{
        console.log(risk.riskName);
      }

      )
    })
  );*/
  getQuejas(): Observable<any []> {
    //return of(CLIENTES);
   return this.http.get<any[]>(this.urlEndPoint7)
   .pipe(
     catchError (e => {
       return throwError(e);
     })
   )
  }
  getFechasParqueos(): Observable<any []> {
    //return of(CLIENTES);
   return this.http.get<any[]>(this.urlEndPoint)
   .pipe(
     catchError (e => {
       return throwError(e);
     })
   )
  }
  getDiasParqueos(): Observable<any []> {
    //return of(CLIENTES);
   return this.http.get<any[]>(this.urlEndPoint2)
   .pipe(
     catchError (e => {
       return throwError(e);
     })
   )
  }
  getParqueosReservas(): Observable<any []> {
    //return of(CLIENTES);
   return this.http.get<any[]>(this.urlEndPoint3)
   .pipe(
     catchError (e => {
       return throwError(e);
     })
   )
  }
  getCantidadReservas(): Observable<any []> {
    //return of(CLIENTES);
   return this.http.get<any[]>(this.urlEndPoint4)
   .pipe(
     catchError (e => {
       return throwError(e);
     })
   )
  }
  getCantidadMesReservas(): Observable<any []> {
    //return of(CLIENTES);
   return this.http.get<any[]>(this.urlEndPoint5)
   .pipe(
     catchError (e => {
       return throwError(e);
     })
   )
  }

  getMesParqueos(): Observable<any []> {
    //return of(CLIENTES);
   return this.http.get<any[]>(this.urlEndPoint6)
   .pipe(
     catchError (e => {
       return throwError(e);
     })
   )
  }

  /*getParqueosO(): Observable<ParqueoVista[]> {
    //return of(CLIENTES);
   return this.http.get<ParqueoVista[]>(this.urlEndPoint3)
   .pipe(
     catchError (e => {
       return throwError(e);
     })
   )
  }*/
}
