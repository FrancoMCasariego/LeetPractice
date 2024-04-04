function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    let expectedNums = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[expectedNums]) {
            expectedNums++;
            nums[expectedNums] = nums[i];
        }
    }
    return expectedNums + 1;
}