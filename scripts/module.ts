import { EJHCONST } from "./EJHCONST";
import Logger from "./Logger";

Hooks.on("init", function () {
  Logger.log(
    `Settings for ${EJHCONST.MODULE_NAME} registered successfully.`,
    "module.init"
  );
});

Hooks.once("ready", async function () {

});
