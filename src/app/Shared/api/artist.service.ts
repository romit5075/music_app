import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ArtistService {

  constructor(public http: HttpClient) { }

  getArtists(): Observable<any> {
    const token = '846b44596e6a43b6a091b338ce844fd9';
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });

    return this.http.get('https://api.spotify.com/v1/playlists/', { headers: headers });
  }
}
