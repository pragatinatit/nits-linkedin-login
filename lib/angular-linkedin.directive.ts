import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { AngularLinkedInService } from './angular-linkedin.service';
import { BehaviorSubject } from 'rxjs';
declare var IN: any;
@Directive({ selector: '[angularlinked]' })
export class AngularLinkedInDirective {
    url: '//platform.linkedin.com/in.js';
    userDetails = new BehaviorSubject([]);
    constructor(private el: ElementRef,
        private empservice: AngularLinkedInService) {


    }

    // ngAfterViewInit() {
    //     let content: string = this.el.nativeElement.innerHTML;
    //     if (!content) {//if there is no content,show message getting from AngularLinkedInService
    //         this.el.nativeElement.innerHTML = this.empservice.get();
    //     }
    // }

    loadLinkEdinScript(key) {
        const that = this;
        var script = document.createElement("script");
        script.src = this.url;
        script.text = "api_key:" + key
        script.onload = function () {
            IN.Event.on(IN, "auth", getProfileData);
            function getProfileData() {
                IN.API.Profile("me").fields("id", "first-name", "last-name", "headline", "location", "picture-url", "public-profile-url", "email-address").result(displayProfileData).error(onError);
            }

            function displayProfileData(data) {
                const user = data.values[0];
                const userArray = [];
                userArray.push(user);
                that.userDetails.next(userArray)
            }
            function onError(error)
            {
                console.log("Error", error);
            }
        }

        document.body.appendChild(script);
        //document.body.appendChild(document.createElement("script")).src = this.url;
    }

    login() {


        this.userDetails.subscribe((res) => {
            if (res) {
                console.log("linkedInDetails", res);
            }
        }, (error) => {
            console.log(error);
        })
        this.empservice.login(IN).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }


    initLinkedIn(key) {
        this.loadLinkEdinScript(key);
    }
}