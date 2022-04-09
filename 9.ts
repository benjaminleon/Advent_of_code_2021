let map = [[3,4,9,8,8,9,9,0,1,9,8,7,8,7,5,4,6,7,7,8,9,9,8,7,6,4,3,4,9,8,7,8,9,8,9,1,0,2,3,4,6,7,9,9,8,6,7,7,8,9,3,2,4,6,8,9,9,9,4,1,2,7,6,7,8,9,9,9,2,1,2,4,9,9,7,8,9,8,7,5,4,3,4,5,6,7,9,9,9,8,7,8,9,9,9,8,7,8,7,6,],
[4,5,9,7,6,7,8,9,2,9,7,6,5,8,3,3,4,4,5,9,4,3,9,8,9,7,5,9,9,7,6,5,6,7,8,9,1,4,6,5,7,9,8,7,6,5,8,6,9,8,9,3,4,5,9,9,9,7,3,2,3,4,5,9,9,9,9,8,9,0,1,9,8,7,6,7,8,9,8,7,9,2,3,4,7,8,9,9,8,7,6,9,9,9,8,7,6,6,4,5,],
[9,9,8,6,5,6,7,8,9,8,6,5,4,4,2,1,2,3,7,8,9,1,0,9,4,9,9,8,7,6,5,3,4,7,9,7,6,5,8,7,9,8,7,6,6,3,6,5,6,7,8,9,5,9,8,9,8,6,5,3,7,5,6,8,9,9,8,7,8,9,3,9,7,6,4,6,9,9,9,9,8,9,4,9,9,9,9,8,7,6,5,8,9,9,8,6,5,4,3,4,],
[8,7,6,3,4,5,6,7,9,9,5,4,3,2,1,0,9,4,8,9,4,2,1,2,3,9,9,9,6,5,4,2,3,6,8,9,7,7,9,9,8,7,6,5,4,2,3,4,5,6,9,9,9,8,7,9,8,7,6,5,6,7,8,9,9,8,7,6,5,8,9,8,9,5,3,4,7,8,9,8,7,9,9,8,7,8,9,9,9,8,6,7,8,9,9,9,6,3,2,3,],
[9,8,5,2,1,6,5,9,8,7,6,5,4,3,9,9,8,9,9,6,5,3,4,3,9,8,9,9,9,5,4,3,4,5,6,7,9,8,9,9,9,8,8,6,5,1,2,3,4,7,9,9,8,9,5,6,9,8,9,6,7,8,9,9,8,9,6,5,4,7,6,7,8,9,6,5,6,9,8,7,6,7,9,9,6,7,8,9,4,9,8,8,9,6,9,8,7,5,3,4,],
[7,5,4,1,0,3,4,5,9,8,7,6,5,9,8,9,7,8,9,8,6,4,5,9,8,7,8,9,8,6,5,4,6,6,7,8,9,9,9,8,7,9,8,7,4,2,3,9,8,9,8,6,7,4,4,5,6,9,8,7,8,9,9,8,7,6,5,4,3,2,5,6,7,8,9,6,7,8,9,4,5,9,8,7,5,4,8,9,6,9,9,9,5,4,5,9,8,9,7,6,],
[5,4,3,2,1,2,3,4,5,9,8,7,9,8,7,5,6,7,8,9,7,5,7,9,8,6,7,7,9,7,6,5,6,7,9,9,7,8,9,7,6,5,9,8,7,6,5,6,7,8,9,5,4,3,2,9,7,9,9,9,9,5,4,9,8,9,8,5,4,3,4,5,6,7,8,9,9,9,2,3,5,9,8,7,6,5,7,8,9,7,6,5,4,3,2,3,9,9,8,7,],
[6,5,4,3,3,3,4,5,9,9,9,8,9,9,5,4,5,6,7,8,9,6,9,8,7,5,5,6,9,8,8,6,7,8,9,5,6,7,9,8,5,4,3,9,8,7,6,7,8,9,8,6,7,5,9,8,9,8,9,8,9,9,2,1,9,8,7,6,7,6,5,6,7,8,9,3,2,1,0,1,2,3,9,8,7,7,9,9,9,8,9,8,7,6,1,3,6,7,9,9,],
[8,6,5,4,4,5,6,7,8,9,9,9,9,8,4,3,4,5,6,7,8,9,8,7,5,4,4,5,9,9,9,9,8,9,2,3,9,9,8,7,5,6,2,3,9,8,9,8,9,0,9,9,8,9,8,7,8,7,6,7,8,8,9,9,8,9,8,7,9,7,6,8,8,9,5,4,3,2,1,2,5,4,5,9,9,8,9,3,4,9,8,9,6,4,3,4,5,6,8,9,],
[9,8,7,5,5,9,8,8,9,9,9,8,8,7,3,2,3,4,7,8,9,8,6,5,4,3,3,3,8,7,8,9,9,2,1,9,8,7,6,5,4,2,1,2,3,9,6,9,9,1,2,4,9,8,7,6,8,5,4,5,7,7,8,9,7,5,9,8,9,9,7,8,9,8,7,5,4,3,4,6,7,5,6,7,9,9,0,1,9,8,7,8,9,5,4,9,6,7,9,3,],
[2,9,8,6,7,8,9,9,9,9,8,7,6,5,2,1,4,5,6,9,8,7,5,4,3,2,1,2,6,6,8,9,4,3,0,1,9,8,4,3,2,1,0,1,3,4,5,6,8,9,4,9,9,8,6,5,4,5,3,4,5,6,9,7,5,4,5,9,9,9,8,9,9,9,8,6,5,4,5,7,8,6,7,8,9,9,2,9,8,7,6,7,8,9,9,8,9,9,3,2,],
[1,9,8,7,9,9,8,7,9,8,7,6,5,4,3,5,5,8,7,8,9,6,4,3,2,1,0,1,4,5,7,8,9,2,1,9,8,7,6,7,5,2,1,2,3,5,6,7,9,9,9,8,6,9,7,6,3,2,1,5,8,7,8,9,4,3,4,5,8,9,9,9,9,9,8,7,6,5,6,7,9,9,9,9,9,8,9,9,9,6,5,3,9,6,8,7,9,3,2,1,],
[0,2,9,9,8,9,9,6,5,9,8,7,6,6,5,6,6,7,8,9,8,7,5,4,5,2,3,2,3,4,5,7,9,3,8,9,9,8,9,9,4,3,2,3,4,9,7,8,9,8,7,6,5,9,8,7,9,4,3,7,7,8,9,5,3,2,3,4,7,8,9,9,8,7,9,8,8,6,7,9,8,8,9,8,9,7,8,9,6,5,4,2,4,5,5,6,8,9,1,0,],
[1,2,9,8,7,7,8,9,4,3,9,8,7,8,8,7,8,8,9,9,9,8,6,5,4,3,5,3,4,7,6,9,6,5,7,8,9,9,7,6,5,4,5,4,9,8,9,9,0,9,9,7,4,6,9,8,7,6,4,5,6,7,8,9,2,1,2,5,6,7,8,9,6,5,6,9,8,7,9,8,7,7,8,7,5,6,7,8,9,6,5,1,2,3,4,5,7,8,9,1,],
[2,9,7,9,6,6,7,8,9,2,3,9,8,9,9,9,9,9,8,9,9,8,7,6,5,4,6,7,9,8,7,8,9,9,8,9,6,9,8,9,7,6,9,9,8,7,9,9,1,9,8,4,3,6,7,9,8,9,7,6,7,9,9,4,3,4,6,7,8,9,9,6,5,4,5,6,9,9,8,7,6,6,4,3,4,7,8,9,9,9,6,5,3,4,9,6,8,9,3,2,],
[9,8,6,7,4,5,8,9,4,3,4,8,9,0,2,3,4,5,7,8,9,9,9,7,6,6,9,9,7,9,8,9,9,9,9,3,5,7,9,9,8,9,8,9,5,6,7,8,9,8,7,5,4,5,7,9,9,9,8,7,9,9,7,6,5,5,7,8,9,8,6,5,4,3,5,6,7,8,9,9,5,4,3,2,1,2,4,6,7,8,9,6,4,9,8,9,9,5,4,3,],
[7,6,5,4,3,4,7,8,9,5,6,7,8,9,3,4,6,6,8,9,0,1,9,8,9,7,8,9,5,5,9,7,8,9,4,2,4,5,8,9,9,8,7,6,4,5,6,9,8,9,8,9,5,9,8,9,8,9,9,9,1,3,9,7,9,6,8,9,9,7,6,5,5,2,4,6,6,9,9,8,6,5,3,1,0,1,3,7,8,9,8,6,5,9,7,9,7,6,6,5,],
[9,7,6,5,2,3,6,8,9,6,7,8,9,5,4,9,7,8,9,5,4,2,9,9,9,8,9,6,4,4,5,6,9,6,5,3,7,6,7,9,8,9,6,4,3,5,7,8,7,8,9,7,6,9,9,6,7,8,9,9,2,9,8,9,8,9,9,8,7,6,4,4,2,1,2,3,4,6,9,9,5,4,3,2,3,2,4,5,9,9,8,7,9,8,6,7,9,7,8,9,],
[9,8,9,6,1,4,4,5,8,9,8,9,9,9,9,8,9,9,7,6,5,9,8,9,8,9,9,1,2,3,4,5,8,9,6,4,8,9,9,8,7,6,5,3,2,3,6,7,6,7,9,8,7,8,9,5,6,7,9,8,9,8,7,8,7,8,9,9,8,9,3,2,1,0,1,2,3,9,8,7,6,7,4,5,4,3,5,6,8,9,9,8,9,7,5,9,8,9,9,9,],
[6,9,4,1,0,2,3,4,7,8,9,9,9,8,6,7,8,9,8,7,9,8,7,8,7,8,8,9,9,4,5,6,7,8,9,5,9,8,9,9,9,9,4,2,1,2,5,4,5,6,9,9,8,9,5,4,2,9,8,7,6,7,6,7,6,7,9,9,9,8,9,9,2,5,3,4,5,6,9,8,9,8,7,6,8,7,6,9,9,8,6,9,9,6,4,5,6,7,8,9,],
[5,4,3,2,1,2,4,5,6,7,9,8,9,7,5,6,7,8,9,8,9,8,6,5,6,6,6,7,8,9,6,7,8,9,9,9,8,7,8,9,7,8,9,3,0,1,2,3,4,5,8,9,9,9,7,6,9,8,7,6,5,6,5,4,5,9,8,9,7,7,9,8,9,6,4,5,6,7,8,9,9,9,8,9,9,9,7,8,9,7,5,9,8,7,8,6,7,8,9,9,],
[6,5,5,3,7,3,4,6,7,9,8,7,6,5,4,5,8,9,9,9,9,7,5,4,3,5,5,6,7,8,9,8,9,3,9,8,7,6,7,4,6,7,9,9,1,2,5,4,7,6,7,8,9,9,8,9,8,7,6,5,4,4,2,3,9,8,7,8,6,5,6,7,8,9,5,9,8,8,9,9,9,6,9,4,5,9,8,9,9,6,4,5,9,8,9,9,8,9,9,8,],
[7,6,9,6,5,4,5,9,8,9,9,9,7,6,5,6,7,8,9,9,8,7,6,3,2,3,4,5,8,9,9,9,3,2,3,9,8,5,4,3,4,6,7,8,9,4,7,5,8,9,8,9,8,9,9,8,7,6,5,4,3,3,1,9,8,7,6,4,3,4,5,6,7,8,9,6,9,9,9,9,8,5,4,3,6,7,9,9,8,9,3,2,3,9,9,8,9,9,8,7,],
[8,9,8,7,6,5,6,8,9,9,9,9,8,9,6,7,8,9,3,0,9,8,6,4,1,0,1,2,7,9,9,5,4,1,9,8,7,6,5,6,8,7,8,9,7,6,7,6,9,9,9,8,7,6,7,9,8,7,4,3,2,1,0,9,9,6,5,3,2,3,4,5,8,9,4,5,6,7,8,9,7,7,3,2,1,2,9,8,7,8,9,5,4,9,8,7,8,9,6,6,],
[9,3,9,9,8,9,7,9,7,8,9,9,9,8,7,8,9,3,2,1,5,9,8,9,2,3,2,3,6,7,8,9,9,2,3,9,9,7,8,7,9,8,9,4,9,7,8,7,8,9,9,9,6,5,4,5,9,7,6,4,4,2,9,8,7,6,4,2,1,2,9,6,9,4,3,4,7,6,7,9,6,5,4,1,0,9,8,9,6,7,8,9,5,9,7,6,9,3,4,5,],
[1,2,9,8,9,6,9,4,5,9,9,8,6,9,8,9,5,4,3,2,4,6,9,9,3,9,3,4,5,6,8,9,8,9,4,5,9,8,9,8,9,9,1,2,9,8,9,8,9,8,9,9,5,4,3,4,5,9,7,5,6,7,8,9,8,7,2,1,0,1,8,9,4,3,2,5,4,5,7,8,9,4,3,2,9,8,7,7,5,6,7,8,9,7,6,5,7,2,3,9,],
[2,9,8,7,6,5,4,3,4,9,8,9,5,4,9,8,7,5,4,3,4,7,9,8,9,8,9,6,6,7,9,6,7,8,9,6,7,9,9,9,4,3,2,9,8,9,7,9,6,7,9,8,4,3,2,3,4,9,8,9,7,9,9,9,9,8,9,2,3,7,7,8,9,2,1,2,3,9,9,9,6,5,6,9,8,7,6,5,4,3,5,6,8,9,6,4,2,1,2,8,],
[9,8,9,9,7,6,5,4,5,9,6,7,9,9,9,9,8,9,9,4,9,9,8,7,6,7,8,9,8,9,4,5,6,9,9,9,9,9,9,8,9,9,9,8,7,6,6,5,5,9,8,7,3,2,1,2,3,4,9,9,8,9,9,9,9,9,4,3,4,5,6,7,8,9,2,4,9,8,7,8,9,7,9,8,7,6,5,4,3,2,3,8,9,9,9,5,1,0,3,7,],
[9,7,6,5,9,8,9,9,9,8,5,6,7,8,9,9,9,9,8,9,8,9,9,2,4,6,7,8,9,4,3,4,5,6,9,8,7,8,9,7,9,7,8,9,6,5,4,3,4,5,9,5,2,1,0,1,2,3,4,8,9,9,9,8,7,6,5,4,5,6,7,8,9,4,3,4,9,7,6,7,8,9,9,9,9,7,6,6,4,4,5,9,9,9,8,7,2,1,5,6,],
[9,8,3,4,5,9,9,8,8,7,4,5,6,7,8,9,8,8,7,9,7,8,9,1,3,4,5,9,6,5,2,3,4,9,8,7,6,5,6,6,4,6,7,8,9,9,3,2,3,9,8,4,3,2,1,2,3,5,6,7,8,9,9,9,8,7,6,8,6,7,8,9,6,5,5,9,8,7,5,6,8,9,9,9,9,8,7,8,5,7,6,7,8,9,6,5,3,2,4,5,],
[8,9,4,5,7,9,8,7,6,5,3,8,7,8,9,8,7,6,5,4,5,9,9,0,4,5,8,9,1,0,1,2,5,9,8,6,5,4,5,4,3,4,8,6,7,8,9,1,9,8,7,6,5,3,3,5,4,6,7,8,9,9,9,9,9,9,8,9,7,8,9,9,7,9,9,7,6,5,4,6,7,7,8,9,5,9,8,9,6,8,7,9,9,9,8,7,7,6,5,6,],
[7,8,9,6,9,9,9,6,4,3,2,2,8,9,9,9,8,7,6,2,4,6,8,9,5,6,7,8,9,1,2,3,4,6,9,6,5,3,2,1,2,3,4,5,8,9,3,2,3,9,8,9,8,5,4,6,8,9,8,9,9,9,8,7,7,9,9,9,8,9,9,8,9,8,7,6,5,4,3,4,5,6,9,6,4,5,9,8,7,9,8,9,3,4,9,8,8,7,6,7,],
[6,9,8,9,8,9,8,9,5,4,0,1,9,9,8,7,5,4,2,1,3,4,9,8,9,7,8,9,9,2,4,9,5,6,9,8,7,5,4,0,4,5,5,6,9,5,4,5,6,7,9,8,7,6,5,7,8,9,9,9,9,8,7,5,6,8,9,9,9,7,8,7,8,9,8,7,6,5,1,3,4,8,9,7,6,7,9,9,8,9,9,1,2,7,6,9,9,9,7,8,],
[5,8,7,6,7,9,7,8,9,2,1,2,3,4,9,8,4,3,1,0,1,3,7,7,8,9,9,9,8,7,5,7,8,9,9,9,8,4,3,2,5,6,7,8,9,7,9,7,8,8,9,9,9,7,9,8,9,7,8,9,9,9,5,4,5,7,8,9,8,6,7,6,8,9,9,8,9,1,0,2,5,6,8,9,9,9,8,7,9,7,7,9,3,4,5,6,9,9,8,9,],
[4,3,4,5,6,7,6,8,8,9,2,3,4,5,9,9,5,4,5,1,2,4,5,6,7,8,9,8,9,7,6,9,9,0,9,7,6,5,4,5,7,7,8,9,8,9,8,9,9,9,9,9,9,8,9,9,5,6,5,9,8,7,6,8,6,7,8,9,6,5,4,5,6,7,8,9,3,2,1,3,4,5,6,9,8,7,8,6,5,5,6,8,9,9,6,9,8,7,9,2,],
[3,2,5,7,3,4,5,6,7,8,9,4,5,9,8,7,6,5,6,2,3,4,5,7,9,9,7,6,9,9,9,8,9,1,9,8,7,6,5,7,8,8,9,6,7,9,7,8,9,9,9,8,7,9,7,6,4,3,4,5,9,8,7,9,7,8,9,8,7,4,3,4,5,8,9,5,4,3,2,5,6,6,9,8,7,6,7,5,3,4,5,9,9,8,9,7,6,5,4,3,],
[2,1,0,1,2,3,4,6,8,9,6,5,6,9,9,8,7,6,4,3,4,6,8,8,9,3,4,5,7,8,9,7,9,9,9,9,8,7,6,8,9,9,6,5,9,8,6,9,9,9,8,7,6,9,8,7,6,4,7,6,9,9,9,8,9,9,9,9,8,5,4,5,6,9,7,6,5,4,3,4,5,6,9,8,9,5,5,4,2,3,4,7,6,7,8,9,7,7,9,4,],
[3,2,1,2,3,4,5,6,9,9,9,8,7,8,9,9,8,8,5,4,5,6,7,9,3,2,1,9,8,9,7,6,7,8,8,9,9,8,8,9,8,6,5,4,8,7,5,8,9,9,9,7,5,6,9,8,7,9,8,9,8,9,8,7,9,9,9,8,7,6,8,6,9,8,9,9,6,7,6,5,7,9,9,7,5,4,3,3,1,2,3,4,5,6,7,8,9,9,9,9,],
[5,3,3,3,4,5,9,9,9,9,8,9,8,9,8,9,8,7,6,5,6,7,8,9,9,3,9,8,9,2,3,4,5,6,7,8,9,9,9,9,6,5,4,3,9,6,4,6,7,8,9,5,4,5,6,9,8,9,9,8,7,9,8,6,7,8,9,9,8,9,9,9,8,7,9,8,9,8,7,8,9,8,7,5,4,3,2,1,0,1,2,3,4,5,9,9,8,7,9,8,],
[7,5,6,9,9,9,8,7,8,9,7,9,9,8,7,6,9,8,9,6,8,8,9,9,8,9,8,7,9,3,4,5,6,7,9,9,4,5,9,8,7,6,3,2,1,2,3,5,6,7,8,9,3,4,7,5,9,7,8,9,6,5,6,5,6,7,8,9,9,8,9,8,7,6,7,7,8,9,8,9,8,9,8,6,5,4,3,2,1,2,4,4,5,6,7,8,9,6,9,7,],
[8,6,9,8,8,8,9,6,7,6,6,8,9,9,9,9,8,9,8,7,9,9,9,8,7,7,5,6,8,9,5,6,7,8,9,7,9,9,9,9,8,5,4,3,2,3,7,6,7,8,9,2,1,2,3,4,5,6,9,9,8,4,2,4,7,9,9,9,8,6,9,7,6,5,4,5,7,9,9,9,7,9,8,7,9,7,5,3,2,3,4,5,7,8,9,9,4,5,5,6,],
[9,9,8,7,6,7,4,5,6,5,5,7,8,9,9,8,7,6,9,8,9,9,9,7,6,5,4,8,7,8,9,7,8,9,4,5,9,8,8,9,8,7,6,4,3,4,7,8,9,9,4,3,2,5,4,5,6,9,8,7,6,5,3,4,9,9,9,8,7,5,5,6,8,9,2,5,6,8,9,7,6,9,9,9,8,7,6,4,3,4,5,6,9,9,5,4,3,4,3,4,],
[9,8,7,6,5,4,3,2,3,4,4,6,7,8,9,9,6,5,6,9,9,8,7,6,7,4,3,4,6,7,8,9,9,9,3,9,8,7,6,8,9,7,6,5,4,5,6,7,8,9,5,4,5,6,5,8,7,9,9,8,7,6,9,5,7,8,9,9,5,4,3,2,1,0,1,4,5,7,8,9,5,7,8,8,9,8,8,5,4,5,6,9,8,9,4,3,2,3,2,3,],
[1,9,8,7,6,5,2,1,0,2,3,4,5,6,7,8,9,4,3,2,3,9,6,5,4,3,2,3,4,8,9,9,8,8,9,9,9,5,4,4,9,8,7,7,9,6,7,8,9,7,6,5,7,7,6,9,8,9,6,9,8,9,8,6,8,9,8,7,6,6,5,3,5,1,2,3,4,8,9,9,4,5,6,7,9,9,7,6,7,6,9,9,7,8,9,2,1,0,1,2,],
[0,1,9,9,8,6,3,2,4,3,4,5,8,9,9,9,4,5,3,1,9,8,7,6,5,4,6,4,5,9,9,7,6,7,8,9,8,4,3,2,0,9,8,9,8,9,8,9,9,8,7,9,8,8,7,9,9,3,5,6,9,9,9,7,9,0,9,8,7,7,6,4,5,2,3,4,5,6,7,8,9,6,7,9,8,9,8,9,9,9,8,7,6,7,8,9,2,5,2,3,],
[9,2,3,9,9,5,4,8,6,7,5,6,7,9,5,4,3,2,1,0,9,9,9,8,6,7,6,5,6,7,8,9,5,6,9,8,7,6,4,3,1,2,9,8,7,8,9,0,1,9,9,1,9,9,8,9,2,1,3,4,5,9,9,8,9,1,2,9,9,8,7,8,4,3,4,5,6,7,8,9,8,9,9,8,7,6,9,8,7,6,5,4,5,2,6,7,9,4,3,4,],
[8,9,9,8,7,6,7,8,9,8,6,8,9,7,6,5,6,9,2,9,8,7,9,8,7,8,7,6,7,8,9,5,4,5,6,9,8,7,5,4,2,9,8,7,6,7,8,9,9,8,9,2,3,5,9,2,1,0,1,6,7,8,9,9,4,3,9,9,9,9,8,9,5,5,6,7,8,9,9,7,7,8,9,9,6,5,7,9,8,7,6,3,2,1,5,6,7,9,9,9,],
[7,8,9,9,8,7,8,9,9,8,7,9,9,8,7,6,9,8,9,8,7,5,5,9,8,9,9,9,8,9,9,9,5,9,7,9,8,7,6,7,9,8,7,6,5,6,7,8,9,7,8,9,4,5,9,3,2,1,3,7,9,9,9,7,6,9,8,9,8,7,9,8,7,6,7,8,9,6,5,6,5,6,8,8,9,4,5,6,9,8,5,4,3,2,3,4,5,6,7,8,],
[6,8,9,5,9,8,9,4,6,9,9,0,2,9,9,7,9,7,6,7,5,3,4,5,9,8,9,9,9,9,9,8,9,8,9,9,9,8,7,9,8,7,6,5,4,5,3,4,5,6,7,8,9,9,8,9,3,2,9,9,8,9,9,9,9,8,7,6,9,6,7,9,9,8,8,9,6,5,4,3,4,5,6,7,8,9,9,9,9,7,6,5,6,9,4,9,6,7,8,9,],
[5,6,9,4,3,9,8,9,7,9,8,9,9,8,8,9,7,6,5,4,4,2,3,5,6,7,8,9,3,9,8,7,8,7,8,9,9,9,9,6,9,9,9,6,3,1,2,3,4,7,8,9,8,7,7,8,9,9,8,8,7,8,9,9,8,7,6,5,6,5,6,7,9,9,9,8,7,6,7,9,7,6,7,8,9,9,8,8,9,9,7,9,9,8,9,8,9,9,9,4,],
[3,7,8,9,4,5,7,8,9,8,7,9,8,6,7,8,9,5,4,3,2,1,4,6,7,8,9,2,1,9,7,6,7,6,7,8,9,9,7,5,6,9,8,7,4,2,6,4,9,8,9,5,7,5,6,7,9,8,7,9,6,7,9,6,5,4,3,4,3,4,5,6,8,9,9,9,8,9,8,9,8,7,8,9,9,9,6,7,9,8,9,9,8,7,8,7,9,8,9,3,],
[4,5,6,7,9,6,7,9,8,7,6,5,6,5,6,7,9,6,5,4,3,5,6,9,8,9,8,9,9,8,6,5,4,5,6,7,8,9,5,4,9,8,7,6,5,3,4,5,8,9,5,4,2,4,7,9,8,6,5,4,5,9,6,5,4,3,2,1,2,3,4,5,7,9,9,8,9,8,9,2,9,8,9,8,9,8,5,5,6,7,9,8,7,5,6,5,8,7,8,9,],
[7,6,8,9,8,7,8,9,9,8,9,4,3,4,5,6,8,9,6,5,4,6,7,8,9,6,7,9,8,7,6,4,3,4,5,8,9,5,4,3,3,9,8,9,5,4,5,6,7,9,3,2,1,2,3,9,6,5,4,3,7,8,9,6,5,4,3,4,3,7,6,8,9,9,8,6,6,7,9,0,1,9,8,7,6,7,4,4,5,9,8,6,5,4,3,4,5,6,9,6,],
[8,7,8,9,9,8,9,9,9,9,7,3,2,3,4,5,9,8,9,6,8,7,8,9,4,5,9,8,7,6,4,3,2,3,6,7,8,9,3,2,1,9,8,7,6,8,7,9,9,8,9,9,4,3,9,8,7,6,5,4,5,9,8,7,8,5,9,5,4,9,8,9,8,7,7,5,5,6,8,9,9,9,8,6,5,4,3,2,9,8,7,6,4,3,2,5,6,7,9,5,],
[9,9,9,1,0,9,9,9,8,7,6,2,1,2,6,5,7,7,8,9,9,8,9,4,3,5,6,9,8,4,3,2,1,2,3,6,7,8,9,3,3,4,9,8,7,9,8,9,8,7,9,8,9,4,5,9,8,7,6,8,7,8,9,9,9,9,8,9,5,6,7,9,8,6,5,4,3,4,8,7,8,9,8,8,6,5,4,0,1,9,8,7,3,2,1,3,4,8,9,4,],
[9,9,8,9,1,2,9,8,7,6,5,4,0,1,2,4,5,6,7,9,7,9,9,6,4,5,7,9,9,7,6,3,0,1,4,5,6,7,8,9,4,5,9,9,8,9,9,8,9,6,6,7,8,9,6,7,9,8,7,8,9,9,4,5,9,8,7,8,9,7,8,9,9,8,8,6,2,3,4,5,9,8,7,6,5,4,3,1,4,6,9,5,4,3,4,5,6,9,0,2,],
[9,8,7,8,9,3,9,9,8,6,5,2,1,5,6,9,8,7,9,7,6,9,8,7,5,7,9,8,7,6,5,4,1,2,3,4,8,9,9,6,5,9,8,9,9,8,9,7,6,4,5,6,7,8,9,8,9,9,8,9,3,2,3,9,8,9,6,6,8,9,9,9,8,7,6,5,4,9,5,6,7,9,9,8,6,5,6,2,3,5,9,8,7,6,5,8,7,8,9,3,],
[8,7,6,9,8,9,8,7,6,5,4,3,2,4,7,8,9,8,9,6,5,4,9,8,6,9,6,9,8,7,6,5,2,3,6,5,7,8,9,9,9,8,7,6,9,7,6,5,4,3,6,7,8,9,6,9,3,4,9,9,1,0,9,8,7,6,5,5,6,8,9,9,9,8,8,6,7,8,8,7,9,7,9,8,7,6,7,9,7,6,7,9,8,9,6,9,8,9,5,4,],
[7,6,5,9,7,6,9,8,7,6,5,4,6,5,9,9,6,9,7,9,2,3,9,9,9,8,5,3,9,8,7,7,9,8,7,6,9,9,9,8,7,6,5,4,9,8,7,6,5,4,7,8,9,4,5,7,9,5,9,8,9,1,3,9,9,5,4,4,5,7,8,9,9,9,9,7,8,9,9,8,9,6,5,9,8,8,9,9,8,9,8,9,9,9,8,9,9,9,9,5,],
[7,6,4,9,8,5,3,9,8,7,6,5,8,9,4,3,4,6,6,8,9,9,8,9,9,7,6,4,7,9,9,8,9,9,8,7,8,9,0,9,9,6,4,3,4,9,8,7,6,5,6,7,8,9,9,9,7,9,8,7,8,9,9,8,7,3,2,3,5,6,7,8,9,9,9,8,9,4,5,9,9,7,4,3,9,9,3,4,9,5,9,7,8,9,9,9,6,9,8,6,],
[6,5,3,4,9,5,4,5,9,9,7,6,7,8,9,2,3,5,5,9,9,8,7,9,8,7,6,5,6,7,9,9,3,4,9,8,9,2,1,9,8,7,5,6,5,6,9,8,7,9,7,8,9,9,8,9,6,8,9,6,7,7,8,9,5,4,0,2,4,5,6,9,9,9,9,9,6,5,9,9,8,6,3,2,1,0,1,2,3,4,5,6,9,8,7,8,5,4,9,7,],
[5,4,2,9,7,6,5,6,7,9,8,7,8,9,1,0,2,3,4,5,9,7,6,5,9,8,7,8,7,9,4,3,2,5,2,9,9,9,2,4,9,9,8,7,8,7,8,9,8,9,8,9,9,9,7,9,5,6,5,4,5,6,7,8,9,5,4,3,5,7,9,9,9,8,9,8,7,9,8,7,6,5,4,3,2,1,2,9,5,9,6,9,8,7,6,5,4,3,2,9,],
[3,2,1,2,9,8,7,7,9,4,9,8,9,3,2,1,2,9,6,7,8,9,5,4,3,9,8,9,9,4,3,2,1,0,1,9,9,8,9,5,9,8,9,8,9,9,9,5,9,7,9,9,9,7,6,8,4,4,2,3,4,5,6,9,7,6,5,4,5,6,7,8,9,7,8,9,9,9,9,9,7,6,5,7,3,2,9,8,9,8,9,8,9,8,8,4,3,2,1,2,],
[3,1,0,1,4,9,8,9,4,3,4,9,5,4,3,3,3,8,7,9,9,7,6,4,2,3,9,6,7,9,4,3,2,1,9,8,9,7,8,9,8,7,5,9,3,5,3,4,5,6,7,9,8,6,5,4,3,2,1,4,3,5,6,8,9,7,6,7,8,9,9,9,7,6,5,7,9,8,9,8,9,9,9,5,4,9,8,7,8,7,9,7,8,9,9,4,3,2,0,9,],
[4,2,1,2,3,4,9,9,3,2,3,9,8,5,4,4,4,9,9,8,9,6,5,2,1,3,4,5,6,8,9,4,3,9,7,7,8,6,7,8,9,5,4,3,2,1,2,3,6,7,8,9,9,8,7,5,4,5,0,1,2,3,7,9,8,9,9,8,9,9,7,5,4,3,4,9,8,7,9,7,6,7,8,9,9,8,9,6,7,6,8,6,7,8,9,9,9,9,9,8,],
[4,3,6,3,4,5,7,8,9,3,9,8,7,6,5,9,5,9,8,7,8,9,4,3,2,4,6,7,8,9,6,5,9,8,6,5,3,5,7,8,9,6,5,4,3,2,4,4,7,8,9,2,3,9,9,6,5,3,1,2,3,4,5,6,7,9,2,9,9,8,9,6,5,5,9,8,7,6,5,4,5,6,7,8,9,7,6,5,4,5,4,5,7,9,9,8,8,7,8,7,],
[9,4,5,6,7,8,9,9,5,4,5,9,8,9,9,8,9,8,7,6,7,9,9,4,3,5,9,8,9,8,7,9,8,9,4,3,2,3,4,5,6,9,6,6,4,3,4,5,6,8,9,0,1,9,8,7,6,4,3,3,4,5,6,9,8,9,1,9,8,7,8,9,7,8,9,9,8,9,4,3,2,3,8,9,8,7,5,4,3,2,3,4,5,9,8,7,9,6,5,6,],
[8,7,6,9,8,9,9,8,6,6,7,8,9,9,9,7,6,5,6,5,6,7,8,9,4,7,8,9,9,9,8,9,7,6,5,4,5,4,5,6,7,8,9,7,5,4,5,6,7,8,9,9,2,3,9,8,9,5,4,5,6,6,7,8,9,9,9,8,6,5,6,7,9,9,9,9,9,8,9,2,1,9,9,8,9,8,4,3,2,1,2,3,9,8,7,6,5,5,4,5,],
[9,9,9,7,9,9,8,9,8,8,9,9,9,8,7,6,5,4,3,4,5,6,7,8,9,8,9,8,7,8,9,9,9,8,6,6,6,5,6,7,9,9,9,7,6,5,6,7,9,9,7,8,9,4,5,9,7,6,5,7,8,9,8,9,9,8,7,6,5,4,5,6,7,9,7,9,6,7,8,9,9,8,7,6,5,4,3,2,1,0,1,9,8,7,6,5,4,2,3,4,],
[9,8,8,6,7,9,7,9,9,9,4,9,8,7,6,5,4,3,2,3,2,6,6,7,8,9,8,7,6,7,8,8,9,9,8,9,8,6,7,8,9,7,8,9,7,6,7,8,9,6,6,9,9,5,7,8,9,7,6,8,9,9,9,9,8,7,6,5,4,3,5,6,8,9,6,4,5,6,9,9,9,9,9,8,6,9,5,4,3,1,2,3,9,8,7,6,5,1,0,1,],
[9,7,6,5,6,5,6,7,8,9,3,1,9,8,5,4,3,2,1,0,1,4,5,6,7,8,9,6,5,6,6,7,8,9,9,7,9,9,8,9,7,6,7,8,9,7,8,9,3,4,5,9,8,9,8,9,9,8,7,9,7,9,9,9,9,9,8,6,6,2,7,8,9,5,4,3,4,6,7,8,9,2,1,9,9,8,7,5,4,2,9,4,5,9,8,9,3,2,1,2,],
[7,6,5,4,5,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1,2,3,4,5,9,9,7,5,4,4,5,6,9,8,6,5,4,3,9,3,4,5,6,7,8,9,9,1,2,3,9,9,7,8,9,0,1,9,8,9,6,7,9,8,9,8,7,6,5,3,4,9,7,6,5,1,4,9,8,9,9,3,2,4,6,9,7,6,5,9,8,9,9,9,9,5,4,3,4,3,],
[8,9,4,3,2,3,4,5,6,7,9,2,9,8,7,6,5,4,3,2,7,5,6,7,8,9,5,4,3,2,3,4,5,9,5,4,3,2,1,2,7,6,7,8,9,3,2,0,1,9,8,8,6,8,9,3,2,3,9,8,7,9,8,7,7,9,8,7,6,5,6,8,9,3,2,0,2,3,9,7,8,9,3,4,5,9,8,7,9,7,6,7,8,9,8,7,6,4,5,8,],
[9,8,9,5,3,9,5,6,7,8,9,1,2,9,8,9,6,5,4,5,8,6,7,8,9,9,9,5,4,4,5,6,6,8,9,8,6,5,4,3,4,6,8,9,5,4,3,2,9,8,7,6,5,7,8,9,3,9,9,9,9,8,7,6,5,4,9,8,7,6,7,9,5,4,3,2,4,4,5,6,7,8,9,6,7,8,9,9,8,7,5,3,4,5,9,8,7,9,6,7,],
[8,7,9,6,9,8,9,9,8,9,1,0,1,2,9,2,9,8,6,7,9,7,8,9,9,9,8,7,8,5,6,8,9,9,9,9,7,8,5,4,5,7,8,9,6,5,9,3,4,9,8,5,4,6,7,8,9,8,8,9,8,7,6,5,4,3,2,9,9,8,9,9,7,5,4,4,5,5,6,7,8,9,8,7,8,9,8,6,5,4,3,2,3,4,5,9,9,8,9,8,],
[7,6,7,9,9,7,9,8,9,3,2,1,2,3,9,1,0,9,7,8,9,8,9,6,8,9,9,8,9,6,7,8,9,9,9,9,8,7,6,5,6,7,8,9,7,9,8,9,9,8,7,6,3,2,8,2,4,6,7,8,9,9,8,6,5,2,1,0,1,9,7,8,9,6,7,8,9,6,7,8,9,8,9,9,9,5,9,8,6,3,2,1,2,3,4,9,8,7,9,9,],
[6,5,9,8,7,6,7,7,8,9,3,2,4,9,8,9,9,9,8,9,2,9,4,5,9,9,9,9,9,9,8,9,9,9,8,7,9,8,7,6,8,9,9,9,9,8,7,9,8,7,6,5,4,1,0,1,3,5,6,9,0,1,9,8,7,4,5,1,2,3,6,7,8,9,8,9,8,7,8,9,6,7,9,6,5,4,3,9,6,4,3,2,4,5,9,8,7,6,8,9,],
[5,4,3,2,5,4,5,6,8,9,9,3,9,8,7,8,8,9,9,1,0,2,3,9,9,8,9,8,7,8,9,9,9,8,9,6,5,9,8,7,9,9,9,9,8,7,6,5,9,8,7,6,7,2,1,2,4,8,7,9,1,9,8,7,6,5,6,2,3,4,5,6,7,8,9,9,9,8,9,6,5,6,8,9,6,0,1,9,8,6,5,4,5,9,9,7,6,5,7,8,],
[4,3,2,1,2,3,4,5,6,7,8,9,9,7,6,7,7,8,9,2,9,3,9,8,9,7,6,5,6,9,8,9,8,7,8,9,4,2,9,9,6,8,9,9,9,8,7,4,3,9,8,7,5,3,3,3,6,7,9,8,9,9,9,8,7,5,4,3,4,5,6,7,8,9,9,9,9,9,1,3,4,7,9,9,2,1,3,9,8,7,6,7,9,8,7,6,5,4,6,9,],
[3,2,1,0,3,5,5,8,7,9,9,9,9,6,4,5,6,7,8,9,8,9,9,7,8,9,7,4,9,8,7,8,7,6,9,8,9,1,0,3,5,6,9,8,7,9,6,5,1,9,8,7,5,4,4,5,6,9,8,7,8,9,9,9,8,7,6,5,5,6,7,9,9,7,7,8,9,3,0,4,5,6,7,8,9,2,4,6,9,9,8,9,9,9,8,6,4,3,4,5,],
[4,3,2,3,7,9,6,7,8,9,8,7,8,9,2,4,5,6,7,9,7,7,5,6,7,8,9,5,9,8,6,6,4,5,8,7,9,2,1,2,3,9,8,7,6,5,5,1,0,1,9,8,6,5,6,7,8,9,9,6,9,8,9,9,9,8,7,6,6,7,8,9,4,5,6,9,3,2,1,3,6,7,8,9,4,3,5,6,9,7,9,9,8,7,5,4,3,2,3,4,],
[6,4,3,5,6,9,7,8,9,6,5,6,7,8,9,5,9,7,9,8,6,5,4,5,7,9,8,9,9,9,5,4,3,4,5,6,7,9,2,3,9,9,9,8,6,4,3,2,3,4,9,8,7,6,7,8,9,9,6,5,6,7,8,9,7,9,8,7,9,8,9,2,3,4,9,8,9,3,6,5,6,8,9,6,5,4,6,9,8,6,5,6,9,8,9,6,5,6,7,6,],
[9,8,7,6,7,8,9,9,2,3,4,5,6,8,9,6,8,9,3,9,7,4,3,4,5,6,7,8,9,7,6,3,1,2,4,5,9,8,9,9,8,9,8,7,6,5,4,3,4,5,6,9,8,9,8,9,9,8,7,6,7,8,9,6,6,7,9,8,9,9,0,1,4,5,6,7,8,9,9,6,8,9,8,7,6,5,9,8,7,5,4,3,4,9,8,7,6,7,8,9,],
[9,9,8,7,8,9,5,3,1,2,3,4,5,7,9,7,9,5,4,9,8,5,6,5,7,7,8,9,8,7,5,4,0,1,3,4,6,7,8,9,7,9,9,8,7,7,5,5,5,6,7,8,9,9,9,4,3,9,8,9,8,9,3,4,5,9,9,9,8,4,3,2,3,6,7,8,9,9,8,7,9,6,9,9,8,7,8,9,7,4,3,2,1,0,9,8,9,8,9,6,],
[7,8,9,9,9,8,6,4,5,3,4,5,6,9,9,8,9,6,9,8,7,6,7,6,7,8,9,3,9,8,6,2,1,2,4,6,8,9,9,8,6,7,8,9,8,8,6,6,9,8,9,9,8,7,8,9,2,4,9,9,9,6,2,3,4,5,9,8,7,6,5,4,4,5,6,7,9,2,9,9,6,5,3,4,9,8,9,9,6,5,5,4,3,9,8,9,8,9,6,5,],
[6,4,3,2,0,9,7,5,6,8,9,6,7,8,9,9,9,7,8,9,8,7,8,8,9,9,0,1,2,9,7,3,2,6,5,7,9,7,6,5,4,5,9,5,9,9,7,7,8,9,6,5,7,6,7,8,9,5,9,8,9,5,1,0,5,6,9,9,9,8,6,9,7,6,7,8,9,0,9,8,9,3,2,3,4,9,8,7,9,9,6,5,9,8,7,6,7,4,6,4,],
[6,5,9,3,1,9,8,7,8,9,8,9,8,9,4,5,8,9,9,8,9,9,9,9,7,8,9,2,3,9,8,4,3,8,9,8,9,8,9,9,6,7,9,4,9,9,9,8,9,9,5,4,6,5,5,6,8,9,8,7,9,4,3,1,4,5,8,7,9,8,7,8,9,7,8,9,9,9,8,7,8,9,3,9,9,6,5,6,7,8,9,6,7,9,9,5,5,3,5,3,],
[9,9,8,9,3,4,9,9,9,9,7,6,9,2,3,6,7,9,8,7,8,9,4,8,6,8,9,9,4,5,9,5,4,9,9,9,2,9,9,8,7,9,2,9,8,7,6,9,9,8,9,3,2,4,4,5,8,8,9,6,8,9,4,2,3,4,5,6,7,9,8,9,9,8,9,9,8,5,7,6,7,8,9,8,8,7,4,5,8,9,8,7,9,8,8,4,3,2,1,2,],
[8,8,7,8,9,5,9,8,9,8,9,5,4,1,2,6,7,9,7,6,7,8,3,6,5,6,7,8,9,9,8,7,5,7,8,9,1,3,6,9,9,9,0,9,9,6,5,4,8,7,8,9,1,2,3,4,6,7,9,5,7,7,9,3,4,5,9,7,9,8,9,1,0,9,9,8,7,4,3,5,6,9,9,7,6,3,2,4,9,9,9,9,8,7,6,5,4,5,2,3,],
[7,9,6,7,8,9,9,7,6,7,8,9,3,2,3,5,9,8,6,5,4,3,2,3,4,7,6,9,9,9,9,8,9,8,9,9,0,1,5,6,7,8,9,8,7,5,4,3,7,6,7,8,9,6,5,6,7,8,9,4,5,6,8,9,5,9,8,9,8,7,8,9,2,9,8,7,6,3,2,4,5,7,8,9,5,4,3,6,7,8,9,9,9,8,7,8,7,6,3,4,],
[5,4,5,6,9,9,8,6,5,6,9,9,4,4,6,7,8,9,7,6,5,2,1,2,3,4,5,6,8,9,3,9,6,9,7,8,9,2,4,5,6,9,8,7,6,5,3,2,3,5,6,9,8,9,6,7,8,9,2,3,4,5,7,9,9,8,7,6,9,6,7,8,9,7,6,5,4,2,1,3,4,6,7,8,9,5,9,7,8,9,9,8,6,9,8,9,8,7,4,5,],
[4,3,4,9,8,7,6,5,4,5,9,8,9,5,7,8,9,9,9,6,5,3,2,4,5,7,6,7,8,9,2,3,4,5,6,7,9,3,6,7,8,9,9,9,7,2,1,0,3,4,5,6,7,8,9,8,9,2,1,2,4,5,6,9,8,7,6,5,5,4,9,9,8,6,5,3,2,1,0,1,4,5,6,9,9,9,8,9,9,9,7,6,5,4,9,4,9,8,5,6,],
[3,2,3,4,9,8,7,4,3,9,8,7,8,9,8,9,3,9,8,7,6,9,3,5,6,9,7,8,9,0,1,9,5,6,7,8,9,8,7,8,9,9,9,8,6,4,2,1,2,3,8,9,8,9,9,9,4,3,4,3,4,5,9,8,7,6,5,4,3,2,3,5,9,9,8,6,3,2,1,2,3,4,8,9,9,8,7,8,9,7,6,5,4,3,2,3,4,9,8,7,],
[2,1,3,6,7,9,6,5,4,5,9,6,7,8,9,3,2,1,9,8,9,8,9,6,7,8,9,9,8,9,9,8,9,7,9,9,1,9,8,9,7,8,9,9,7,4,3,6,3,4,7,8,9,9,9,8,5,4,5,4,5,9,9,8,6,5,4,3,2,1,2,3,9,8,7,5,4,3,4,3,4,5,9,9,8,7,6,7,9,7,5,4,3,2,1,2,4,5,9,8,],
[6,5,4,5,9,8,7,6,5,9,8,7,8,9,9,9,4,2,3,9,8,7,9,9,8,9,9,9,7,7,6,7,9,9,8,9,0,1,9,5,6,9,8,7,6,5,4,5,5,5,6,9,2,9,8,7,6,5,6,6,9,8,9,9,7,6,6,5,1,0,1,2,9,8,7,6,5,8,9,4,5,6,7,8,9,6,5,6,8,9,6,5,9,4,2,3,4,5,9,9,],
[7,6,5,9,8,9,9,8,6,7,9,9,9,9,8,8,9,3,9,8,7,6,7,8,9,9,8,8,6,4,5,6,9,8,7,9,9,2,3,4,5,8,9,8,7,6,5,6,6,6,8,9,1,2,9,8,7,9,8,9,8,7,6,9,8,5,4,3,2,1,2,3,4,9,8,7,6,7,6,5,6,7,8,9,9,5,4,5,6,9,9,9,8,9,9,9,5,6,7,8,],
[9,9,9,8,6,5,4,9,7,8,9,8,9,8,7,7,8,9,8,7,6,5,8,9,9,8,7,6,4,3,4,7,8,9,6,7,8,9,4,5,6,7,8,9,8,7,6,7,9,7,9,1,0,1,2,9,8,9,9,8,7,6,5,5,9,8,7,6,4,2,3,4,5,6,9,8,9,8,7,8,9,9,9,9,8,7,3,2,4,8,8,9,7,9,7,8,9,7,8,9,],
[9,8,7,6,5,4,3,9,8,9,8,7,6,8,6,5,7,8,9,9,9,6,9,9,9,9,9,5,3,2,1,2,3,4,5,6,7,8,9,6,8,8,9,7,9,8,7,8,9,8,9,5,4,2,3,4,9,7,8,9,6,5,4,3,4,9,9,8,7,3,4,8,6,7,8,9,9,9,9,9,7,8,9,8,7,5,2,1,2,6,7,9,6,5,6,7,8,9,9,0,],
[2,9,9,5,4,3,2,5,9,8,7,6,5,9,3,4,4,5,6,7,8,9,3,9,8,7,6,5,4,5,2,3,4,5,6,8,9,9,9,7,8,9,7,6,5,9,8,9,2,9,8,6,4,3,4,9,8,6,9,8,7,6,3,2,1,9,8,7,6,4,6,7,8,9,9,9,8,7,6,5,6,9,8,7,6,4,1,0,1,4,9,8,9,4,5,6,9,5,2,1,],
[1,9,8,6,5,4,3,4,9,7,6,5,4,3,2,1,3,4,5,8,9,1,2,3,9,9,7,6,5,6,3,4,5,6,8,9,3,1,9,8,9,7,6,5,4,3,9,0,1,2,9,6,5,4,9,7,6,5,4,9,8,7,4,3,4,5,9,8,7,6,7,8,9,1,0,1,9,8,3,4,6,9,8,6,5,3,2,1,2,3,5,7,8,9,7,8,9,4,3,3,]]

