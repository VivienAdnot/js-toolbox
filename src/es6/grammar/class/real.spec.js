class AdAccount {
  constructor(id) {
    this._id = id;
  }

  createAdImage(object) {
    console.log('createAdImage', object);
    return {
      image: object,
    };
  }

  createAd(object) {
    console.log('createAd', object);
    return {
      ad: object,
    };
  }
}

describe('class real', () => {
  it('', () => {
    const object = { foo: 'bar' };
    const bob = new AdAccount('1234A');
    expect(bob['createAdImage'](object)).toEqual({
      image: object,
    });
  });
});
