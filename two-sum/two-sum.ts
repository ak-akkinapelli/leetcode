function twoSum(nums: number[], target: number): number[] {
        const hash ={}
      for(let i=0;i<nums.length;i++){
          if(target-nums[i] in hash){
              return [hash[target-nums[i]], i]
          }
          hash[nums[i]] = i
      }
};