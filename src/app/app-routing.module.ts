import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentLeftCourierComponent } from './components/content/content-left-courier/content-left-courier.component';
import { ContentLeftOutpassComponent } from './components/content/content-left-outpass/content-left-outpass.component';
import { ContentLeftVisitorComponent } from './components/content/content-left-visitor/content-left-visitor.component';
import { ContentLeftComponent } from './components/content/content-left/content-left.component';
import { ContentRightComponent } from './components/content/content-right/content-right.component';

const routes: Routes = [
{
  path: '',
  component: ContentLeftComponent
},
{
  path: 'courier', 
  component: ContentLeftCourierComponent,
},
{
  path: 'add', 
  component: ContentRightComponent,
  outlet: 'forContentRight'
},
{
  path: 'visitor', 
  component: ContentLeftVisitorComponent
},
{
  path: 'outpass',
  component: ContentLeftOutpassComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
