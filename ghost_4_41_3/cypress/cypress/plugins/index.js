/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const fs = require('fs');
const path = require('path');
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('before:spec',(spec) => {
    dir = './cypress/screenshots/'+spec.name;

    if (fs.existsSync(dir)){
      fs.readdir(dir, (err, files) => {
        if (err) throw err;
        for (const file of files) {
          fs.unlink(path.join(dir, file), err => {
            if (err) throw err;
          });
        }
      });
    }

  });
}
