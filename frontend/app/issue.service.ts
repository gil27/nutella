import { Injectable } from '@angular/core';
import { Issue, ISSUES } from './issue'

@Injectable()
export class IssueService {
  getIssues(): Issue[] {
    return ISSUES;
  }
}
