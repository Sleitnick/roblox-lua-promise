(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{295:function(e,r,a){"use strict";a.r(r);var i=a(1),t=Object(i.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog","aria-hidden":"true"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("h2",{attrs:{id:"_3-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-0","aria-hidden":"true"}},[e._v("#")]),e._v(" [3.0.0]")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Promise.delay")]),e._v(" now uses "),a("code",[e._v("os.clock")])]),e._v(" "),a("li",[e._v("Made "),a("code",[e._v("Promise.delay")]),e._v(" behavior more consistent when creating new timers in the callback of a timer.")])]),e._v(" "),a("h2",{attrs:{id:"_3-0-0-rc-3-2020-07-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-0-rc-3-2020-07-10","aria-hidden":"true"}},[e._v("#")]),e._v(" [3.0.0-rc.3] - 2020-07-10")]),e._v(" "),a("h3",{attrs:{id:"fixed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixed","aria-hidden":"true"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),a("ul",[a("li",[e._v("Fixed a bug where queued "),a("code",[e._v("andThen")]),e._v(" and "),a("code",[e._v("catch")]),e._v(" callbacks did not begin on their own new threads.")])]),e._v(" "),a("h2",{attrs:{id:"_3-0-0-rc-1-2020-06-02"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-0-rc-1-2020-06-02","aria-hidden":"true"}},[e._v("#")]),e._v(" [3.0.0-rc.1] - 2020-06-02")]),e._v(" "),a("h3",{attrs:{id:"changed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changed","aria-hidden":"true"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),a("ul",[a("li",[e._v("Runtime errors are now represented by objects. You must call tostring on rejection values before assuming they are strings (this was always good practice, but is required now).")]),e._v(" "),a("li",[e._v("Yielding is now allowed in "),a("code",[e._v("Promise.new")]),e._v(", "),a("code",[e._v("andThen")]),e._v(", and "),a("code",[e._v("Promise.try")]),e._v(" executors.")]),e._v(" "),a("li",[e._v("Errors now have much better stack traces due to using "),a("code",[e._v("xpcall")]),e._v(" internally instead of "),a("code",[e._v("pcall")]),e._v(".")]),e._v(" "),a("li",[e._v("Stack traces will now be more direct and not include as many internal calls within the Promise library.")]),e._v(" "),a("li",[e._v("Chained promises from "),a("code",[e._v("resolve()")]),e._v(" or returning from andThen now have improved rejection messages for debugging.")]),e._v(" "),a("li",[a("code",[e._v("Promise.async")]),e._v(" has been renamed to "),a("code",[e._v("Promise.defer")]),e._v(" ("),a("code",[e._v("Promise.async")]),e._v(" references same function for compatibility)")]),e._v(" "),a("li",[e._v("Promises now have a "),a("code",[e._v("__tostring")]),e._v(" metamethod, which returns "),a("code",[e._v("Promise(Resolved)")]),e._v(" or whatever the current status is.")]),e._v(" "),a("li",[a("code",[e._v("Promise:timeout()")]),e._v(" now rejects with a "),a("code",[e._v("Promise.Error(Promise.Error.Kind.TimedOut)")]),e._v(" object. (Formerly rejected with the string "),a("code",[e._v('"Timed out"')]),e._v(")")]),e._v(" "),a("li",[e._v("Attaching a handler to a cancelled Promise now rejects with a "),a("code",[e._v("Promise.Error(Promise.Error.Kind.AlreadyCancelled)")]),e._v(". (Formerly rejected with the string "),a("code",[e._v('"Promise is cancelled"')]),e._v(")")]),e._v(" "),a("li",[e._v("Let "),a("code",[e._v("Promise:expect()")]),e._v(" throw rejection objects")])]),e._v(" "),a("h3",{attrs:{id:"added"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#added","aria-hidden":"true"}},[e._v("#")]),e._v(" Added")]),e._v(" "),a("ul",[a("li",[e._v("New Promise Error class is exposed at "),a("code",[e._v("Promise.Error")]),e._v(", which includes helpful static methods like "),a("code",[e._v("Promise.Error.is")]),e._v(".")]),e._v(" "),a("li",[e._v("Added "),a("code",[e._v("Promise:now()")]),e._v(" (#23)")]),e._v(" "),a("li",[e._v("Added "),a("code",[e._v("Promise.each")]),e._v(" (#21)")]),e._v(" "),a("li",[e._v("Added "),a("code",[e._v("Promise.retry")]),e._v(" (#16)")]),e._v(" "),a("li",[e._v("Added "),a("code",[e._v("Promise.fromEvent")]),e._v(" (#14)")]),e._v(" "),a("li",[e._v("Improved test coverage for asynchronous and time-driven functions")])]),e._v(" "),a("h3",{attrs:{id:"fixed-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixed-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),a("ul",[a("li",[e._v("Changed "),a("code",[e._v("Promise.is")]),e._v(" to be safe when dealing with tables that have an "),a("code",[e._v("__index")]),e._v(" metamethod that creates an error.")]),e._v(" "),a("li",[a("code",[e._v("Promise.delay")]),e._v(" resolve value (time passed) is now more accurate (previously passed time based on when we started resuming threads instead of the current time. This is a very minor difference.)")])]),e._v(" "),a("h2",{attrs:{id:"_2-5-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-1","aria-hidden":"true"}},[e._v("#")]),e._v(" [2.5.1]")]),e._v(" "),a("ul",[a("li",[e._v("Fix issue with rejecting with non-string not propagating correctly.")])]),e._v(" "),a("h2",{attrs:{id:"_2-5-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-0","aria-hidden":"true"}},[e._v("#")]),e._v(" [2.5.0]")]),e._v(" "),a("ul",[a("li",[e._v("Add Promise.tap")]),e._v(" "),a("li",[e._v("Fix bug with C functions not working when passed to andThen")]),e._v(" "),a("li",[e._v("Fix issue with Promise.race/all always cancelling instead of only cancelling if the Promise has no other consumers")]),e._v(" "),a("li",[e._v("Make error checking more robust across many methods.")]),e._v(" "),a("li",[e._v("Promise.Status members are now strings instead of symbols, and indexing a non-existent value will error.")]),e._v(" "),a("li",[e._v("Improve stack traces")]),e._v(" "),a("li",[e._v("Promise.promisify will now turn errors into rejections even if they occur after a yield.")]),e._v(" "),a("li",[e._v("Add Promise.try")]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v("done")]),e._v(", "),a("code",[e._v("doneCall")]),e._v(", "),a("code",[e._v("doneReturn")])]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v("andThenReturn")]),e._v(", "),a("code",[e._v("finallyReturn")])]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v("Promise.delay")]),e._v(", "),a("code",[e._v("promise:timeout")])]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v("Promise.some")]),e._v(", "),a("code",[e._v("Promise.any")])]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v("Promise.allSettled")])]),e._v(" "),a("li",[a("code",[e._v("Promise.all")]),e._v(" and "),a("code",[e._v("Promise.race")]),e._v(" are now cancellable.")])]),e._v(" "),a("h2",{attrs:{id:"_2-4-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-0","aria-hidden":"true"}},[e._v("#")]),e._v(" [2.4.0]")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Promise.is")]),e._v(' now only checks if the object is "andThennable" (has an '),a("code",[e._v("andThen")]),e._v(" method).")])]),e._v(" "),a("h2",{attrs:{id:"_2-3-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1","aria-hidden":"true"}},[e._v("#")]),e._v(" [2.3.1]")]),e._v(" "),a("ul",[a("li",[e._v("Make unhandled rejection warning trigger on next Heartbeat")])]),e._v(" "),a("h2",{attrs:{id:"_2-3-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-0","aria-hidden":"true"}},[e._v("#")]),e._v(" [2.3.0]")]),e._v(" "),a("ul",[a("li",[e._v("Remove "),a("code",[e._v("Promise.spawn")]),e._v(" from the public API.")]),e._v(" "),a("li",[a("code",[e._v("Promise.async")]),e._v(" still inherits the behavior from "),a("code",[e._v("Promise.spawn")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("Promise.async")]),e._v(" now wraps the callback in "),a("code",[e._v("pcall")]),e._v(" and rejects if an error occurred.")]),e._v(" "),a("li",[a("code",[e._v("Promise.new")]),e._v(" has now has an explicit error message when attempting to yield inside of it.")])]),e._v(" "),a("h2",{attrs:{id:"_2-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-0","aria-hidden":"true"}},[e._v("#")]),e._v(" [2.2.0]")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Promise.promisify")]),e._v(" now uses "),a("code",[e._v("coroutine.wrap")]),e._v(" instead of "),a("code",[e._v("Promise.spawn")])])]),e._v(" "),a("h2",{attrs:{id:"_2-1-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-0","aria-hidden":"true"}},[e._v("#")]),e._v(" [2.1.0]")]),e._v(" "),a("ul",[a("li",[e._v("Add "),a("code",[e._v("finallyCall")]),e._v(", "),a("code",[e._v("andThenCall")])]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v("awaitValue")])])]),e._v(" "),a("h2",{attrs:{id:"_2-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-0","aria-hidden":"true"}},[e._v("#")]),e._v(" [2.0.0]")]),e._v(" "),a("ul",[a("li",[e._v("Add Promise.race")]),e._v(" "),a("li",[e._v("Add Promise.async")]),e._v(" "),a("li",[e._v("Add Promise.spawn")]),e._v(" "),a("li",[e._v("Add Promise.promisify")]),e._v(" "),a("li",[a("code",[e._v("finally")]),e._v(" now silences the unhandled rejection warning")]),e._v(" "),a("li",[a("code",[e._v("onCancel")]),e._v(" now returns if the Promise was cancelled at call time.")]),e._v(" "),a("li",[e._v("Cancellation now propagates downstream.")]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v("Promise:awaitStatus")])]),e._v(" "),a("li",[e._v("Calling "),a("code",[e._v("resolve")]),e._v(" with a Promise while the resolving Promise is cancelled instantly cancels the passed Promise as an optimization.")]),e._v(" "),a("li",[a("code",[e._v("finally")]),e._v(" now passes the Promise status as a parameter.")])])])}),[],!1,null,null,null);r.default=t.exports}}]);