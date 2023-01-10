declare global {
  interface LenientGlobalVariableTypes {
    game: never; // the type doesn't matter
  }
  interface Window {
    Hooks: typeof Hooks;
  }

  interface JournalTextPageSheet {
    object: {
      uuid: string;
    };
  }
}

export {};
