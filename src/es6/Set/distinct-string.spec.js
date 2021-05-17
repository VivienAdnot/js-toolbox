const scenarioChannelStatus = {
  setup: 'setup',
  ready2launch: 'ready2launch',
  ready2run: 'ready2run',
  running: 'running',
  paused: 'paused',
  ended: 'ended',
};

const scenarioStatus = {
  setup: 'setup',
  review: 'review',
  running: 'running',
  ended: 'ended',
  archived: 'archived',
};

it("union distinc string", () => {
  const scenarioChannelStatusSet = new Set(Object.values(scenarioChannelStatus));
  const scenarioStatusSet = new Set(Object.values(scenarioStatus));

  for (let scenarioStatus of scenarioStatusSet) {
    scenarioChannelStatusSet.add(scenarioStatus);
  }

  expect([...scenarioChannelStatusSet]).toEqual([
    'setup',
    'ready2launch',
    'ready2run',
    'running',
    'paused',
    'ended',
    'review',
    'archived'
  ]);
});