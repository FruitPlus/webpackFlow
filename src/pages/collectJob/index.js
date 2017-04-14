
import '../reset.less'
import './index.less'

import 'components/header/header.less'
import 'components/header/header.js'
import 'components/footer/footer.less'
import 'components/footer/footer.js'




$.ajax({
	url: 'http://localhost:8100/api/collectJob/'
})
.done(function(data) {
	console.log(data);
	// var template = require('./index.ejs');
	// var str = template({foo: 'bar'});
	// console.log(str);
	console.log("success");
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});


