import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'

const MONGODB_URI = process.env.MONGO_URI || process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.error('MONGO_URI is missing. Add it to backend/.env')
  process.exit(1)
}

const problems = [
{
    subject: 'Code',
    category: 'Arrays',
    title: 'Find Maximum Element',
    difficulty: 'Easy',
    description:
      'Given an array of integers, find and return the maximum element in the array.',
    inputExample: 'arr = [3, 7, 2, 9, 1, 5]',
    outputExample: '9',
    explanation:
      'We iterate through the array, keeping track of the largest value seen so far. Starting with the first element (3), we update the max when we find a larger value: 3 → 7 → 9. The answer is 9.',
    code: {
      java: `public class FindMax {
    public static int findMax(int[] arr) {
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    public static void main(String[] args) {
        int[] arr = {3, 7, 2, 9, 1, 5};
        System.out.println(findMax(arr)); // 9
    }
}`,
      python: `def find_max(arr):
    max_val = arr[0]
    for num in arr[1:]:
        if num > max_val:
            max_val = num
    return max_val

print(find_max([3, 7, 2, 9, 1, 5]))  # 9`,
      c: `#include <stdio.h>

int findMax(int arr[], int n) {
    int max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}

int main() {
    int arr[] = {3, 7, 2, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    printf("%d\\n", findMax(arr, n)); // 9
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int findMax(vector<int>& arr) {
    int maxVal = arr[0];
    for (int i = 1; i < arr.size(); i++) {
        maxVal = max(maxVal, arr[i]);
    }
    return maxVal;
}

int main() {
    vector<int> arr = {3, 7, 2, 9, 1, 5};
    cout << findMax(arr) << endl; // 9
    return 0;
}`,
    },
  },
{
    subject: 'Code',
    category: 'Arrays',
    title: 'Two Sum',
    difficulty: 'Medium',
    description:
      'Given an array of integers and a target sum, find two numbers in the array that add up to the target. Return their indices. Assume exactly one solution exists.',
    inputExample: 'arr = [2, 7, 11, 15], target = 9',
    outputExample: '[0, 1]',
    explanation:
      'We use a hash map to store each number and its index. For each element, we check if (target - current) exists in the map. At index 0: value 2, complement 7 not in map. At index 1: value 7, complement 2 is in map at index 0. Return [0, 1].',
    code: {
      java: `import java.util.HashMap;
import java.util.Arrays;

public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        int[] result = twoSum(new int[]{2, 7, 11, 15}, 9);
        System.out.println(Arrays.toString(result)); // [0, 1]
    }
}`,
      python: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

print(two_sum([2, 7, 11, 15], 9))  # [0, 1]`,
      c: `#include <stdio.h>

void twoSum(int nums[], int n, int target, int result[2]) {
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] == target) {
                result[0] = i;
                result[1] = j;
                return;
            }
        }
    }
    result[0] = -1;
    result[1] = -1;
}

int main() {
    int nums[] = {2, 7, 11, 15};
    int result[2];
    twoSum(nums, 4, 9, result);
    printf("[%d, %d]\\n", result[0], result[1]); // [0, 1]
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;

    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.count(complement)) {
            return {seen[complement], i};
        }
        seen[nums[i]] = i;
    }
    return {};
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    vector<int> result = twoSum(nums, 9);
    cout << "[" << result[0] << ", " << result[1] << "]" << endl;
    return 0;
}`,
    },
  },
{
    subject: 'Code',
    category: 'Arrays',
    title: 'Sort an Array (Merge Sort)',
    difficulty: 'Hard',
    description:
      'Implement the Merge Sort algorithm to sort an array of integers in ascending order. Merge Sort is a divide-and-conquer algorithm that splits the array in half, recursively sorts each half, and merges the sorted halves.',
    inputExample: 'arr = [38, 27, 43, 3, 9, 82, 10]',
    outputExample: '[3, 9, 10, 27, 38, 43, 82]',
    explanation:
      'Merge Sort divides the array into halves until single elements remain, then merges them back in order. Split: [38,27,43,3] and [9,82,10]. Continue splitting until individual elements, then merge pairs in sorted order. Time complexity: O(N log N).',
    code: {
      java: `import java.util.Arrays;

public class MergeSort {
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }

    private static void merge(int[] arr, int left, int mid, int right) {
        int[] temp = new int[right - left + 1];
        int i = left, j = mid + 1, k = 0;

        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) temp[k++] = arr[i++];
            else temp[k++] = arr[j++];
        }
        while (i <= mid) temp[k++] = arr[i++];
        while (j <= right) temp[k++] = arr[j++];

        System.arraycopy(temp, 0, arr, left, temp.length);
    }

    public static void main(String[] args) {
        int[] arr = {38, 27, 43, 3, 9, 82, 10};
        mergeSort(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }
}`,
      python: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result

print(merge_sort([38, 27, 43, 3, 9, 82, 10]))`,
      c: `#include <stdio.h>
#include <stdlib.h>

void merge(int arr[], int left, int mid, int right) {
    int n = right - left + 1;
    int* temp = (int*)malloc(n * sizeof(int));
    int i = left, j = mid + 1, k = 0;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
    }
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];

    for (int x = 0; x < n; x++)
        arr[left + x] = temp[x];
    free(temp);
}

void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

int main() {
    int arr[] = {38, 27, 43, 3, 9, 82, 10};
    int n = sizeof(arr) / sizeof(arr[0]);
    mergeSort(arr, 0, n - 1);
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int>& arr, int left, int mid, int right) {
    vector<int> temp;
    int i = left, j = mid + 1;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) temp.push_back(arr[i++]);
        else temp.push_back(arr[j++]);
    }
    while (i <= mid) temp.push_back(arr[i++]);
    while (j <= right) temp.push_back(arr[j++]);

    for (int x = 0; x < temp.size(); x++)
        arr[left + x] = temp[x];
}

void mergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

int main() {
    vector<int> arr = {38, 27, 43, 3, 9, 82, 10};
    mergeSort(arr, 0, arr.size() - 1);
    for (int x : arr) cout << x << " ";
    cout << endl;
    return 0;
}`,
    },
  }
]

const seed = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB')

    const ops = problems.map(p => ({
      updateOne: {
        filter: { title: p.title },
        update: { $setOnInsert: p },
        upsert: true
      }
    }))

    const result = await CodeProblem.bulkWrite(ops)
    console.log(`Successfully processed ${problems.length} code problems`)

    await mongoose.disconnect()
    console.log('Done!')
    process.exit(0)
  } catch (error) {
    console.error('Seed failed:', error)
    process.exit(1)
  }
}

seed()
