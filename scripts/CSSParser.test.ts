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
    });

    it("It returns the contents as a string", async () => {
      const parsedCss = CSSParser.Get(document);

      expect(parsedCss).toBe(`body { overflow: auto !important; height: auto !important; position: relative !important;} .myStyle1 { background-color: rgb(255, 255, 255); }.myStyle2 { background-color: rgb(255, 255, 255); }
.myStyle3 { background-color: rgb(255, 255, 255); }`
      );
    });
  });
});
