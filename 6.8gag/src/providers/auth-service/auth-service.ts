import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
// Do not import from 'firebase' as you'll lose the tree shaking benefits
import * as firebase from 'firebase/app';

import { Platform } from 'ionic-angular';
// import { Facebook } from 'ionic-native';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Injectable()
export class AuthService {
  displayName;

    constructor(private afAuth: AngularFireAuth, private fb: Facebook, private platform: Platform) {
      afAuth.authState.subscribe((user: firebase.User) => {
        if (!user) {
          this.displayName = null;
          return;
        }
        this.displayName = user.displayName;
      });
    }

    signInWithFacebook() {
      if (this.platform.is('cordova')) {
        return this.fb.login(['email', 'public_profile']).then(res => {
          const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
          return firebase.auth().signInWithCredential(facebookCredential);
        })
      }
      else {
        return this.afAuth.auth
          .signInWithPopup(new firebase.auth.FacebookAuthProvider())
          .then(res => console.log(res));
      }
    }

    signOut() {
      this.afAuth.auth.signOut();
    }

}
