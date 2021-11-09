import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightWindowComponent } from './right-window/right-window.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextMenuDirective } from './context-menu.directive';

@NgModule({
  declarations: [
    AppComponent,
    RightWindowComponent,
    ContextMenuDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
