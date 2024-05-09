  

function getSuiteConfig1() {
  return {
    paths: [
      // Run these feature files.
      "features/*.feature"
    ],
    import: [
      // Load step implementations and hooks.
      "steps/*.ts",
      "hooks/hooks.ts"
    ]
  }
}



function getSuiteConfig(suite) {
switch (suite) {
  case 'smoke':
    return {
      paths: [
        // Run these feature files.
        "features/*.feature"
      ],
      import: [
        // Load step implementations and hooks.
        "dist/steps/*.js",
        "dist/hooks/hooks.js",
        "dist/pages/login-po/*.js"
      ]
    }
  default:
    throw new Error('Unsupported value for "suite": ' + suite)
}
}

function getProfiles(suite) {
  const profilePrefix =
  suite === ''
    ? suite
    : suite + '_'
return {
  [profilePrefix + 'default']: {
    ...getSuiteConfig('smoke'),
  },
    
  }
}


const final = {
...getProfiles('smoke'),
}

module.exports = final

