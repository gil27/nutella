import { Component } from '@angular/core';
import { IssueService } from './issue.service';


@Component({
  selector: 'my-app',
  template: `
  <h1>Hello Angular!</h1>
  <h2>My Issues</h2>
  <ul class="heroes">
    <li *ngFor="let issue of issues">
      {{issue.name}}
    </li>
  </ul>
  `,
  providers: [IssueService]
})
export class AppComponent {
  constructor(private issueService: IssueService) { }
  issues = this.issueService.getIssues();
}
