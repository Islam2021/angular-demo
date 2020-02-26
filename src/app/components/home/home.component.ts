import { Component, OnInit } from '@angular/core';
import { Good } from 'src/app/interfaces/good.interfaces';
import { GoodsService } from './../../serveces/goods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Goods: Good[] = [];

  constructor(private gs: GoodsService) { }

  ngOnInit() {
    this.gs.getAllGoods().subscribe(data => {
      this.Goods = data.map((ele: any) => {
        return {
          id: ele.payload.doc.id,
          ...ele.payload.doc.data()
        }
      })
    });
  }

  addToCart(id) {
    console.log("added", id); 
  }

}
