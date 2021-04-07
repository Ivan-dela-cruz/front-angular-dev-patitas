import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaNosotrosComponent } from './pantalla-nosotros/pantalla-nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordForgotComponent } from './auth/password-forgot/password-forgot.component';
import { OlvidoContrasenaComponent } from './auth/olvido-contrasena/olvido-contrasena.component';
import { EscogitamientoRolComponent } from './escogitamiento-rol/escogitamiento-rol.component';
import { EscogitamientoAdoptarComponent } from './escogitamiento-adoptar-tipo/escogitamiento-adoptar.component';
import { EscogitamientoAdoptarGeneroComponent} from './escogitamiento-adoptar-genero/escogitamiento-adoptar-genero.component';
import { VistaCatalogoComponent } from './vista-catalogo/vista-catalogo.component';
import { AlwaysAuthGuard } from './guards/AlwaysAuthGuard';
import { PortalUserRescatistaComponent } from './auth/guards/portal-user-rescatista/portal-user-rescatista.component';
import { EscogitamientoTipoRescatistaComponent } from './escogitamiento-tipo-rescatista/escogitamiento-tipo-rescatista.component';


@NgModule({
  declarations: [
    AppComponent,
    PantallaNosotrosComponent,
    InicioComponent,
    RegistroComponent,
    LoginComponent,
    PasswordForgotComponent,
    OlvidoContrasenaComponent,
    EscogitamientoRolComponent,
    EscogitamientoAdoptarComponent,
    EscogitamientoAdoptarGeneroComponent,
    VistaCatalogoComponent,
    PortalUserRescatistaComponent,
    EscogitamientoTipoRescatistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forRoot([{path: 'home-page/:id', component: AppComponent},
    {path: 'nosotros-page/:id', component: PantallaNosotrosComponent},
    {path: 'inicio-page', component: InicioComponent},
    {path: 'registro-page', component: RegistroComponent},
    {path: 'olvido-contrasena', component: OlvidoContrasenaComponent},
    {path: 'login-page', component: LoginComponent},
    {path: 'p', redirectTo:'registro-page', pathMatch: 'full'},
    {path: 'escogitamiento-rol-page', component: EscogitamientoRolComponent},
    {path: 'escogitamiento-adoptar-page', component: EscogitamientoAdoptarComponent},
    {path: 'escogitamiento-adoptar-genero-page', component: EscogitamientoAdoptarGeneroComponent},
    {path: 'vista-catalogo', component: VistaCatalogoComponent},
    {path: 'portal-user-rescatista', component: PortalUserRescatistaComponent},
    {path: 'escogitamiento-tipo-rescatista-page', component: EscogitamientoTipoRescatistaComponent},
    ]),
    HttpClientModule,
  ],
  providers: [AlwaysAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
