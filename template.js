String.prototype.template=function(o,notFound){
	var notFoundString = notFound?notFound.toString():'undefined'
	return this.replace(/\{(.*?)\}/g,function(m,w,pos,whole){
		var before = whole.charAt(pos-1),
			after= whole.charAt(pos+m.length),
			res =  (w in o?''+o[w]:notFoundString)
		if (before==='"' && after==='"')
			res=res.replace(/"/g,'\\"')
		else if (before==="'" && after==="'")
			res=res.replace(/'/g,"\\'")
		return res
	})
}
