import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from "environments/environment";
import { HttpClient } from "@angular/common/http";
import {  map } from "rxjs/operators";
//import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class ChatService {

  /*public url = environment.uri;
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  private socket: any;

  constructor(private http: HttpClient) {
    this.socket = io.connect(this.url );
    
  }

  public sendMessage(message) {
    this.socket.emit('cliente:message', message);
  }

  public getNewMessage = () => {
    this.socket.on('server:message', (message) =>{
      this.message$.next(message);
    });
    return this.message$.asObservable();
  };*/
}