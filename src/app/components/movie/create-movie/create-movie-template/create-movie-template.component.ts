import {Component} from '@angular/core';
import {Movie} from '../../../../model/movie.model';

@Component({
  selector: 'app-create-movie-template',
  templateUrl: 'create-movie-template.component.html',
  styleUrls: ['create-movie-template.component.css']
})
export class CreateMovieTemplateComponent {

  newMovie: Movie = {
    title: '',
    genre: '',
    id: 0
  };

  logForm(form) {
    console.log(form);
  }

}
