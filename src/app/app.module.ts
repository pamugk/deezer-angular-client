import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataModule } from './data/data.module';
import { ProfileModule } from './pages/profile/profile.module';
import { SearchModule } from './pages/search/search.module';
import { HomeComponent } from './pages/home/home.component';
import { ChannelsComponent } from './pages/channels/channels.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    AppRoutingModule,
    DataModule,
    ProfileModule,
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
