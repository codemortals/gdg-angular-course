import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public title = 'Welcome to our first App';
    public date: Date = new Date();
    public showContent = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    public toggleContent() {
        this.showContent = !this.showContent;
    }

}
