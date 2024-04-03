function twoSum(nums: number[], target: number): number[] {
    const numberMap: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numberMap[complement] !== undefined) {
            return [numberMap[complement], i];
        }
        numberMap[nums[i]] = i;
    }

    throw new Error("No twoSum solution");
}