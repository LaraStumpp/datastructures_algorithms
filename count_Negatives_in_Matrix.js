/**
 * Count Negative Numbers in a Sorted Matrix
 * Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
 */

function countNegatives(grid) {
    var count=0;
    for (var i=0; i< grid.length;i++){
        for (var j=0; j< grid[i].length;j++){
            if(grid[i][j] <0){
                count=count + 1;
            }
        }
    }
    return count;
}
    
    
var grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
console.log(countNegatives(grid));countNegatives
