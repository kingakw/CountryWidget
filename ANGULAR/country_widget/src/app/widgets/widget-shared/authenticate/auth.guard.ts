import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";

import { AuthService } from "./auth.service";

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): UrlTree | boolean => {
  const router = inject(Router);
  const isAdminAuth = inject(AuthService).isAdminAvailable();
  return isAdminAuth? true : router.createUrlTree(['']);
};

