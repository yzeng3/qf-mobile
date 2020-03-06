import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MyConfig } from 'src/app/data/config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpService, private config: MyConfig) { }

  // tslint:disable-next-line: ban-types
  public login(url: string, data: Object, successCallback?: Function, failCallback?: Function) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    };

    this.http.postForm(this.config.apiUrl + url, data, httpOptions.headers)
      .subscribe((res: any) => {
        if (res.code === 2) { // 如果是普通用户
          // 登录成功, 获取data存入localStorage
          const userInfo = res.data;
          window.localStorage.setItem('username', userInfo.username);
          window.localStorage.setItem('user_id', userInfo.user_id);
          window.localStorage.setItem('token', userInfo.token);
          successCallback();
        } else {
          failCallback(res);
        }
      }, (err: HttpErrorResponse) => {
        failCallback(err);
      });
  }
}
