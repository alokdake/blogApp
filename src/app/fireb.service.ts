import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebService {
  constructor(
    public auth: AngularFireAuth,
    public fireStore: AngularFirestore
  ) {}
  userRegistration(data: any) {
    return this.auth.createUserWithEmailAndPassword(data.email, data.password);
  }

  saveUserDetails(data: any) {
    console.log(data.uid);
    return this.fireStore.collection('registeredU').doc(data.uid).set(data);
  }

  loginWithEmail(data: any) {
    return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }

  getDetails(data: any) {
    console.log(data);
    return this.fireStore
      .collection('registeredU')
      .doc(data.uid)
      .valueChanges();
  }
}
