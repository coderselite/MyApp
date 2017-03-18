import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { OtpPage } from '../pages/otp/otp';
import { RegisterPage } from '../pages/register/register';
import { AuthService } from '../providers/auth-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    OtpPage,
    RegisterPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    OtpPage,
    RegisterPage
  ],
  providers: [ AuthService ]
})
export class AppModule {}
