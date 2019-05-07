import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact, Register, Login } from '../models/contacts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://127.0.0.1:8000';

  constructor(private httpClient: HttpClient) {}

  public register(register: Register){
    return this.httpClient.post(`${this.apiURL}/register/`,register);
  }

  public login(login: Login){
    return this.httpClient.post(`${this.apiURL}/login/`,login);
  }

  public createContact(contacts: Contact){
  	return this.httpClient.post(`${this.apiURL}/api/`,contacts);
  }

  public updateContact(contacts: Contact){
  	return this.httpClient.put(`${this.apiURL}/api/${contacts.id}/`, contacts);
  }

  public deleteContact(id: number){
  	return this.httpClient.delete(`${this.apiURL}/api/${id}/`);
  }

  public getContactById(id: number){

  	return this.httpClient.get(`${this.apiURL}/api/${id}/`);
  }

  public getContacts(){
    return this.httpClient.get<Contact[]>(`${this.apiURL}/api/`);
  }
}

