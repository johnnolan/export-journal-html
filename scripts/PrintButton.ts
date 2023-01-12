import DownloadJournal from "./DownloadJournal";
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
      const journalUuid = evt.target?.dataset?.journalUuid;
      const journalPages = evt.target?.dataset?.journalPages?.split(",") ?? [];

      const journalEntry = await fromUuid(journalUuid ?? "");
      if (!journalEntry) {
        return;
      }

      const finalPages = [];

      for (let i = 0; i < journalPages.length; i++) {
        const journalPageId = journalPages[i];
        finalPages.push(journalEntry.pages.get(journalPageId));
      }

      DownloadJournal.Get(HTMLParser.Create(finalPages));
    });

    $(document).find(".journal-sheet h4.window-title").after(link);
  }

  public static Delete(): void {
    $(document).find(".ejh-print").remove();
  }
}

export default PrintButton;
