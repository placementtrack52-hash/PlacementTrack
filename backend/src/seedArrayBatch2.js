import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'
import { fileURLToPath } from 'url'

export const problems = [
    {
        subject: 'Code',
        category: 'Arrays',
        title: 'Max Consecutive Ones',
        difficulty: 'Easy',
        description: 'Given a binary array (containing only 0s and 1s), find the maximum number of consecutive 1s.',
        inputExample: 'arr = [1, 1, 0, 1, 1, 1]',
        outputExample: '3',
        explanation: 'The longest run of 1s is [1,1,1] at the end with length 3. Track current streak and max streak in one pass.',
        code: {
            java: `public class MaxConsecutiveOnes {
    public static int maxOnes(int[] arr) {
        int max = 0, count = 0;
        for (int num : arr) {
            if (num == 1) { count++; max = Math.max(max, count); }
            else count = 0;
        }
        return max;
    }

    public static void main(String[] args) {
        System.out.println(maxOnes(new int[]{1,1,0,1,1,1})); // 3
    }
}`,
            python: `def max_consecutive_ones(arr):
    max_count = count = 0
    for num in arr:
        if num == 1:
            count += 1
            max_count = max(max_count, count)
        else:
            count = 0
    return max_count

print(max_consecutive_ones([1,1,0,1,1,1]))  # 3`,
            c: `#include <stdio.h>

int maxOnes(int arr[], int n) {
    int max = 0, count = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] == 1) { count++; if (count > max) max = count; }
        else count = 0;
    }
    return max;
}

int main() {
    int arr[] = {1,1,0,1,1,1};
    printf("%d\\n", maxOnes(arr, 6)); // 3
    return 0;
}`,
            cpp: `#include <iostream>
#include <algorithm>
using namespace std;

int maxOnes(int arr[], int n) {
    int maxC = 0, count = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] == 1) { count++; maxC = max(maxC, count); }
        else count = 0;
    }
    return maxC;
}

int main() {
    int arr[] = {1,1,0,1,1,1};
    cout << maxOnes(arr, 6) << endl; // 3
    return 0;
}`,
        },
    },
    {
        subject: 'Code',
        category: 'Arrays',
        title: 'Move All Zeroes To End',
        difficulty: 'Easy',
        description: 'Given an array, move all zeroes to the end while maintaining the relative order of non-zero elements. Do it in-place.',
        inputExample: 'arr = [0, 1, 0, 3, 12]',
        outputExample: '[1, 3, 12, 0, 0]',
        explanation: 'Use a pointer to track the position for the next non-zero element. Traverse the array; when a non-zero is found, place it at the pointer position and increment. Fill remaining positions with 0.',
        code: {
            java: `public class MoveZeroes {
    public static void moveZeroes(int[] arr) {
        int pos = 0;
        for (int num : arr) {
            if (num != 0) arr[pos++] = num;
        }
        while (pos < arr.length) arr[pos++] = 0;
    }

    public static void main(String[] args) {
        int[] arr = {0, 1, 0, 3, 12};
        moveZeroes(arr);
        for (int x : arr) System.out.print(x + " "); // 1 3 12 0 0
    }
}`,
            python: `def move_zeroes(arr):
    pos = 0
    for num in arr:
        if num != 0:
            arr[pos] = num
            pos += 1
    while pos < len(arr):
        arr[pos] = 0
        pos += 1

arr = [0, 1, 0, 3, 12]
move_zeroes(arr)
print(arr)  # [1, 3, 12, 0, 0]`,
            c: `#include <stdio.h>

void moveZeroes(int arr[], int n) {
    int pos = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] != 0) arr[pos++] = arr[i];
    }
    while (pos < n) arr[pos++] = 0;
}

int main() {
    int arr[] = {0, 1, 0, 3, 12};
    moveZeroes(arr, 5);
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);
    return 0;
}`,
            cpp: `#include <iostream>
using namespace std;

void moveZeroes(int arr[], int n) {
    int pos = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] != 0) arr[pos++] = arr[i];
    }
    while (pos < n) arr[pos++] = 0;
}

int main() {
    int arr[] = {0, 1, 0, 3, 12};
    moveZeroes(arr, 5);
    for (int i = 0; i < 5; i++) cout << arr[i] << " ";
    return 0;
}`,
        },
    },
    {
        subject: 'Code',
        category: 'Arrays',
        title: 'Wave Array',
        difficulty: 'Easy',
        description: 'Given an array, sort it in wave form: arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4]... Swap adjacent elements at even indices.',
        inputExample: 'arr = [1, 2, 3, 4, 5]',
        outputExample: '[2, 1, 4, 3, 5]',
        explanation: 'Traverse even indices. If current < previous, swap. If current < next, swap. This ensures peaks at even positions. O(N) time.',
        code: {
            java: `import java.util.Arrays;

public class WaveArray {
    public static void wave(int[] arr) {
        Arrays.sort(arr);
        for (int i = 0; i < arr.length - 1; i += 2) {
            int temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        wave(arr);
        for (int x : arr) System.out.print(x + " "); // 2 1 4 3 5
    }
}`,
            python: `def wave(arr):
    arr.sort()
    for i in range(0, len(arr) - 1, 2):
        arr[i], arr[i + 1] = arr[i + 1], arr[i]

arr = [1, 2, 3, 4, 5]
wave(arr)
print(arr)  # [2, 1, 4, 3, 5]`,
            c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

void wave(int arr[], int n) {
    qsort(arr, n, sizeof(int), cmp);
    for (int i = 0; i < n - 1; i += 2) {
        int t = arr[i]; arr[i] = arr[i+1]; arr[i+1] = t;
    }
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    wave(arr, 5);
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);
    return 0;
}`,
            cpp: `#include <iostream>
#include <algorithm>
using namespace std;

void wave(int arr[], int n) {
    sort(arr, arr + n);
    for (int i = 0; i < n - 1; i += 2)
        swap(arr[i], arr[i + 1]);
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    wave(arr, 5);
    for (int i = 0; i < 5; i++) cout << arr[i] << " ";
    return 0;
}`,
        },
    },
    {
        subject: 'Code',
        category: 'Arrays',
        title: 'Plus One',
        difficulty: 'Easy',
        description: 'Given a number represented as an array of digits, add one to the number. The digits are stored such that the most significant digit is at the head of the array.',
        inputExample: 'digits = [1, 2, 9]',
        outputExample: '[1, 3, 0]',
        explanation: '129 + 1 = 130. Start from the last digit, add 1. If digit becomes 10, set to 0 and carry. If no carry remains, we are done. If carry persists after all digits, prepend 1.',
        code: {
            java: `import java.util.Arrays;

public class PlusOne {
    public static int[] plusOne(int[] digits) {
        for (int i = digits.length - 1; i >= 0; i--) {
            digits[i]++;
            if (digits[i] < 10) return digits;
            digits[i] = 0;
        }
        int[] result = new int[digits.length + 1];
        result[0] = 1;
        return result;
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(plusOne(new int[]{1,2,9}))); // [1,3,0]
    }
}`,
            python: `def plus_one(digits):
    for i in range(len(digits) - 1, -1, -1):
        digits[i] += 1
        if digits[i] < 10:
            return digits
        digits[i] = 0
    return [1] + digits

print(plus_one([1, 2, 9]))  # [1, 3, 0]`,
            c: `#include <stdio.h>
#include <stdlib.h>

int* plusOne(int digits[], int n, int* newSize) {
    for (int i = n - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] < 10) { *newSize = n; return digits; }
        digits[i] = 0;
    }
    int* result = (int*)calloc(n + 1, sizeof(int));
    result[0] = 1;
    *newSize = n + 1;
    return result;
}

int main() {
    int digits[] = {1, 2, 9};
    int size;
    int* result = plusOne(digits, 3, &size);
    for (int i = 0; i < size; i++) printf("%d ", result[i]);
    return 0;
}`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> plusOne(vector<int> digits) {
    for (int i = digits.size() - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] < 10) return digits;
        digits[i] = 0;
    }
    digits.insert(digits.begin(), 1);
    return digits;
}

