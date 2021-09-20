const { setHeadlessWhen } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://www.sbs.com.au',
      onRequest: (request) => {
      request.headers.auth = '123';
    }
  },
    WebDriver: {
      url: 'https://www.sbs.com.au',
      browser: 'chrome'
    },
  },  
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeCeptSBS',
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/frontend.js',
    './step_definitions/backend.js'
  ]
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}