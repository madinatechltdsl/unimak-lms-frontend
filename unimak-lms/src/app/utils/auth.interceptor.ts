import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from "rxjs";
import {environment} from "../../environments/environment";

const EXCLUDED_URLS = [
    `${environment.api.url}/user/login`,
    `${environment.api.url}/user/register`,
    `${environment.api.url}/user/resetpassword`
];

function isExcludedUrl1(url: string): boolean {
    return EXCLUDED_URLS.some(excludedUrl => url.includes(excludedUrl));
}
const EXCLUDED_URL_PATTERNS: RegExp[] = [
    /\/user\/login(\/.*)?$/,
    /\/user\/register(\/.*)?$/,
    /\/user\/resetpassword(\/.*)?$/
];

function isExcludedUrl(url: string): boolean {
    return EXCLUDED_URLS.some(excludedUrl => url.includes(excludedUrl)) ||
        EXCLUDED_URL_PATTERNS.some(pattern => pattern.test(url));
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const host = environment.api.url;
    const token = localStorage.getItem('token');

 /*
  const excludedUrlPatterns: RegExp[] = [
        /\/api\/login(\/.*)?$/,
        /\/api\/signup(\/.*)?$/,
        /\/api\/password-reset(\/.*)?$/,
    ];
    const isExcludedUrl = excludedUrlPatterns.some((pattern) => pattern.test(req.url));

    */

 /*   const excludedUrls = [`${host}`+'/user/login', `${host}`+'/user/register', `${host}`+'/user/resetpassword'];
    const isExcluded = excludedUrls.some(url => req.url.includes(url));
*/
 /*   if (isExcluded) {
        return next(req);
    }
    if (token) {
        req = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        });
    }

  return next(req).pipe(
      catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
          console.error('Unauthorized request:', error.message);
      } else if (error.status === 403) {
            console.error('Forbidden request:', error.message);
      }
      return throwError(() => error);
  }));*/


    if (isExcludedUrl(req.url)) {
        return next(req);
    }

    if (token) {
        req = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        });
    }

    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
                console.error('Unauthorized request:', error.message);
            } else if (error.status === 403) {
                console.error('Forbidden request:', error.message);
            }
            return throwError(() => error);
        }));
};
