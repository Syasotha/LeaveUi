import { Component, OnInit } from '@angular/core';
import { InteractionService } from './UIService/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LeaveMS'
  userName: string;
  isLogedIn = false;
  constructor(private interaction: InteractionService) {

  }

  ngOnInit() {
    this.interaction.isLogedin$.subscribe(data => {
      if (data != null) {
        this.isLogedIn = data;
        console.log(data);
      }

    });
    
  }
}
