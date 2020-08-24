(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{309:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"testez-design-notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testez-design-notes","aria-hidden":"true"}},[t._v("#")]),t._v(" TestEZ Design Notes")]),t._v(" "),s("h2",{attrs:{id:"test-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-flow","aria-hidden":"true"}},[t._v("#")]),t._v(" Test Flow")]),t._v(" "),s("p",[t._v("Testing using this module is broken down into four steps:")]),t._v(" "),s("ol",[s("li",[t._v("Load tests")]),t._v(" "),s("li",[t._v("Create test plan")]),t._v(" "),s("li",[t._v("Execute test plan")]),t._v(" "),s("li",[t._v("Report results")])]),t._v(" "),s("p",[t._v("Before executing the test plan, we can also modify it to change semantics separately from the code.")]),t._v(" "),s("h3",{attrs:{id:"_1-load-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-load-tests","aria-hidden":"true"}},[t._v("#")]),t._v(" #1: Load tests")]),t._v(" "),s("p",[t._v("All ModuleScript objects that have a name ending in "),s("code",[t._v(".spec")]),t._v(" are loaded as tests. On the filesystem, they appear as "),s("code",[t._v(".spec.lua")]),t._v(" files.")]),t._v(" "),s("p",[t._v("These tests should return a function that describes the actual test using the "),s("code",[t._v("describe")]),t._v(", "),s("code",[t._v("it")]),t._v(", and "),s("code",[t._v("expect")]),t._v(" functions. These functions are automatically injected into the test environment when available.")]),t._v(" "),s("p",[t._v("A test suite for addition might look like this:")]),t._v(" "),s("div",{staticClass:"language-lua extra-class"},[s("pre",{pre:!0,attrs:{class:"language-lua"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Addition"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"should be commutative"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"should be associative"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),s("p",[t._v("All test assertions should be contained inside the "),s("code",[t._v("it")]),t._v(" blocks.")]),t._v(" "),s("h3",{attrs:{id:"_2-create-test-plan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-test-plan","aria-hidden":"true"}},[t._v("#")]),t._v(" #2: Create test plan")]),t._v(" "),s("p",[t._v("A tree of tests is constructed out of all the "),s("code",[t._v("describe")]),t._v(" and "),s("code",[t._v("it")]),t._v(" calls in the tree. No test code is actually run.")]),t._v(" "),s("p",[t._v("This allows us to potentially output a tree of the tests in the system without actually running them. It also gives us a mechanism to run only specific tests.")]),t._v(" "),s("p",[t._v("This step is carried out by "),s("code",[t._v("TestPlanner")]),t._v(". It uses "),s("code",[t._v("TestPlanBuilder")]),t._v(" to hold temporary state relevant only when building the plan, and then returns a "),s("code",[t._v("TestPlan")]),t._v(" object.")]),t._v(" "),s("p",[t._v("To debug the test plan tree, use "),s("code",[t._v("plan:visualize()")])]),t._v(" "),s("h3",{attrs:{id:"_3-execute-test-plan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-execute-test-plan","aria-hidden":"true"}},[t._v("#")]),t._v(" #3: Execute test plan")]),t._v(" "),s("p",[t._v("A tree of test results is created that mirrors the test plan nodes.")]),t._v(" "),s("p",[t._v("This step is carried out by "),s("code",[t._v("TestRunner")]),t._v(". It creates a "),s("code",[t._v("TestSession")]),t._v(" using the "),s("code",[t._v("TestPlan")]),t._v(" from the previous step. This object holds state only relevant when building the test results, then returns a "),s("code",[t._v("TestResults")]),t._v(" object.")]),t._v(" "),s("p",[t._v("To debug the result tree, use "),s("code",[t._v("results:visualize()")])]),t._v(" "),s("h3",{attrs:{id:"_4-report-results"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-report-results","aria-hidden":"true"}},[t._v("#")]),t._v(" #4: Report results")]),t._v(" "),s("p",[t._v("Reporting is handled by a test reporter object, which is just a table with a "),s("code",[t._v("report")]),t._v(" method on it. It takes a "),s("code",[t._v("TestResults")]),t._v(" object and outputs it to standard output, creates a GUI, or tells TestService about the results.")]),t._v(" "),s("p",[t._v("This is pluggable, and could conceivably output in any format.")]),t._v(" "),s("h2",{attrs:{id:"system-architecture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#system-architecture","aria-hidden":"true"}},[t._v("#")]),t._v(" System Architecture")]),t._v(" "),s("p",[t._v("The system is broken down in a way that eliminates global state, provides multiple abstraction layers for each operation, and stores plain data in a way that's agnostic to the operations performed upon it.")]),t._v(" "),s("p",[t._v("In both the planning and running phases of tests, a stateless module ("),s("code",[t._v("TestPlanner")]),t._v(" and "),s("code",[t._v("TestRunner")]),t._v(") creates a temporary object to hold state about the operation it's trying to perform. These objects ("),s("code",[t._v("TestPlanBuilder")]),t._v(" and "),s("code",[t._v("TestSession")]),t._v(") allow the code to traverse and build trees without passing around extra state between iterations.")]),t._v(" "),s("p",[t._v("When the modules are done using these builder objects, they call "),s("code",[t._v("finalize")]),t._v(" on them to receive a "),s("code",[t._v("TestPlan")]),t._v(" or "),s("code",[t._v("TestResults")]),t._v(" object. These objects are passed back to the original caller.")]),t._v(" "),s("p",[s("code",[t._v("TestBootStrap")]),t._v(" packages up use of the stages of testing into a simpler interface that also automatically locates test modules. When more advanced functionality is desired, it's easy to stop using TestBootstrap and instead call the underlying objects directly.")])])}),[],!1,null,null,null);e.default=n.exports}}]);