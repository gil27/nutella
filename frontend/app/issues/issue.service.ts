import { Injectable } from '@angular/core';
import { Issue, ISSUES } from './issue'

@Injectable()
export class IssueService {
  getIssues(): Promise<Issue[]> {
    return Promise.resolve(ISSUES);
  }
}
