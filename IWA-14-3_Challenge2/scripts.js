const add = (a, b) => a + b 

const multiply = (a, b) => a * b

function internal() {
	const added = this.add(this.internal.a, this.internal.b)
	const multi = this.multiply(this.internal.a, this.internal.b)
	// return `${added} , ${multi}`
	// this.internal.c = multi - added
	// return this.internal.c
	return added*multi
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add, // a+b=2+4=6
	multiply, // a*b=2*4=8
	calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 8,
	},
	add,
	multiply,
	calculate: internal
}

console.log(example1.calculate()) // 48
console.log(example2.calculate())  // 12
// console.log(example1.add)