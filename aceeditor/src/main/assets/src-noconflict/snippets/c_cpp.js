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
## Access Modifiers\n\
# private\n\
snippet pri\n\
	private\n\
# protected\n\
snippet pro\n\
	protected\n\
# public\n\
snippet pub\n\
	public\n\
# friend\n\
snippet fr\n\
	friend\n\
# mutable\n\
snippet mu\n\
	mutable\n\
## \n\
## Class\n\
# class\n\
snippet cl\n\
	class ${1:`Filename('$1', 'name')`} \n\
	{\n\
	public:\n\
		$1(${2});\n\
		~$1();\n\
\n\
	private:\n\
		${3:/* data */}\n\
	};\n\
# member function implementation\n\
snippet mfun\n\
	${4:void} ${1:`Filename('$1', 'ClassName')`}::${2:memberFunction}(${3}) {\n\
		${5:/* code */}\n\
	}\n\
# namespace\n\
snippet ns\n\
	namespace ${1:`Filename('', 'my')`} {\n\
		${2}\n\
	} /* namespace $1 */\n\
##\n\
## Input/Output\n\
# cout\n\
snippet cout\n\
	cout << ${1} << endl;${2}\n\
# cin\n\
snippet cin\n\
	cin >> ${1};${2}\n\
##\n\
## Iteration\n\
# for i \n\
snippet fori\n\
	for (int ${2:i} = 0; $2 < ${1:count}; $2${3:++}) {\n\
		${4:/* code */}\n\
	}${5}\n\
\n\
# foreach\n\
snippet fore\n\
	for (${1:auto} ${2:i} : ${3:container}) {\n\
		${4:/* code */}\n\
	}${5}\n\
# iterator\n\
snippet iter\n\
	for (${1:vector}<${2:type}>::${3:const_iterator} ${4:i} = ${5:container}.begin(); $4 != $5.end(); ++$4) {\n\
		${6}\n\
	}${7}\n\
\n\
# auto iterator\n\
snippet itera\n\
	for (auto ${1:i} = $1.begin(); $1 != $1.end(); ++$1) {\n\
		${2:cout << *$1 << endl;}\n\
	}${3}\n\
##\n\
## Lambdas\n\
# lamda (one line)\n\
snippet ld\n\
	[${1}](${2}){${3:/* code */}}${4}\n\
# lambda (multi-line)\n\
snippet lld\n\
	[${1}](${2}){\n\
		${3:/* code */}\n\
	}${4}\n\
# include\n\
snippet include\n\
	#include <${1}>\n\
# using namespace std\n\
snippet std\n\
	using namespace std;\n\
# iostream\n\
snippet iostream\n\
	#include <iostream>\n\
# stdio\n\
snippet stdio\n\
	#include <stdio.h>\n\
";
exports.scope = "c_cpp";

});                (function() {
                    ace.require(["ace/snippets/c_cpp"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            