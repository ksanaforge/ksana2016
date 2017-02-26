if (typeof global!=="undefined") {
	global.KsanaCorpusBuilder=require("ksana-corpus-builder");
	global.KsanaCorpus=require("ksana-corpus");
	global.KsanaCorpusSearch=require("ksana-corpus-search");
	global.KsanaJsonrom=require("ksana-jsonrom");	
} else if (typeof window!=="undefined"){
	window.KsanaCorpusBuilder=require("ksana-corpus-builder");
	window.KsanaCorpus=require("ksana-corpus");
	window.KsanaCorpusSearch=require("ksana-corpus-search");
	window.KsanaJsonrom=require("ksana-jsonrom");		
}
