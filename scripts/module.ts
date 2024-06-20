import { EJHCONST } from "./EJHCONST";
import Logger from "./Logger";
import ModuleSettings from "./ModuleSettings";
import PrintButton from "./PrintButton";
import PrintButtonSinglePage from "./PrintButtonSinglePage";

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

      if(changes.pages) {
        await PrintButton.Add(app, changes.pages);
      }else{
        await PrintButtonSinglePage.Add(app, changes);
      }
    },
  );
});
