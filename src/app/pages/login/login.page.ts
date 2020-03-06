import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { BaseUI } from 'src/app/common/base-ui';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseUI implements OnInit {

  showBackButton = false;
  public loginForm: FormGroup = null;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private navController: NavController) {
    super();
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

  }

  ngOnInit() {

  }

  async onSubmit() {
    const loading = await super.presentLoading(this.loadingController, '登录中...', 3000);
    const dataToLogin = { username: this.loginForm.controls.username.value, password: this.loginForm.controls.password.value };
    this.loginService.login('admin/toLogin', dataToLogin,
      () => {
        super.presentToast(this.toastController, '登录成功', 200, 'bottom', 'success');
        this.navController.navigateRoot('tabs/user');
      }, (err: any) => {
        console.log(err);
        if (err.code) {
          if (err.code === 0) {
            super.presentToast(this.toastController, '用户名或密码错误，请重新登录');
          } else {
            super.presentToast(this.toastController, '出现未知错误，请重新登录');
          }
        } else {
          super.presentToast(this.toastController, '网络请求被拒绝，请重新尝试');
        }
      });
    loading.dismiss();
  }

  findPassword() { }

}
