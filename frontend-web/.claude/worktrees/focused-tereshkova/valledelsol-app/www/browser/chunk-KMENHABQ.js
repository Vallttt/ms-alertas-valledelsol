import {
  f,
  m
} from "./chunk-4PXIBVKQ.js";
import {
  e
} from "./chunk-DFVVLJYL.js";
import {
  P,
  W
} from "./chunk-VCPNLG55.js";
import {
  __async
} from "./chunk-LDWKLM72.js";

// node_modules/@ionic/core/components/p-CneGxKsZ.js
var n = () => {
  const n2 = window;
  n2.addEventListener("statusTap", () => {
    W(() => {
      const o = document.elementFromPoint(n2.innerWidth / 2, n2.innerHeight / 2);
      if (!o)
        return;
      const e2 = f(o);
      e2 && new Promise((o2) => e(e2, o2)).then(() => {
        P(() => __async(void 0, null, function* () {
          e2.style.setProperty("--overflow", "hidden"), yield m(e2, 300), e2.style.removeProperty("--overflow");
        }));
      });
    });
  });
};
export {
  n as startStatusTap
};
/*! Bundled license information:

@ionic/core/components/p-CneGxKsZ.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-KMENHABQ.js.map
