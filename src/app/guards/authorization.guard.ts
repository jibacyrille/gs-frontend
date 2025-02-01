import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable()
export class AuthorizationGuard {
  constructor(private autheService : AuthService,
              private router: Router
             ){

  }
   canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot):MaybeAsync<GuardResult>{
      if(this.autheService.isAuthenticated){
        let requiresRoles=route.data['roles']
        let userRoles = this.autheService.roles;
        for(let role of userRoles){
          if(requiresRoles.includes(role)){
            return true;
          } 
        }
        return false;
      } else {
        this.router.navigateByUrl("/login");
        return false;
      }
    }
  
};
