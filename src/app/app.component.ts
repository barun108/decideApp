import { Component, OnInit } from '@angular/core';
import answersValues from './utils/answers.json';

export interface Errors {
    show: boolean;
    message: string;
}

export interface AppValues {
        visiblePanel: string;
        question: string;
        mode: boolean;
        answers: string[];
        custom: string[];
        answer: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    errors: Errors = {
        show: false,
        message: null
    };

    appValues: AppValues = {
        visiblePanel: 'one',
        question: '',
        mode: false,
        answers: answersValues.answers,
        custom: [],
        answer: null,
    };
    handleNext(values: AppValues) {
        this.appValues = values;
    }
    handleErrors(values: Errors) {
        const errorsCopy = this.errors;
        this.errors = {
            show: values.show,
            message: values.message
        };
    }


    ngOnInit() {
    }
}
