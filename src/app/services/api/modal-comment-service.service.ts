import { Injectable } from '@angular/core';
import { of, BehaviorSubject , Observable} from "rxjs";


interface OPEN {
  tipo: 'open'
}
interface CLOSE {
  tipo: 'close'
}
type Union = OPEN | CLOSE;

@Injectable({
  providedIn: 'root'
})


export class ModalCommentServiceService {

  //private display: BehaviorSubject<'open' | 'close'> =  new BehaviorSubject('close');
  public closeB: CLOSE = {tipo: 'close'};
  private display: BehaviorSubject<'open' | 'close'> =  new BehaviorSubject<'open' | 'close'>('close');

  public id: number = 0;
  public idPost: number = 0;
  

  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  constructor() { }

  open() {
    this.display.next('open');
  }

  close() {
    this.display.next('close');
  }


  

}
