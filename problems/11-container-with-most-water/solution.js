/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;
    
    while (left < right) {
        // Calculate current area
        const currentArea = Math.min(height[left], height[right]) * (right - left);
        maxWater = Math.max(maxWater, currentArea);
        
        // Move the pointer pointing to the shorter bar
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
};

module.exports = maxArea;
