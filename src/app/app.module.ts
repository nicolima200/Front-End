import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogosComponent } from './components/logos/logos.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HysComponent } from './components/hys/hys.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { environment } from 'src/app/environments/environment';


/*import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database/';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';*/

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    /*AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule*/
    provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
    provideStorage(()=>getStorage())
    
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
