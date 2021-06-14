const stampit = require('@stamp/it');;
const { FacebookCampaignFactory, CommonStructure } = require('./real.stamp');

it('foo: bar', async () => {
  const facebookCampaign = FacebookCampaignFactory();
  const result = await facebookCampaign.create();

  expect(result).toEqual({ foo: 'bar' });
});

it('computeOptimizationGoal', () => {
  const struct = CommonStructure();
  expect(struct.computeOptimizationGoal({ objective: 'REACH' })).toEqual({
    optimizationGoal: 'REACH',
    billingEvent: 'IMPRESSIONS',
  });
});

it('computeGeoTargeting', () => {
  const Origin = stampit({
    props: {
      object: {
        geoTargeting: {
          locale: 'fr-FR',
          geoTexts: ['campaign geotext 1', 'campaign geotext 2'],
          customLocations: [
            {
              latitude: 18.93,
              longitude: 30.37,
              radius: 78.83,
              addressString: 'campaign customlocation 1',
              distanceUnit: 'km',
            },
            {
              latitude: 13.19,
              longitude: 9.55,
              radius: 58.12,
              addressString: 'campaign customlocation 2',
              distanceUnit: 'km',
            },
          ],
        },
      },
    },
    init: {},
    methods: {},
  });

  const FacebookTestStruct = stampit(Origin, CommonStructure);
  const struct = FacebookTestStruct();

  expect(struct.computeGeoTargeting()).toEqual({
    targeting: {
      geo_locations: {
        custom_locations: [
          {
            latitude: 18.93,
            longitude: 30.37,
            radius: 78.83,
            distanceUnit: 'km',
          },
          {
            latitude: 13.19,
            longitude: 9.55,
            radius: 58.12,
            distanceUnit: 'km',
          },
        ],
      },
    },
  });
});
