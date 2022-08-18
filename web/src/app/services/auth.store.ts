import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { GuestUser, User } from "../model/user";

const AUTH_DATA = "auth_data";

@Injectable({ providedIn: 'root' })
export class AuthStorage {

    private subject = new BehaviorSubject<User>(GuestUser);
    user$ = this.subject.asObservable();
    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;

    constructor() {
        this.isLoggedIn$ = this.user$.pipe(map(user => user.id !== 0));
        this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn))

        const user = localStorage.getItem(AUTH_DATA);
        if (user) {
            this.subject.next(JSON.parse(user));
        }
    }

    login(email: string, password: string): Observable<User> {
        console.log(`Login as ${email}`);
        const user = { ...GuestUser, id: 1, email: email }
        this.subject.next(user);
        localStorage.setItem(AUTH_DATA, JSON.stringify(user))
        return this.user$;
    }

    logout(): void {
        this.subject.next(GuestUser);
        localStorage.removeItem(AUTH_DATA);
    }
}