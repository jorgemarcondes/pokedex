import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Pokemon} from '../models/pokemon';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Pokemons} from '../models/pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {
  }

  getPokemons(offset = 24) {
    return this.http.get<Pokemons>(`${this.baseUrl}pokemon/?limit=24&offset=${offset}`);
  }

  getPokemon(id: string | number) {
    return this.http.get<Pokemon>(`${this.baseUrl}pokemon/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
