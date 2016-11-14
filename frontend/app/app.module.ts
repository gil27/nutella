import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { IssueService } from './issues/issue.service';

@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ IssueService ],
  declarations: [ AppComponent, IssuesComponent ],
  bootstrap:    [ AppComponent, IssuesComponent ]
})
export class AppModule { }
