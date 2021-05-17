const _ = require('lodash');

describe('jest', () => {
  it('toHaveBeenCalledWith allows us to check the paramaters received by the function', () => {
    const obj = {
      channelObject: {
        schedule: {
          operatingsDaysAndHours: [{
            location: 'channel'
          }]
        }
      },
      schedule: {
        operatingsDaysAndHours: [{
          location: 'campaign'
        }]
      }
    };

    const computeSchedule = jest.fn();

    const computeCampaign = () => {
      const schedule = computeSchedule(_.get(obj, 'channelObject.schedule') || obj.schedule);
    };

    computeCampaign();
    expect(computeSchedule).toHaveBeenCalledWith({
      operatingsDaysAndHours: [{
        location: 'channel'
      }]
    })
  })
})