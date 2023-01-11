import { EJHCONST } from "./EJHCONST";
import Logger from "./Logger";
import ModuleSettings from "./ModuleSettings";
import PrintButton from "./PrintButton";

Hooks.on("init", function () {
  ModuleSettings.Register();

  Logger.log(
    `Settings for ${EJHCONST.MODULE_NAME} registered successfully.`,
    "module.init"
  );
});

Hooks.once("ready", async function () {
  Hooks.on(
    "renderJournalTextPageSheet",
    async function (app: JournalTextPageSheet) {
      PrintButton.Delete();
      await PrintButton.Add(app);
    }
  );
  Hooks.on("renderJournalImagePageSheet", async function () {
    PrintButton.Delete();
  });
  Hooks.on("renderJournalPDFPageSheet", async function () {
    PrintButton.Delete();
  });
  Hooks.on("renderJournalVideoPageSheet", async function () {
    PrintButton.Delete();
  });
});
