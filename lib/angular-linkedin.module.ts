import { NgModule, } from '@angular/core';
import { AngularLinkedInDirective } from './angular-linkedin.directive';
import { AngularLinkedInService } from './angular-linkedin.service';
@NgModule({
    imports: [],
    exports: [AngularLinkedInDirective],
    declarations: [AngularLinkedInDirective],
    providers: [AngularLinkedInService],
})
export class AngularLinkedInModule { }