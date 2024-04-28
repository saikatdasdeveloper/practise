import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TwoWayBindingComponent } from './Component/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { EventBindingComponent } from './Component/event-binding/event-binding.component';
import { PropertyBindingComponent } from './Component/property-binding/property-binding.component';
import { ImageChangeComponent } from './Component/image-change/image-change.component';
import { BgcolorchangeontypeComponent } from './Component/bgcolorchangeontype/bgcolorchangeontype.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    ImageChangeComponent,
    BgcolorchangeontypeComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
