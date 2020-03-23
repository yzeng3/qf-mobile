import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { MyConfig } from 'src/app/data/config';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    })
  };

  constructor(private http: HttpService, private config: MyConfig) { }

  /**
   * 传递设计稿参数给服务器，存储至数据库
   */
  public postModelData(url: string, body: any, successCallback?: Function, failCallback?: Function) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    };

    this.http.post(this.config.apiUrl + url, body, httpOptions.headers).subscribe(
      (res: any) => {
        successCallback(res);
      }, (err: HttpErrorResponse) => {
        failCallback(err);
      }
    );
  }

  /**
   * 得到登录用户的所有设计稿数据
   */
  public getModelData(url: string, data: any, successCallback?: Function, failCallback?: Function) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    };

    this.http.get(this.config.apiUrl + url, httpOptions.headers, data).subscribe(
      (res: any) => {
        successCallback(res);
      }, (err: HttpErrorResponse) => {
        failCallback(err);
      }
    );
  }

  /**
   * 通过ID获取某个设计稿的详细数据
   */
  public getModelById(url: string, data: any, successCallback?: Function, failCallback?: Function) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    };

    this.http.get(this.config.apiUrl + url, httpOptions.headers, data).subscribe(
      (res: any) => {
        successCallback(res);
      }, (err: HttpErrorResponse) => {
        failCallback(err);
      }
    );
  }

  /**
   * 根据ID删除设计稿
   */
  public deleteModelById(url: string, data: any, successCallback?: Function, failCallback?: Function) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    };

    this.http.get(this.config.apiUrl + url, httpOptions.headers, data).subscribe(
      (res: any) => {
        successCallback(res);
      }, (err: HttpErrorResponse) => {
        failCallback(err);
      }
    );
  }

  /**
   * 保存任务单数据至数据库
   */
  public saveTaskData(url: string, body: any, successCallback?: Function, failCallback?: Function) {
    this.http.post(this.config.apiUrl + url, body, this.httpOptions.headers).subscribe(
      (res: any) => {
        successCallback(res);
      }, (err: HttpErrorResponse) => {
        failCallback(err);
      }
    );
  }

  /**
   * 查询所有任务单
   */
  public getTasks(url: string, data: any, successCallback?: Function, failCallback?: Function) {
    this.http.get(this.config.apiUrl + url, this.httpOptions.headers, data).subscribe(
      (res: any) => {
        successCallback(res);
      }, (err: HttpErrorResponse) => {
        failCallback(err);
      }
    );
  }

  /**
   * 查看供应商信息
   */
  public getSupplier(url: string, data: any, successCallback?: Function, failCallback?: Function) {
    this.http.get(this.config.apiUrl + url, this.httpOptions.headers, data).subscribe(
      (res: any) => {
        successCallback(res);
      }, (err: HttpErrorResponse) => {
        failCallback(err);
      }
    );
  }

  /**
   * 查看单个任务单
   */
  public viewTask(url: string, data: any, successCallback?: Function, failCallback?: Function) {
    this.http.get(this.config.apiUrl + url, this.httpOptions.headers, data).subscribe(
      (res: any) => {
        successCallback(res);
      }, (err: HttpErrorResponse) => {
        failCallback(err);
      }
    );
  }

  /**
   * 更新任务单
   */
  public updataTask(url: string, body: any, successCallback?: Function, failCallback?: Function) {
    this.http.post(this.config.apiUrl + url, body, this.httpOptions.headers).subscribe(
      (res: any) => {
        successCallback(res);
      }, (err: HttpErrorResponse) => {
        failCallback(err);
      }
    );
  }

  /**
   * 查看单个任务单
   */
  public withdrawTask(url: string, data: any, successCallback?: Function, failCallback?: Function) {
    this.http.get(this.config.apiUrl + url, this.httpOptions.headers, data).subscribe(
      (res: any) => {
        successCallback(res);
      }, (err: HttpErrorResponse) => {
        failCallback(err);
      }
    );
  }

  /**
   * 查看所有反馈单
   */
  public getFeedback(url: string, data: any, successCallback?: Function, failCallback?: Function) {
    this.http.get(this.config.apiUrl + url, this.httpOptions.headers, data).subscribe(
      (res: any) => {
        successCallback(res);
      }, (err: HttpErrorResponse) => {
        failCallback(err);
      }
    );
  }

  /**
   * 更新反馈单反馈单状态
   */
  public updateFeedback(url: string, data: any, successCallback?: Function, failCallback?: Function) {
    this.http.get(this.config.apiUrl + url, this.httpOptions.headers, data).subscribe(
      (res: any) => {
        successCallback(res);
      }, (err: HttpErrorResponse) => {
        failCallback(err);
      }
    );
  }
}
