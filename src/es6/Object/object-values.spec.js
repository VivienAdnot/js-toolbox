describe('Object.values', () => {
  it('get first from object values', () => {
    const body = { bar: 'baz', foo: 'bar', baz: 'bazob' };
    const result = Object.values(body)[0];

    expect(result).toEqual('baz');
  });

  it('get all props named keys from object', () => {
    const medias = {
      fb: {
        label: 'Facebook',
        key: 'fb',
      },
      google: {
        label: 'Google',
        key: 'google',
      },
      instagram: {
        label: 'Instagram',
        key: 'instagram',
      },
      linkedin: {
        label: 'Linkedin',
        key: 'linkedin',
      },
      xandr: {
        label: 'Xandr',
        key: 'xandr',
      },
      email: {
        label: 'Email',
        key: 'email',
      },
    };

    const keys = Object.values(medias).map(({ key }) => key);
    expect(keys).toEqual(['fb', 'google', 'instagram', 'linkedin', 'xandr', 'email']);
  })

  it('edge case', () => {
    const body = undefined;
    const result = body ? Object.values(body)[0] : null;

    expect(result).toBe(null);
  });
});
