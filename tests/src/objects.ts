/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */

// We should use quotes consistently and only when needed.
const object = {
	a: {
		foo: true,
		'bar': true, // ❌
	},
	b: {
		foo: true,
		bar: true,
	},
	c: {
		'foo': true,
		'b-a-r': true,
	},
};

// We can use dot notation and bracket notation.
object.a.foo = true;
object['a']['foo'] = true;
