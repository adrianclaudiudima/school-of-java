import {Injectable} from '@angular/core';
import {LoggerService} from './logger.service';
import {Movie} from '../model/movie.model';
import {HttpClient} from '@angular/common/http';
import {Observable, ReplaySubject} from 'rxjs';

export interface MoviePayload {

  status: string;
  payload: Array<Movie>;

}

@Injectable()
export class MovieService {

  listOfMovies: Array<Movie> = [];
  listOfMoviesSubject: ReplaySubject<Array<Movie>> = new ReplaySubject(1);
  listOfMoviesSubject$ = this.listOfMoviesSubject.asObservable();

  serverUrl = 'http://localhost:8080/movies/';

  constructor(private loggerService: LoggerService, private httpClient: HttpClient) {
  }

  public loadAllMoviesWithSubject() {
    this.httpClient.get<Array<Movie>>(this.serverUrl)
      .subscribe(
        value => {
          this.listOfMovies = value;
          this.listOfMoviesSubject.next(this.listOfMovies);
        },
        error1 => {
          this.listOfMovies = [];
          this.listOfMoviesSubject.next(this.listOfMovies);
        });
  }

  public createMovie(movie: Movie) {
    this.httpClient.post('URL', JSON.stringify(movie), {
      responseType: 'text',
      headers: {'content-type': 'application/json'}
    }).subscribe(value => {
      this.loadAllMoviesWithSubject();
    });
  }

  public loadAllMovies(): Observable<Array<Movie>> {
    this.loggerService.logMessage('Loading all movies ...');
    return this.httpClient.get<Array<Movie>>(this.serverUrl);
  }

  public removeMovie() {
    this.loggerService.logMessage('Removing movie ...');
  }


}
