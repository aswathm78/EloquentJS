/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size , outputting a grid
of the given width and height

*/

let i = 2;//works for any value except 1
let board = ""
for(let row=1; row<=i;row++){
	for(let col=1;col<=i;col++){
		if(row%2==0){
			if(col%2!=0){
						board+="#"
					}
					else{
						board+=" "
					}
		}
		else{
			if(col%2==0){
				board+="#"
			}
			else{
				board+=" "
			}
		}
		
	}
	board+="\n"
}

console.log(board)