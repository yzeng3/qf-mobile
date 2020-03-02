import { ToastController, LoadingController, ModalController } from '@ionic/angular';


/**
 * UI层的所有公用方法的抽象类
 */
export abstract class BaseUI {
    constructor() { }

    /**
     * 通用的展示 loading 的组件
     * @param loadingController LoadingController
     * @param message loading信息
     * @param duration 时长
     */
    protected async presentLoading(loadingController: LoadingController, message: string, duration?: number) {
        const loading = await loadingController.create({
            message: message || 'something loading...',
            duration: duration || 2000
        });
        await loading.present();
        return loading;
    }

    /**
     * 通用的展示 toast 的组件
     * @param toastController ToastController
     * @param message 需要显示的字串
     * @param duration 时长
     * @param position 位置
     * @param color 背景颜色
     */
    protected async presentToast(
        toastController: ToastController, message: string, duration?: number,
        position?: 'top' | 'bottom' | 'middle',
        color?: 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark') {
        const toast = await toastController.create({
            message: message || 'toast alert',
            duration: duration || 1500,
            position: position || 'bottom',
            color: color || 'danger'
        });
        toast.present();
        return toast;
    }

    /**
     * 打开模态的通用方法
     *
     * @param modalController ModalController
     * @param page 需要打开的页面
     * @param params 待传的参数
     */
    protected async presentModal(modalController: ModalController, page: any, params: any) {
        const modal = await modalController.create({
            component: page,                    // 待打开的页面
            componentProps: { data: params },    // 传参
            mode: 'ios',                        // iOS模式
            showBackdrop: true,                 // 显示背景
            keyboardClose: true,                // 打开时键盘自动关闭
            backdropDismiss: false              // 点击背景不能关闭模态
        });
        return await modal.present();
    }
}