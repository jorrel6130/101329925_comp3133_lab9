import { Component } from "@angular/core";

@Component({
    selector: 'students',
    template: '<h2>{{ getTitle() }}</h2><br><h2>{{ getCurrentDate() }}</h2>'
})

export class StudentsComponent {
    title = "My List of Students";

    getTitle() {
        return this.title;
    }

    getCurrentDate() {
        return(`The current date is: ${new Date()}`);
    }
}