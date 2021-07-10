describe('Object.entries', () => {
  describe('iterate over object', () => {
    it('first method to achieve it', () => {
      const object = {
        foo: 'bar',
        bar: 'baz',
        baz: 'foo',
      };
  
      const result = [];
  
      for (let [key, value] of Object.entries(object)) {
        result.push([key, value]);
      }
  
      expect(result).toEqual([
        ['foo', 'bar'],
        ['bar', 'baz'],
        ['baz', 'foo'],
      ]);
    })

    it('second method method to achieve it', () => {
      const object = {
        foo: 'bar',
        bar: 'baz',
        baz: 'foo',
      };

      const result = Object.entries(object).map(([key, value]) => {
        return [key, value];
      });

      expect(result).toEqual([
        ['foo', 'bar'],
        ['bar', 'baz'],
        ['baz', 'foo'],
      ]);
    });

    it('weird nested object structure iteration', () => {
      const adMessages = [
        {
          carousel: {
            adName: 'carousel 1',
            callToAction: 'GET_QUOTE'
          }
        },
        {
          ppl: {
            adName: 'ppl 1',
            callToAction: 'GET_DIRECTIONS'
          }
        }
      ];

      const generateCarouselAd = (adMessage) => ({ type: 'CAROUSEL', ...adMessage });
      const generatePPLAd = (adMessage) => ({ type: 'PPL', ...adMessage });

      const ads = adMessages.map(adMessageWrapper => {
        const [[adMessageType, adMessage]] =  Object.entries(adMessageWrapper);

        switch (adMessageType) {
          case 'carousel': return generateCarouselAd(adMessage);
          case 'ppl': return generatePPLAd(adMessage);
          default: throw new Error(`Unknown adMessageType: ${adMessageType}`);
        }
      });

      expect(ads).toEqual([
        { type: 'CAROUSEL', adName: 'carousel 1', callToAction: 'GET_QUOTE' },
        { type: 'PPL', adName: 'ppl 1', callToAction: 'GET_DIRECTIONS' }
      ]);
    })
  });
});