import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Config } from 'src/app/data/config';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpService, private config: Config) { }

  /**
   * 获得分类左边的导航条信息
   * @param successCallback 成功的回调
   * @param failCallback 失败的回调
   */
  public requestCategoryList(url: string, successCallback?: Function, failCallback?: Function) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    };

    this.http.get(this.config.apiUrl + url, httpOptions.headers).subscribe(
      (res: any) => {
        successCallback(res.data);
      }, (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  /**
   * 获得右边内容
   * @param url 请求地址
   * @param successCallback 成功的回调
   * @param failCallback 失败的回调
   */
  public requestCategoryData(url: string, successCallback?: Function, failCallback?: Function) {
    this.http.get(this.config.apiUrl + url).subscribe(
      (res: any) => {
        successCallback(res.data);
      }, (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

}
