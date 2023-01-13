class DownloadJournal {
  public static Tab(journalHtml: string, name: string): void {
    const a = document.createElement("a");
    a.href = this._generateHtmlBlob(journalHtml);
    a.download = `${name}.html`;
    a.hidden = true;
    document.body.appendChild(a);
    a.innerHTML = "Download Journal";
    a.click();
  }

  public static Popup(journalHtml: string, name: string): void {
    window.open(
      this._generateHtmlBlob(journalHtml),
      name,
      "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=800,top=" +
        (screen.height - 400) +
        ",left=" +
        (screen.width - 840)
    );
  }

  private static _generateHtmlBlob(journalHtml: string): string {
    return URL.createObjectURL(new Blob([journalHtml], { type: "text/html" }));
  }
}

export default DownloadJournal;
