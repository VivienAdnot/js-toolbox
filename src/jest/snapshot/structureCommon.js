const constants = {
  status: {
    ACTIVE: 'ACTIVE',
    ARCHIVED: 'ARCHIVED',
    DELETED: 'DELETED',
    PAUSED: 'PAUSED',
  },
};

const config = {
  version: '1.0',
  special_ad_category: 'NONE',
  bid_strategy: 'LOWEST_COST_WITHOUT_CAP',
};

const generateStructure = (campaign) => {
  const { name, objective } = campaign;

  const structure = {
    version: config.version,
    campaigns: [
      {
        // main fields
        objective,
        name: name,
        special_ad_category: config.special_ad_category,
        status: constants.status.PAUSED,
      },
    ],
  };

  return structure;
};

module.exports = generateStructure;
