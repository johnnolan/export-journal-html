import DownloadJournal from "./DownloadJournal";
import { EJHCONST } from "./EJHCONST";
import HTMLParser from "./HTMLParser";

class PrintButton {
  public static async Add(
    app: JournalTextPageSheet,
    changes: any
  ): Promise<void> {
    const uuid = app.object.uuid;

    if (!uuid) {
      return;
    }

    const page = changes.data;

    if (!page) {
      return;
    }

    const link = $(HTMLParser.CreateLink(uuid, page._id));

    link.on("click", async (evt) => {
      if (navigator.userAgent.toLowerCase().indexOf(" electron/") !== -1) {
        ui.notifications.warn(
          `${game.i18n.localize("ExportJournalHtml.warn_electron")}`,
        );
        return;
      }

      const journalUuid = evt.target?.dataset?.journalUuid;
      const journalEntry = await fromUuid(journalUuid ?? "");

      if (!journalEntry) {
        return;
      }

      const finalPages = [];
      finalPages.push(journalEntry._source)


      if (game.settings.get(`${EJHCONST.MODULE_ID}`, `${EJHCONST.OPT_POPUP}`)) {
        DownloadJournal.Popup(
          HTMLParser.Create(finalPages),
          journalEntry?.name ?? "Journal",
        );
      } else {
        DownloadJournal.Tab(
          HTMLParser.Create(finalPages),
          journalEntry?.name ?? "Journal",
        );
      }
    });

    $(document).find(".monks-enhanced-journal h4.window-title").after(link);

  }

  public static Delete(): void {
    $(document).find(".ejh-print").remove();
  }
}

export default PrintButton;
