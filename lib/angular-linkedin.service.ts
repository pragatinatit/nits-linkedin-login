import { Injectable } from '@angular/core';
@Injectable()
export class AngularLinkedInService {
    emptyTextDisplay: string = "empty";
    constructor() { }
    get(): string {
        return this.emptyTextDisplay;
    }
    set(emptyTextDisplay: string) {
        this.emptyTextDisplay = emptyTextDisplay;
    }

    login(IN)
    {
        return new Promise((resolve, reject) => {
            IN.User.authorize(callbackFunction, callbackScope);
            function callbackFunction(data)
            {
                resolve(data)
            }
            function callbackScope(error)
            {
                reject(error)
            }
        });
    }


}