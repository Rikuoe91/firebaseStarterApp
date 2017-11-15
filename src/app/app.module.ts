import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {DataProvider} from '../providers/data/data';
// import { HomePage } from '../pages/home/home';

//import the firebase stuff here first
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {firebaseConfig} from './firebase.config';

@NgModule({
    declarations: [
        MyApp
        //   ,
        // HomePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        //then import these second in this section - have to import the firebase config data in the angularfiremodule.initializeApp
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule.enablePersistence()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        //  brings pages in before the page loads
        MyApp,
        // HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        DataProvider
    ]
})
export class AppModule {
}
