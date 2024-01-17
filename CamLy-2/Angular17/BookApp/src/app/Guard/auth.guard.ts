import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable} from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate{
  constructor(private authService: AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      return this.authService.isLoggedIn().pipe(
        take(1),
        map((isLoggedIn: boolean) => {
          if(!isLoggedIn){
            this.router.navigate(['/login']);
            return false;
          } 
          return true;
        })
      )
      //return false;
  }
}

