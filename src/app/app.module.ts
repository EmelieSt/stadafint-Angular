import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { Main2Component } from './components/main2/main2.component';
import { ListComponent } from './components/main2/components/list.component';
import { NavlinksComponent } from './components/header/navlinks/navlinks.component';
import { CardComponent } from './components/main/components/card/card.component';
import { InfoComponent } from './components/main/components/info/info.component';
import { RegisterComponent } from './components/main/components/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'Main', pathMatch: 'full' },
  { path: 'Main', component: MainComponent },
  { path: 'Main2', component: Main2Component },
];

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    Main2Component,
    ListComponent,
    NavlinksComponent,
    CardComponent,
    InfoComponent,
    RegisterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class AppModule {}
