import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AfService} from "../providers/af.service";
import {map, take, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SubscriberGuard implements CanActivate  {
  constructor(private af: AfService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.af.user$.pipe(
      take(1),
      map(user => user && user.roles.subscriber ? true : false),
      tap ( isadmin => {
        if (!isadmin ) {
          console.error('Access Denied: Subscriber allowed');
        }
      })
    );
  }
}
