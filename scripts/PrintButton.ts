import DownloadJournal from "./DownloadJournal";
import { EJHCONST } from "./EJHCONST";
import HTMLParser from "./HTMLParser";

class PrintButton {
  public static async Add(
    app: JournalTextPageSheet,
    pages: Array<JournalSheet>
  ): Promise<void> {
    const uuid = app.object.uuid;

    if (!uuid) {
      return;
    }

    const pagesArray = pages
      .filter((f) => f.type === "text")
      .map((m) => {
        return m._id;
      });

    if (pagesArray.length === 0) {
      return;
    }

    const link = $(HTMLParser.CreateLink(uuid, pagesArray.join(",")));

    link.on("click", async (evt) => {
      if (navigator.userAgent.toLowerCase().indexOf(" electron/") !== -1) {
        ui.notifications.warn(
          `${game.i18n.localize("ExportJournalHtml.warn_electron")}`
        );
        return;
      }

      const journalUuid = evt.target?.dataset?.journalUuid;
      const journalPages = evt.target?.dataset?.journalPages?.split(",") ?? [];

      const journalEntry = await fromUuid(journalUuid ?? "");
      if (!journalEntry) {
        return;
      }

      const finalPages = [];

      for (const journalPageId of journalPages) {
        finalPages.push(journalEntry.pages.get(journalPageId));
      }

      if (game.settings.get(`${EJHCONST.MODULE_ID}`, `${EJHCONST.OPT_POPUP}`)) {
        DownloadJournal.Popup(
          HTMLParser.Create(finalPages),
          journalEntry?.name ?? "Journal"
        );
      } else {
        DownloadJournal.Tab(
          HTMLParser.Create(finalPages),
          journalEntry?.name ?? "Journal"
        );
      }
    });

    $(document).find(".journal-sheet h4.window-title").after(link);
  }

  public static Delete(): void {
    $(document).find(".ejh-print").remove();
  }
}

export default PrintButton;
