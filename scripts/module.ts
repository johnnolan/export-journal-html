import { EJHCONST } from "./EJHCONST";
import Logger from "./Logger";
import ModuleSettings from "./ModuleSettings";
import PrintButton from "./PrintButton";

Hooks.on("init", function () {
  ModuleSettings.Register();

  Logger.log(
    `Settings for ${EJHCONST.MODULE_NAME} registered successfully.`,
    "module.init",
  );
});

Hooks.once("ready", async function () {
  Hooks.on(
    "renderJournalSheet",
    async function (app: JournalSheet, _html: JQuery, changes: unknown) {
      PrintButton.Delete();
      await PrintButton.Add(app, changes.pages);
    },
  );
});
