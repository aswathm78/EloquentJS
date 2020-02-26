/*Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/



let a = "*"
for(let i=1;i<=7;i++){
	let x = ""
	for(let z=1;z<=i;z++){
		x+=a	
	}
	console.log(x)
}