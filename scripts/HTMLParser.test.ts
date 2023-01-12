import HTMLParser from "./HTMLParser";

describe("HTMLParser", () => {
  describe("Given I create a link", () => {
    beforeEach(() => {
      (global as any).game = {
        settings: {
          get: jest.fn().mockReturnValueOnce(false),
        },
      };
    });
    it("It returns the correct link markup", async () => {
      const parsedCss = HTMLParser.CreateLink("some-uuid.well");

      expect(parsedCss).toBe(
        `<a title=\"Print\" class=\"ejh-print\">
    <i class=\"fas fa-print\" data-journal-uuid=\"some-uuid.well\"></i>
  </a>`
      );
    });
  });

  describe("Given I parse the HTML with regex", () => {
    beforeEach(() => {
      (global as any).window = {
        location: {
          host: "localhost",
          protocol: "https:",
        },
      };

      (global as any).game = {
        settings: {
          get: jest.fn().mockReturnValueOnce(false),
        },
      };
    });

    it("It returns the correct background CSS link", async () => {
      const parsedHtml = HTMLParser._regexReplace(
        `.dice-tooltip { position: fixed; background: url("../ui/parchment.jpg") repeat;`
      );

      expect(parsedHtml).toBe(
        `.dice-tooltip { position: fixed; background: url("https://localhost/ui/parchment.jpg") repeat;`
      );
    });

    it("It returns the correct src CSS link", async () => {
      const parsedHtml = HTMLParser._regexReplace(
        `.dice-tooltip { position: fixed; src: url("../ui/parchment.jpg") repeat;`
      );

      expect(parsedHtml).toBe(
        `.dice-tooltip { position: fixed; src: url("https://localhost/ui/parchment.jpg") repeat;`
      );
    });

    it("It returns the correct img src link", async () => {
      const parsedHtml = HTMLParser._regexReplace(
        `<img src="ui/parchment.jpg" />`
      );

      expect(parsedHtml).toBe(
        `<img src="https://localhost/ui/parchment.jpg" />`
      );
    });

    it("It replaces the UUID with the item description", async () => {
      const parsedHtml = HTMLParser._regexReplace(
        `@UUID[Actor.P7wMI87gJscNpB48.Item.cJSgMA5yYoDDPNaq]{Blade Ward}`
      );

      expect(parsedHtml).toBe(`Blade Ward`);
    });
  });

  describe("Given I enable show print dialog", () => {
    beforeEach(() => {
      (global as any).window = {
        location: {
          host: "localhost",
          protocol: "https:",
        },
      };

      (global as any).game = {
        settings: {
          get: jest.fn().mockReturnValueOnce(true),
        },
      };
    });

    it("It returns the correct background CSS link", async () => {
      const parsedHtml = HTMLParser._showPrintDialog();
      expect(parsedHtml).toContain(`window.print()`);
    });
  });
});
