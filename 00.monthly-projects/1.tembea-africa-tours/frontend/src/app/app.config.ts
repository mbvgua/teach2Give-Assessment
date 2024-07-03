import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptor } from './interceptors';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { trialReducer } from './state/reducers/trial.reducer';
import { countReducer } from './state/reducers/counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authReducer } from './state/reducers/auth.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([TokenInterceptor])),
    provideStore({
      'trial': trialReducer,
      'counter': countReducer,
      'auth': authReducer,
      'tours': tourReducer,
      'hotels': hotelReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
  // provideStore(reducers, { metaReducers })]
};
