import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpService) { }

  /**
   * 获得分类左边的导航条信息
   * @param successCallback 成功的回调
   * @param failCallback 失败的回调
   */
  public requestLeftData(successCallback?: Function, failCallback?: Function) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    };

    this.http.get('http://jd.itying.com/api/pcate', httpOptions.headers).subscribe(
      (res: any) => {
        successCallback(res.result);
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
  public requestRightData(url: string, successCallback?: Function, failCallback?: Function) {
    this.http.get(url).subscribe(
      (res: any) => {
        successCallback(res.result);
      }, (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

}
