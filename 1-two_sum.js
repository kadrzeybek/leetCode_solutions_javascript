//my first Solution -> brute force
/*
var twoSum = function(nums, target) {
    
    for (let i=0;i<nums.length;i++){
        for (let j=0;j<nums.length;j++) {
            if(i != j){
                if(nums[i]+nums[j] == target){
                    return [i,j]
                }
            }
            
        }
    }
};
*/

//optimize solution
var twoSum = function(nums, target){
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if(map.has(complement)){
            return [map.get(complement),i]
        }
        map.set(nums[i],i)
    }
}





// var twoSum = function(nums, target) {
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];

//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }

//         map.set(nums[i], i);
//     }

// };
//test
let nums = [4,7,11,15]
let target = 15
let result = twoSum(nums,target);
console.log(result)