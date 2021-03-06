import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginGuardGuard } from './guard/login-guard.guard';
import { ColorPage } from './pages/color/color.page';
import { MapPage } from './pages/map/map.page';
import { SignaturePage } from './pages/signature/signature.page';
import { MoreDesignPage } from './pages/more-design/more-design.page';
import { CancelPage } from './common/cancel/cancel.page';
import { InputModalPage } from './common/input-modal/input-modal.page';
import { DraftModalPage } from './pages/draft-modal/draft-modal.page';
import { SupplierModalPage } from './common/supplier-modal/supplier-modal.page';
import { TaskModalPage } from './common/task-modal/task-modal.page';
import { ScoreModalPage } from './common/score-modal/score-modal.page';
import { MapModalPage } from './common/map-modal/map-modal.page';
import { ColorModalPage } from './common/color-modal/color-modal.page';
import { ParamModalPage } from './common/param-modal/param-modal.page';
// import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
// export class MyHammerConfig extends HammerGestureConfig {
//   overrides = {
//     pan: { threshold: 5 },
//     swipe: {
//       velocity: 0.4,
//       threshold: 20,
//       direction: 31
//     },
//     press: {}
//   } as any;
// }
@NgModule({
  declarations: [
    AppComponent, ColorPage, MapPage, SignaturePage,
    MoreDesignPage, CancelPage, InputModalPage, DraftModalPage,
    SupplierModalPage, TaskModalPage, ScoreModalPage, MapModalPage, ColorModalPage, ParamModalPage
  ],
  entryComponents: [
    ColorPage, MapPage, SignaturePage, MoreDesignPage, CancelPage,
    InputModalPage, DraftModalPage, SupplierModalPage, TaskModalPage, ScoreModalPage,
    MapModalPage, ColorModalPage, ParamModalPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
    LoginGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
