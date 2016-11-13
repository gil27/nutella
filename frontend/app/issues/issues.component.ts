import { Component, OnInit } from '@angular/core';
import { IssueService } from './issue.service';
import { Issue } from './issue';

@Component({
  selector: 'my-issues',
  template: `
  <h2>My Issues</h2>
  <ul>
    <li *ngFor="let issue of issues">
      {{issue.name}}
    </li>
  </ul>
  `
})
export class IssuesComponent implements OnInit {
  issues: Issue[];

  constructor(private issueService: IssueService){ }

  getIssues(): void {
    this.issueService.getIssues().then(issues => this.issues = issues);
  }

  ngOnInit(): void {
    this.getIssues();
  }
}
