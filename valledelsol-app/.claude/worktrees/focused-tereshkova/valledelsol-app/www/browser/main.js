import {
  IonApp,
  IonRouterOutlet,
  IonicRouteStrategy,
  RouteReuseStrategy,
  bootstrapApplication,
  provideHttpClient,
  provideIonicAngular,
  provideRouter,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-WYQCCB2V.js";
import "./chunk-4PXIBVKQ.js";
import "./chunk-GSIZKSUC.js";
import "./chunk-G6BTDFGX.js";
import "./chunk-IM5ST4IQ.js";
import "./chunk-PBHGX2UC.js";
import "./chunk-PAJV2T47.js";
import "./chunk-6GY55RSK.js";
import "./chunk-NRJTWVP7.js";
import "./chunk-55ROKFMO.js";
import "./chunk-SY2CBALT.js";
import "./chunk-DFVVLJYL.js";
import "./chunk-VCPNLG55.js";
import "./chunk-YAS4LRVC.js";
import "./chunk-LDWKLM72.js";

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-app");
    \u0275\u0275element(1, "ion-router-outlet");
    \u0275\u0275elementEnd();
  }
}, dependencies: [IonApp, IonRouterOutlet], encapsulation: 2 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 14 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-CL6VH4GV.js").then((m) => m.TabsPage),
    children: [
      {
        path: "tab1",
        loadComponent: () => import("./chunk-EDRFFDFP.js").then((m) => m.Tab1Page)
      },
      {
        path: "tab2",
        loadComponent: () => import("./chunk-4ZPQBTCM.js").then((m) => m.Tab2Page)
      },
      {
        path: "tab3",
        loadComponent: () => import("./chunk-WBKWU547.js").then((m) => m.Tab3Page)
      },
      {
        path: "",
        redirectTo: "tab1",
        pathMatch: "full"
      }
    ]
  }
];

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    provideHttpClient()
  ]
});
//# sourceMappingURL=main.js.map
