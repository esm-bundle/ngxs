describe("@esm-bundle/ngxs", () => {
  describe("@ngxs/store/internals", () => {
    it("can load the System.register es2015 bundle", async () => {
      const m = await System.import(
        "/base/system/es2015/ivy/ngxs-store-internals.js"
      );
      expect(m.NgxsBootstrapper).toBeDefined();
    });

    it("can load the System.register es2015 prod bundle", async () => {
      const m = await System.import(
        "/base/system/es2015/ivy/ngxs-store-internals.min.js"
      );
      expect(m.NgxsBootstrapper).toBeDefined();
    });
  });

  describe("@ngxs/store/operators", () => {
    it("can load the System.register es2015 bundle", async () => {
      const m = await System.import(
        "/base/system/es2015/ivy/ngxs-store-operators.js"
      );
      expect(m.compose).toBeDefined();
    });

    it("can load the System.register es2015 prod bundle", async () => {
      const m = await System.import(
        "/base/system/es2015/ivy/ngxs-store-operators.min.js"
      );
      expect(m.compose).toBeDefined();
    });
  });

  describe("@ngxs/store", () => {
    it("can load the System.register es2015 bundle", async () => {
      const m = await System.import("/base/system/es2015/ivy/ngxs-store.js");
      expect(m.Store).toBeDefined();
    });

    it("can load the System.register es2015 prod bundle", async () => {
      const m = await System.import(
        "/base/system/es2015/ivy/ngxs-store.min.js"
      );
      expect(m.Store).toBeDefined();
    });
  });

  describe("@ngxs/router-plugin", () => {
    it("can load the System.register es2015 bundle", async () => {
      const m = await System.import(
        "/base/system/es2015/ivy/ngxs-router-plugin.js"
      );
      expect(m.RouterState).toBeDefined();
    });

    it("can load the System.register es2015 prod bundle", async () => {
      const m = await System.import(
        "/base/system/es2015/ivy/ngxs-router-plugin.min.js"
      );
      expect(m.RouterState).toBeDefined();
    });
  });

  describe("@ngxs/storage-plugin", () => {
    it("can load the System.register es2015 bundle", async () => {
      const m = await System.import(
        "/base/system/es2015/ivy/ngxs-storage-plugin.js"
      );
      expect(m.NgxsStoragePluginModule).toBeDefined();
    });

    it("can load the System.register es2015 prod bundle", async () => {
      const m = await System.import(
        "/base/system/es2015/ivy/ngxs-storage-plugin.min.js"
      );
      expect(m.NgxsStoragePluginModule).toBeDefined();
    });
  });

  describe("@ngxs/form-plugin", () => {
    it("can load the System.register es2015 bundle", async () => {
      const m = await System.import(
        "/base/system/es2015/ivy/ngxs-form-plugin.js"
      );
      expect(m.NgxsFormPluginModule).toBeDefined();
    });

    it("can load the System.register es2015 prod bundle", async () => {
      const m = await System.import(
        "/base/system/es2015/ivy/ngxs-form-plugin.min.js"
      );
      expect(m.NgxsFormPluginModule).toBeDefined();
    });
  });

  describe("@ngxs/devtools-plugin", () => {
    it("can load the System.register es2015 bundle", async () => {
      const m = await System.import(
        "/base/system/es2015/ivy/ngxs-devtools-plugin.js"
      );
      expect(m.NgxsReduxDevtoolsPluginModule).toBeDefined();
    });

    it("can load the System.register es2015 prod bundle", async () => {
      const m = await System.import(
        "/base/system/es2015/ivy/ngxs-devtools-plugin.min.js"
      );
      expect(m.NgxsReduxDevtoolsPluginModule).toBeDefined();
    });
  });

  describe("@ngxs/logger-plugin", () => {
    it("can load the System.register es2015 bundle", async () => {
      const m = await System.import(
        "/base/system/es2015/ivy/ngxs-logger-plugin.js"
      );
      expect(m.NgxsLoggerPluginModule).toBeDefined();
    });

    it("can load the System.register es2015 prod bundle", async () => {
      const m = await System.import(
        "/base/system/es2015/ivy/ngxs-logger-plugin.min.js"
      );
      expect(m.NgxsLoggerPluginModule).toBeDefined();
    });
  });
});
