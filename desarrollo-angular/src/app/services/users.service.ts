import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class UsersService {
    private baseAPI = "https://fakestoreapi.com/users"

    constructor(private http: HttpClient) { }

    getUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.baseAPI)
    }

    addUser(user: any): Observable<any> {
        return this.http.post<any>(this.baseAPI, user)
    }
}