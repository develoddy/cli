import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, tap } from "rxjs/operators";

@Injectable({
      providedIn: "root",
})
export class UploadService {
      public url = environment.uri+'api/';
      public isProduction = environment.production;

      constructor(private http: HttpClient) {}

      /**
       * makeFileRequest
       * @param url
       * @param params
       * @param files
       * @param name
       */
      makeFileRequest(
            url: string,
            params: Array<string>,
            files: Array<File>,
            token: string,
            name: string
      ) {
            return new Promise(function (resolve, reject) {
                  var formData: any = new FormData();
                  var xhr = new XMLHttpRequest();

                  for (let i = 0; i < files.length; i++) {
                        formData.append(name, files[i], files[i].name);
                  }

                  xhr.onreadystatechange = function () {
                        if ( xhr.readyState == 4 ) {
                              if (xhr.status == 200) {
                                    resolve(JSON.parse(xhr.response));
                              }
                        } 
                  }

                  xhr.open('POST', url, true);
                  xhr.setRequestHeader('Authorization', `Bearer ${token}`);
                  xhr.send(formData);
            });
      }
}
