import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ContentComponent } from './content/content.component';
import { IfDirective } from './Directive/employe.directive';
import { EmployeService } from './employe.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    ContentComponent,
    IfDirective,
    routingComponent,
    AboutComponent,
    EmployeeComponent,
    CreateUserComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  exports: [
    IfDirective
  ],
  providers: [EmployeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
