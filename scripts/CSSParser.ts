class CSSParser {
  public static Get(document: Document): string {
    let cssRules =
      "body { overflow: auto !important; height: auto !important; position: relative !important;} ";
    for (let i = 0; i < document.styleSheets.length; i++) {
      const styleSheet = document.styleSheets[i];
      if (styleSheet.href && styleSheet.href.indexOf(".css") > -1) {
        cssRules += styleSheet.cssRules
          ? Array.from(styleSheet.cssRules)
              .map((rule) => this._stringifyRule(rule))
              .join("\n")
          : "";
      }
    }
    return cssRules;
  }

  public static _stringifyRule(rule: CSSRule) {
    return rule.cssText || "";
  }
}

export default CSSParser;
