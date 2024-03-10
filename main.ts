//*Stripping Names: Store a person’s name, and include some whitespace characters at the 
//beginning and end of the name. Make sure you use each character combination, "\t" and "\n", 
//at least once. Print the name once, so the whitespace around the name is displayed. Then print 
//the name after striping the white spaces. *//
// \t is used for 4 word space
// \n used for next line
let personName: String =`\n\t Nouman Nadeem\t\n`
console.log(personName);
//.trim used for removed white space 
let stripped: String = personName.trim()
console.log(stripped);

