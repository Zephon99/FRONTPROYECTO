import { Component, OnInit, ViewChild } from "@angular/core";
import {tap} from 'rxjs/operators';
import {Router} from  '@angular/router';
import { ParqueoVistaService } from "../parqueoVistaService";
import { ParqueoVista } from "../parqueoVista";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexGrid
} from "ng-apexcharts";

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
}
@Component({
  selector: "app-sales-overview",
  templateUrl: "./sales-overview.component.html"
})
export class SalesOverviewComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public chartOptions: Partial<ChartOptions>;
  rows: number[] = [
  ];
  rows2: number[] = [
  ];
  rows3: string[] = [
  ];
  constructor(private parqueoVistaService:ParqueoVistaService) {
    this.chartOptions = {
      series: [
        {
          name: "Cantidad",
          data: [0,0],
        },
        {
          name: "Parqueos",
          data: [1, 3],
        },
      ],
      chart: {
        type: "bar",
        fontFamily: "Poppins,sans-serif",
        height: 320,
      },
      grid: {
        borderColor: "rgba(0,0,0,.2)",
        strokeDashArray: 3,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },

      legend: {
        show: false,
      },
      fill: {
        colors: ["#26c6da", "#1e88e5"],
        opacity: 1,
      },
      tooltip: {
        theme: "dark",
      },
    };
    //this.getNombreParqueos();
    //this.getCantParqueos();
    this.getFechasParqueos();
    this.getDiasParqueos();
  }
 /* getNombreParqueos():void{
    this.parqueoVistaService.getNombreParqueos().pipe(
      tap(parqueos =>  {
      console.log('Nombre Parqueos: tap 3');
      parqueos.forEach(parqueo =>{
      console.log(parqueos.length);
      });
      }) 
      ).subscribe((parqueos: number[])=>{
        console.log(parqueos);
        this.rows2 =parqueos;
      })
  }*/
  getFechasParqueos():void{
    
    this.parqueoVistaService.getFechasParqueos().pipe(
      tap(parqueos =>  {
        console.log('Fechas Parqueos: tap 3');
        parqueos.forEach(parqueo =>{
        console.log(parqueo);
        });
      }) 
    ).subscribe(parqueos=>{
      this.rows3 = parqueos;
      console.log(this.rows3);
     this.chartOptions = {    
      series: [
            {
              name: "Cantidad",
              data: [],
            },
          ],
        chart: {
          type: "bar",
          fontFamily: "Poppins,sans-serif",
          height: 320,
        },
        grid: {
          borderColor: "rgba(0,0,0,.2)",
          strokeDashArray: 3,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "30%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: this.rows3,
        },
  
        legend: {
          show: false,
        },
        fill: {
          colors: ["#26c6da", "#1e88e5"],
          opacity: 1,
        },
        tooltip: {
          theme: "dark",
        },
      };
  })
}
    getDiasParqueos():void{
      //this.parqueoVistaService.getCantidadMesReservas().pipe(
      this.parqueoVistaService.getDiasParqueos().pipe(
        tap(parqueos =>  {
          console.log('Dias Parqueos: tap 3');
          parqueos.forEach(parqueo =>{
          console.log(parqueo);
          });
        }) 
      ).subscribe((parqueos: number[])=>{
        this.rows =parqueos;
        this.chartOptions = {
          series: [
            {
              name: "Cantidad",
              data: this.rows,
            },
          ],
          chart: {
            type: "bar",
            fontFamily: "Poppins,sans-serif",
            height: 320,
          },
          grid: {
            borderColor: "rgba(0,0,0,.2)",
            strokeDashArray: 3,
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "30%",
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
          },
          xaxis: {
            categories: this.rows3,
          },
    
          legend: {
            show: false,
          },
          fill: {
            colors: ["#26c6da", "#1e88e5"],
            opacity: 1,
          },
          tooltip: {
            theme: "dark",
          },
        };
      })
  
    
  }
 /* getParqueosO():void{
    this.parqueoVistaService.getParqueosO().pipe(
      tap((parqueos: ParqueoVista[])=>  {
        console.log('Cant Parqueos: tap 3');
        parqueos.forEach((parqueo: ParqueoVista) =>{
        console.log(parqueo.parqueoVistaCantidad);
        console.log(parqueo.parqueoVistaFecha);
        });
      }) 
    ).subscribe((parqueos: ParqueoVista[])=>{
      this.rows3 =parqueos;
      this.chartOptions = {
        series: [
          {
            name: "Cantidad",
            data: [1,2]
          },
          {
            name: "Parqueos",
            data: [this.rows3[0].parqueoVistaCantidad,this.rows3[0].parqueoVistaCantidad]
          },
        ],
        chart: {
          type: "bar",
          fontFamily: "Poppins,sans-serif",
          height: 320,
        },
        grid: {
          borderColor: "rgba(0,0,0,.2)",
          strokeDashArray: 3,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "30%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
  
        legend: {
          show: false,
        },
        fill: {
          colors: ["#26c6da", "#1e88e5"],
          opacity: 1,
        },
        tooltip: {
          theme: "dark",
        },
      };
    })

    
  }*/
  ngOnInit(): void {
   
  }
}
