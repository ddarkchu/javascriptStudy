$(document).ready(function() {
	$('#fullpage').fullpage();
	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});
});