// map = [[2,1,9,9,9,4,3,2,1,0],
//        [3,9,8,7,8,9,4,9,2,1],
//        [9,8,5,6,7,8,9,8,9,2],
//        [8,7,6,7,8,9,6,7,8,9],
//        [9,8,9,9,9,6,5,6,7,8]]


let risk_level = 0

// Start with the corners
let height = map.length
let width = map[0].length

let top_left = map[0][0]
if (top_left < Math.min(map[1][0], map[0][1])){
    console.log('Found low in top left corner')
    risk_level += top_left + 1
}

let top_right = map[0][map[0].length - 1]
if (top_right < Math.min(map[0][width - 2], map[1][width - 1])){
    console.log('Found low in top right corner')
    risk_level += top_right + 1
}

let bottom_left = map[map.length - 1][0]
if (bottom_left < Math.min(map[height - 2][0], map[height - 1][1])) {
    console.log('Found low in top bottom left corner')
    risk_level += bottom_left + 1
}

let bottom_right = map[height - 1][width - 1]
if (bottom_right < Math.min(map[height - 1][width - 2], map[height - 2][width - 1])) {
    console.log('Found low in top bottom right corner')
    risk_level += bottom_right + 1
}



// Proceed with the top border. Exclude the corners
for (let i = 1; i < width - 1; i++) {
    let point = map[0][i]
    if (point < Math.min(map[0][i - 1], map[0][i + 1], map[1][i])) {
        // console.log('Found', point, 'in top border')
        risk_level += point + 1
    }
}

