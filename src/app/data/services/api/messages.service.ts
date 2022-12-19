import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Message } from "@data/models/message";
import { map, tap } from "rxjs/operators";
import { ResEmitMessages } from "@data/models/post";



@Injectable({
      providedIn: "root",
})
export class MessagesService {
      public url = environment.uri+'api/';
      public isProduction = environment.production;

      constructor(private http: HttpClient) {}

      addMessages(message) {
            const response = { error: false, msg: "", data: null };
            let params = JSON.stringify(message);
            return this.http.post<Message>(this.url + "messages/", params).pipe(
                  map((r) => {
                        return (response.data = r);
                  })
            );
      }

      getEmitMessages(page = 1) {
            const response = { error: false, msg: "", data: null };
            return this.http.get<ResEmitMessages>(this.url + "messages/emit/" + page).pipe(
                  map((r) => {
                        return (response.data = r);
                  })
            );
      }

      getMyMessages(page = 1) {
            const response = { error: false, msg: "", data: null };
            return this.http.get<ResEmitMessages>(this.url + "messages/mymessages/" + page).pipe(
                  map((r) => {
                        return (response.data = r);
                  })
            );
      }
}
