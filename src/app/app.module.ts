import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentLeftComponent } from './components/content/content-left/content-left.component';
import { ContentRightComponent } from './components/content/content-right/content-right.component';
import { ContentLeftModeComponent } from './components/content/content-left-mode/content-left-mode.component';
import { ContentLeftCourierComponent } from './components/content/content-left-courier/content-left-courier.component';
import { ContentLeftVisitorComponent } from './components/content/content-left-visitor/content-left-visitor.component';
import { ContentLeftOutpassComponent } from './components/content/content-left-outpass/content-left-outpass.component';
import { ContentRightCourierComponent } from './components/content/content-right-courier/content-right-courier.component';
import { ContentRightVisitorComponent } from './components/content/content-right-visitor/content-right-visitor.component';
import { ContentRightOutpassComponent } from './components/content/content-right-outpass/content-right-outpass.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ContentLeftComponent,
    ContentRightComponent,
    ContentLeftModeComponent,
    ContentLeftCourierComponent,
    ContentLeftVisitorComponent,
    ContentLeftOutpassComponent,
    ContentRightCourierComponent,
    ContentRightVisitorComponent,
    ContentRightOutpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
