import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { HttpModule }        from '@angular/http';

import { AppComponent }      from './app.component';
import { IssuesComponent }   from './issues/issues.component';
import { IssueService }      from './issues/issue.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  providers:    [ IssueService ],
  declarations: [ AppComponent, IssuesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
