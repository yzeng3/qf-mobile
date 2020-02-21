import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { LoadingController, NavController } from '@ionic/angular';
import { ToastService } from 'src/app/services/util/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  showBackButton = false;
  loading = false;
  public loginForm: FormGroup = null;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private loadingController: LoadingController,
    private toast: ToastService,
    private navController: NavController) {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {

  }

  async onSubmit() {
    const loading = await this.loadingController.create({
      message: '登录中...',
      duration: 2000
    });
    await loading.present();
    const dataToLogin = { username: this.loginForm.controls.username.value, password: this.loginForm.controls.password.value };
    this.loginService.login(dataToLogin,
      () => {
        this.toast.presentToast('登录成功', 200, 'bottom', 'success');
        this.navController.navigateRoot('tabs/user');
      }, (err: any) => {
        console.log(err);
        if (err.code) {
          if (err.code === 0) {
            this.toast.presentToast(err.msg);
          } else {
            this.toast.presentToast('出现未知错误，请重新登录');
          }
        } else {
          this.toast.presentToast('网络请求被拒绝，请重新尝试');
        }

      });
    await loading.dismiss();
  }

  findPassword() { }

}
