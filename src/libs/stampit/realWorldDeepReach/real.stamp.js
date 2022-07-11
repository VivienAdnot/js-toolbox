const stampit = require('@stamp/it');;
const { size } = require('lodash');

const CampaignFactory = stampit({
  props: {},
  init() {},
  methods: {
    async create() {
      const model = await this.modelGenerateFromCampaign();
      return model;
    },
  },
});

const CommonStructure = stampit({
  props: {},
  init() {},
  methods: {
    structureCommonGenerate() {
      const foo = this.fetchImageHash();
      return {
        foo,
      };
    },

    fetchImageHash() {
      const foo = this.marketingApi.foo();
      return foo;
    },

    computeOptimizationGoal({ objective }) {
      let data = {};

      switch (objective) {
        case 'REACH':
          data = {
            optimizationGoal: 'REACH',
            billingEvent: 'IMPRESSIONS',
          };
          break;
        case 'VISITS':
          data = {
            optimizationGoal: 'LINK_CLICKS',
            billingEvent: 'LINK_CLICKS',
          };
          break;
        case 'LEAD':
          data = {
            optimizationGoal: 'OFFSITE_CONVERSIONS',
            billingEvent: 'LINK_CLICKS',
          };
          break;
        default:
          throw new Error(`Unknown objective: ${objective}`);
      }

      return data;
    },

    computeGeoTargeting() {
      const { customLocations, excludedLocations } = this.object.geoTargeting;

      if (!size(customLocations) && !size(excludedLocations)) {
        // return empty object as it will be spreaded
        return {};
      }

      const targeting = {};

      if (size(customLocations)) {
        targeting.geo_locations = {
          custom_locations: customLocations.map((location) => {
            const { latitude, longitude, radius, distanceUnit = 'km' } = location;
            return { latitude, longitude, radius, distanceUnit };
          }),
        };
      }

      return {
        targeting,
      };
    },
  },
});

const FacebookCampaignFactory = stampit(CampaignFactory, CommonStructure, {
  props: {
    marketingApi: undefined,
  },
  init() {
    this.marketingApi = {
      foo: () => 'bar',
    };
  },
  methods: {
    async modelGenerateFromCampaign() {
      const model = await this.structureCommonGenerate();
      return model;
    },
  },
});

module.exports = { FacebookCampaignFactory, CommonStructure };
