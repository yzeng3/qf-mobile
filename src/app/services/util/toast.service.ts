import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';



@Injectable({
    providedIn: 'root'
})
export class ToastService {
    constructor(private toastController: ToastController) { }

    public async presentToast(message: string, duration?: number,
                              position?: 'top' | 'bottom' | 'middle',
                              color?: 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark') {
        const toast = await this.toastController.create({
            message: message || 'toast alert',
            duration: duration || 2000,
            position: position || 'bottom',
            color: color || 'danger'
        });
        toast.present();
    }

    public async presentToastWithOptions(header?: string, message?: string, position?: 'top' | 'bottom' | 'middle') {
        const toast = await this.toastController.create({
            header: header || 'Toast header',
            message: message || 'Click to Close',
            position: position || 'middle',
            buttons: [
                {
                    side: 'start',
                    icon: 'star',
                    text: 'Favorite',
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                }, {
                    text: 'Done',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        toast.present();
    }
}