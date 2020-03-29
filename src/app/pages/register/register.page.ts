import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { BaseUI } from 'src/app/common/base-ui';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage extends BaseUI implements OnInit, AfterViewInit {

  public registerForm: FormGroup = null;
  public message = '欢迎注册奇服商城';
  private face: any;
  private isUsernameValid = false; // 是否为有效用户名
  private isPwd = false; // 密码是否规范
  private isPwd2 = false; // 前后密码是否一致

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private navController: NavController
  ) {
    super();
    this.registerForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      password2: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.face = document.getElementById('face'); // 初始化face图片元素
  }

  // 注册表单提交
  async onSubmit() {
    // 初始化数据
    if (!this.isUsernameValid) {
      this.cry();
      this.message = '该用户名已被使用';
    } else if (!this.isPwd) {
      this.cry();
      this.message = '密码不得少于6位';
    } else if (!this.isPwd2) {
      this.cry();
      this.message = '前后密码不一致';
    } else {
      const loading = await super.presentLoading(this.loadingController, '注册中', 3000);
      const data = { username: this.registerForm.controls.username.value, password: this.registerForm.controls.password.value };
      this.loginService.register('api/user/register', data,
        (res: any) => {
          loading.dismiss();
          if (res.code === 1) {
            super.presentToast(this.toastController, res.msg, 1000, 'middle', 'success');
            this.navController.navigateRoot('login');
          } else {
            super.presentToast(this.toastController, res.msg);
          }
        }, () => {
          loading.dismiss();
          super.presentToast(this.toastController, '网络出错');
        });
    }
  }

  // 用户名规范校验
  checkUser(uname: HTMLInputElement) {
    const value = uname.value;
    if (value.length < 3) {
      this.cry();
      this.message = '用户名不得少于3位';
      this.isUsernameValid = false;
    } else {
      this.loginService.checkUser('api/user/check', { username: value },
        (res: any) => {
          if (res.code === 1) {
            this.smile();
            this.isUsernameValid = true;
          } else {
            this.cry();
            this.message = res.msg;
            this.isUsernameValid = false;
          }
        }, () => {
          this.cry();
          this.message = '网络出错,请核查';
        });
    }
  }

  // 密码规范校验
  checkPassword(ev: HTMLInputElement) {
    const pwd = ev.value;
    if (pwd.length < 6) {
      this.cry();
      this.message = '密码不得少于6位';
      this.isPwd = false;
    } else {
      this.isPwd = true;
      this.smile();
    }
  }

  // 检查两个密码是否一致
  checkPassword2(ev1: HTMLInputElement, ev2: HTMLInputElement) {
    if (this.isPwd) {
      if (ev1.value !== ev2.value) {
        this.cry();
        this.message = '前后密码不一致';
      } else {
        this.isPwd2 = true;
        this.smile();
      }
    } else {
      this.cry();
      this.message = '密码不得少于6位';
    }
  }

  // 哭脸提示
  cry() {
    this.face.src = '../../../assets/icon/cryface.svg';
  }

  // 笑脸提示
  smile() {
    this.message = '欢迎注册奇服商城';
    this.face.src = '../../../assets/icon/smileface.svg';
  }
}
