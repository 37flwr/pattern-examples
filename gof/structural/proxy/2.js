// https://github.com/advanced-rest-client/arc-electron/blob/4a40ffe7cb044fa1a2f828a5e0ebff3651ee28a9/src/io/models/ThemeInfo.js

// ThemeInfo.js

export class ThemeInfo extends ArcPreferences {
  async setActive(name) {
    const data = await this.load(); // ArcPreferences method;
    if (!Array.isArray(data.themes)) {
      throw new Error(`No installed themes.`);
    }
    const index = data.themes.findIndex((item) => item.name === name);
    if (index === -1) {
      throw new Error(`The ${name} theme is not installed.`);
    }
    data.active = name;
    await this.store();
  }
}

// ArcPreferences.js

export class ArcPreferences {
  // ...
  async store() {
    await this.storeFile(this.settingsFile, this[settingsSymbol]);
  }
}

/*
    ____________________________DESCRIPTION_______________________________
    ThemeInfo at first checks for some conditions and if those conditions are met,
    it passes the final call to the ArcPreferences class
*/
