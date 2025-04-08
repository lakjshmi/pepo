import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { HttpClientModule } from '@angular/common/http';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()), // ✅ Correct way to provide HttpClient in standalone API
    HttpClientModule 
  ],
}).catch(err => console.error(err));
