export type filmsAndSeriesPartial = {
  id: number;
  type: 'Filme'| "Série";
  title: string;
};

export type filmsAndSeriesComplete = filmsAndSeriesPartial & {
  releaseYear: string;
  happensInTheYear: string;
  description: string;
  image: string;
};
