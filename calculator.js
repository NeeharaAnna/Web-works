function perform(val)
{
	console.log(val);

	document.getElementById("display").value+=val;
}
function clearscreen()
{
	document.getElementById("display").value=""
}
function equalclick()
{
	var text=document.getElementById("display").value
	var result=eval(text)
	document.getElementById("display").value=result
}