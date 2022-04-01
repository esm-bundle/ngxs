document.head.appendChild(
  Object.assign(document.createElement("script"), {
    type: "systemjs-importmap",
    textContent: `
      {
        "imports": {
          "rxjs": "https://cdn.jsdelivr.net/npm/@esm-bundle/rxjs/system/es2015/rxjs.min.js",
          "rxjs/operators": "https://cdn.jsdelivr.net/npm/@esm-bundle/rxjs/system/es2015/rxjs-operators.min.js",
          "@angular/core": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__core/system/es2015/ivy/angular-core.min.js",
          "@angular/common": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__common/system/es2015/ivy/angular-common.min.js",
          "@angular/router": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__router/system/es2015/ivy/angular-router.min.js",
          "@angular/forms": "https://cdn.jsdelivr.net/npm/@esm-bundle/angular__forms/system/es2015/ivy/angular-forms.min.js",
          "@ngxs/store/internals": "/base/system/es2015/ivy/ngxs-store-internals.min.js",
          "@ngxs/store": "/base/system/es2015/ivy/ngxs-store.min.js"
        }
      }`,
  })
);
