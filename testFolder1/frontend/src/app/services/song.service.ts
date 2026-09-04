import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Song {
  id?: number;
  title: string;
  artist: string;
}

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrl = 'http://localhost:8080/api/songs';

  constructor(private http: HttpClient) { }

  getSongs(sort?: string): Observable<Song[]> {
    let url = this.apiUrl;
    if (sort) {
      url += `?sort=${sort}`;
    }
    return this.http.get<Song[]>(url);
  }

  getSongById(id: number): Observable<Song> {
    return this.http.get<Song>(`${this.apiUrl}/${id}`);
  }

  createSong(song: Song): Observable<Song> {
    return this.http.post<Song>(this.apiUrl, song);
  }

  updateSong(id: number, song: Song): Observable<Song> {
    return this.http.put<Song>(`${this.apiUrl}/${id}`, song);
  }

  deleteSong(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
