function toCase(text) {
  // write your code here
	const lower = text.lowerCase();
	const upper = text.upperCase();
	return lower-upper;
}

// DO not change the code below

const text = prompts("Enter text:");
alert(toCase(text));
