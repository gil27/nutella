import { Component, OnInit } from '@angular/core';
import { IssueService } from './issue.service';
import { Issue } from './issue';

@Component({
  selector: 'my-issues',
  template: `
  <div class="l-content">
    <div class="pricing-tables pure-g">
      <div *ngFor="let issue of issues" class="pure-u-1 pure-u-md-1-3">
        <div class="pricing-table pricing-table-{{issue.status}}">
          <div class="pricing-table-header">
            <h2>{{issue.name}}</h2>
            <span class="pricing-table-price">
              <i class="fa fa-life-ring" aria-hidden="true"></i><span>{{issue.created_at}}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
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
}
