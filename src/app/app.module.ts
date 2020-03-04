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
import { MapDragDirective } from './directive/map-drag.directive';

@NgModule({
  declarations: [AppComponent, ColorPage, MapDragDirective],
  entryComponents: [ColorPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LoginGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
