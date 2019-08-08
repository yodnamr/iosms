import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [{name: 'Nan', telephone: '66882372538', imageUrl: 'assets/imgs/friend1.jpg'},
                  {name: 'Jonh', telephone: '0894660533', imageUrl: 'assets/imgs/friend2.jpg'},
                  {name: 'Nena', telephone: '0870388294', imageUrl: 'assets/imgs/friend3.jpg'},
                  {name: 'Jenny', telephone: '089745689', imageUrl: 'assets/imgs/friend4.jpg'},
                  {name: 'Tom', telephone: '089745689', imageUrl: 'assets/imgs/friend5.jpg'}
                  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage", item);

  }

}//end class
