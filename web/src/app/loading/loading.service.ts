import { Injectable } from "@angular/core";
import { BehaviorSubject, concatMap, finalize, Observable, of, tap } from "rxjs";

@Injectable()
export class LoadingService {

    private loadingSubject = new BehaviorSubject<boolean>(false);
    loading$ = this.loadingSubject.asObservable();

    loadingOnUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
        return of(null).pipe(
            tap(() => this.loadingOn()),
            concatMap(() => obs$),
            finalize(() => this.loadingOff()));
    }

    loadingOn = () => this.loadingSubject.next(true);

    loadingOff = () => this.loadingSubject.next(false);

}