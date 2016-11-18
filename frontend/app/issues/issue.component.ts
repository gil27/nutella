import { Component, Input } from '@angular/core';

import { Issue } from './issue';

@Component({
  moduleId: module.id,
  selector: 'my-issue',
  templateUrl: 'issue.component.html'
})
export class IssueComponent {
  @Input() issue: Issue;
  body = "sasa"
}
