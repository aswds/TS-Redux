const arra = [2, 7, 11, 15];
const target = 9;
function twoSum(nums: number[], target: number): number[] {
  let map = new Map<number, number>();
  for (let i: number = 0; i < nums.length; i++) {
    let key: number = target - nums[i];
    if (map.has(key)) {
      return [map.get(key) as number, i as number];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
}

twoSum(arra, target);
