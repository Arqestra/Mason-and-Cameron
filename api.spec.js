const { describe } = require('node:test');

global.fetch = require('jest-fetch-mock');

describe('api helpers', () => {
    beforeEach (() => {
        fetch.resetMocks();
    })

    describe('getGithubUserinfo')
})
