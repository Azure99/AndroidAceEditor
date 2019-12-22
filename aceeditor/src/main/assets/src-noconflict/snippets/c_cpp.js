ace.define("ace/snippets/c_cpp",["require","exports","module"], function(require, exports, module) {
"use strict";

exports.snippetText = "## Input/Output\n\
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
snippet lfor\n\
	for (int ${2:i} = 0; $2 < ${1:count}; $2${3:++}) {\n\
		${4}\n\
	}${5}\n\
snippet lwhile\n\
	while (${1}) {\n\
		${2}\n\
	}${3}\n\
snippet lswtich\n\
	switch (${1}) {\n\
		default: ${2};\n\
	}${3}\n\
##\n\
## include\n\
# include\n\
snippet iinclude\n\
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
snippet fmain\n\
	int main() {\n\
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
            