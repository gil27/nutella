import { Component, OnInit } from '@angular/core';
import { IssueService } from './issue.service';
import { Issue } from './issue';

@Component({
  moduleId: module.id,
  selector: 'my-issues',
  templateUrl: 'issues.component.html'
})
export class IssuesComponent implements OnInit {
  issues: Issue[];

  constructor(private issueService: IssueService){ }

  getIssues(): void {
    this.issueService
        .getIssues()
        .then(issues => this.issues = issues);
  }

  ngOnInit(): void {
    this.getIssues();
  }

  show(issue: Issue ) {
    //console.log(issue);
   
  }
}
