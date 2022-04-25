import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'seyma-angular-ders';

  age = 23;

  ngOnInit(): void {
    console.log('seyma');
    if (this.age > 30) {
      console.log("seyma 23 yaşından büyük!");
    } 
    
    else {
      console.log("seyma 23 yaşından küçük!");
    }

  }
}
