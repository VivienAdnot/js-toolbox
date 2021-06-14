const stampit = require('@stamp/it');

const Point = stampit({
  props: {
    // default property values
    x: 0,
    y: 0,
  },
  init({ x, y }) {
    console.log("point init");
    // kinda constructor
    if (x != null) this.x = x;
    if (y != null) this.y = y;
    this.foo = "bar";
  },
  methods: {
    // that goes to the prototype
    distance(point) {
      console.log("Point.distance", this.foo);
      return Math.sqrt(
        Math.abs(this.x - point.x) ** 2 + Math.abs(this.y - point.y) ** 2
      );
    },
  },
});

// kinda inheritance, but not really
const Circle = stampit(Point, {
  props: {
    radius: 1,
  },
  init({ radius }) {
    console.log("Circle init");
    if (radius != null) this.radius = radius;
  },
  methods: {
    // that goes to the prototype
    distance(point) {
      console.log("Circle.distance", this.foo);
      return Point(point).distance(this) - this.radius;
    },
  },
});

module.exports = { Point, Circle };
