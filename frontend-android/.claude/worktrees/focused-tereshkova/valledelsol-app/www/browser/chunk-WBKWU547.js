import {
  addIcons,
  paperPlaneOutline
} from "./chunk-NP7IXKEW.js";
import {
  CommonModule,
  FormsModule,
  HttpClient,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTextarea,
  IonTitle,
  IonToast,
  IonToolbar,
  NgControlStatus,
  NgModel,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
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

// src/app/tab3/tab3.page.ts
addIcons({ paperPlaneOutline });
var API_URL = "http://localhost:8000";
var _Tab3Page = class _Tab3Page {
  constructor(http) {
    this.http = http;
    this.tipo = "SMS";
    this.destinatario = "";
    this.mensaje = "";
    this.showToast = false;
    this.errorToast = false;
    this.loading = false;
  }
  enviarAlerta() {
    if (!this.destinatario.trim() || !this.mensaje.trim()) {
      this.errorToast = true;
      return;
    }
    this.loading = true;
    this.http.post(`${API_URL}/api/alertas/enviar`, {
      tipoAlerta: this.tipo,
      destinatario: this.destinatario,
      mensaje: this.mensaje
    }).subscribe({
      next: () => {
        this.showToast = true;
        this.destinatario = "";
        this.mensaje = "";
        this.loading = false;
      },
      error: () => {
        this.errorToast = true;
        this.loading = false;
      }
    });
  }
};
_Tab3Page.\u0275fac = function Tab3Page_Factory(t) {
  return new (t || _Tab3Page)(\u0275\u0275directiveInject(HttpClient));
};
_Tab3Page.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Tab3Page, selectors: [["app-tab3"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 11, consts: [["color", "danger"], ["fullscreen", "", "color", "light"], ["collapse", "condense"], ["size", "large"], [1, "alerta-card"], ["color", "medium"], [1, "form-item"], ["position", "stacked"], [3, "ngModelChange", "ngModel"], ["value", "SMS"], ["value", "EMAIL"], ["value", "PUSH"], ["placeholder", "Ej. +56912345678", 3, "ngModelChange", "ngModel"], ["placeholder", "Escribe la alerta oficial...", 3, "ngModelChange", "rows", "ngModel"], ["expand", "block", "color", "danger", "size", "large", 1, "btn-alerta", 3, "click", "disabled"], ["slot", "end", "name", "paper-plane-outline"], ["color", "success", "position", "bottom", 3, "didDismiss", "isOpen", "message", "duration"], ["message", "Error al enviar la alerta o faltan campos.", "color", "danger", "position", "bottom", 3, "didDismiss", "isOpen", "duration"]], template: function Tab3Page_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-title");
    \u0275\u0275text(3, "Despacho de Alertas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(4, "ion-content", 1)(5, "ion-header", 2)(6, "ion-toolbar", 0)(7, "ion-title", 3);
    \u0275\u0275text(8, "Alertas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "ion-card", 4)(10, "ion-card-header")(11, "ion-card-title");
    \u0275\u0275text(12, "Emitir Alerta a Ciudadan\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ion-text", 5)(14, "p");
    \u0275\u0275text(15, " Esta alerta ser\xE1 procesada por el API Gateway y enviada al microservicio de alertas. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "ion-card-content")(17, "ion-item", 6)(18, "ion-label", 7);
    \u0275\u0275text(19, " Tipolog\xEDa de Alerta ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function Tab3Page_Template_ion_select_ngModelChange_20_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.tipo, $event) || (ctx.tipo = $event);
      return $event;
    });
    \u0275\u0275elementStart(21, "ion-select-option", 9);
    \u0275\u0275text(22, "Notificaci\xF3n SMS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ion-select-option", 10);
    \u0275\u0275text(24, "Correo Electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ion-select-option", 11);
    \u0275\u0275text(26, "App M\xF3vil (Push)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "ion-item", 6)(28, "ion-label", 7);
    \u0275\u0275text(29, " Destinatario ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ion-input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function Tab3Page_Template_ion_input_ngModelChange_30_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.destinatario, $event) || (ctx.destinatario = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "ion-item", 6)(32, "ion-label", 7);
    \u0275\u0275text(33, " Mensaje Oficial ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "ion-textarea", 13);
    \u0275\u0275twoWayListener("ngModelChange", function Tab3Page_Template_ion_textarea_ngModelChange_34_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.mensaje, $event) || (ctx.mensaje = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "ion-button", 14);
    \u0275\u0275listener("click", function Tab3Page_Template_ion_button_click_35_listener() {
      return ctx.enviarAlerta();
    });
    \u0275\u0275element(36, "ion-icon", 15);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "ion-toast", 16);
    \u0275\u0275listener("didDismiss", function Tab3Page_Template_ion_toast_didDismiss_38_listener() {
      return ctx.showToast = false;
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "ion-toast", 17);
    \u0275\u0275listener("didDismiss", function Tab3Page_Template_ion_toast_didDismiss_39_listener() {
      return ctx.errorToast = false;
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(20);
    \u0275\u0275twoWayProperty("ngModel", ctx.tipo);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx.destinatario);
    \u0275\u0275advance(4);
    \u0275\u0275property("rows", 4);
    \u0275\u0275twoWayProperty("ngModel", ctx.mensaje);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.loading ? "Transmitiendo..." : "DISPARAR ALERTA", " ");
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx.showToast)("message", "\xA1Alerta " + ctx.tipo + " enviada con \xE9xito!")("duration", 3e3);
    \u0275\u0275advance();
    \u0275\u0275property("isOpen", ctx.errorToast)("duration", 3e3);
  }
}, dependencies: [
  CommonModule,
  FormsModule,
  NgControlStatus,
  NgModel,
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
  IonSelect,
  IonSelectOption,
  IonInput,
  IonTextarea,
  IonButton,
  IonIcon,
  IonToast,
  IonText
], styles: ["\n\n.alerta-card[_ngcontent-%COMP%] {\n  margin: 20px 16px;\n  border-radius: 16px;\n  border-top: 3px solid #D32F2F;\n}\n.alerta-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #2D2D2D;\n}\n.alerta-card[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  line-height: 1.5;\n  color: #78909C;\n  margin-top: 6px;\n}\n.alerta-card[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  --border-radius: 12px;\n  --padding-start: 14px;\n  --inner-padding-end: 14px;\n}\n.alerta-card[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem !important;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #78909C !important;\n  margin-bottom: 4px;\n}\n.btn-alerta[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  --background:\n    linear-gradient(\n      135deg,\n      #C62828 0%,\n      #D32F2F 50%,\n      #E65100 100%);\n  --background-hover: #ae2323;\n  --border-radius: 12px;\n  --box-shadow: 0 4px 16px rgba(211, 47, 47, 0.3);\n  font-weight: 700;\n  font-size: 0.85rem;\n  letter-spacing: 0.5px;\n  height: 52px;\n}\n.btn-alerta[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=tab3.page.css.map */"] });
var Tab3Page = _Tab3Page;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Tab3Page, { className: "Tab3Page", filePath: "src\\app\\tab3\\tab3.page.ts", lineNumber: 45 });
})();
export {
  Tab3Page
};
//# sourceMappingURL=chunk-WBKWU547.js.map
