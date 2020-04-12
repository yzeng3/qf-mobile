import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MyConfig } from 'src/app/data/config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    })
  };

  constructor(private http: HttpService, private config: MyConfig) { }

  // tslint:disable-next-line: ban-types
  public login(url: string, data: Object, successCallback?: Function, failCallback?: Function) {
    this.http.postForm(this.config.apiUrl + url, data, this.httpOptions.headers)
      .subscribe((res: any) => {
        if (res.code === 2) { // 如果是普通用户
          // 登录成功, 获取data存入localStorage
          const userInfo = res.data;
          window.localStorage.setItem('username', userInfo.username);
          window.localStorage.setItem('user_id', userInfo.user_id);
          window.localStorage.setItem('token', userInfo.token);
          window.localStorage.setItem('nickname', userInfo.nickname);
          successCallback();
        } else {
          failCallback(res);
        }
      }, (err: HttpErrorResponse) => {
        failCallback(err);
      });
  }

  // 校验用户名是否存在
  public checkUser(url: string, data: any, successCallback?: Function, failCallback?: Function) {
    this.http.get(this.config.apiUrl + url, this.httpOptions.headers, data).subscribe(
      (res: any) => {
        successCallback(res);
      }, (err: HttpErrorResponse) => {
        failCallback(err);
      }
    );
  }

  // 注册用户
  // tslint:disable-next-line: ban-types
  public register(url: string, body: any, successCallback?: Function, failCallback?: Function) {
    this.http.post(this.config.apiUrl + url, body, this.httpOptions.headers).subscribe(
      (res: any) => {
        successCallback(res);
      }, (err: HttpErrorResponse) => {
        failCallback(err);
      }
    );
  }
}
