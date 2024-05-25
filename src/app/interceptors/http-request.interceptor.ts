import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

const CAT_API_KEY = 'live_p7wfyALZxgzrx3EY0EDl5KTY7XDzBBSn1GG7dCnS3VVBJ0PUvRkzwOXhFn1o0GV5';

export const httpRequestInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    headers: req.headers.append('x-api-key', CAT_API_KEY)
  })
  return next(modifiedReq);
};
