import {
  addIcons,
  flameOutline,
  shieldCheckmarkOutline,
  warningOutline
} from "./chunk-NP7IXKEW.js";
import {
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonRow,
  IonTitle,
  IonToolbar,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
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

// src/app/tab1/tab1.page.ts
addIcons({ warningOutline, flameOutline, shieldCheckmarkOutline });
var _Tab1Page = class _Tab1Page {
};
_Tab1Page.\u0275fac = function Tab1Page_Factory(t) {
  return new (t || _Tab1Page)();
};
_Tab1Page.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Tab1Page, selectors: [["app-tab1"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 59, vars: 0, consts: [["color", "danger"], ["fullscreen", "", "color", "light"], ["collapse", "condense"], ["size", "large"], [1, "estado-container"], [1, "estado-titulo"], ["size", "6"], ["color", "warning", 1, "card-resumen"], [1, "card-header-icon"], ["name", "warning-outline", 1, "icon-large"], ["color", "danger", 1, "card-resumen"], ["name", "flame-outline", 1, "icon-large"], ["color", "danger", 1, "badge-prioridad"], ["src", "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=2070&auto=format&fit=crop", "alt", "Incendio forestal", 1, "imagen-incendio"], ["color", "success"], ["name", "shield-checkmark-outline", 1, "brigada-icon"]], template: function Tab1Page_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
    \u0275\u0275text(3, "Valle del Sol - Central");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-content", 1)(5, "ion-header", 2)(6, "ion-toolbar", 0)(7, "ion-title", 3);
    \u0275\u0275text(8, "Valle del Sol");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 4)(10, "h2", 5);
    \u0275\u0275text(11, "Estado Comunal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-grid")(13, "ion-row")(14, "ion-col", 6)(15, "ion-card", 7)(16, "ion-card-header", 8);
    \u0275\u0275element(17, "ion-icon", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-card-content")(19, "h2")(20, "strong");
    \u0275\u0275text(21, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23, "Alertas Activas");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "ion-col", 6)(25, "ion-card", 10)(26, "ion-card-header", 8);
    \u0275\u0275element(27, "ion-icon", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ion-card-content")(29, "h2")(30, "strong");
    \u0275\u0275text(31, "1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33, "Foco Detectado");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(34, "ion-card")(35, "ion-card-header")(36, "ion-card-subtitle");
    \u0275\u0275text(37, "Sector Plaza Central");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ion-card-title");
    \u0275\u0275text(39, "Reporte Cr\xEDtico");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "ion-card-content")(41, "ion-badge", 12);
    \u0275\u0275text(42, " PRIORIDAD ALTA ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p");
    \u0275\u0275text(44, " Se reporta gran columna de humo cerca del parque. Equipos pre-desplegados. ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "br")(46, "img", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "ion-card", 14)(48, "ion-card-header");
    \u0275\u0275element(49, "ion-icon", 15);
    \u0275\u0275elementStart(50, "ion-card-title");
    \u0275\u0275text(51, "Brigadas Terrestres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "ion-card-subtitle");
    \u0275\u0275text(53, "Unidades disponibles para despacho");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "ion-card-content");
    \u0275\u0275text(55, " Actualmente contamos con ");
    \u0275\u0275elementStart(56, "strong");
    \u0275\u0275text(57, "4 cuadrillas");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, " listas en cuarteles para ser movilizadas por la subdirecci\xF3n. ");
    \u0275\u0275elementEnd()()();
  }
}, dependencies: [
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonBadge
], styles: ["\n\n.estado-container[_ngcontent-%COMP%] {\n  padding: 16px 16px 0;\n}\n.estado-titulo[_ngcontent-%COMP%] {\n  margin: 0 4px 12px;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #2D2D2D;\n  letter-spacing: 0.2px;\n}\n.card-resumen[_ngcontent-%COMP%] {\n  margin: 0;\n  border-radius: 16px !important;\n  overflow: hidden;\n  position: relative;\n}\n.card-resumen[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  margin: 0;\n  color: #fff;\n}\n.card-resumen[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  opacity: 0.9;\n  margin: 2px 0 0;\n  color: #fff;\n}\n.card-header-icon[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n.icon-large[_ngcontent-%COMP%] {\n  font-size: 28px;\n  opacity: 0.85;\n}\n.badge-prioridad[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n}\n.imagen-incendio[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  margin-top: 8px;\n}\n.brigada-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  float: right;\n  opacity: 0.7;\n}\nion-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  opacity: 0.6;\n  font-weight: 600;\n}\nion-card-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #2D2D2D;\n}\nion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1.55;\n  color: #555;\n}\n/*# sourceMappingURL=tab1.page.css.map */"] });
var Tab1Page = _Tab1Page;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Tab1Page, { className: "Tab1Page", filePath: "src\\app\\tab1\\tab1.page.ts", lineNumber: 34 });
})();
export {
  Tab1Page
};
//# sourceMappingURL=chunk-EDRFFDFP.js.map
