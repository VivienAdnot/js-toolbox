describe('regexp real', () => {
  const isKeyAnId = (key) => /id$/.test(key) || /hash$/.test(key);

  it('should ok _id', () => {
    const result = isKeyAnId('advertiser_id');
    expect(result).toBe(true);
  });

  it('should ok hash', () => {
    expect(isKeyAnId('image_hash')).toBe(true);
  });

  it('should no ok', () => {
    expect(isKeyAnId('foo')).toBe(false);
  });
});