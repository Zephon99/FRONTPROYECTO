import { Component, ViewChild } from "@angular/core";
import { ParqueoVistaService } from "../parqueoVistaService";
import {tap} from 'rxjs/operators';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexResponsive,
} from "ng-apexcharts";

export interface VisitorChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  colors: string[];
  stroke: any;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
}

@Component({
  selector: "app-our-visiter",
  templateUrl: "./our-visiter.component.html"
})
export class OurVisiterComponent {
  rows2: number[] = [
  ];
  rows3: string[] = [
  ];
  @ViewChild("visitor-chart") chart2: ChartComponent = Object.create(null);
  public VisitorChartOptions: Partial<VisitorChartOptions>;

  constructor(private parqueoVistaService:ParqueoVistaService) {
    this.VisitorChartOptions = {
      series: [45, 15, 27, 18],
      chart: {
        type: "donut",
        fontFamily: "Poppins,sans-serif",
        height: 253,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "80px",
          },
        },
      },
      tooltip: {
        fillSeriesColor: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      legend: {
        show: false,
      },
      labels: ["Mobile", "Tablet", "Desktop", "Other"],
      colors: ["#1e88e5", "#26c6da", "#745af2", "#eceff1"],
      responsive: [
        {
          breakpoint: 767,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    };
    this.getParqueosReservas();
    this.getCantidadReservas();
  }
  getParqueosReservas():void{
    this.parqueoVistaService.getParqueosReservas().pipe(
      tap(parqueos =>  {
        console.log(' Parqueos Reserva: tap 3');
        parqueos.forEach(parqueo =>{
        console.log(parqueo);
        });
      }) 
    ).subscribe(parqueos=>{
      this.rows3 = parqueos;
      console.log(this.rows3);
      this.VisitorChartOptions = {
        series: [],
        chart: {
          type: "donut",
          fontFamily: "Poppins,sans-serif",
          height: 253,
        },
        plotOptions: {
          pie: {
            donut: {
              size: "80px",
            },
          },
        },
        tooltip: {
          fillSeriesColor: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 0,
        },
        legend: {
          show: false,
        },
        labels: this.rows3,
        colors: ["#1e88e5", "#26c6da", "#745af2", "#eceff1"],
        responsive: [
          {
            breakpoint: 767,
            options: {
              chart: {
                width: 200,
              },
            },
          },
        ],
      };
  })
}
getCantidadReservas():void{
  this.parqueoVistaService.getCantidadReservas().pipe(
    tap(parqueos =>  {
      console.log('Cantidad Reservas: tap 3');
      parqueos.forEach(parqueo =>{
      console.log(parqueo);
      });
    }) 
  ).subscribe(parqueos=>{
    this.rows2 = parqueos;
    console.log(this.rows2);
    this.VisitorChartOptions = {
      series: this.rows2,
      chart: {
        type: "donut",
        fontFamily: "Poppins,sans-serif",
        height: 253,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "80px",
          },
        },
      },
      tooltip: {
        fillSeriesColor: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      legend: {
        show: false,
      },
      labels: this.rows3,
      colors: ["#1e88e5", "#26c6da", "#745af2", "#eceff1"],
      responsive: [
        {
          breakpoint: 767,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    };
  })
}
  ngOnInit(): void {}
}
