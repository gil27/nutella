import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Issue } from './issue';


@Injectable()
export class IssueService {
  private issuesUrl = 'http://localhost:3001/issues.json';

  constructor(private http: Http) { }

  getIssues(): Promise<Issue[]> {
    return this.http.get(this.issuesUrl)
               .toPromise()
               .then(response => response.json() as Issue[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
