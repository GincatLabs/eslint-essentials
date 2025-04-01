/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */

// We can use camelCase, PascalCase and UPPER_CASE for variable names.
const myVariable = true;
const MyVariable = true;
const MY_VARIABLE = true;
const my_variable = true; // ❌

// We can use camelCase, PascalCase and UPPER_CASE for function names.
const myFunction = (): boolean => true;
const MyFunction = (): boolean => true;
const MY_FUNCTION = (): boolean => true;
const my_function = (): boolean => true; // ❌

// Class names must be in PascalCase.
class MyClass1 {}
class myClass2 {} // ❌

// Class methods must be in PascalCase.
class MyClass3 {
	public static MyMethod(): boolean {
		return true;
	}
	public static myMethod(): boolean { // ❌
		return true;
	}
}
