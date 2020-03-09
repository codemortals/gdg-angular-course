import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    public title = 'Welcome to our first App';
    public date: Date = new Date();
    public showContent = false;

    public toggleContent() {
        this.showContent = !this.showContent;
    }

}
