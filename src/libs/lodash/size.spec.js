const _ = require("lodash");

// size returns array length, props length for objects and length of a string
// tips: if array if null or undefined, it returns 0, so no need to check it before

describe("lodash", () => {
  describe("size", () => {
    it('check 1',() => {
      const foo = ['A'];
      const bar = [];

      expect(_.size(foo)).toEqual(1)
      expect(_.size(foo)).toBeTruthy();
      
      
      
      expect(_.size(bar)).toEqual(0)
      expect(_.size(bar)).toBeFalsy();


    })
    describe("0 legit values", () => {
      describe("edge cases returns 0", () => {
        it("null returns 0", () => {
          expect(_.size(null)).toBe(0);
        });

        it("undefined returns 0", () => {
          expect(_.size(undefined)).toBe(0);
        });
      });

      it("empty array returns 0", () => {
        expect(_.size([])).toBe(0);
      });

      it("empty object returns 0", () => {
        expect(_.size({})).toBe(0);
      });

      it("empty string returns 0", () => {
        expect(_.size("")).toBe(0);
      });
    });

    it("array length", () => {
      expect(_.size([1, 2, 3])).toBe(3);
    });

    it('object of array', () => {
      const object = {
        channels: []
      }

      expect(_.size(_.get(object, 'channels'))).toBe(0);
    })

    it("object length", () => {
      expect(
        _.size({
          foo: "bar",
          bar: "baz",
          boom: "boomboom",
        })
      ).toBe(3);
    });

    it("string length", () => {
      expect(_.size("foo:bar")).toBe(7);
    });

    it("Map length", () => {
      const myMap = new Map([
        ["foo", "bar"],
        ["bar", "baz"],
        ["boom", "boomboom"],
      ]);

      expect(_.size(myMap)).toBe(3);
    });

    it("edge cases", () => {
      const data = null;
      const size = _.size(_.get("data.items"));

      expect(size).toBe(0);
    });

    describe('real cases', () => {

      it("1", () => {
        const object = null;
  
        const length = _.size(_.get(object, "channels"));
        expect(length).toBe(0);
      });

      it('2', () => {
        const geoTargeting = {
          geoTexts: [1, 2]
        }
        const useGeoTexting = _.size(_.get(geoTargeting, 'geoTexts', [])) > 0;
        expect(useGeoTexting).toBe(true)
      })
    })
  });
});
