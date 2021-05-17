const { Point, Circle } = require('./shapes.stamp');

describe('stampit', () => {
  it('distance point', () => {
    // Creating instance of the Point.
    const point = Point({ x: 12, y: 42 });
    // Calling a method.
    const distance = point.distance({ x: 13, y: 42 });
    expect(distance).toEqual(1.0);
  });

  it('distance Circle', () => {
    // two difference initializers here !
    const circle = Circle({ x: 12, y: 42, radius: 1.5 });
    const distance = circle.distance({ x: 12, y: 42 });

    // calling a method
    expect(distance).toEqual(-1.5);
    expect(circle.x).toEqual(12);
  });
});
