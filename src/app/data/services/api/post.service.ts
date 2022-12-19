import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResPostImages, ReqResPosts } from "@data/models/post";
import { environment } from "environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
//import * as io from 'socket.io-client';

@Injectable({
      providedIn: "root",
})

export class PostService {

      // Properties

      public url = environment.uri;

      public isProduction = environment.production;

      private loadingSubject = new BehaviorSubject<boolean>(false);

      loading$:Observable<boolean> = this.loadingSubject.asObservable();

      // Sockets
      //public data$: BehaviorSubject<any> = new BehaviorSubject('');

      //private socket: any;

      // Constructor
      constructor( private http: HttpClient ) {
      }

      /**
       * addPost
       * @param post Object
       */
      public addPost(post) {
            this.loadingSubject.next(true);
            const response = { error: false, msg: "", data: null };
            let params = JSON.stringify(post);
            return this.http.post(this.url + "posts", params).pipe(
                  tap(
                        (resp) => this.loadingSubject.next(false),
                        (error: any) => this.loadingSubject.next(false)
                  ),
                  map((r) => {
                        response.data = r;
                        return response;
                  })
            );
      }

      /**
       * getPosts
       * @param page
       * @returns
       */
      public getPosts( page = 0 ) {
            const response = { error: false, msg: "", data: null };
            return this.http.get<ReqResPosts>(this.url + "api/posts/" + page)
            .pipe(
                  map((r) => {
                        response.data = r;
                        return response;
                  })
            );
      }


      /**
       * getPosts
       * @param page
       * @returns
       */
       public getPostsUser( user_id:number, page = 0 ) {
            const response = { error: false, msg: "", data: null };
            return this.http.get<ReqResPosts>( this.url + "api/posts/user/" + user_id + '/' + page ).pipe(
                  map((r) => {
                        response.data = r;
                        return response;
                  })
            );
      }

      /**
       * getPosts
       * @param page
       * @returns
       */
       public getPostUser( post_id:number) {
            this.loadingSubject.next(true);
            
            const response = { error: false, msg: "", data: null };
            
            return this.http.get( this.url + "api/posts/one/" + post_id).pipe(
                  tap(
                        (resp) => this.loadingSubject.next(false),
                        (error: any) => this.loadingSubject.next(false)
                  ),
                  map((r) => {
                        response.data = r;
                        return response;
                  })
            );
      }



      /**
       * deletePost
       * @param id
       * @returns
       */
      public deletePost(id: number) {
            const response = { error: false, msg: "", data: null };
            return this.http.get(this.url + "api/api/posts/" + id).pipe(
                  map((r) => {
                        response.data = r;
                        return response;
                  })
            );
      }


}
