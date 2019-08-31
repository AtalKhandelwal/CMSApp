import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable, of} from 'rxjs';
import * as firebase from 'firebase/app';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import {Roles, User} from './user';


@Injectable({
  providedIn: 'root'
})
export class AfService {
  user$: Observable<User>;
  constructor( public afAuth: AngularFireAuth,
               public afs: AngularFirestore) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
    loginWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then((credential) => {
        this.updateUser(credential.user);
      });
    }
  updateUser(user) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc<User>(`users/${user.uid}`);
      const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      roles: {
        subscriber: true,
        admin: true
      }
    };
      return userRef.set(data, {merge: true});
      console.log(user.email);
  }
    logout() {
      this.afAuth.auth.signOut();
    }
}
