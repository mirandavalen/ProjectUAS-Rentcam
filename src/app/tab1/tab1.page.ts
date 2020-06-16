import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  slidebaru = {
    slidesPerView: 2.2
  }
  mhs = [
    {
      name: 'NIKON',
      url:'nikond850'
    },
    { name: 'SONY',
      url:'sonya7'
    },
    { name: 'CANON',
      url:'canon6000d' 
    }

  ]
  
  constructor(private router: Router) { 
  }
  pindah(item){
    console.log(item.url)

    this.router.navigate(['/'+item.url])
  }
 rent() {
 console.log('rent');
 this.router.navigate(['/canon']);
 }

  

}
