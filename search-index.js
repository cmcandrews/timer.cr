crystal_doc_search_index_callback({"repository_name":"github.com/vladfaust/timer.cr","body":"# Timer\n\n[![Built with Crystal](https://img.shields.io/badge/built%20with-crystal-000000.svg?style=flat-square)](https://crystal-lang.org/)\n[![Build status](https://img.shields.io/travis/vladfaust/timer.cr/master.svg?style=flat-square)](https://travis-ci.org/vladfaust/timer.cr)\n[![API Docs](https://img.shields.io/badge/api_docs-online-brightgreen.svg?style=flat-square)](https://github.vladfaust.com/timer.cr)\n[![Releases](https://img.shields.io/github/release/vladfaust/timer.cr.svg?style=flat-square)](https://github.com/vladfaust/timer.cr/releases)\n[![Awesome](https://awesome.re/badge-flat2.svg)](https://github.com/veelenga/awesome-crystal)\n[![vladfaust.com](https://img.shields.io/badge/style-.com-lightgrey.svg?longCache=true&style=flat-square&label=vladfaust&colorB=0a83d8)](https://vladfaust.com)\n[![Patrons count](https://img.shields.io/badge/dynamic/json.svg?label=patrons&url=https://www.patreon.com/api/user/11296360&query=$.included[0].attributes.patron_count&style=flat-square&colorB=red&maxAge=86400)](https://www.patreon.com/vladfaust)\n[![Gitter chat](https://img.shields.io/badge/chat%20on-gitter-green.svg?colorB=ED1965&logo=gitter&style=flat-square)](https://gitter.im/vladfaust/timer.cr)\n\nA versatile timer module utilizing Crystal scheduler.\n\n[![Become Patron](https://vladfaust.com/img/patreon-small.svg)](https://www.patreon.com/vladfaust)\n\n## About\n\n`Timer` class makes it easy to execute code at some later moment of time. It is fast, performant and reliable.\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n```yaml\ndependencies:\n  timer:\n    github: vladfaust/timer.cr\n    version: ~> 0.1.0\n```\n\n2. Run `shards install`\n\nThis shard follows [Semantic Versioning v2.0.0](http://semver.org/), so check [releases](https://github.com/vladfaust/timer.cr/releases) and change the `version` accordingly. Note that until Crystal is officially released, this shard would be in beta state (`0.*.*`), with every **minor** release considered breaking. For example, `0.1.0` → `0.2.0` is breaking and `0.1.0` → `0.1.1` is not.\n\n## Usage\n\nBasic example:\n\n```crystal\nrequire \"timer\"\n\nTimer.new(1.second) do\n  puts \"Triggered\"\nend\n\nsleep # Will print \"Triggered\" after 1 second\n```\n\nExample with `select`:\n\n```crystal\nchannel = Channel(Nil).new\n\nselect\nwhen channel.receive\n  puts \"Never happens\"\nwhen Timer.new(1.second)\n  puts \"Timeout!\"\nend\n\nsleep # Will print \"Timeout!\" after 1 second\n```\n\nYou can `#postpone` and `#reschedule` a timer. The latter has bigger\nperformance impact if rescheduling at an earlier moment of time.\n\n```\nat = Time.utc_now + 5.minutes\n\ntimer = Timer.new(at) do\n  puts \"Triggered\"\nend\n\n# OK, will trigger in 6 minutes from now\ntimer.postpone(1.minute)\n\n# ditto\ntimer.reschedule(Time.utc_now + 6.minutes)\n\n# Worse performance but still acceptable\ntimer.reschedule(Time.utc_now + 1.minute)\n```\n\nNote that a timer can be scheduled at a moment in the past, which means that it\nwould run immediately after given control by the Crystal scheduler.\n\nYou can also `#trigger` a timer (still calling the block in another fiber) or\n`#cancel` it completely.\n\n## Development\n\n`crystal spec` and you're good to go.\n\n## Contributing\n\n1. Fork it (<https://github.com/vladfaust/timer.cr/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'feat: some feature'`) using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/) specs\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [Vlad Faust](https://github.com/vladfaust) - creator and maintainer\n","program":{"html_id":"github.com/vladfaust/timer.cr/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"github.com/vladfaust/timer.cr","program":true,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/vladfaust/timer.cr/Timer","path":"Timer.html","kind":"class","full_name":"Timer","name":"Timer","abstract":false,"superclass":{"html_id":"github.com/vladfaust/timer.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"github.com/vladfaust/timer.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/vladfaust/timer.cr/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"timer.cr","line_number":53,"url":"https://github.com/vladfaust/timer.cr/blob/c32f169b45ff63a044f061d033095693cf883db4/src/timer.cr"}],"repository_name":"github.com/vladfaust/timer.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":"Versatile Timer class which relies on Crystal scheduler.\n\nBasic example:\n\n```\nTimer.new(1.second) do\n  puts \"1 second has passed!\"\nend\n\nsleep\n```\n\nExample with `select`:\n\n```\nchannel = Channel(Nil).new\n\nselect\nwhen channel.receive\n  puts \"Never happens\"\nwhen Timer.new(1.second)\n  puts \"Timeout!\"\nend\n\nsleep # Will print \"Timeout!\" after 1 second\n```\n\nYou can `#postpone` and `#reschedule` a timer. The latter has bigger\nperformance impact if rescheduling at an earlier moment of time.\n\n```\nat = Time.utc_now + 5.minutes\n\ntimer = Timer.new(at) do\n  puts \"Triggered\"\nend\n\n# OK, will trigger in 6 minutes from now\ntimer.postpone(1.minute)\n\n# ditto\ntimer.reschedule(Time.utc_now + 6.minutes)\n\n# Worse performance but still acceptable\ntimer.reschedule(Time.utc_now + 1.minute)\n```\n\nNote that a timer can be scheduled at a moment in the past, which means that it\nwould run immediately after given control by the Crystal scheduler.\n\nYou can also `#trigger` a timer (still calling the block in another fiber) or\n`#cancel` it completely.","summary":"<p>Versatile Timer class which relies on Crystal scheduler.</p>","class_methods":[],"constructors":[{"id":"new(at:Time,&block)-class-method","html_id":"new(at:Time,&amp;block)-class-method","name":"new","doc":"Execute the *block* *at* the moment of time.","summary":"<p>Execute the <em>block</em> <em>at</em> the moment of time.</p>","abstract":false,"args":[{"name":"at","doc":null,"default_value":"","external_name":"at","restriction":"Time"}],"args_string":"(at : Time, &block)","source_link":"https://github.com/vladfaust/timer.cr/blob/c32f169b45ff63a044f061d033095693cf883db4/src/timer.cr#L70","def":{"name":"new","args":[{"name":"at","doc":null,"default_value":"","external_name":"at","restriction":"Time"}],"double_splat":null,"splat_index":null,"yields":0,"block_arg":{"name":"block","doc":null,"default_value":"","external_name":"block","restriction":""},"return_type":"","visibility":"Public","body":"_ = allocate\n_.initialize(at, &block) do\n  yield\nend\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}},{"id":"new(in:Time::Span,&block)-class-method","html_id":"new(in:Time::Span,&amp;block)-class-method","name":"new","doc":"Execute the *block* *in* some time span.","summary":"<p>Execute the <em>block</em> <em>in</em> some time span.</p>","abstract":false,"args":[{"name":"in","doc":null,"default_value":"","external_name":"in","restriction":"Time::Span"}],"args_string":"(in : Time::Span, &block)","source_link":"https://github.com/vladfaust/timer.cr/blob/c32f169b45ff63a044f061d033095693cf883db4/src/timer.cr#L84","def":{"name":"new","args":[{"name":"in","doc":null,"default_value":"","external_name":"in","restriction":"Time::Span"}],"double_splat":null,"splat_index":null,"yields":0,"block_arg":{"name":"block","doc":null,"default_value":"","external_name":"block","restriction":""},"return_type":"","visibility":"Public","body":"new(Time.utc_now + in, &block)"}}],"instance_methods":[{"id":"at:Time-instance-method","html_id":"at:Time-instance-method","name":"at","doc":"When the timer is scheduled to be triggered at.","summary":"<p>When the timer is scheduled to be triggered at.</p>","abstract":false,"args":[],"args_string":" : Time","source_link":"https://github.com/vladfaust/timer.cr/blob/c32f169b45ff63a044f061d033095693cf883db4/src/timer.cr#L57","def":{"name":"at","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Time","visibility":"Public","body":"@at"}},{"id":"at=(at:Time)-instance-method","html_id":"at=(at:Time)-instance-method","name":"at=","doc":"When the timer is scheduled to be triggered at.","summary":"<p>When the timer is scheduled to be triggered at.</p>","abstract":false,"args":[{"name":"at","doc":null,"default_value":"","external_name":"at","restriction":"Time"}],"args_string":"(at : Time)","source_link":"https://github.com/vladfaust/timer.cr/blob/c32f169b45ff63a044f061d033095693cf883db4/src/timer.cr#L61","def":{"name":"at=","args":[{"name":"at","doc":null,"default_value":"","external_name":"at","restriction":"Time"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@at = at"}},{"id":"cancel-instance-method","html_id":"cancel-instance-method","name":"cancel","doc":"Cancel this timer.","summary":"<p>Cancel this timer.</p>","abstract":false,"args":[],"args_string":"","source_link":"https://github.com/vladfaust/timer.cr/blob/c32f169b45ff63a044f061d033095693cf883db4/src/timer.cr#L132","def":{"name":"cancel","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if @completed || @cancelled\n  return\nend\n@cancelled = true\n@channel.send(nil)\n"}},{"id":"cancelled?:Bool-instance-method","html_id":"cancelled?:Bool-instance-method","name":"cancelled?","doc":"Whether is the timer cancelled.","summary":"<p>Whether is the timer cancelled.</p>","abstract":false,"args":[],"args_string":" : Bool","source_link":"https://github.com/vladfaust/timer.cr/blob/c32f169b45ff63a044f061d033095693cf883db4/src/timer.cr#L63","def":{"name":"cancelled?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Bool","visibility":"Public","body":"@cancelled"}},{"id":"completed?:Bool-instance-method","html_id":"completed?:Bool-instance-method","name":"completed?","doc":"Whether is the timer already triggered.","summary":"<p>Whether is the timer already triggered.</p>","abstract":false,"args":[],"args_string":" : Bool","source_link":"https://github.com/vladfaust/timer.cr/blob/c32f169b45ff63a044f061d033095693cf883db4/src/timer.cr#L60","def":{"name":"completed?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Bool","visibility":"Public","body":"@completed"}},{"id":"postpone(by:Time::Span)-instance-method","html_id":"postpone(by:Time::Span)-instance-method","name":"postpone","doc":"Postpone the execution *by* a time span.","summary":"<p>Postpone the execution <em>by</em> a time span.</p>","abstract":false,"args":[{"name":"by","doc":null,"default_value":"","external_name":"by","restriction":"Time::Span"}],"args_string":"(by : Time::Span)","source_link":"https://github.com/vladfaust/timer.cr/blob/c32f169b45ff63a044f061d033095693cf883db4/src/timer.cr#L96","def":{"name":"postpone","args":[{"name":"by","doc":null,"default_value":"","external_name":"by","restriction":"Time::Span"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@at = @at + by"}},{"id":"reschedule(at:Time)-instance-method","html_id":"reschedule(at:Time)-instance-method","name":"reschedule","doc":"Reschedule the timer *at* desired time.\n\nNOTE: Rescheduling at earlier time has bigger performance impact than\nat a moment in the future.","summary":"<p>Reschedule the timer <em>at</em> desired time.</p>","abstract":false,"args":[{"name":"at","doc":null,"default_value":"","external_name":"at","restriction":"Time"}],"args_string":"(at : Time)","source_link":"https://github.com/vladfaust/timer.cr/blob/c32f169b45ff63a044f061d033095693cf883db4/src/timer.cr#L104","def":{"name":"reschedule","args":[{"name":"at","doc":null,"default_value":"","external_name":"at","restriction":"Time"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if at >= @at\n  @at = @at + (at - @at)\nelse\n  @at = at\n  if hash = @cancelled_fiber_ids\n  else\n    hash = @cancelled_fiber_ids = Hash(Float64, Bool).new\n  end\n  hash[@active_fiber_id] = true\n  fiber_id = loop do\n    temp = rand\n    if hash.has_key?(temp)\n    else\n      break temp\n    end\n  end\n  schedule(fiber_id)\nend"}},{"id":"trigger-instance-method","html_id":"trigger-instance-method","name":"trigger","doc":"Trigger the execution immediately.","summary":"<p>Trigger the execution immediately.</p>","abstract":false,"args":[],"args_string":"","source_link":"https://github.com/vladfaust/timer.cr/blob/c32f169b45ff63a044f061d033095693cf883db4/src/timer.cr#L126","def":{"name":"trigger","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if @completed || @cancelled\n  return\nend\n@channel.send(nil)\n"}}],"macros":[],"types":[]}]}})