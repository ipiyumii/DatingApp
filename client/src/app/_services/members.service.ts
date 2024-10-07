import { PaginatedResult } from './../_models/pagination';
import { Member } from './../_models/member';
import { HttpClient, HttpParams} from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserParams } from '../_models/userParams';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private http = inject(HttpClient); // for make HTTP requests.
  baseUrl = environment.apiUrl;
  members = signal<Member[]>([]);
  paginatedResult = signal<PaginatedResult<Member[]> | null>(null);

  getMembers(userParams: UserParams) {
    let params = this.setPaginationHeaders(userParams.pageNumber, userParams.pageSize);

    params = params.append('minAge', userParams.minAge);
    params = params.append('maxAge', userParams.maxAge);
    params  = params.append('gender', userParams.gender);
    params = params.append('orderBy',userParams.orderBy);

    return this.http.get<Member[]>(this.baseUrl + 'users', {observe: 'response', params}).subscribe({
      next: response => {
        this.paginatedResult.set({
          itmes: response.body as Member[],
          pagination: JSON.parse(response.headers.get('pagination')!) //Extract pagination info from the HTTP headers //Parses the pagination data(in JSON) into an object.
        })
      }
    });
  }

  private setPaginationHeaders(pageNumber: number, pageSize: number) {
    let params = new HttpParams; //A class used to create URL parameters to append to the API request

    if(pageNumber && pageSize) {
      params = params.append('pageNumber',pageNumber); // Adds the parameter to the URL.
      params = params.append('pageSize', pageSize);
    }

    return params;
  }

  getMember(username: string) {
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }

  updateMember(member : Member) {
    return this.http.put(this.baseUrl + 'users', member);
  }

  setMainPhoto(photoId: number) {
    return this.http.put(this.baseUrl + 'users/set-main-photo/' + photoId, {})
  }

  deletePhoto(photoId : number) {
    return this.http.delete(this.baseUrl + 'users/delete-photo/' + photoId);
  }
}
