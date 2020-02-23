import { ToastController, LoadingController } from '@ionic/angular';


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
    protected async presentToast(toastController: ToastController, message: string, duration?: number,
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
}