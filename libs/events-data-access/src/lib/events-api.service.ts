import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsApiService {
  private httpClient: HttpClient;

  constructor(httpClient:HttpClient) {
    this.httpClient = httpClient;
  }

  getAllEvents() {
    return this.httpClient.get('http://localhost:3333/api/events')
  }
}
