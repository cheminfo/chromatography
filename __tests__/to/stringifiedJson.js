const should = require('should');
const {simple} = require('../../data/_examples.js');

test('Create a JSON', async () => {
    let json = JSON.stringify(simple);
    should(json.includes('series')).be.true();
    should(json.includes('times":[1,2]')).be.true();
    should(json.includes('meta')).be.true();
});