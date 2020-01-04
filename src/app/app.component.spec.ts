// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { TestBed, async } from '@angular/core/testing';

// import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { RouterTestingModule } from '@angular/router/testing';

// import { AppComponent } from './app.component';
// import { Storage } from '@ionic/storage';
// import { SongsService } from './services/songs.service';
// import { DataStorageProvider } from './providers/data-storage/data-storage';

// describe('AppComponent', () => {

//   let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy;

//   beforeEach(async(() => {
//     statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
//     splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
//     platformReadySpy = Promise.resolve();
//     platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });

//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent,
//       ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//       providers: [
//         SongsService,
//         {provide: DataStorageProvider, useValue: null},
//         { provide: StatusBar, useValue: statusBarSpy },
//         { provide: SplashScreen, useValue: splashScreenSpy },
//         { provide: Platform, useValue: platformSpy },
//         { provide: Storage, useValue: null },
//       ],
//       imports: [ RouterTestingModule.withRoutes([])],
//     }).compileComponents();
//   }));

//   it('should create the app', async () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it('should initialize the app', async () => {
//     TestBed.createComponent(AppComponent);
//     expect(platformSpy.ready).toHaveBeenCalled();
//     await platformReadySpy;
//     expect(statusBarSpy.styleDefault).toHaveBeenCalled();
//     expect(splashScreenSpy.hide).toHaveBeenCalled();
//   });

//   it('should have menu labels', async () => {
//     const fixture = await TestBed.createComponent(AppComponent);
//     await fixture.detectChanges();
//     const app = fixture.nativeElement;
//     const menuItems = app.querySelectorAll('ion-label');
//     expect(menuItems.length).toEqual(2);
//     expect(menuItems[0].textContent).toContain('Home');
//   });

//   it('should have urls', async () => {
//     const fixture = await TestBed.createComponent(AppComponent);
//     await fixture.detectChanges();
//     const app = fixture.nativeElement;
//     const menuItems = app.querySelectorAll('ion-item');
//     expect(menuItems.length).toEqual(2);
//     expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual('/home');
//   });

// });