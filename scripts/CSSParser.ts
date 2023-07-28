import { EJHCONST } from "./EJHCONST";

class CSSParser {
  public static Get(document: Document): string {
    let cssRules = this._cssBuilder();
    for (let i = 0; i < document.styleSheets.length; i++) {
      const styleSheet = document.styleSheets[i];
      if (styleSheet.href && styleSheet.href.indexOf(".css") > -1) {
        cssRules += `<link href="${styleSheet.href}" rel="stylesheet" type="text/css" media="all">`;
      }
    }
    return cssRules;
  }

  public static _stringifyRule(rule: CSSRule) {
    return rule.cssText || "";
  }

  private static _cssBuilder(): string {
    let rules = `<style type="text/css">${this._cssOverrides()}`;
    if (
      game.settings.get(
        `${EJHCONST.MODULE_ID}`,
        `${EJHCONST.OPT_REMOVE_BACKGROUND}`,
      )
    ) {
      rules += this._cssRemoveBackground();
    }
    rules += this._cssCustom();
    rules += `</style>`;

    return rules;
  }

  private static _cssOverrides(): string {
    return "body { overflow: auto !important; height: auto !important; position: relative !important;} ";
  }

  private static _cssRemoveBackground(): string {
    return "body { background-color: white; background-image: none !important; box-shadow: none !important; } .sheet.journal-entry .journal-entry-content { background: none !important; border: none !important; } ";
  }

  private static _cssCustom(): string {
    return game.settings.get(
      `${EJHCONST.MODULE_ID}`,
      `${EJHCONST.OPT_CUSTOM_CSS}`,
    );
  }
}

export default CSSParser;
