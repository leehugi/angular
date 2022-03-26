import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { MaterialModule } from "../material.module";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducers } from "./reducers";
import { environment } from "src/environments/environment";
import { AppEffects } from "./effects/app.effects";
import { RestService } from "./services/rest.service";
import { HttpClientModule } from "@angular/common/http";
import { SendMessageComponent } from './send-message/send-message.component';

@NgModule({
  declarations: [HomeComponent, SendMessageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    // ngrx
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([AppEffects]),

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [RestService],
  entryComponents: [SendMessageComponent],
})
export class HomeModule {}
