import { Component, OnInit } from '@angular/core';
import { IssueService } from './issue.service';
import { Issue } from './issue';


@Component({
  selector: 'my-app',
  template: `
  <h1>Hello Angular!</h1>
  <h2>My Issues</h2>
  <ul>
    <li *ngFor="let issue of issues">
      {{issue.name}}
    </li>
  </ul>
  `,
  providers: [IssueService]
})
export class AppComponent implements OnInit {
  issues: Issue[];

  constructor(private issueService: IssueService){ }

  getIssues(): void {
    this.issueService.getIssues().then(issues => this.issues = issues);
  }

  ngOnInit(): void {
    this.getIssues();
  }
}
