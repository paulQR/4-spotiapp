import{Component, OnInit} from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
})
export class HomeComponent implements OnInit {
    constructor( private http: HttpClient ){}

    ngOnInit(){

    }
}