import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { FilmsAndSeriesService } from 'src/app/shared/services/filmsAndSeries/films-and-series.service';
import { filmsAndSeriesComplete } from 'src/app/shared/types/filmsAndSeries-types';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  marvel!: filmsAndSeriesComplete;

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmsAndSeriesService: FilmsAndSeriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = Number(params['id']);
      this.filmsAndSeriesService
        .getMarvelById(id)
        .pipe(take(1))
        .subscribe((data) => (this.marvel = data));
    });
  }
}
