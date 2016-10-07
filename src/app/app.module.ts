import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';
import { AppComponent } from './app.component';
// import { MoonPhasesComponent } from './app/directives/clock/moon-phases/moon-phases.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    TranslateModule.forRoot()
  ],
  exports: [BrowserModule, HttpModule, TranslateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
