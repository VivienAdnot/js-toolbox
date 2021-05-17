describe('while loop', () => {
  it('while super simple', () => {
    let i = 1;

    while (i < 5) {
      i += 1;
    }

    expect(i).toEqual(5);
  });

  it('do while super simple', () => {
    let i = 1;

    do {
      i += 1;
    } while (i < 5)

    expect(i).toEqual(5);
  });

  it('while + break', () => {
    let i = 1;

    while (i < 5) {
      if (i === 3) break;
      i += 1;
    }

    expect(i).toEqual(3);
  })

  describe('while real world', () => {
    let available = false;
    let index = 0;
    let name = 'coucou';

    const exists = (index) => {
      switch (index) {
        case 10: return false
        default: return true
      }
    }

    describe('test exists', () => {
      let expectedResults = Array.from({ length: 10 }).map(() => true);
      expectedResults.push(false);

      expectedResults.forEach((expectedResult, idx) => {
        it(`${idx} should be ${expectedResult}`, () => {
            expect(exists(idx)).toEqual(expectedResult);
        })
      });
    })

    while (available === false) {
      available = !exists(index);
      if (!available) {
        index++;
      }
    }

    if (index !== 0) {
      name += ` - ${index}`;
    }

    it('coucou', () => {
      expect(name).toEqual('coucou - 10');
    })
  })
});