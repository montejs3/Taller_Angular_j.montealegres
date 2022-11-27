import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  promedio: number = 0;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
     this.promedio = this.getpromedio(series);
    });
  }

  getpromedio(series :Serie[]): number{
    let total: number =0;
    let conteo: number =0;
    series.forEach(value => {
      total += value.seasons;
      conteo +=1;
    }) ;
    total= total/conteo;
    return total;


    return 5;

  }



  ngOnInit() {
    this.getSeries();
  }

}
