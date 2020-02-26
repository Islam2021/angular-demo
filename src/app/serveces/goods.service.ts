import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fs: AngularFirestore) { }

  getAllGoods(): Observable<{}>  {
    return this.fs.collection('goods').snapshotChanges();
  }
}
