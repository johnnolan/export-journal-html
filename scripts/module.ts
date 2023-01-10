import { EJHCONST } from "./EJHCONST";
import Logger from "./Logger";

Hooks.on("init", function () {
  Logger.log(
    `Settings for ${EJHCONST.MODULE_NAME} registered successfully.`,
    "module.init"
  );
});

Hooks.once("ready", async function () {

  /*
    - Get HTML from journal directly
    - Find all images, fetch and base64 encode them
    - Replace images with encoding
    - Use getComputedStyle() or extract styles to html
    - Prompt download of HTML
  */
});

function addButton(app, html) {
  const link = $(`<a title="Print"><i class="fas fa-print"></i></a>`);
  link.on("click", (evt) => {
    const element = document
      .getElementsByClassName(
        "app window-app sheet journal-sheet journal-entry"
      )[0]
      .getElementsByClassName("journal-entry-page")[0];
    const width = element.clientWidth;
    const height = element.clientHeight;
    html2canvas(element, {
      useCORS: true,
    }).then((canvas) => {
      const options = {
        orientation: "p",
        unit: "px",
        format: [width + 15, height],
      };
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF(options);
      pdf.addImage(img, "PNG", 15, 15, width, height);
      pdf.save("your-filename.pdf");
    });
    /*$(".ez-print").removeClass("ez-print");
    html.addClass("ez-print");
    window.print();*/
  });

  html.find(".window-title").after(link);
}

Hooks.on("renderJournalSheet", addButton);