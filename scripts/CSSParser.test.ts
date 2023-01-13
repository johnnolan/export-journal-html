import CSSParser from "./CSSParser";

describe("CSSParser", () => {
  describe("Given I pass an array of styleSheets", () => {
    beforeEach(() => {
      (global as any).document = {
        styleSheets: [
          {
            href: "test.css",
            cssRules: [
              {
                cssText: ".myStyle1 { background-color: rgb(255, 255, 255); }",
              },
            ],
          },
          {
            href: "test2.css",
            cssRules: [
              {
                cssText: ".myStyle2 { background-color: rgb(255, 255, 255); }",
              },
              {
                cssText: ".myStyle3 { background-color: rgb(255, 255, 255); }",
              },
            ],
          },
          {
            href: "test3.woff2",
            cssRules: [
              {
                cssText: ".myStyle2 { background-color: rgb(255, 255, 255); }",
              },
              {
                cssText: ".myStyle3 { background-color: rgb(255, 255, 255); }",
              },
            ],
          },
          {
            href: "test4.css",
            cssRules: [],
          },
        ],
      };

      (global as any).game = {
        settings: {
          get: jest.fn().mockReturnValueOnce(false).mockReturnValueOnce(""),
        },
      };
    });

    it("It returns the contents as a string", async () => {
      const parsedCss = CSSParser.Get(document);

      expect(parsedCss).toBe(
        `<style type="text/css">body { overflow: auto !important; height: auto !important; position: relative !important;} </style><link href="test.css" rel="stylesheet" type="text/css" media="all"><link href="test2.css" rel="stylesheet" type="text/css" media="all"><link href="test4.css" rel="stylesheet" type="text/css" media="all">`
      );
    });
  });

  describe("Given I remove background CSS", () => {
    beforeEach(() => {
      (global as any).document = {
        styleSheets: [
          {
            href: "test.css",
            cssRules: [
              {
                cssText: ".myStyle1 { background-color: rgb(255, 255, 255); }",
              },
            ],
          },
        ],
      };

      (global as any).game = {
        settings: {
          get: jest.fn().mockReturnValueOnce(true).mockReturnValueOnce(""),
        },
      };
    });

    it("It returns the contents as a string", async () => {
      const parsedCss = CSSParser.Get(document);

      expect(parsedCss).toBe(
        `<style type=\"text/css\">body { overflow: auto !important; height: auto !important; position: relative !important;} body { background-color: white; background-image: none !important; box-shadow: none !important; } .sheet.journal-entry .journal-entry-content { background: none !important; border: none !important; } </style><link href=\"test.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\">`
      );
    });
  });

  describe("Given I add custom CSS", () => {
    beforeEach(() => {
      (global as any).document = {
        styleSheets: [
          {
            href: "test.css",
            cssRules: [
              {
                cssText: ".myStyle1 { background-color: rgb(255, 255, 255); }",
              },
            ],
          },
        ],
      };

      (global as any).game = {
        settings: {
          get: jest
            .fn()
            .mockReturnValueOnce(false)
            .mockReturnValueOnce("body { background-color: red; }"),
        },
      };
    });

    it("It returns the contents as a string", async () => {
      const parsedCss = CSSParser.Get(document);

      expect(parsedCss).toBe(
        `<style type=\"text/css\">body { overflow: auto !important; height: auto !important; position: relative !important;} body { background-color: red; }</style><link href=\"test.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\">`
      );
    });
  });
});
