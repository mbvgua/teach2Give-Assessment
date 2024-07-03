import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptor } from './interceptors';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { trialReducer } from './state-management/reducers/trial.reducer';
import { countReducer } from './state-management/reducers/counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([TokenInterceptor])),
    provideStore({ 'trial': trialReducer, 'counter': countReducer }), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
  // provideStore(reducers, { metaReducers })]
};
