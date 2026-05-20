import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'
import { fileURLToPath } from 'url'

export const problems = [
{
        subject: 'Code',
        category: 'Arrays',
        title: 'Second Largest Element',
        difficulty: 'Easy',
        description: 'Given an array of integers, find the second largest element. If no second largest exists, return -1.',
        inputExample: 'arr = [12, 35, 1, 10, 34, 1]',
        outputExample: '34',
        explanation: 'The largest element is 35 and the second largest is 34. We traverse the array once, tracking the largest and second largest values.',
        code: {
            java: `public class SecondLargest {
    public static int secondLargest(int[] arr) {
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num != first) {
                second = num;
            }
        }
        return second == Integer.MIN_VALUE ? -1 : second;
    }

    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};
        System.out.println(secondLargest(arr)); // 34
    }
}`,
            python: `def second_largest(arr):
    first = second = float('-inf')
    for num in arr:
        if num > first:
            second = first
            first = num
        elif num > second and num != first:
            second = num
    return second if second != float('-inf') else -1

print(second_largest([12, 35, 1, 10, 34, 1]))  # 34`,
            c: `#include <stdio.h>
#include <limits.h>

int secondLargest(int arr[], int n) {
    int first = INT_MIN, second = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] != first) {
            second = arr[i];
        }
    }
    return second == INT_MIN ? -1 : second;
}

int main() {
    int arr[] = {12, 35, 1, 10, 34, 1};
    printf("%d\\n", secondLargest(arr, 6)); // 34
    return 0;
}`,
            cpp: `#include <iostream>
#include <climits>
using namespace std;

int secondLargest(int arr[], int n) {
    int first = INT_MIN, second = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] != first) {
            second = arr[i];
        }
    }
    return second == INT_MIN ? -1 : second;
}

int main() {
    int arr[] = {12, 35, 1, 10, 34, 1};
    cout << secondLargest(arr, 6) << endl; // 34
    return 0;
}`,
        },
    },
{
        subject: 'Code',
        category: 'Arrays',
        title: 'Third Largest Element',
        difficulty: 'Easy',
        description: 'Given an array of distinct integers, find the third largest element. If the array has fewer than 3 elements, return the largest.',
        inputExample: 'arr = [2, 4, 1, 5, 3]',
        outputExample: '3',
        explanation: 'Sorted descending: [5, 4, 3, 2, 1]. The third largest is 3. We track the top three values in a single pass for O(N) time.',
        code: {
            java: `public class ThirdLargest {
    public static int thirdLargest(int[] arr) {
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE, third = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > first) {
                third = second; second = first; first = num;
            } else if (num > second) {
                third = second; second = num;
            } else if (num > third) {
                third = num;
            }
        }
        return arr.length < 3 ? first : third;
    }

    public static void main(String[] args) {
        int[] arr = {2, 4, 1, 5, 3};
        System.out.println(thirdLargest(arr)); // 3
    }
}`,
            python: `def third_largest(arr):
    if len(arr) < 3:
        return max(arr)
    first = second = third = float('-inf')
    for num in arr:
        if num > first:
            third, second, first = second, first, num
        elif num > second:
            third, second = second, num
        elif num > third:
            third = num
    return third

print(third_largest([2, 4, 1, 5, 3]))  # 3`,
            c: `#include <stdio.h>
#include <limits.h>

int thirdLargest(int arr[], int n) {
    int first = INT_MIN, second = INT_MIN, third = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (arr[i] > first) {
            third = second; second = first; first = arr[i];
        } else if (arr[i] > second) {
            third = second; second = arr[i];
        } else if (arr[i] > third) {
            third = arr[i];
        }
    }
    return n < 3 ? first : third;
}

int main() {
    int arr[] = {2, 4, 1, 5, 3};
    printf("%d\\n", thirdLargest(arr, 5)); // 3
    return 0;
}`,
            cpp: `#include <iostream>
#include <climits>
using namespace std;

int thirdLargest(int arr[], int n) {
    int first = INT_MIN, second = INT_MIN, third = INT_MIN;
    for (int i = 0; i < n; i++) {
        if (arr[i] > first) {
            third = second; second = first; first = arr[i];
        } else if (arr[i] > second) {
            third = second; second = arr[i];
        } else if (arr[i] > third) {
            third = arr[i];
        }
    }
    return n < 3 ? first : third;
}

int main() {
    int arr[] = {2, 4, 1, 5, 3};
    cout << thirdLargest(arr, 5) << endl; // 3
    return 0;
}`,
        },
    },
{
        subject: 'Code',
        category: 'Arrays',
        title: 'Reverse an Array',
        difficulty: 'Easy',
        description: 'Given an array, reverse it in-place using the two-pointer technique.',
        inputExample: 'arr = [1, 2, 3, 4, 5]',
        outputExample: '[5, 4, 3, 2, 1]',
        explanation: 'Use two pointers at the start and end. Swap elements and move pointers inward until they meet. This runs in O(N) time and O(1) space.',
        code: {
            java: `public class ReverseArray {
    public static void reverse(int[] arr) {
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++; right--;
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        reverse(arr);
        for (int x : arr) System.out.print(x + " "); // 5 4 3 2 1
    }
}`,
            python: `def reverse_array(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1

arr = [1, 2, 3, 4, 5]
reverse_array(arr)
print(arr)  # [5, 4, 3, 2, 1]`,
            c: `#include <stdio.h>

void reverse(int arr[], int n) {
    int left = 0, right = n - 1;
    while (left < right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++; right--;
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    reverse(arr, 5);
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);
    return 0;
}`,
            cpp: `#include <iostream>
#include <algorithm>
using namespace std;

void reverseArray(int arr[], int n) {
    int left = 0, right = n - 1;
    while (left < right) {
        swap(arr[left], arr[right]);
        left++; right--;
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    reverseArray(arr, 5);
    for (int i = 0; i < 5; i++) cout << arr[i] << " ";
    return 0;
}`,
        },
    },
{
        subject: 'Code',
        category: 'Arrays',
        title: 'Reverse Array in Groups',
        difficulty: 'Medium',
        description: 'Given an array and a number K, reverse every sub-array of K elements. If remaining elements are less than K, reverse them too.',
        inputExample: 'arr = [1, 2, 3, 4, 5, 6, 7, 8], K = 3',
        outputExample: '[3, 2, 1, 6, 5, 4, 8, 7]',
        explanation: 'Reverse groups: [1,2,3]→[3,2,1], [4,5,6]→[6,5,4], [7,8]→[8,7]. For each group of K, reverse using two pointers within that range.',
        code: {
            java: `public class ReverseInGroups {
    public static void reverseInGroups(int[] arr, int k) {
        for (int i = 0; i < arr.length; i += k) {
            int left = i, right = Math.min(i + k - 1, arr.length - 1);
            while (left < right) {
                int temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++; right--;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8};
        reverseInGroups(arr, 3);
        for (int x : arr) System.out.print(x + " ");
    }
}`,
            python: `def reverse_in_groups(arr, k):
    for i in range(0, len(arr), k):
        left, right = i, min(i + k - 1, len(arr) - 1)
        while left < right:
            arr[left], arr[right] = arr[right], arr[left]
            left += 1
            right -= 1

arr = [1, 2, 3, 4, 5, 6, 7, 8]
reverse_in_groups(arr, 3)
print(arr)  # [3, 2, 1, 6, 5, 4, 8, 7]`,
            c: `#include <stdio.h>

void reverseInGroups(int arr[], int n, int k) {
    for (int i = 0; i < n; i += k) {
        int left = i, right = (i + k - 1 < n - 1) ? i + k - 1 : n - 1;
        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++; right--;
        }
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8};
    reverseInGroups(arr, 8, 3);
    for (int i = 0; i < 8; i++) printf("%d ", arr[i]);
    return 0;
}`,
            cpp: `#include <iostream>
#include <algorithm>
using namespace std;

void reverseInGroups(int arr[], int n, int k) {
    for (int i = 0; i < n; i += k) {
        int left = i, right = min(i + k - 1, n - 1);
        while (left < right) {
            swap(arr[left], arr[right]);
            left++; right--;
        }
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8};
    reverseInGroups(arr, 8, 3);
    for (int i = 0; i < 8; i++) cout << arr[i] << " ";
    return 0;
}`,
        },
    },
{
        subject: 'Code',
        category: 'Arrays',
        title: 'Rotate Array',
        difficulty: 'Medium',
        description: 'Given an array, rotate it to the right by K steps. Use the reversal algorithm for O(1) extra space.',
        inputExample: 'arr = [1, 2, 3, 4, 5, 6, 7], K = 3',
        outputExample: '[5, 6, 7, 1, 2, 3, 4]',
        explanation: 'Reversal algorithm: 1) Reverse entire array → [7,6,5,4,3,2,1]. 2) Reverse first K → [5,6,7,4,3,2,1]. 3) Reverse remaining → [5,6,7,1,2,3,4]. O(N) time, O(1) space.',
        code: {
            java: `public class RotateArray {
    static void reverse(int[] arr, int l, int r) {
        while (l < r) { int t = arr[l]; arr[l] = arr[r]; arr[r] = t; l++; r--; }
    }

    public static void rotate(int[] arr, int k) {
        int n = arr.length;
        k = k % n;
        reverse(arr, 0, n - 1);
        reverse(arr, 0, k - 1);
        reverse(arr, k, n - 1);
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        rotate(arr, 3);
        for (int x : arr) System.out.print(x + " "); // 5 6 7 1 2 3 4
    }
}`,
            python: `def rotate(arr, k):
    n = len(arr)
    k = k % n
    arr.reverse()
    arr[:k] = arr[:k][::-1]
    arr[k:] = arr[k:][::-1]

arr = [1, 2, 3, 4, 5, 6, 7]
rotate(arr, 3)
print(arr)  # [5, 6, 7, 1, 2, 3, 4]`,
            c: `#include <stdio.h>

void reverse(int arr[], int l, int r) {
    while (l < r) { int t = arr[l]; arr[l] = arr[r]; arr[r] = t; l++; r--; }
}

void rotate(int arr[], int n, int k) {
    k = k % n;
    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6, 7};
    rotate(arr, 7, 3);
    for (int i = 0; i < 7; i++) printf("%d ", arr[i]);
    return 0;
}`,
            cpp: `#include <iostream>
#include <algorithm>
using namespace std;

void rotate(int arr[], int n, int k) {
    k = k % n;
    reverse(arr, arr + n);
    reverse(arr, arr + k);
    reverse(arr + k, arr + n);
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6, 7};
    rotate(arr, 7, 3);
    for (int i = 0; i < 7; i++) cout << arr[i] << " ";
    return 0;
}`,
        },
    },
{
        subject: 'Code',
        category: 'Arrays',
        title: 'Three Great Candidates',
        difficulty: 'Medium',
        description: 'Given an array of integers, find three numbers whose product is maximum. The result could involve negative numbers (two negatives make a positive).',
        inputExample: 'arr = [-10, -10, 5, 2, 3]',
        outputExample: '500',
        explanation: 'Max product is either (top 3 largest) or (two smallest negatives × largest). Here: (-10)*(-10)*5 = 500 vs 5*3*2 = 30. Answer is 500. Sort the array and compare both cases.',
        code: {
            java: `import java.util.Arrays;

public class ThreeGreatCandidates {
    public static int maxProduct(int[] arr) {
        Arrays.sort(arr);
        int n = arr.length;
        int opt1 = arr[n-1] * arr[n-2] * arr[n-3];
        int opt2 = arr[0] * arr[1] * arr[n-1];
        return Math.max(opt1, opt2);
    }

    public static void main(String[] args) {
        int[] arr = {-10, -10, 5, 2, 3};
        System.out.println(maxProduct(arr)); // 500
    }
}`,
            python: `def max_product(arr):
    arr.sort()
    return max(arr[-1] * arr[-2] * arr[-3],
               arr[0] * arr[1] * arr[-1])

print(max_product([-10, -10, 5, 2, 3]))  # 500`,
            c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int maxProduct(int arr[], int n) {
    qsort(arr, n, sizeof(int), cmp);
    int opt1 = arr[n-1] * arr[n-2] * arr[n-3];
    int opt2 = arr[0] * arr[1] * arr[n-1];
    return opt1 > opt2 ? opt1 : opt2;
}

int main() {
    int arr[] = {-10, -10, 5, 2, 3};
    printf("%d\\n", maxProduct(arr, 5)); // 500
    return 0;
}`,
            cpp: `#include <iostream>
#include <algorithm>
using namespace std;

int maxProduct(int arr[], int n) {
    sort(arr, arr + n);
    return max(arr[n-1] * arr[n-2] * arr[n-3],
               arr[0] * arr[1] * arr[n-1]);
}

int main() {
    int arr[] = {-10, -10, 5, 2, 3};
    cout << maxProduct(arr, 5) << endl; // 500
    return 0;
}`,
        },
    },
{
        subject: 'Code',
        category: 'Arrays',
        title: "Sort an array of 0's, 1's and 2's",
        difficulty: 'Medium',
        description: `Given an array consisting only of 0s, 1s, and 2s, sort the array in ascending order without using any built-in sort function.

This problem is also known as the Dutch National Flag problem.`,
        inputExample: 'arr = [2, 0, 2, 1, 1, 0]',
        outputExample: '[0, 0, 1, 1, 2, 2]',
        explanation: `We rearrange the elements so that all 0s come first, followed by 1s, then 2s.`,
        code: {
            java: `public class Main {
  public static void sort012(int[] arr) {
    int low = 0, mid = 0, high = arr.length - 1;
    while (mid <= high) {
      if (arr[mid] == 0) {
        int temp = arr[low];
        arr[low] = arr[mid];
        arr[mid] = temp;
        low++; mid++;
      } else if (arr[mid] == 1) {
        mid++;
      } else {
        int temp = arr[mid];
        arr[mid] = arr[high];
        arr[high] = temp;
        high--;
      }
    }
  }
}`,

            python: `def sort012(arr):
    low = mid = 0
    high = len(arr) - 1
    
    while mid <= high:
        if arr[mid] == 0:
            arr[low], arr[mid] = arr[mid], arr[low]
            low += 1
            mid += 1
        elif arr[mid] == 1:
            mid += 1
        else:
            arr[mid], arr[high] = arr[high], arr[mid]
            high -= 1`,

            c: `#include <stdio.h>

void sort012(int arr[], int n) {
    int low = 0, mid = 0, high = n - 1;
    while (mid <= high) {
        if (arr[mid] == 0) {
            int temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++; mid++;
        } else if (arr[mid] == 1) {
            mid++;
        } else {
            int temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            high--;
        }
    }
}`,

            cpp: `#include <iostream>
using namespace std;

void sort012(int arr[], int n) {
    int low = 0, mid = 0, high = n - 1;
    while (mid <= high) {
        if (arr[mid] == 0) {
            swap(arr[low++], arr[mid++]);
        } else if (arr[mid] == 1) {
            mid++;
        } else {
            swap(arr[mid], arr[high--]);
        }
    }
}`
        }
    },
{
        subject: 'Code',
        category: 'Arrays',
        title: 'Majority Element (> n/2 times)',
        difficulty: 'Easy',
        description: `Given an array of size n, find the element that appears more than n/2 times. You may assume that the majority element always exists.`,
        inputExample: 'arr = [2, 2, 1, 1, 2, 2, 2]',
        outputExample: '2',
        explanation: `The number 2 appears more than n/2 times in the array.`,
        code: {
            java: `public class Main {
  public static int majorityElement(int[] nums) {
    int count = 0, candidate = 0;
    for (int num : nums) {
      if (count == 0) candidate = num;
      count += (num == candidate) ? 1 : -1;
    }
    return candidate;
  }
}`,

            python: `def majority_element(nums):
    count = 0
    candidate = None
    
    for num in nums:
        if count == 0:
            candidate = num
        count += (1 if num == candidate else -1)
    
    return candidate`,

            c: `#include <stdio.h>

int majorityElement(int arr[], int n) {
    int count = 0, candidate = 0;
    for (int i = 0; i < n; i++) {
        if (count == 0)
            candidate = arr[i];
        count += (arr[i] == candidate) ? 1 : -1;
    }
    return candidate;
}`,

            cpp: `#include <iostream>
using namespace std;

int majorityElement(int nums[], int n) {
    int count = 0, candidate;
    for (int i = 0; i < n; i++) {
        if (count == 0)
            candidate = nums[i];
        count += (nums[i] == candidate) ? 1 : -1;
    }
    return candidate;
}`
        }
    },
{
        subject: 'Code',
        category: 'Arrays',
        title: "Kadane's Algorithm (Maximum Subarray Sum)",
        difficulty: 'Medium',
        description: `Given an integer array, find the contiguous subarray with the maximum sum.`,
        inputExample: 'arr = [-2,1,-3,4,-1,2,1,-5,4]',
        outputExample: '6',
        explanation: `The subarray [4, -1, 2, 1] has the maximum sum = 6.`,
        code: {
            java: `public class Main {
  public static int maxSubArray(int[] nums) {
    int maxSum = nums[0], curr = nums[0];
    for (int i = 1; i < nums.length; i++) {
      curr = Math.max(nums[i], curr + nums[i]);
      maxSum = Math.max(maxSum, curr);
    }
    return maxSum;
  }
}`,

            python: `def max_subarray(nums):
    max_sum = curr = nums[0]
    for i in range(1, len(nums)):
        curr = max(nums[i], curr + nums[i])
        max_sum = max(max_sum, curr)
    return max_sum`,

            c: `#include <stdio.h>

int maxSubArray(int arr[], int n) {
    int maxSum = arr[0], curr = arr[0];
    for (int i = 1; i < n; i++) {
        curr = (arr[i] > curr + arr[i]) ? arr[i] : curr + arr[i];
        maxSum = (maxSum > curr) ? maxSum : curr;
    }
    return maxSum;
}`,

            cpp: `#include <iostream>
using namespace std;

int maxSubArray(int nums[], int n) {
    int maxSum = nums[0], curr = nums[0];
    for (int i = 1; i < n; i++) {
        curr = max(nums[i], curr + nums[i]);
        maxSum = max(maxSum, curr);
    }
    return maxSum;
}`
        }
    },
{
        subject: 'Code',
        category: 'Arrays',
        title: 'Print Maximum Subarray (Kadane Extended)',
        difficulty: 'Medium',
        description: `Find and print the subarray with the maximum sum.`,
        inputExample: 'arr = [-2,1,-3,4,-1,2,1,-5,4]',
        outputExample: '[4, -1, 2, 1]',
        explanation: `Track start and end indices while applying Kadane’s algorithm.`,
        code: {
            java: `public class Main {
  public static void maxSubArray(int[] nums) {
    int maxSum = nums[0], curr = nums[0];
    int start = 0, end = 0, tempStart = 0;

    for (int i = 1; i < nums.length; i++) {
      if (nums[i] > curr + nums[i]) {
        curr = nums[i];
        tempStart = i;
      } else {
        curr += nums[i];
      }

      if (curr > maxSum) {
        maxSum = curr;
        start = tempStart;
        end = i;
      }
    }

    for (int i = start; i <= end; i++) {
      System.out.print(nums[i] + " ");
    }
  }
}`,

            python: `def max_subarray_print(nums):
    max_sum = curr = nums[0]
    start = end = temp_start = 0

    for i in range(1, len(nums)):
        if nums[i] > curr + nums[i]:
            curr = nums[i]
            temp_start = i
        else:
            curr += nums[i]

        if curr > max_sum:
            max_sum = curr
            start = temp_start
            end = i

    return nums[start:end+1]`,

            c: `#include <stdio.h>

void maxSubArray(int arr[], int n) {
    int maxSum = arr[0], curr = arr[0];
    int start = 0, end = 0, tempStart = 0;

    for (int i = 1; i < n; i++) {
        if (arr[i] > curr + arr[i]) {
            curr = arr[i];
            tempStart = i;
        } else {
            curr += arr[i];
        }

        if (curr > maxSum) {
            maxSum = curr;
            start = tempStart;
            end = i;
        }
    }

    for (int i = start; i <= end; i++)
        printf("%d ", arr[i]);
}`,

            cpp: `#include <iostream>
using namespace std;

void maxSubArray(int nums[], int n) {
    int maxSum = nums[0], curr = nums[0];
    int start = 0, end = 0, tempStart = 0;

    for (int i = 1; i < n; i++) {
        if (nums[i] > curr + nums[i]) {
            curr = nums[i];
            tempStart = i;
        } else {
            curr += nums[i];
        }

        if (curr > maxSum) {
            maxSum = curr;
            start = tempStart;
            end = i;
        }
    }

    for (int i = start; i <= end; i++)
        cout << nums[i] << " ";
}`
        }
    },
{
        subject: 'Code',
        category: 'Arrays',
        title: 'Stock Buy and Sell (Max Profit)',
        difficulty: 'Easy',
        description: `Find the maximum profit by buying and selling a stock once.`,
        inputExample: 'prices = [7,1,5,3,6,4]',
        outputExample: '5',
        explanation: `Buy at 1 and sell at 6 → profit = 5.`,
        code: {
            java: `public class Main {
  public static int maxProfit(int[] prices) {
    int min = Integer.MAX_VALUE, profit = 0;
    for (int price : prices) {
      if (price < min) min = price;
      else if (price - min > profit) profit = price - min;
    }
    return profit;
  }
}`,

            python: `def max_profit(prices):
    min_price = float('inf')
    profit = 0
    for price in prices:
        if price < min_price:
            min_price = price
        elif price - min_price > profit:
            profit = price - min_price
    return profit`,

            c: `#include <stdio.h>

int maxProfit(int prices[], int n) {
    int min = prices[0], profit = 0;
    for (int i = 1; i < n; i++) {
        if (prices[i] < min)
            min = prices[i];
        else if (prices[i] - min > profit)
            profit = prices[i] - min;
    }
    return profit;
}`,

            cpp: `#include <iostream>
using namespace std;

int maxProfit(int prices[], int n) {
    int minPrice = prices[0], profit = 0;
    for (int i = 1; i < n; i++) {
        if (prices[i] < minPrice)
            minPrice = prices[i];
        else
            profit = max(profit, prices[i] - minPrice);
    }
    return profit;
}`
        }
    },
{
        subject: 'Code',
        category: 'Arrays',
        title: 'Rearrange Array Alternating Positive and Negative',
        difficulty: 'Medium',
        description: `Rearrange the array so that positive and negative numbers alternate.`,
        inputExample: 'arr = [1, 2, -3, -1, -2, 3]',
        outputExample: '[1, -3, 2, -1, 3, -2]',
        explanation: `Alternate positive and negative values while maintaining relative order.`,
        code: {
            java: `// Simplified version
import java.util.*;

public class Main {
  public static void rearrange(int[] arr) {
    List<Integer> pos = new ArrayList<>();
    List<Integer> neg = new ArrayList<>();

    for (int x : arr) {
      if (x >= 0) pos.add(x);
      else neg.add(x);
    }

    int i = 0, p = 0, n = 0;
    while (p < pos.size() && n < neg.size()) {
      arr[i++] = pos.get(p++);
      arr[i++] = neg.get(n++);
    }
  }
}`,

            python: `def rearrange(arr):
    pos = [x for x in arr if x >= 0]
    neg = [x for x in arr if x < 0]

    i = p = n = 0
    while p < len(pos) and n < len(neg):
        arr[i] = pos[p]; i += 1; p += 1
        arr[i] = neg[n]; i += 1; n += 1
    return arr`,

            c: `// Conceptual implementation (needs extra space)
#include <stdio.h>`,

            cpp: `// Conceptual implementation
#include <iostream>`
        }
    },
{
        subject: 'Code',
        category: 'Arrays',
        title: 'Next Permutation',
        difficulty: 'Hard',
        description: `Find the next lexicographically greater permutation of numbers.`,
        inputExample: 'arr = [1,2,3]',
        outputExample: '[1,3,2]',
        explanation: `Find breakpoint, swap, and reverse suffix.`,
        code: {
            java: `import java.util.*;

public class Main {
  public static void nextPermutation(int[] nums) {
    int i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i+1]) i--;

    if (i >= 0) {
      int j = nums.length - 1;
      while (nums[j] <= nums[i]) j--;
      int temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }

    Arrays.sort(nums, i+1, nums.length);
  }
}`,

            python: `def next_permutation(nums):
    i = len(nums) - 2
    while i >= 0 and nums[i] >= nums[i+1]:
        i -= 1

    if i >= 0:
        j = len(nums) - 1
        while nums[j] <= nums[i]:
            j -= 1
        nums[i], nums[j] = nums[j], nums[i]

    nums[i+1:] = reversed(nums[i+1:])`,

            c: `// Standard logic implementation needed
#include <stdio.h>`,

            cpp: `#include <algorithm>
using namespace std;

void nextPermutation(vector<int>& nums) {cd
    next_permutation(nums.begin(), nums.end());
}`
        }
    },
{
    subject: 'Code',
    category: 'Arrays',
    title: 'Leaders in an Array',
    difficulty: 'Easy',
    description: `An element is called a leader if it is greater than all elements to its right.`,
    inputExample: 'arr = [16,17,4,3,5,2]',
    outputExample: '[17, 5, 2]',
    explanation: `Traverse from right and keep track of maximum.`,
    code: {
      java: `import java.util.*;

public class Main {
  public static List<Integer> leaders(int[] arr) {
    List<Integer> res = new ArrayList<>();
    int max = Integer.MIN_VALUE;

    for (int i = arr.length - 1; i >= 0; i--) {
      if (arr[i] > max) {
        res.add(arr[i]);
        max = arr[i];
      }
    }

    Collections.reverse(res);
    return res;
  }
}`,

      python: `def leaders(arr):
    res = []
    max_val = float('-inf')

    for num in reversed(arr):
        if num > max_val:
            res.append(num)
            max_val = num

    return res[::-1]`,

      c: `#include <stdio.h>

void leaders(int arr[], int n) {
    int max = arr[n-1];
    printf("%d ", max);

    for (int i = n-2; i >= 0; i--) {
        if (arr[i] > max) {
            printf("%d ", arr[i]);
            max = arr[i];
        }
    }
}`,

      cpp: `#include <iostream>
using namespace std;

void leaders(int arr[], int n) {
    int max = arr[n-1];
    cout << max << " ";

    for (int i = n-2; i >= 0; i--) {
        if (arr[i] > max) {
            cout << arr[i] << " ";
            max = arr[i];
        }
    }
}`
    }
  },
{
    subject: 'Code',
    category: 'Arrays',
    title: 'Longest Consecutive Sequence',
    difficulty: 'Medium',
    description: `Find the length of the longest consecutive elements sequence.`,
    inputExample: 'arr = [100,4,200,1,3,2]',
    outputExample: '4',
    explanation: `Sequence is [1,2,3,4].`,
    code: {
      java: `import java.util.*;

public class Main {
  public static int longestConsecutive(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for (int n : nums) set.add(n);

    int longest = 0;

    for (int n : set) {
      if (!set.contains(n - 1)) {
        int curr = n;
        int count = 1;

        while (set.contains(curr + 1)) {
          curr++;
          count++;
        }

        longest = Math.max(longest, count);
      }
    }
    return longest;
  }
}`,

      python: `def longest_consecutive(nums):
    num_set = set(nums)
    longest = 0

    for n in num_set:
        if n - 1 not in num_set:
            curr = n
            count = 1

            while curr + 1 in num_set:
                curr += 1
                count += 1

            longest = max(longest, count)

    return longest`,

      c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int longestConsecutive(int arr[], int n) {
    qsort(arr, n, sizeof(int), cmp);

    int longest = 1, count = 1;

    for (int i = 1; i < n; i++) {
        if (arr[i] == arr[i-1]) continue;
        else if (arr[i] == arr[i-1] + 1) {
            count++;
            if (count > longest) longest = count;
        } else {
            count = 1;
        }
    }

    return longest;
}`,

      cpp: `#include <iostream>
#include <set>
using namespace std;

int longestConsecutive(int arr[], int n) {
    set<int> s(arr, arr + n);
    int longest = 0;

    for (int num : s) {
        if (s.find(num - 1) == s.end()) {
            int curr = num;
            int count = 1;

            while (s.find(curr + 1) != s.end()) {
                curr++;
                count++;
            }

            longest = max(longest, count);
        }
    }
    return longest;
}`
    }
  },
{
    subject: 'Code',
    category: 'Arrays',
    title: "Pascal's Triangle",
    difficulty: 'Easy',
    description: `Generate the first n rows of Pascal's Triangle.`,
    inputExample: 'n = 5',
    outputExample: '[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]',
    explanation: `Each element is sum of two elements above it.`,
    code: {
      java: `import java.util.*;

public class Main {
  public static List<List<Integer>> pascal(int n) {
    List<List<Integer>> res = new ArrayList<>();

    for (int i = 0; i < n; i++) {
      List<Integer> row = new ArrayList<>();
      for (int j = 0; j <= i; j++) {
        if (j == 0 || j == i) row.add(1);
        else row.add(res.get(i-1).get(j-1) + res.get(i-1).get(j));
      }
      res.add(row);
    }
    return res;
  }
}`,

      python: `def pascal(n):
    res = []
    for i in range(n):
        row = []
        for j in range(i+1):
            if j == 0 or j == i:
                row.append(1)
            else:
                row.append(res[i-1][j-1] + res[i-1][j])
        res.append(row)
    return res`,

      c: `#include <stdio.h>

void pascal(int n) {
    int arr[100][100];
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= i; j++) {
            if (j == 0 || j == i)
                arr[i][j] = 1;
            else
                arr[i][j] = arr[i-1][j-1] + arr[i-1][j];
            printf("%d ", arr[i][j]);
        }
        printf("\\n");
    }
}`,

      cpp: `#include <iostream>
using namespace std;

void pascal(int n) {
    int arr[100][100];
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= i; j++) {
            if (j == 0 || j == i)
                arr[i][j] = 1;
            else
                arr[i][j] = arr[i-1][j-1] + arr[i-1][j];
            cout << arr[i][j] << " ";
        }
        cout << endl;
    }
}`
    }
  },
{
    subject: 'Code',
    category: 'Arrays',
    title: 'Majority Element (> n/3 times)',
    difficulty: 'Medium',
    description: `Find all elements appearing more than n/3 times.`,
    inputExample: 'arr = [3,2,3]',
    outputExample: '[3]',
    explanation: `Using Boyer-Moore Voting Algorithm.`,
    code: {
      java: `import java.util.*;

public class Main {
  public static List<Integer> majority(int[] nums) {
    int c1=0,c2=0,e1=0,e2=1;

    for (int n: nums) {
      if (n==e1) c1++;
      else if (n==e2) c2++;
      else if (c1==0){ e1=n; c1=1;}
      else if (c2==0){ e2=n; c2=1;}
      else { c1--; c2--; }
    }

    List<Integer> res = new ArrayList<>();
    c1=0; c2=0;

    for(int n: nums){
      if(n==e1) c1++;
      else if(n==e2) c2++;
    }

    if(c1>nums.length/3) res.add(e1);
    if(c2>nums.length/3) res.add(e2);

    return res;
  }
}`,

      python: `def majority(nums):
    c1=c2=0
    e1=e2=None

    for n in nums:
        if n==e1:
            c1+=1
        elif n==e2:
            c2+=1
        elif c1==0:
            e1=n; c1=1
        elif c2==0:
            e2=n; c2=1
        else:
            c1-=1; c2-=1

    res=[]
    if nums.count(e1)>len(nums)//3:
        res.append(e1)
    if nums.count(e2)>len(nums)//3:
        res.append(e2)
    return res`,

      c: `#include <stdio.h>

void majority(int arr[], int n) {
    int e1=0,e2=1,c1=0,c2=0;

    for(int i=0;i<n;i++){
        if(arr[i]==e1) c1++;
        else if(arr[i]==e2) c2++;
        else if(c1==0){ e1=arr[i]; c1=1;}
        else if(c2==0){ e2=arr[i]; c2=1;}
        else{ c1--; c2--; }
    }

    c1=c2=0;
    for(int i=0;i<n;i++){
        if(arr[i]==e1) c1++;
        else if(arr[i]==e2) c2++;
    }

    if(c1>n/3) printf("%d ", e1);
    if(c2>n/3) printf("%d ", e2);
}`,

      cpp: `#include <iostream>
using namespace std;

void majority(int arr[], int n) {
    int e1=0,e2=1,c1=0,c2=0;

    for(int i=0;i<n;i++){
        if(arr[i]==e1) c1++;
        else if(arr[i]==e2) c2++;
        else if(c1==0){ e1=arr[i]; c1=1;}
        else if(c2==0){ e2=arr[i]; c2=1;}
        else{ c1--; c2--; }
    }

    c1=c2=0;
    for(int i=0;i<n;i++){
        if(arr[i]==e1) c1++;
        else if(arr[i]==e2) c2++;
    }

    if(c1>n/3) cout<<e1<<" ";
    if(c2>n/3) cout<<e2<<" ";
}`
    }
  },
{
    subject: 'Code',
    category: 'Arrays',
    title: '3-Sum Problem',
    difficulty: 'Medium',
    description: `Find all unique triplets that sum to 0.`,
    inputExample: 'arr = [-1,0,1,2,-1,-4]',
    outputExample: '[[-1,-1,2],[-1,0,1]]',
    explanation: `Sort and use two pointers.`,
    code: {
      java: `import java.util.*;

public class Main {
  public static List<List<Integer>> threeSum(int[] nums) {
    Arrays.sort(nums);
    List<List<Integer>> res = new ArrayList<>();

    for (int i = 0; i < nums.length-2; i++) {
      if (i>0 && nums[i]==nums[i-1]) continue;

      int l=i+1, r=nums.length-1;

      while(l<r){
        int sum=nums[i]+nums[l]+nums[r];
        if(sum==0){
          res.add(Arrays.asList(nums[i],nums[l],nums[r]));
          while(l<r && nums[l]==nums[l+1]) l++;
          while(l<r && nums[r]==nums[r-1]) r--;
          l++; r--;
        }
        else if(sum<0) l++;
        else r--;
      }
    }
    return res;
  }
}`,

      python: `def three_sum(nums):
    nums.sort()
    res=[]

    for i in range(len(nums)-2):
        if i>0 and nums[i]==nums[i-1]:
            continue

        l=i+1; r=len(nums)-1

        while l<r:
            s=nums[i]+nums[l]+nums[r]
            if s==0:
                res.append([nums[i],nums[l],nums[r]])
                while l<r and nums[l]==nums[l+1]: l+=1
                while l<r and nums[r]==nums[r-1]: r-=1
                l+=1; r-=1
            elif s<0:
                l+=1
            else:
                r-=1
    return res`,

      c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void* a,const void* b){
    return (*(int*)a-*(int*)b);
}

// Simplified print version
void threeSum(int arr[],int n){
    qsort(arr,n,sizeof(int),cmp);

    for(int i=0;i<n-2;i++){
        int l=i+1,r=n-1;
        while(l<r){
            int sum=arr[i]+arr[l]+arr[r];
            if(sum==0){
                printf("%d %d %d\\n",arr[i],arr[l],arr[r]);
                l++; r--;
            }
            else if(sum<0) l++;
            else r--;
        }
    }
}`,

      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void threeSum(vector<int>& nums) {
    sort(nums.begin(), nums.end());

    for (int i = 0; i < nums.size()-2; i++) {
        int l=i+1, r=nums.size()-1;
        while(l<r){
            int sum=nums[i]+nums[l]+nums[r];
            if(sum==0){
                cout<<nums[i]<<" "<<nums[l]<<" "<<nums[r]<<endl;
                l++; r--;
            }
            else if(sum<0) l++;
            else r--;
        }
    }
}`
    }
  },
{
    subject: 'Code',
    category: 'Arrays',
    title: '4-Sum Problem',
    difficulty: 'Hard',
    description: `Find all unique quadruplets that sum to target.`,
    inputExample: 'arr = [1,0,-1,0,-2,2], target=0',
    outputExample: '[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]',
    explanation: `Extend 3-sum with two loops.`,
    code: {
      java: `import java.util.*;

public class Main {
  public static List<List<Integer>> fourSum(int[] nums, int target) {
    Arrays.sort(nums);
    List<List<Integer>> res = new ArrayList<>();

    for(int i=0;i<nums.length-3;i++){
      for(int j=i+1;j<nums.length-2;j++){
        int l=j+1,r=nums.length-1;

        while(l<r){
          long sum=(long)nums[i]+nums[j]+nums[l]+nums[r];
          if(sum==target){
            res.add(Arrays.asList(nums[i],nums[j],nums[l],nums[r]));
            l++; r--;
          }
          else if(sum<target) l++;
          else r--;
        }
      }
    }
    return res;
  }
}`,

      python: `def four_sum(nums,target):
    nums.sort()
    res=[]

    for i in range(len(nums)-3):
        for j in range(i+1,len(nums)-2):
            l=j+1; r=len(nums)-1

            while l<r:
                s=nums[i]+nums[j]+nums[l]+nums[r]
                if s==target:
                    res.append([nums[i],nums[j],nums[l],nums[r]])
                    l+=1; r-=1
                elif s<target:
                    l+=1
                else:
                    r-=1
    return res`,

      c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void* a,const void* b){
    return (*(int*)a-*(int*)b);
}

void fourSum(int arr[],int n,int target){
    qsort(arr,n,sizeof(int),cmp);

    for(int i=0;i<n-3;i++){
        for(int j=i+1;j<n-2;j++){
            int l=j+1,r=n-1;

            while(l<r){
                int sum=arr[i]+arr[j]+arr[l]+arr[r];
                if(sum==target){
                    printf("%d %d %d %d\\n",arr[i],arr[j],arr[l],arr[r]);
                    l++; r--;
                }
                else if(sum<target) l++;
                else r--;
            }
        }
    }
}`,

      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void fourSum(vector<int>& nums,int target){
    sort(nums.begin(),nums.end());

    for(int i=0;i<nums.size()-3;i++){
        for(int j=i+1;j<nums.size()-2;j++){
            int l=j+1,r=nums.size()-1;

            while(l<r){
                int sum=nums[i]+nums[j]+nums[l]+nums[r];
                if(sum==target){
                    cout<<nums[i]<<" "<<nums[j]<<" "<<nums[l]<<" "<<nums[r]<<endl;
                    l++; r--;
                }
                else if(sum<target) l++;
                else r--;
            }
        }
    }
}`
    }
  }
]

const seed = async () => {
    try {
        await mongoose.connect((process.env.MONGO_URI || process.env.MONGODB_URI))
        console.log('Connected to MongoDB')

        // Using bulkWrite with upsert prevents duplicate questions if you run this script multiple times!
        const ops = problems.map(p => ({
            updateOne: {
                filter: { title: p.title },
                update: { $setOnInsert: p },
                upsert: true
            }
        }))

        const result = await CodeProblem.bulkWrite(ops)
        console.log(`Successfully processed ${problems.length} problems (Inserted/Updated)`)

        await mongoose.disconnect()
        process.exit(0)
    } catch (error) {
        console.error('Seed failed:', error)
        process.exit(1)
    }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  seed()
}