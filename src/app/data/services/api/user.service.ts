import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {  map, tap } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "environments/environment";
import { of, BehaviorSubject } from "rxjs";
//import { Profile, ResProfileFollowOne, User } from "@data/models/user";
import { ResUF__, User } from "@data/models/post"; 

@Injectable({
      providedIn: "root",
})
export class UserService {
      
      public url = environment.uri+'api/';
      public isProduction = environment.production;
      public spinner: BehaviorSubject<boolean> = new BehaviorSubject(false);
      public stats;

      // CONSTRUCTOR
      constructor(private http: HttpClient) {}

      /**
       * Login
       * @param id number
       * @returns ICardUser
       */
      updateUser(user: User) {
            this.spinner.next(true);
            const response = { error: false, msg: "", data: null };
            let params = JSON.stringify(user);
            return this.http.put(this.url + "users/" + user.id, params).pipe(
                  tap(
                        (r) => this.spinner.next(false),
                        (error: any) => this.spinner.next(false)
                  ),
                  map((r) => {
                        return (response.data = r);
                  })
            );
      }

      /**
       * getCounters
       */
      public getCounters(userId: number = null) {
            const response = { error: false, msg: "", data: null };
            if (userId != null) {
                  return this.http
                        .get(this.url + "users/counters/one/" + userId)
                        .pipe(
                              map((r) => {
                                    return (response.data = r);
                              })
                        );
            } else {
                  return this.http.get(this.url + "users/counters/one/").pipe(
                        map((r) => {
                              return (response.data = r);
                        })
                  );
            }
      }

      /**
       * getStats
       */
      public getStats() {
            let stats = JSON.parse(localStorage.getItem("stats"));
            if (stats != "undefined") {
                  this.stats = stats;
            } else {
                  this.stats = null;
            }
            return this.stats;
      }

      /**
       * Get all user from api
       * @returns ICardUser[]
       */
      getAllUsers(page = null) {
            this.spinner.next(true);
            const response = { error: false, msg: "", data: null };
            return this.http.get(this.url + "users/" + page).pipe(
                  tap(
                        (resp) => this.spinner.next(false),
                        (error: any) => this.spinner.next(false)
                  ),
                  map((r) => {
                        response.data = r;
                        return response;
                  })
            );
      }

      /**
       * Get one user by id
       * @param id number
       * @returns ICardUser
       */
      getUserById(id: number): Observable<{
            error: boolean;
            msg: string;
            data: ResUF__;
      }> {
            this.spinner.next(true);
            const response = { error: false, msg: "", data: null };
            return this.http.get<ResUF__>(this.url + "users/one/" + id).pipe(
                  tap(
                        (resp) => this.spinner.next(false),
                        (error: any) => this.spinner.next(false)
                  ),
                  map((r) => {
                        response.data = r;
                        return response;
                  })
            );
      }

      // ERROR API
      error(error: HttpErrorResponse) {
            let errorMessage = "";
            if (error.error instanceof ErrorEvent) {
                  errorMessage = error.error.message;
            } else {
                  //errorMessage = `Error code: ${error.status} \n Message:_${error.message}`;
                  errorMessage = `Error code: ${error.status}`;
            }
            return of({ error: true, msg: errorMessage, data: null });
      }
}
