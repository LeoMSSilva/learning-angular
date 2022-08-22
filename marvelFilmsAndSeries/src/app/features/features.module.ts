import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { DetailsModule } from './details/details.module';

export const featureModules = [
  HomeModule,
  DetailsModule
];

@NgModule({
  imports: [
    ...featureModules,
  ],
  exports: [
    ...featureModules,
  ]
})
export class FeaturesModule { }
