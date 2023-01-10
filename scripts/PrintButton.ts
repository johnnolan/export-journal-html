import DownloadJournal from "./DownloadJournal";
import HTMLParser from "./HTMLParser";

class PrintButton {
  public static async Add(app: JournalTextPageSheet): Promise<void> {
    const uuid = app.object.uuid;

    if (!uuid) {
      return;
    }

    const link = $(HTMLParser.CreateLink(uuid));

    link.on("click", async (evt) => {
      const journalEntryPage = await fromUuid(evt.target?.dataset?.journalUuid ?? "");
      if (!journalEntryPage) {
        return;
      }

      DownloadJournal.Get(HTMLParser.Parse(journalEntryPage.text.content));
    });

    $(document).find(".journal-sheet h4.window-title").after(link);
  }

  public static Delete(): void {
    $(document).find(".ejh-print").remove();
  }
}

export default PrintButton;