// Bottom border. Exclude the corners
for (let i = 1; i < width - 1; i++) {
    let point = map[height - 1][i]
    if (point < Math.min(map[height - 1][i - 1], map[height - 1][i + 1], map[height - 2][i])) {
        // console.log('Found', point, 'in bottom border')
        risk_level += point + 1
    }
}

// Right border. Exclude the corners
for (let i = 1; i < height - 1; i++) {
    let point = map[i][width - 1]
    if (point < Math.min(map[i - 1][width - 1], map[i + 1][width - 1], map[i][width - 2])) {
        // console.log('Found', point, 'in right border')
        risk_level += point + 1
    }
}


// Left border. Exclude the corners
for (let i = 1; i < height - 1; i++) {
    let point = map[i][0]
    if (point < Math.min(map[i - 1][0], map[i + 1][0], map[i][1])) {
        // console.log('Found', point, 'in left border')
        risk_level += point + 1
    }
}

console.log('height:', height)
// Finish with the rest. Exclude the borders
for (let row = 1; row < height - 1; row++) {
    for (let col = 1; col < width - 1; col++) {
        let point = map[row][col]
        if (point < Math.min(
            map[row - 1][col], map[row + 1][col],
            map[row][col - 1], map[row][col + 1]
            )) {
                // console.log('Found', point)
                risk_level += point + 1
            }
    }
    console.log()
}

