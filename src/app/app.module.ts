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
  declarations: [AppComponent, ColorPage, MapPage],
  entryComponents: [ColorPage, MapPage],
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