int main() {
    vector<int> d = {1, 2, 9};
    auto r = plusOne(d);
    for (int x : r) cout << x << " "; // 1 3 0
    return 0;
}`,
        },
    },
    {
        subject: 'Code',
        category: 'Arrays',
        title: 'Stock Buy and Sell – One Transaction',
        difficulty: 'Easy',
        description: 'Given an array of stock prices where prices[i] is the price on day i, find the maximum profit from a single buy-sell transaction. You must buy before you sell.',
        inputExample: 'prices = [7, 1, 5, 3, 6, 4]',
        outputExample: '5',
        explanation: 'Buy on day 2 (price=1), sell on day 5 (price=6). Profit = 6-1 = 5. Track the minimum price seen so far and compute profit at each step.',
        code: {
            java: `public class StockOnce {
    public static int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE, maxProfit = 0;
        for (int price : prices) {
            minPrice = Math.min(minPrice, price);
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
        return maxProfit;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // 5
    }
}`,
            python: `def max_profit(prices):
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit

print(max_profit([7, 1, 5, 3, 6, 4]))  # 5`,
            c: `#include <stdio.h>
#include <limits.h>

int maxProfit(int prices[], int n) {
    int minP = INT_MAX, maxP = 0;
    for (int i = 0; i < n; i++) {
        if (prices[i] < minP) minP = prices[i];
        int profit = prices[i] - minP;
        if (profit > maxP) maxP = profit;
    }
    return maxP;
}

int main() {
    int p[] = {7,1,5,3,6,4};
    printf("%d\\n", maxProfit(p, 6)); // 5
    return 0;
}`,
            cpp: `#include <iostream>
#include <climits>
#include <algorithm>
using namespace std;

int maxProfit(int prices[], int n) {
    int minP = INT_MAX, maxP = 0;
    for (int i = 0; i < n; i++) {
        minP = min(minP, prices[i]);
        maxP = max(maxP, prices[i] - minP);
    }
    return maxP;
}

int main() {
    int p[] = {7,1,5,3,6,4};
    cout << maxProfit(p, 6) << endl; // 5
    return 0;
}`,
        },
    },
    {
        subject: 'Code',
        category: 'Arrays',
        title: 'Stock Buy and Sell – Multiple Transactions',
        difficulty: 'Medium',
        description: 'Given stock prices, find the maximum profit with unlimited transactions. You may buy and sell multiple times but must sell before buying again.',
        inputExample: 'prices = [7, 1, 5, 3, 6, 4]',
        outputExample: '7',
        explanation: 'Buy at 1, sell at 5 (profit 4). Buy at 3, sell at 6 (profit 3). Total = 7. Collect every upward slope: add price[i]-price[i-1] whenever it is positive.',
        code: {
            java: `public class StockMultiple {
    public static int maxProfit(int[] prices) {
        int profit = 0;
        for (int i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1])
                profit += prices[i] - prices[i - 1];
        }
        return profit;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // 7
    }
}`,
            python: `def max_profit(prices):
    profit = 0
    for i in range(1, len(prices)):
        if prices[i] > prices[i - 1]:
            profit += prices[i] - prices[i - 1]
    return profit

print(max_profit([7, 1, 5, 3, 6, 4]))  # 7`,
            c: `#include <stdio.h>

int maxProfit(int prices[], int n) {
    int profit = 0;
    for (int i = 1; i < n; i++) {
        if (prices[i] > prices[i-1])
            profit += prices[i] - prices[i-1];
    }
    return profit;
}

int main() {
    int p[] = {7,1,5,3,6,4};
    printf("%d\\n", maxProfit(p, 6)); // 7
    return 0;
}`,
            cpp: `#include <iostream>
using namespace std;

int maxProfit(int prices[], int n) {
    int profit = 0;
    for (int i = 1; i < n; i++) {
        if (prices[i] > prices[i-1])
            profit += prices[i] - prices[i-1];
    }
    return profit;
}

int main() {
    int p[] = {7,1,5,3,6,4};
    cout << maxProfit(p, 6) << endl; // 7
    return 0;
}`,
        },
    },
    {
        subject: 'Code',
        category: 'Arrays',
        title: 'Largest Subarray with 0 Sum',
        difficulty: 'Medium',
        description: `Find the length of the longest subarray with sum equal to 0.`,
        inputExample: 'arr = [15,-2,2,-8,1,7,10,23]',
        outputExample: '5',
        explanation: `Subarray [-2,2,-8,1,7] has sum 0 and length 5.`,
        code: {
            java: `import java.util.*;

public class Main {
  public static int maxLen(int[] arr) {
    Map<Integer,Integer> map = new HashMap<>();
    int sum = 0, maxLen = 0;

    for (int i = 0; i < arr.length; i++) {
      sum += arr[i];

      if (sum == 0) maxLen = i + 1;

      if (map.containsKey(sum)) {
        maxLen = Math.max(maxLen, i - map.get(sum));
      } else {
        map.put(sum, i);
      }
    }
    return maxLen;
  }
}`,

            python: `def max_len(arr):
    prefix = {}
    s = 0
    max_len = 0

    for i, num in enumerate(arr):
        s += num
        if s == 0:
            max_len = i + 1
        if s in prefix:
            max_len = max(max_len, i - prefix[s])
        else:
            prefix[s] = i
    return max_len`,

            c: `#include <stdio.h>
#include <stdlib.h>

int maxLen(int arr[], int n) {
    int sum = 0, maxLen = 0;

    for (int i = 0; i < n; i++) {
        sum = 0;
        for (int j = i; j < n; j++) {
            sum += arr[j];
            if (sum == 0 && (j - i + 1) > maxLen)
                maxLen = j - i + 1;
        }
    }
    return maxLen;
}`,

            cpp: `#include <iostream>
#include <unordered_map>
using namespace std;

int maxLen(int arr[], int n) {
    unordered_map<int,int> mp;
    int sum = 0, maxLen = 0;

    for (int i = 0; i < n; i++) {
        sum += arr[i];

        if (sum == 0) maxLen = i + 1;

        if (mp.find(sum) != mp.end()) {
            maxLen = max(maxLen, i - mp[sum]);
        } else {
            mp[sum] = i;
        }
    }
    return maxLen;
}`
        }
    },

    {
        subject: 'Code',
        category: 'Arrays',
        title: 'Count Subarrays with XOR = K',
        difficulty: 'Medium',
        description: `Count number of subarrays having XOR equal to K.`,
        inputExample: 'arr = [4,2,2,6,4], k = 6',
        outputExample: '4',
        explanation: `Subarrays: [4,2], [2,2,6], [6], [2,2,6,4]`,
        code: {
            java: `import java.util.*;

public class Main {
  public static int countXor(int[] arr, int k) {
    Map<Integer,Integer> map = new HashMap<>();
    int xor = 0, count = 0;

    for (int num : arr) {
      xor ^= num;

      if (xor == k) count++;

      if (map.containsKey(xor ^ k))
        count += map.get(xor ^ k);

      map.put(xor, map.getOrDefault(xor, 0) + 1);
    }
    return count;
  }
}`,

            python: `def count_xor(arr, k):
    freq = {}
    xr = 0
    count = 0

    for num in arr:
        xr ^= num
        if xr == k:
            count += 1
        if xr ^ k in freq:
            count += freq[xr ^ k]
        freq[xr] = freq.get(xr, 0) + 1

    return count`,

            c: `#include <stdio.h>

int countXor(int arr[], int n, int k) {
    int count = 0;

    for (int i = 0; i < n; i++) {
        int xr = 0;
        for (int j = i; j < n; j++) {
            xr ^= arr[j];
            if (xr == k) count++;
        }
    }
    return count;
}`,

            cpp: `#include <iostream>
#include <unordered_map>
using namespace std;

int countXor(int arr[], int n, int k) {
    unordered_map<int,int> mp;
    int xr = 0, count = 0;

    for (int i = 0; i < n; i++) {
        xr ^= arr[i];

        if (xr == k) count++;

        if (mp.find(xr ^ k) != mp.end())
            count += mp[xr ^ k];

        mp[xr]++;
    }
    return count;
}`
        }
    },

    {
        subject: 'Code',
        category: 'Arrays',
        title: 'Merge Overlapping Intervals',
        difficulty: 'Medium',
        description: `Merge all overlapping intervals.`,
        inputExample: '[[1,3],[2,6],[8,10],[15,18]]',
        outputExample: '[[1,6],[8,10],[15,18]]',
        explanation: `Merge intervals where overlap exists.`,
        code: {
            java: `import java.util.*;

public class Main {
  public static List<int[]> merge(int[][] intervals) {
    Arrays.sort(intervals, (a,b)->a[0]-b[0]);
    List<int[]> res = new ArrayList<>();

    for (int[] i : intervals) {
      if (res.isEmpty() || res.get(res.size()-1)[1] < i[0])
        res.add(i);
      else
        res.get(res.size()-1)[1] = Math.max(res.get(res.size()-1)[1], i[1]);
    }
    return res;
  }
}`,

            python: `def merge(intervals):
    intervals.sort()
    res = []

    for i in intervals:
        if not res or res[-1][1] < i[0]:
            res.append(i)
        else:
            res[-1][1] = max(res[-1][1], i[1])
    return res`,

            c: `#include <stdio.h>`,

            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> merge(vector<vector<int>>& intervals) {
    sort(intervals.begin(), intervals.end());
    vector<vector<int>> res;

    for (auto i : intervals) {
        if (res.empty() || res.back()[1] < i[0])
            res.push_back(i);
        else
            res.back()[1] = max(res.back()[1], i[1]);
    }
    return res;
}`
        }
    },

    {
        subject: 'Code',
        category: 'Arrays',
        title: 'Merge Two Sorted Arrays Without Extra Space',
        difficulty: 'Hard',
        description: `Merge two sorted arrays without using extra space.`,
        inputExample: 'arr1=[1,4,7,8], arr2=[2,3,9]',
        outputExample: '[1,2,3,4] [7,8,9]',
        explanation: `Use gap method (Shell sort idea).`,
        code: {
            java: `public class Main {
  static void merge(int[] a, int[] b) {
    int n = a.length, m = b.length;
    int gap = (n + m + 1) / 2;

    while (gap > 0) {
      int i = 0, j = gap;

      while (j < n + m) {
        int x = (i < n) ? a[i] : b[i - n];
        int y = (j < n) ? a[j] : b[j - n];

        if (x > y) {
          if (i < n && j < n) {
            int temp = a[i]; a[i] = a[j]; a[j] = temp;
          } else if (i < n) {
            int temp = a[i]; a[i] = b[j-n]; b[j-n] = temp;
          } else {
            int temp = b[i-n]; b[i-n] = b[j-n]; b[j-n] = temp;
          }
        }
        i++; j++;
      }
      if (gap == 1) break;
      gap = (gap + 1) / 2;
    }
  }
}`,

            python: `def merge(a, b):
    n, m = len(a), len(b)
    gap = (n + m + 1)//2

    while gap > 0:
        i = 0
        j = gap

        while j < n+m:
            if i < n:
                x = a[i]
            else:
                x = b[i-n]

            if j < n:
                y = a[j]
            else:
                y = b[j-n]

            if x > y:
                if i < n and j < n:
                    a[i], a[j] = a[j], a[i]
                elif i < n:
                    a[i], b[j-n] = b[j-n], a[i]
                else:
                    b[i-n], b[j-n] = b[j-n], b[i-n]

            i += 1
            j += 1

        if gap == 1:
            break
        gap = (gap + 1)//2`,

            c: `#include <stdio.h>

void swap(int *a,int *b){int t=*a;*a=*b;*b=t;}

void merge(int a[],int n,int b[],int m){
    for(int i=0;i<n;i++){
        if(a[i]>b[0]){
            swap(&a[i],&b[0]);

            int first=b[0],k;
            for(k=1;k<m && b[k]<first;k++)
                b[k-1]=b[k];
            b[k-1]=first;
        }
    }
}`,

            cpp: `#include <iostream>
using namespace std;

void merge(int a[], int n, int b[], int m) {
    for (int i = 0; i < n; i++) {
        if (a[i] > b[0]) {
            swap(a[i], b[0]);

            int first = b[0], k;
            for (k = 1; k < m && b[k] < first; k++)
                b[k-1] = b[k];
            b[k-1] = first;
        }
    }
}`
        }
    },

    {
        subject: 'Code',
        category: 'Arrays',
        title: 'Find Missing and Repeating Number',
        difficulty: 'Medium',
        description: `Find the repeating and missing number.`,
        inputExample: 'arr = [4,3,6,2,1,1]',
        outputExample: 'Repeating=1, Missing=5',
        explanation: `Use math equations or XOR.`,
        code: {
            java: `public class Main {
  public static void find(int[] arr) {
    int n = arr.length;
    int[] freq = new int[n+1];

    for(int x: arr) freq[x]++;

    for(int i=1;i<=n;i++){
      if(freq[i]==2) System.out.println("Repeating "+i);
      if(freq[i]==0) System.out.println("Missing "+i);
    }
  }
}`,

            python: `def find(arr):
    n=len(arr)
    freq=[0]*(n+1)

    for x in arr:
        freq[x]+=1

    for i in range(1,n+1):
        if freq[i]==2:
            print("Repeating",i)
        if freq[i]==0:
            print("Missing",i)`,

            c: `#include <stdio.h>

void find(int arr[],int n){
    int freq[100]={0};

    for(int i=0;i<n;i++)
        freq[arr[i]]++;

    for(int i=1;i<=n;i++){
        if(freq[i]==2) printf("Repeating %d\\n",i);
        if(freq[i]==0) printf("Missing %d\\n",i);
    }
}`,

            cpp: `#include <iostream>
using namespace std;

void find(int arr[],int n){
    int freq[100]={0};

    for(int i=0;i<n;i++)
        freq[arr[i]]++;

    for(int i=1;i<=n;i++){
        if(freq[i]==2) cout<<"Repeating "<<i<<endl;
        if(freq[i]==0) cout<<"Missing "<<i<<endl;
    }
}`
        }
    },
      {
    subject: 'Code',
    category: 'Arrays',
    title: 'Count Inversions',
    difficulty: 'Hard',
    description: `Count the number of inversions in the array. An inversion is when i < j and arr[i] > arr[j].`,
    inputExample: 'arr = [2,4,1,3,5]',
    outputExample: '3',
    explanation: `Inversions are (2,1), (4,1), (4,3).`,
    code: {
      java: `public class Main {
  static int merge(int[] arr, int l, int m, int r) {
    int[] temp = new int[r - l + 1];
    int i = l, j = m + 1, k = 0, inv = 0;

    while (i <= m && j <= r) {
      if (arr[i] <= arr[j]) temp[k++] = arr[i++];
      else {
        temp[k++] = arr[j++];
        inv += (m - i + 1);
      }
    }

    while (i <= m) temp[k++] = arr[i++];
    while (j <= r) temp[k++] = arr[j++];

    for (i = l; i <= r; i++) arr[i] = temp[i - l];
    return inv;
  }

  static int mergeSort(int[] arr, int l, int r) {
    int inv = 0;
    if (l < r) {
      int m = (l + r) / 2;
      inv += mergeSort(arr, l, m);
      inv += mergeSort(arr, m + 1, r);
      inv += merge(arr, l, m, r);
    }
    return inv;
  }
}`,

      python: `def merge(arr, l, m, r):
    temp = []
    i, j = l, m+1
    inv = 0

    while i <= m and j <= r:
        if arr[i] <= arr[j]:
            temp.append(arr[i]); i+=1
        else:
            temp.append(arr[j]); j+=1
            inv += (m - i + 1)

    temp += arr[i:m+1]
    temp += arr[j:r+1]

    arr[l:r+1] = temp
    return inv

def merge_sort(arr, l, r):
    inv = 0
    if l < r:
        m = (l+r)//2
        inv += merge_sort(arr, l, m)
        inv += merge_sort(arr, m+1, r)
        inv += merge(arr, l, m, r)
    return inv`,

      c: `#include <stdio.h>

int merge(int arr[], int l, int m, int r) {
    int temp[100], i=l, j=m+1, k=0, inv=0;

    while(i<=m && j<=r){
        if(arr[i]<=arr[j]) temp[k++]=arr[i++];
        else{
            temp[k++]=arr[j++];
            inv += (m - i + 1);
        }
    }

    while(i<=m) temp[k++]=arr[i++];
    while(j<=r) temp[k++]=arr[j++];

    for(i=l;i<=r;i++) arr[i]=temp[i-l];
    return inv;
}

int mergeSort(int arr[], int l, int r){
    int inv=0;
    if(l<r){
        int m=(l+r)/2;
        inv += mergeSort(arr,l,m);
        inv += mergeSort(arr,m+1,r);
        inv += merge(arr,l,m,r);
    }
    return inv;
}`,

      cpp: `#include <iostream>
using namespace std;

int merge(int arr[], int l, int m, int r) {
    int temp[100], i=l, j=m+1, k=0, inv=0;

    while(i<=m && j<=r){
        if(arr[i]<=arr[j]) temp[k++]=arr[i++];
        else{
            temp[k++]=arr[j++];
            inv += (m - i + 1);
        }
    }

    while(i<=m) temp[k++]=arr[i++];
    while(j<=r) temp[k++]=arr[j++];

    for(i=l;i<=r;i++) arr[i]=temp[i-l];
    return inv;
}

int mergeSort(int arr[], int l, int r){
    int inv=0;
    if(l<r){
        int m=(l+r)/2;
        inv += mergeSort(arr,l,m);
        inv += mergeSort(arr,m+1,r);
        inv += merge(arr,l,m,r);
    }
    return inv;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Arrays',
    title: 'Reverse Pairs',
    difficulty: 'Hard',
    description: `Count pairs where i < j and arr[i] > 2 * arr[j].`,
    inputExample: 'arr = [1,3,2,3,1]',
    outputExample: '2',
    explanation: `Pairs are (3,1) and (3,1).`,
    code: {
      java: `public class Main {
  static int merge(int[] arr, int l, int m, int r) {
    int count = 0;
    int j = m + 1;

    for (int i = l; i <= m; i++) {
      while (j <= r && arr[i] > 2L * arr[j]) j++;
      count += (j - (m + 1));
    }

    int[] temp = new int[r - l + 1];
    int i=l, k=0; j=m+1;

    while(i<=m && j<=r){
      if(arr[i]<=arr[j]) temp[k++]=arr[i++];
      else temp[k++]=arr[j++];
    }

    while(i<=m) temp[k++]=arr[i++];
    while(j<=r) temp[k++]=arr[j++];

    for(i=l;i<=r;i++) arr[i]=temp[i-l];
    return count;
  }

  static int mergeSort(int[] arr,int l,int r){
    int count=0;
    if(l<r){
      int m=(l+r)/2;
      count+=mergeSort(arr,l,m);
      count+=mergeSort(arr,m+1,r);
      count+=merge(arr,l,m,r);
    }
    return count;
  }
}`,

      python: `def merge(arr, l, m, r):
    count = 0
    j = m+1

    for i in range(l, m+1):
        while j <= r and arr[i] > 2*arr[j]:
            j += 1
        count += j - (m+1)

    temp=[]
    i,j=l,m+1

    while i<=m and j<=r:
        if arr[i]<=arr[j]:
            temp.append(arr[i]); i+=1
        else:
            temp.append(arr[j]); j+=1

    temp += arr[i:m+1]
    temp += arr[j:r+1]

    arr[l:r+1]=temp
    return count

def merge_sort(arr,l,r):
    count=0
    if l<r:
        m=(l+r)//2
        count+=merge_sort(arr,l,m)
        count+=merge_sort(arr,m+1,r)
        count+=merge(arr,l,m,r)
    return count`,

      c: `#include <stdio.h>

int merge(int arr[], int l, int m, int r) {
    int count = 0, j = m + 1;

    for (int i = l; i <= m; i++) {
        while (j <= r && arr[i] > 2 * arr[j]) j++;
        count += j - (m + 1);
    }

    int temp[100], i=l, k=0; j=m+1;

    while(i<=m && j<=r){
        if(arr[i]<=arr[j]) temp[k++]=arr[i++];
        else temp[k++]=arr[j++];
    }

    while(i<=m) temp[k++]=arr[i++];
    while(j<=r) temp[k++]=arr[j++];

    for(i=l;i<=r;i++) arr[i]=temp[i-l];
    return count;
}

int mergeSort(int arr[], int l, int r){
    int count=0;
    if(l<r){
        int m=(l+r)/2;
        count+=mergeSort(arr,l,m);
        count+=mergeSort(arr,m+1,r);
        count+=merge(arr,l,m,r);
    }
    return count;
}`,

      cpp: `#include <iostream>
using namespace std;

int merge(int arr[], int l, int m, int r) {
    int count = 0, j = m + 1;

    for (int i = l; i <= m; i++) {
        while (j <= r && arr[i] > 2 * arr[j]) j++;
        count += j - (m + 1);
    }

    int temp[100], i=l, k=0; j=m+1;

    while(i<=m && j<=r){
        if(arr[i]<=arr[j]) temp[k++]=arr[i++];
        else temp[k++]=arr[j++];
    }

    while(i<=m) temp[k++]=arr[i++];
    while(j<=r) temp[k++]=arr[j++];

    for(i=l;i<=r;i++) arr[i]=temp[i-l];
    return count;
}

int mergeSort(int arr[], int l, int r){
    int count=0;
    if(l<r){
        int m=(l+r)/2;
        count+=mergeSort(arr,l,m);
        count+=mergeSort(arr,m+1,r);
        count+=merge(arr,l,m,r);
    }
    return count;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Arrays',
    title: 'Maximum Product Subarray',
    difficulty: 'Medium',
    description: `Find the contiguous subarray with maximum product.`,
    inputExample: 'arr = [2,3,-2,4]',
    outputExample: '6',
    explanation: `Subarray [2,3] gives maximum product.`,
    code: {
      java: `public class Main {
  public static int maxProduct(int[] nums) {
    int max = nums[0], min = nums[0], res = nums[0];

    for (int i = 1; i < nums.length; i++) {
      if (nums[i] < 0) {
        int temp = max;
        max = min;
        min = temp;
      }

      max = Math.max(nums[i], max * nums[i]);
      min = Math.min(nums[i], min * nums[i]);

      res = Math.max(res, max);
    }
    return res;
  }
}`,

      python: `def max_product(nums):
    max_p = min_p = res = nums[0]

    for i in range(1, len(nums)):
        if nums[i] < 0:
            max_p, min_p = min_p, max_p

        max_p = max(nums[i], max_p * nums[i])
        min_p = min(nums[i], min_p * nums[i])

        res = max(res, max_p)

    return res`,

      c: `#include <stdio.h>

int maxProduct(int arr[], int n){
    int max=arr[0], min=arr[0], res=arr[0];

    for(int i=1;i<n;i++){
        if(arr[i]<0){
            int temp=max;
            max=min;
            min=temp;
        }

        max = (arr[i] > max*arr[i]) ? arr[i] : max*arr[i];
        min = (arr[i] < min*arr[i]) ? arr[i] : min*arr[i];

        if(max>res) res=max;
    }
    return res;
}`,

      cpp: `#include <iostream>
using namespace std;

int maxProduct(int arr[], int n){
    int maxVal=arr[0], minVal=arr[0], res=arr[0];

    for(int i=1;i<n;i++){
        if(arr[i]<0) swap(maxVal,minVal);

        maxVal = max(arr[i], maxVal*arr[i]);
        minVal = min(arr[i], minVal*arr[i]);

        res = max(res, maxVal);
    }
    return res;
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
        console.log(`Successfully processed ${problems.length} problems (Inserted/Updated in batch 2)`)
        
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