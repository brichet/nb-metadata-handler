import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the nb-metadata-handler extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'nb-metadata-handler:plugin',
  description: 'A JupyterLab extension to handle notebook metadata.',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension nb-metadata-handler is activated!');

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('nb-metadata-handler settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for nb-metadata-handler.', reason);
        });
    }
  }
};

export default plugin;
