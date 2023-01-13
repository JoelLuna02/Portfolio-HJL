import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { Router, NavigationStart, NavigationEnd, Event } from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private spinner: NgxSpinnerService, private router: Router) {}

    ngOnInit() {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                this.spinner.show();
            }
            if (event instanceof NavigationEnd) {
                this.spinner.hide();
            }
        })
    }
}
