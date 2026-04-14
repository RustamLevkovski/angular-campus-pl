import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  // Lesson 4 Disable Services and Routes. imports: [RouterModule.forRoot(routes)],
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}

