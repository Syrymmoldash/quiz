import {Injectable} from '@angular/core';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import {IPost, IUser} from './models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  constructor(http: HttpClient) {
    super(http);
  }

  getTaskLists(): Promise<IUser[]> {
    return this.get('http://127.0.0.1:8000/api/post', {});
  }



}