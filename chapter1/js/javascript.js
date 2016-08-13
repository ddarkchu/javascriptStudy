// hljs.initHighlightingOnLoad();
// hljs.initLineNumbersOnLoad();
$(document).ready(function() {
	$('#fullpage').fullpage();

	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
		hljs.lineNumbersBlock(block);
	});
	setInterval(function(){location.reload();},10000);
	// $('code').each(function(i, block) {
	//
  //   });
});
