import { EJHCONST } from "./EJHCONST";

class ModuleSettings {
  /**
   * Register all module settings
   * @public
   * @return {void}
   */
  static Register(): void {
    game.settings.register(
      `${EJHCONST.MODULE_ID}`,
      `${EJHCONST.OPT_REMOVE_BACKGROUND}`,
      {
        name: game.i18n.format("ExportJournalHtml.opt_remove_background_name"),
        hint: game.i18n.format("ExportJournalHtml.opt_remove_background_hint"),
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
      }
    );

    game.settings.register(
      `${EJHCONST.MODULE_ID}`,
      `${EJHCONST.OPT_CUSTOM_CSS}`,
      {
        name: game.i18n.format("ExportJournalHtml.opt_custom_css_name"),
        hint: game.i18n.format("ExportJournalHtml.opt_custom_css_hint"),
        scope: "world",
        config: true,
        default: "",
        type: String,
      }
    );
  }
}

export default ModuleSettings;
