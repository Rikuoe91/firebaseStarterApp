
import { Injectable } from '@angular/core';


import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
    speakersListReference:AngularFirestoreCollection<>;
    speakerList:Observable<speakers[]>;
    lists: any;
  constructor( private afs:AngularFirestore) {
    // console.log('Hello DataProvider Provider');
      this.speakersListReference = this.afs.collection('speakers');
      this.speakerList = this.speakersListReference.valueChanges();
  }

}
