module.exports = function(wallaby) {
    const testPathExp = 'src/**/__tests__/*.{js,jsx}';

    return {
        files: ['babel.config.js', 'tsconfig.json', 'src/**/*.+(js|jsx|ts|tsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)', `!${testPathExp}`],

        tests: [testPathExp],

        env: {
            type: 'node',
            runner: 'node'
        },

        compilers: {
            '**/*.js?(x)': wallaby.compilers.babel()
        },

        testFramework: 'jest'
    };
};