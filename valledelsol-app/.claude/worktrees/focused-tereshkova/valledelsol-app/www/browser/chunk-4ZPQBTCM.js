import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonTextarea,
  IonTitle,
  IonToolbar,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
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

// src/app/tab2/tab2.page.ts
var _Tab2Page = class _Tab2Page {
};
_Tab2Page.\u0275fac = function Tab2Page_Factory(t) {
  return new (t || _Tab2Page)();
};
_Tab2Page.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Tab2Page, selectors: [["app-tab2"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 1, consts: [["color", "warning"], ["fullscreen", "", "color", "light"], [1, "reporte-card"], [1, "form-item"], ["position", "stacked"], ["placeholder", "Nombre o Placa..."], ["placeholder", "Pasto seco quem\xE1ndose, estructura en llamas...", 3, "rows"], ["placeholder", "Detectado, En Combate, o Descontrolado"], ["expand", "block", "color", "warning", 1, "btn-enviar"]], template: function Tab2Page_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
    \u0275\u0275text(3, "Reportar Incidente");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-content", 1)(5, "ion-card", 2)(6, "ion-card-header")(7, "ion-card-title");
    \u0275\u0275text(8, "Nuevo Reporte de Incendio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "ion-card-content")(10, "ion-item", 3)(11, "ion-label", 4);
    \u0275\u0275text(12, " Testigo / Bombero a Cargo ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "ion-input", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-item", 3)(15, "ion-label", 4);
    \u0275\u0275text(16, " Descripci\xF3n del Incidente ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "ion-textarea", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-item", 3)(19, "ion-label", 4);
    \u0275\u0275text(20, " Estado Inicial ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "ion-input", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ion-button", 8);
    \u0275\u0275text(23, " ENVIAR REPORTE AL CENTRO DE CONTROL ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(17);
    \u0275\u0275property("rows", 3);
  }
}, dependencies: [
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton
], styles: ["\n\n.reporte-card[_ngcontent-%COMP%] {\n  margin: 20px 16px;\n  border-radius: 16px;\n  border-top: 3px solid #F57C00;\n}\n.reporte-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #2D2D2D;\n}\n.form-item[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  --border-radius: 12px;\n  --padding-start: 14px;\n  --inner-padding-end: 14px;\n}\n.form-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem !important;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #78909C !important;\n  margin-bottom: 4px;\n}\n.btn-enviar[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  --background:\n    linear-gradient(\n      135deg,\n      #E65100 0%,\n      #F57C00 100%);\n  --background-hover: #ca4700;\n  --border-radius: 12px;\n  --box-shadow: 0 4px 16px rgba(230, 81, 0, 0.25);\n  font-weight: 700;\n  font-size: 0.85rem;\n  letter-spacing: 0.5px;\n  height: 48px;\n}\n/*# sourceMappingURL=tab2.page.css.map */"] });
var Tab2Page = _Tab2Page;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Tab2Page, { className: "Tab2Page", filePath: "src\\app\\tab2\\tab2.page.ts", lineNumber: 29 });
})();
export {
  Tab2Page
};
//# sourceMappingURL=chunk-4ZPQBTCM.js.map
