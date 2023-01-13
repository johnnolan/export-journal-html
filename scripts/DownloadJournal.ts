class DownloadJournal {
  public static Tab(journalHtml: string, name: string): void {
    const bl = new Blob([journalHtml], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(bl);
    a.download = `${name}.html`;
    a.hidden = true;
    document.body.appendChild(a);
    a.innerHTML = "Download Journal";
    a.click();
  }

  public static Popup(journalHtml: string, name: string): void {
    const win = window.open(
      "",
      name,
      "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=800,top=" +
        (screen.height - 400) +
        ",left=" +
        (screen.width - 840)
    );
    win.document.body.innerHTML = journalHtml;
  }
}

export default DownloadJournal;
