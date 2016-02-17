var selectBook=function(book){
	console.log("Selectd:"+book.title);
	return {type:"BOOK_SELECTED",payload:book};
}

module.exports={
	selectBook:selectBook
}