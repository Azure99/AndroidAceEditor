ace.define("ace/snippets/c_cpp",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "## STL Collections\n\
# vector\n\
snippet vector\n\
	vector<${1:T}> ${2};${3}\n\
# set\n\
snippet set\n\
	set<${1:T}> ${2};${3}\n\
# map\n\
snippet map\n\
	map<${1:Key}, ${2:T}> ${3};${4}\n\
# stack\n\
snippet stack\n\
	stack<${1:T}> ${2};${3}\n\
# queue\n\
snippet queue\n\
	queue<${1:T}> ${2};${3}\n\
##\n\
## Input/Output\n\
# cout\n\
snippet cout\n\
	cout << ${1} << endl;${2}\n\
# cin\n\
snippet cin\n\
	cin >> ${1};${2}\n\
# printf\n\
snippet printf\n\
	printf(\"${1}\");${2}\n\
# scanf\n\
snippet scanf\n\
	scanf(\"${1}\", ${2})${3}\n\
##\n\
## Iteration\n\
# for i \n\
snippet fori\n\
	for (int ${2:i} = 0; $2 < ${1:count}; $2${3:++}) {\n\
		${4:/* code */}\n\
	}${5}\n\
\n\
##\n\
## include\n\
# include\n\
snippet include\n\
	#include <${1}>\n\
# using namespace std\n\
snippet std\n\
	using namespace std;\n\
# iostream\n\
snippet iiostream\n\
	#include <iostream>\n\
# stdio\n\
snippet istdio\n\
	#include <stdio.h>\n\
##\n\
## main\n\
# main\n\
snippet main\n\
	int main(){\n\
		${1}\n\
		return 0;\n\
	}\n\
";
exports.scope = "c_cpp";

});                (function() {
                    ace.require(["ace/snippets/c_cpp"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            