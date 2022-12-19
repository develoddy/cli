import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { of, BehaviorSubject } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ReqResFollowers, ResMessagesFollows } from "@data/models/post";

@Injectable({
    providedIn: "root",
})
export class FollowService {
    // PROPERTIES
    public url = environment.uri+'api/';
    public isProduction = environment.production;
    public spinner: BehaviorSubject<boolean> = new BehaviorSubject(false);

    // CONSTRUCTOR
    constructor(private http: HttpClient) {}

    /**
     * addFollow
     * @param follow
     * @returns
     */
    public addFollow(follow) {
        this.spinner.next(true);
        const response = { error: false, msg: "", data: null };
        let params = JSON.stringify(follow);
        
        return this.http.post(this.url + "follows/", params).pipe(
            tap(
                (r) => this.spinner.next(false),
                (error: any) => this.spinner.next(false)
            ),
            map((r) => {
                response.data = r;
                return response;
            })
        );
    }


    // DELETE FOLLOW
    public deleteFollow(id: number) {
        this.spinner.next(true);
        const response = { error: false, msg: "", data: null };
        return this.http.delete(this.url + "follows/" + id).pipe(
            tap(
                (r) => this.spinner.next(false),
                (error: any) => this.spinner.next(false)
            ),
            map((r) => {
                response.data = r;
                return response;
            })
        );
    }
    
    public getMyFollows() {
        const response = { error: false, msg: "", data: null };
        return this.http.get<ResMessagesFollows>(this.url + "follows/getMyfollows/true").pipe(
              map((r) => {
                    return (response.data = r);
              })
        );
    }

    // FOLLOWERS
    // "SEGUIDORES" ES EL TERMINO PARA LOS USUARIOS QUE TE SIGUEN.
    public getFollowers(page: number) {
        const response = {error: false, msg: "",  data: null };
        return this.http.get<ReqResFollowers>(this.url + "follows/followed/" + page).pipe(
            tap(
                ( r ) => this.spinner.next( false ),
                ( error: any ) => this.spinner.next( false )
            ),
            map( ( r ) => {
                response.data = r;
                return response;
            } )
        );
    }

    // FOLLOWINGS
    // "SIGUIENDO" ES EL TERMINO PARA LOS USUARIOS A LOS QUE SIGUES.
    public getFollowings(page: number) {
        const response = {error: false, msg: "",  data: null };
        return this.http.get<ReqResFollowers>(this.url + "follows/following/" + page).pipe(
            tap(
                ( r ) => this.spinner.next( false ),
                ( error: any ) => this.spinner.next( false )
            ),
            map( ( r ) => {
                response.data = r;
                return response;
            } )
        );
    }
}
