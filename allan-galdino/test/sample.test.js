'use strict';

const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');

jest.setTimeout(500);

for (const p of [new Alexa(), new GoogleAssistant()]) {
  const testSuite = p.makeTestSuite();

  describe(`PLATFORM: ${p.constructor.name} INTENTS`, () => {
    test('should introduce Allan Galdino', async () => {
      const conversation = testSuite.conversation();

      const launchRequest = await testSuite.requestBuilder.launch();
      const response = await conversation.send(launchRequest);

      expect(response.isTell('Meet Allan. He is a voice app developer who has been building apps on Google Assistant and Amazon Alexa for over two years. Allan is a developer from Natura. You can see more in https://www.linkedin.com/in/allangsilva. Thanks!')).toBeTruthy();
    });
  });
}
