  
const useParallel =
(undefined === process.env.CUCUMBER_PARALLEL)
  ? true
  : (/true|1/i).test(process.env.CUCUMBER_PARALLEL)
const parallelNumber = process.env.CUCUMBER_PARALLEL_NUMBER || 3


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
  case 'functional':
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
  default:
    throw new Error('Unsupported value for "suite": ' + suite)
}
}

function getProfiles(suite) {
const profilePrefix =
  suite === ''
    ? suite
    : suite + '_'
const suiteFSName =
  suite === ''
    ? 'unit'
    : suite
//switch (suite) {
//  case 'unit':
//    return ___
//  case 'functional':
//    return ___
//  default:
//    throw new Error('Unsupported value for "suite": ' + suite)
//}
return {
  [profilePrefix + 'default']: {
    ...getSuiteConfig('functional'),
    format: [
      `html:test/results/cucumber-report.${suiteFSName}.html`,
      'progress-bar',
    ],
    ...(useParallel && { parallel: parallelNumber }),
  },
    [profilePrefix + 'generate_snippets']: {
    ...getSuiteConfig(suite),
    dryRun: true,
    format: [
      'snippets'
    ],
    formatOptions: {
      // Format for generating snippets for missing step implementations. 'async-await', 'callback', 'promise', 'synchronous' .
      snippetInterface: 'async-await',
    }
  },
    ...(useParallel && { parallel: parallelNumber }),
  }
}


const final = {
   // Default profiles are generated with same settings as 'unit' profiles.
...getProfiles('functional'),
}

module.exports = final

