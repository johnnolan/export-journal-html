import CSSParser from "./CSSParser";
import { EJHCONST } from "./EJHCONST";

class HTMLParser {
  public static Create(journalPages: Array<JournalEntryPage>): string {
    const journalHtml = `<html>
      <head>
        <style type="text/css">${CSSParser.Get(document)}</style>
      </head>
      <body>
        <div class="sheet journal-sheet journal-entry">
          <section class="journal-entry-content flexcol">
            <div class="journal-entry-pages locked single-page">
              ${this._renderJournalPage(journalPages)}
            </div>
          </section>
        </div>
        ${this._showPrintDialog()}
      </body>
    </html>`;
    return HTMLParser._regexReplace(journalHtml);
  }

  private static _renderJournalPage(
    journalPages: Array<JournalEntryPage>
  ): string {
    let html = ``;
    console.debug(journalPages);
    journalPages.forEach((journalPage) => {
      console.debug(journalPage);
      if (journalPage.type === "text") {
        html += `<article class="journal-entry-page text">
      <header class="journal-page-header">
        <h1>${journalPage.name}</h1>
      </header>
      <section class="journal-page-content">
        ${journalPage.text.content}
      </section>
    </article>`;
      }
    });
    return html;
  }

  public static CreateLink(uuid: string, pagesArray: string): string {
    return `<a title="Print" class="ejh-print">
    <i class="fas fa-print" data-journal-uuid="${uuid}" data-journal-pages="${pagesArray}"></i>
  </a>`;
  }

  private static _regexReplace(journalHtml: string) {
    const regUUID = /@UUID\[(.+)\]\{(.+)\}/g;
    const regUrl = /img src="((?!http:\/\/)(?!https:\/\/))/g;
    const regCssUrl = /(src|background): url\("\.\./g;
    journalHtml = journalHtml.replaceAll(regUUID, "$2");
    journalHtml = journalHtml.replaceAll(
      regCssUrl,
      `$1: url("${window.location.protocol + "//" + window.location.host}`
    );
    journalHtml = journalHtml.replaceAll(
      regUrl,
      `img src="${window.location.protocol + "//" + window.location.host}/`
    );

    return journalHtml;
  }

  private static _showPrintDialog(): string {
    let script = "";
    if (
      game.settings.get(`${EJHCONST.MODULE_ID}`, `${EJHCONST.OPT_PRINT_DIALOG}`)
    ) {
      script = `<script>setTimeout("window.print()", 100);</script>`;
    }

    return script;
  }
}

export default HTMLParser;
