import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ReqResImages } from "@data/models/post";
import { environment } from "environments/environment";
import { of, BehaviorSubject } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  // PROPERTIES
  public url = environment.uri+'api/';
  public isProduction = environment.production;
  public spinner: BehaviorSubject< boolean > = new BehaviorSubject( false );

  // CONSTRUCTOR
  constructor(private http: HttpClient) {}

  // GET IMAGES USER
  public getImages(page: number) {
    const response = {error: false, msg: "",  data: null };
    return this.http.get<ReqResImages>(this.url + "posts/imagesAll/" + page).pipe(
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
