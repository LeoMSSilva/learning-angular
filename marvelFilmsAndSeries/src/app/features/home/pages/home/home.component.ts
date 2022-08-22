import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { FilmsAndSeriesService } from 'src/app/shared/services/filmsAndSeries/films-and-series.service';
import { filmsAndSeriesPartial } from 'src/app/shared/types/filmsAndSeries-types';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string = 'Linha do tempo de Filmes e Series';
  marvels!: filmsAndSeriesPartial[];

  constructor(
    private router: Router,
    private filmsAndSeriesService: FilmsAndSeriesService
  ) {}

  ngOnInit(): void {
    this.filmsAndSeriesService
      .getMarvels()
      .pipe(take(1))
      .subscribe((data) => (this.marvels = data));
  }

  navigateDetails(id: number) {
    this.router.navigateByUrl(`details/${id}`);
  }
}
