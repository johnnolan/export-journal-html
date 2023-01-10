class DownloadJournal {
  public static Get(journalHtml: string): void {
    const bl = new Blob([journalHtml], { type: "text/html" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(bl);
    a.download = "journal-download.html";
    a.hidden = true;
    document.body.appendChild(a);
    a.innerHTML = "Download Journal";
    a.click();
  }
}

export default DownloadJournal;
