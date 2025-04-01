const array = [1, 2, 3, 4, 5];

// No curly braces when single line
if (array.length > 0) console.log(array);
while (array.length < 0) console.log(array.pop());
for (const num of array) console.log(num);

if (array.length > 0) {
	// Curly braces when multiline
	console.log(array);
}

while (array.length < 0) {
	// Curly braces when multiline
	console.log(array);
}

for (const num of array) {
	// Curly braces when multiline
	console.log(num);
}
