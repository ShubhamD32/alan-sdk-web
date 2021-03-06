import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import alanBtn from "@alan-ai/alan-sdk-web";

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

alanBtn({
  key: '4d292cf043b0a2ea4d0bf347580da6fd2e956eca572e1d8b807a3e2338fdd0dc/prod',
  onCommand: (commandData) => {
    console.log(commandData);
    if (commandData.command === 'command-example') {
      document.getElementById('rocket').style.transform = 'rotate(180deg)';
    }
  }
});

export default App;
