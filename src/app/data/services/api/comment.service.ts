import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentPost } from '@data/models/post';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from "rxjs";
import { map} from "rxjs/operators";
//import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  // Properties

  public url = environment.uri;

  public isProduction = environment.production;

  private loadingSubject = new BehaviorSubject<boolean>(false);

  loading$:Observable<boolean> = this.loadingSubject.asObservable();

  //public message$: BehaviorSubject<any> = new BehaviorSubject('');

  //private socket: any;

  // Constructor
  constructor( private http: HttpClient) { 
    // this.socket = io.connect(this.url );
  }

  public createComment( comment: CommentPost ) {
    const response = { error: false, msg: "", data: null };
    let params = JSON.stringify(comment);
    return this.http.post<CommentPost>(this.url + "api/comments/create/", params).pipe(
          map( ( r ) => {
                response.data = r;
                return response;
          })
    );
  }

  public deleteComment( id: number ) {
    const response = { error: false, msg: "", data: null };
    return this.http.delete(this.url + "api/comments/delete/" + id).pipe(
          map( ( r ) => {
                response.data = r;
                return response;
          })
    );
  }  

  public paginateComment( postId: number, page: number ) {
    const response = { error: false, msg: "", data: null };
    return this.http.get(this.url + "api/comments/read/" + postId + '/' + page).pipe(
          map( ( r ) => {
                response.data = r;
                return response;
          })
    );
  }




}