console.log('Risk level:', risk_level)

// Part 2
// Find the three largest basins and multiply their sizes together

let basin = []
height = map.length
width = map[0].length

for (let row = 0; row < height; row++) {
    basin.push([])
    for (let col = 0; col < width; col++) {
        basin[row].push(0)
    }
}
console.log(basin)

// Recursively go through all numbers and map them to the basin
let basin_label = 1
let recursion_count = 0
for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
        // Send one in each direction
        let updated = update_basin(row, col)
        if (updated) {
            basin_label++
            // console.log("Incrementing basin label")
        }
    }
}

function update_basin(row: number, col: number) {
    // console.log("Updating basin at (" + String(row) + ", " +  String(col) + ")")
    if (row < 0 || row >= height || col < 0 || col >= width) {
        // console.log("Out of bounds")
        return false
    }
    if (map[row][col] == 9) {
        // console.log("Found edge")
        return false
    }
    if (basin[row][col] == 0) {
        // console.log("Found unlabeled")
        basin[row][col] = basin_label
        // console.log("Entering recursion", ++recursion_count)
        update_basin(row, col - 1)  // Left
        update_basin(row - 1, col)  // Up
        update_basin(row, col + 1)  // Right
        update_basin(row + 1, col)  // Down
        // console.log("Done with recursion", --recursion_count)
        return true
    }
    // console.log("Already labeled")
    return false
}

console.log(basin)
let flat_basin = [].concat(...basin)
let d = {}
for (let i = 0; i < basin_label; i++) {
    d[i] = 0
}
flat_basin.forEach(item => d[item] += 1)
d[0] = 0  // Remove edges
console.log(d)

let basin_sizes = []
Object.keys(d).forEach(key => basin_sizes.push(d[key]))
console.log(basin_sizes)

let product = 1
for (let i = 0; i < 3; i++) {
    let max = Math.max(...basin_sizes)
    product *= max
    let index_at_max = basin_sizes.indexOf(max)
    basin_sizes.splice(index_at_max, 1)
}
console.log(product)