describe("ES6", () => {
  describe("destructuring", () => {
    it("rest", () => {
      let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

      expect(x).toEqual(1);
      expect(y).toEqual(2);
      expect(z).toEqual({ a: 3, b: 4 });
    });

    it("rename variable", () => {
      const foo = {
        bar: "baz"
      };
      let { bar: ha } = foo;

      expect(ha).toEqual("baz");
    });

    it("nested", () => {
      const message = {
        code: "coucou",
        payload: {
          data1: "ok",
          data2: "haha"
        }
      };

      const {
        code,
        payload: { data1, data2 }
      } = message;

      expect(code).toEqual("coucou");
      expect(data1).toEqual("ok");
      expect(data2).toEqual("haha");
    });

    it('array', () => {
      const array = [1, 2, 3];
      const [first, second] = array;

      expect(first).toEqual(1);
      expect(second).toEqual(2);

      // ensure array is unchanged
      expect(array).toEqual([1, 2, 3]);
    })

    it('array of object', () => {
      const adSets = [{
        name: 'foo',
        adMessages: [{
          id: 1803,
          narratives: {
            callToActionType: "bar",
            additionalInformation: "come and eat"
          }
        }]
      }];

      const [adSet] = adSets;
      const { adMessages: [{ narratives }] } = adSet;
      const { callToActionType, additionalInformation } = narratives;

      expect(callToActionType).toEqual('bar'),
      expect(additionalInformation).toEqual("come and eat")
    })

    describe("set default value", () => {
      it("1", () => {
        const { dogName = "snickers" } = { dogName: undefined };
        expect(dogName).toEqual("snickers");
      });

      it("2", () => {
        const { dogName = "snickers" } = { dogName: null };
        expect(dogName).toEqual(null);
      });

      it("3", () => {
        const { dogName = "snickers" } = { dogName: false };
        expect(dogName).toEqual(false);
      });

      it("4", () => {
        const { dogName = "snickers" } = { dogName: 0 };
        expect(dogName).toEqual(0);
      });
    });

    it("inside for-of loop", () => {
      const comments = [
        {
          comment: { id: 1, text: "foo" },
          owner: { id: 10, username: "toto" }
        },
        {
          comment: { id: 2, text: "bar" },
          owner: { id: 20, username: "tata" }
        }
      ];

      let final = {
        commentId: "",
        ownerId: "",
        commentText: "",
        ownerUsername: ""
      };

      for (let { comment, owner } of comments) {
        final.commentId += "-" + comment.id;
        final.ownerId += "-" + owner.id;
        final.commentText += "-" + comment.text;
        final.ownerUsername += "-" + owner.username;
      }

      expect(final).toEqual({
        commentId: "-1-2",
        ownerId: "-10-20",
        commentText: "-foo-bar",
        ownerUsername: "-toto-tata"
      });
    });

    describe("function parameters", () => {
      it("update value", () => {
        const fn = ({ num1, num2 }) => {
          num1 *= 2;
          num2 *= 2;

          return { num1, num2 };
        };

        expect(fn({ num1: 2, num2: 4 })).toEqual({
          num1: 4,
          num2: 8
        });
      });
    });

    it('real world', () => {
      const params = {
        foo: 'bar',
        fbActivated: 'false',
      };

      const target = {
        ...params,
        fbActivated: 'True',
      }

      expect(target).toEqual({
        foo: 'bar',
        fbActivated: 'True',
      })
    })
  });
});
