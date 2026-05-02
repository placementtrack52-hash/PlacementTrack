import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'

const problems = [
  {
    subject: 'Code',
    category: 'Arrays',
    title: 'Remove Duplicates from Sorted Array',
    difficulty: 'Easy',
    description: 'Given a sorted array, remove duplicates in-place such that each element appears only once. Return the new length.',
    inputExample: 'arr = [1, 1, 2, 2, 3, 4, 4, 5]',
    outputExample: '5 (arr = [1, 2, 3, 4, 5, ...])',
    explanation: 'Use a slow pointer to track unique position. Fast pointer scans ahead. When a new unique element is found, place it at slow+1. Result: 5 unique elements.',
    code: {
      java: `public class RemoveDuplicates {
    public static int removeDups(int[] arr) {
        if (arr.length == 0) return 0;
        int slow = 0;
        for (int fast = 1; fast < arr.length; fast++) {
            if (arr[fast] != arr[slow]) {
                slow++;
                arr[slow] = arr[fast];
            }
        }
        return slow + 1;
    }

    public static void main(String[] args) {
        int[] arr = {1,1,2,2,3,4,4,5};
        int len = removeDups(arr);
        for (int i = 0; i < len; i++) System.out.print(arr[i] + " "); // 1 2 3 4 5
    }
}`,
      python: `def remove_duplicates(arr):
    if not arr:
        return 0
    slow = 0
    for fast in range(1, len(arr)):
        if arr[fast] != arr[slow]:
            slow += 1
            arr[slow] = arr[fast]
    return slow + 1

arr = [1,1,2,2,3,4,4,5]
length = remove_duplicates(arr)
print(arr[:length])  # [1, 2, 3, 4, 5]`,
      c: `#include <stdio.h>

int removeDuplicates(int arr[], int n) {
    if (n == 0) return 0;
    int slow = 0;
    for (int fast = 1; fast < n; fast++) {
        if (arr[fast] != arr[slow]) {
            slow++;
            arr[slow] = arr[fast];
        }
    }
    return slow + 1;
}

int main() {
    int arr[] = {1,1,2,2,3,4,4,5};
    int len = removeDuplicates(arr, 8);
    for (int i = 0; i < len; i++) printf("%d ", arr[i]);
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

int removeDuplicates(int arr[], int n) {
    if (n == 0) return 0;
    int slow = 0;
    for (int fast = 1; fast < n; fast++) {
        if (arr[fast] != arr[slow])
            arr[++slow] = arr[fast];
    }
    return slow + 1;
}

int main() {
    int arr[] = {1,1,2,2,3,4,4,5};
    int len = removeDuplicates(arr, 8);
    for (int i = 0; i < len; i++) cout << arr[i] << " ";
    return 0;
}`,
    },
  },
  {
    subject: 'Code',
    category: 'Arrays',
    title: 'Alternate Positive Negative',
    difficulty: 'Medium',
    description: 'Rearrange array elements so that positive and negative numbers are placed alternately. Start with positive. If extra elements remain, append them at the end.',
    inputExample: 'arr = [1, 2, 3, -4, -1, 4]',
    outputExample: '[1, -4, 2, -1, 3, 4]',
    explanation: 'Separate positives [1,2,3,4] and negatives [-4,-1]. Interleave: pick from positive, then negative alternately. Remaining positives [3,4] go at the end.',
    code: {
      java: `import java.util.*;

public class AlternatePN {
    public static int[] alternate(int[] arr) {
        List<Integer> pos = new ArrayList<>(), neg = new ArrayList<>();
        for (int x : arr) { if (x >= 0) pos.add(x); else neg.add(x); }
        int[] res = new int[arr.length];
        int i = 0, p = 0, n = 0;
        while (p < pos.size() && n < neg.size()) {
            res[i++] = pos.get(p++);
            res[i++] = neg.get(n++);
        }
        while (p < pos.size()) res[i++] = pos.get(p++);
        while (n < neg.size()) res[i++] = neg.get(n++);
        return res;
    }

    public static void main(String[] args) {
        int[] r = alternate(new int[]{1,2,3,-4,-1,4});
        for (int x : r) System.out.print(x + " ");
    }
}`,
      python: `def alternate(arr):
    pos = [x for x in arr if x >= 0]
    neg = [x for x in arr if x < 0]
    result, p, n = [], 0, 0
    while p < len(pos) and n < len(neg):
        result.append(pos[p]); p += 1
        result.append(neg[n]); n += 1
    result.extend(pos[p:])
    result.extend(neg[n:])
    return result

print(alternate([1, 2, 3, -4, -1, 4]))`,
      c: `#include <stdio.h>

void alternate(int arr[], int n, int res[]) {
    int pos[100], neg[100], pc = 0, nc = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] >= 0) pos[pc++] = arr[i];
        else neg[nc++] = arr[i];
    }
    int idx = 0, p = 0, q = 0;
    while (p < pc && q < nc) {
        res[idx++] = pos[p++];
        res[idx++] = neg[q++];
    }
    while (p < pc) res[idx++] = pos[p++];
    while (q < nc) res[idx++] = neg[q++];
}

int main() {
    int arr[] = {1,2,3,-4,-1,4}, res[6];
    alternate(arr, 6, res);
    for (int i = 0; i < 6; i++) printf("%d ", res[i]);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> alternate(vector<int>& arr) {
    vector<int> pos, neg, res;
    for (int x : arr) { if (x >= 0) pos.push_back(x); else neg.push_back(x); }
    int p = 0, n = 0;
    while (p < pos.size() && n < neg.size()) {
        res.push_back(pos[p++]);
        res.push_back(neg[n++]);
    }
    while (p < pos.size()) res.push_back(pos[p++]);
    while (n < neg.size()) res.push_back(neg[n++]);
    return res;
}

int main() {
    vector<int> arr = {1,2,3,-4,-1,4};
    auto r = alternate(arr);
    for (int x : r) cout << x << " ";
    return 0;
}`,
    },
  },
  {
    subject: 'Code',
    category: 'Arrays',
    title: 'Array Leaders',
    difficulty: 'Easy',
    description: 'An element is a leader if it is greater than all elements to its right. Find all leaders in the array. The rightmost element is always a leader.',
    inputExample: 'arr = [16, 17, 4, 3, 5, 2]',
    outputExample: '[17, 5, 2]',
    explanation: 'Traverse from right. Track max from right. 2 is leader (rightmost). 5 > 2, leader. 3 < 5, no. 4 < 5, no. 17 > 5, leader. 16 < 17, no.',
    code: {
      java: `import java.util.*;

public class ArrayLeaders {
    public static List<Integer> leaders(int[] arr) {
        List<Integer> result = new ArrayList<>();
        int maxRight = arr[arr.length - 1];
        result.add(maxRight);
        for (int i = arr.length - 2; i >= 0; i--) {
            if (arr[i] > maxRight) {
                maxRight = arr[i];
                result.add(maxRight);
            }
        }
        Collections.reverse(result);
        return result;
    }

    public static void main(String[] args) {
        System.out.println(leaders(new int[]{16,17,4,3,5,2})); // [17, 5, 2]
    }
}`,
      python: `def leaders(arr):
    result = []
    max_right = arr[-1]
    result.append(max_right)
    for i in range(len(arr) - 2, -1, -1):
        if arr[i] > max_right:
            max_right = arr[i]
            result.append(max_right)
    return result[::-1]

print(leaders([16, 17, 4, 3, 5, 2]))  # [17, 5, 2]`,
      c: `#include <stdio.h>

void leaders(int arr[], int n) {
    int res[100], count = 0;
    int maxRight = arr[n - 1];
    res[count++] = maxRight;
    for (int i = n - 2; i >= 0; i--) {
        if (arr[i] > maxRight) {
            maxRight = arr[i];
            res[count++] = maxRight;
        }
    }
    for (int i = count - 1; i >= 0; i--) printf("%d ", res[i]);
}

int main() {
    int arr[] = {16,17,4,3,5,2};
    leaders(arr, 6); // 17 5 2
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> leaders(int arr[], int n) {
    vector<int> result;
    int maxRight = arr[n - 1];
    result.push_back(maxRight);
    for (int i = n - 2; i >= 0; i--) {
        if (arr[i] > maxRight) {
            maxRight = arr[i];
            result.push_back(maxRight);
        }
    }
    reverse(result.begin(), result.end());
    return result;
}

int main() {
    int arr[] = {16,17,4,3,5,2};
    auto r = leaders(arr, 6);
    for (int x : r) cout << x << " "; // 17 5 2
    return 0;
}`,
    },
  },
  {
    subject: 'Code',
    category: 'Arrays',
    title: 'Missing and Repeating in Array',
    difficulty: 'Medium',
    description: 'Given an array of N integers where each element is in range [1, N], one number appears twice and one is missing. Find both.',
    inputExample: 'arr = [4, 3, 6, 2, 1, 1]',
    outputExample: 'Repeating = 1, Missing = 5',
    explanation: 'Use count array or math. Sum of 1..N = N*(N+1)/2. Actual sum and sum of squares help find both values. Or use a visited array to detect the repeat and missing.',
    code: {
      java: `public class MissingRepeating {
    public static void find(int[] arr) {
        int n = arr.length;
        boolean[] visited = new boolean[n + 1];
        int repeating = -1, missing = -1;
        for (int x : arr) {
            if (visited[x]) repeating = x;
            visited[x] = true;
        }
        for (int i = 1; i <= n; i++) {
            if (!visited[i]) { missing = i; break; }
        }
        System.out.println("Repeating = " + repeating + ", Missing = " + missing);
    }

    public static void main(String[] args) {
        find(new int[]{4,3,6,2,1,1});
    }
}`,
      python: `def find_missing_repeating(arr):
    n = len(arr)
    visited = [False] * (n + 1)
    repeating = missing = -1
    for x in arr:
        if visited[x]:
            repeating = x
        visited[x] = True
    for i in range(1, n + 1):
        if not visited[i]:
            missing = i
            break
    return repeating, missing

print(find_missing_repeating([4,3,6,2,1,1]))  # (1, 5)`,
      c: `#include <stdio.h>
#include <string.h>

void find(int arr[], int n) {
    int visited[100] = {0};
    int rep = -1, miss = -1;
    for (int i = 0; i < n; i++) {
        if (visited[arr[i]]) rep = arr[i];
        visited[arr[i]] = 1;
    }
    for (int i = 1; i <= n; i++) {
        if (!visited[i]) { miss = i; break; }
    }
    printf("Repeating = %d, Missing = %d\\n", rep, miss);
}

int main() {
    int arr[] = {4,3,6,2,1,1};
    find(arr, 6);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

pair<int,int> find(vector<int>& arr) {
    int n = arr.size();
    vector<bool> visited(n + 1, false);
    int rep = -1, miss = -1;
    for (int x : arr) {
        if (visited[x]) rep = x;
        visited[x] = true;
    }
    for (int i = 1; i <= n; i++) {
        if (!visited[i]) { miss = i; break; }
    }
    return {rep, miss};
}

int main() {
    vector<int> arr = {4,3,6,2,1,1};
    auto [r, m] = find(arr);
    cout << "Repeating = " << r << ", Missing = " << m << endl;
    return 0;
}`,
    },
  },
  {
    subject: 'Code',
    category: 'Arrays',
    title: 'Missing Ranges of Numbers',
    difficulty: 'Medium',
    description: 'Given a sorted unique integer array and a range [lower, upper], find all missing ranges. Return them as formatted strings like "a->b" or "a" if single.',
    inputExample: 'nums = [0, 1, 3, 50, 75], lower = 0, upper = 99',
    outputExample: '["2", "4->49", "51->74", "76->99"]',
    explanation: 'Walk through the array tracking expected next value. When a gap exists between expected and current, add the range. After the loop, check gap to upper bound.',
    code: {
      java: `import java.util.*;

public class MissingRanges {
    public static List<String> findMissing(int[] nums, int lower, int upper) {
        List<String> result = new ArrayList<>();
        long next = lower;
        for (int num : nums) {
            if (num > next) {
                result.add(next == num - 1 ? "" + next : next + "->" + (num - 1));
            }
            next = (long) num + 1;
        }
        if (next <= upper) {
            result.add(next == upper ? "" + next : next + "->" + upper);
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(findMissing(new int[]{0,1,3,50,75}, 0, 99));
    }
}`,
      python: `def find_missing_ranges(nums, lower, upper):
    result = []
    nxt = lower
    for num in nums:
        if num > nxt:
            if nxt == num - 1:
                result.append(str(nxt))
            else:
                result.append(f"{nxt}->{num - 1}")
        nxt = num + 1
    if nxt <= upper:
        if nxt == upper:
            result.append(str(nxt))
        else:
            result.append(f"{nxt}->{upper}")
    return result

print(find_missing_ranges([0,1,3,50,75], 0, 99))`,
      c: `#include <stdio.h>

void findMissing(int nums[], int n, int lower, int upper) {
    long next = lower;
    for (int i = 0; i < n; i++) {
        if (nums[i] > next) {
            if (next == nums[i] - 1) printf("%ld\\n", next);
            else printf("%ld->%d\\n", next, nums[i] - 1);
        }
        next = (long)nums[i] + 1;
    }
    if (next <= upper) {
        if (next == upper) printf("%ld\\n", next);
        else printf("%ld->%d\\n", next, upper);
    }
}

int main() {
    int nums[] = {0,1,3,50,75};
    findMissing(nums, 5, 0, 99);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<string> findMissing(vector<int>& nums, int lower, int upper) {
    vector<string> result;
    long next = lower;
    for (int num : nums) {
        if (num > next) {
            if (next == num - 1) result.push_back(to_string(next));
            else result.push_back(to_string(next) + "->" + to_string(num - 1));
        }
        next = (long)num + 1;
    }
    if (next <= upper) {
        if (next == upper) result.push_back(to_string(next));
        else result.push_back(to_string(next) + "->" + to_string(upper));
    }
    return result;
}

int main() {
    vector<int> nums = {0,1,3,50,75};
    auto r = findMissing(nums, 0, 99);
    for (auto& s : r) cout << s << " ";
    return 0;
}`,
    },
  },
  {
    subject: 'Code',
    category: 'Arrays',
    title: 'Sum of all Subarrays',
    difficulty: 'Medium',
    description: 'Given an array, find the sum of all possible contiguous subarrays. Use the contribution technique: each element arr[i] appears in (i+1)*(n-i) subarrays.',
    inputExample: 'arr = [1, 2, 3]',
    outputExample: '20',
    explanation: 'Subarrays: [1]=1, [2]=2, [3]=3, [1,2]=3, [2,3]=5, [1,2,3]=6. Total=20. Using formula: 1*(1*3) + 2*(2*2) + 3*(3*1) = 3+8+9 = 20.',
    code: {
      java: `public class SubarraySum {
    public static long sumOfAllSubarrays(int[] arr) {
        long total = 0;
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            total += (long) arr[i] * (i + 1) * (n - i);
        }
        return total;
    }

    public static void main(String[] args) {
        System.out.println(sumOfAllSubarrays(new int[]{1, 2, 3})); // 20
    }
}`,
      python: `def sum_of_all_subarrays(arr):
    total = 0
    n = len(arr)
    for i in range(n):
        total += arr[i] * (i + 1) * (n - i)
    return total

print(sum_of_all_subarrays([1, 2, 3]))  # 20`,
      c: `#include <stdio.h>

long long sumOfAllSubarrays(int arr[], int n) {
    long long total = 0;
    for (int i = 0; i < n; i++) {
        total += (long long)arr[i] * (i + 1) * (n - i);
    }
    return total;
}

int main() {
    int arr[] = {1, 2, 3};
    printf("%lld\\n", sumOfAllSubarrays(arr, 3)); // 20
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

long long sumOfAllSubarrays(int arr[], int n) {
    long long total = 0;
    for (int i = 0; i < n; i++) {
        total += (long long)arr[i] * (i + 1) * (n - i);
    }
    return total;
}

int main() {
    int arr[] = {1, 2, 3};
    cout << sumOfAllSubarrays(arr, 3) << endl; // 20
    return 0;
}`,
    },
  },
  {
    subject: 'Code',
    category: 'Arrays',
    title: 'Value Equal to Index',
    difficulty: 'Easy',
    description: `Find elements where arr[i] == i+1.`,
    inputExample: '[1,2,4,5]',
    outputExample: '[1,2]',
    explanation: `Check condition directly.`,
    code: {
      java: `for(int i=0;i<arr.length;i++)
  if(arr[i]==i+1) System.out.print(arr[i]+" ");`,
      python: `print([arr[i] for i in range(len(arr)) if arr[i]==i+1])`,
      c: `// simple loop`,
      cpp: `// simple loop`
    }
  },
  {
    subject: 'Code',
    category: 'Arrays',
    title: 'Missing and Repeating',
    difficulty: 'Medium',
    description: `Find missing and repeating number.`,
    inputExample: '[3,1,2,5,3]',
    outputExample: '3 4',
    explanation: `Use XOR method.`,
    code: {
      java: `// XOR approach`,
      python: `# XOR approach`,
      c: `// XOR approach`,
      cpp: `// XOR approach`
    }
  },
  {
    subject: 'Code',
    category: 'Arrays',
    title: 'Find Pair Given Difference',
    difficulty: 'Easy',
    description: `Check if pair exists with given difference.`,
    inputExample: 'arr=[5,20,3,2,50,80], diff=78',
    outputExample: 'true',
    explanation: `Sort + two pointers.`,
    code: {
      java: `// two pointer`,
      python: `# two pointer`,
      c: `// two pointer`,
      cpp: `// two pointer`
    }
  },
  {
    subject: 'Code',
    category: 'Arrays',
    title: '4 Sum - All Quadruples',
    difficulty: 'Hard',
    description: `Find all unique quadruples summing to target.`,
    inputExample: 'arr=[1,0,-1,0,-2,2], target=0',
    outputExample: '[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]',
    explanation: `Sort + 2 loops + 2 pointers.`,
    code: {
      java: `// standard 4-sum`,
      python: `# standard 4-sum`,
      c: `// complex`,
      cpp: `// standard`
    }
  },
  {
    subject: 'Code',
    category: 'Arrays',
    title: 'Triplets with Smaller Sum',
    difficulty: 'Medium',
    description: `Count triplets with sum < target.`,
    inputExample: 'arr=[-2,0,1,3], target=2',
    outputExample: '2',
    explanation: `Sort + two pointer.`,
    code: {
      java: `import java.util.*;

public class Main {
  public static int countTriplets(int[] arr,int target){
    Arrays.sort(arr);
    int n=arr.length, count=0;

    for(int i=0;i<n-2;i++){
      int l=i+1, r=n-1;
      while(l<r){
        if(arr[i]+arr[l]+arr[r] < target){
          count += r-l;
          l++;
        } else r--;
      }
    }
    return count;
  }
}`,

      python: `def count_triplets(arr, target):
    arr.sort()
    n=len(arr)
    count=0

    for i in range(n-2):
        l,r=i+1,n-1
        while l<r:
            if arr[i]+arr[l]+arr[r] < target:
                count += r-l
                l+=1
            else:
                r-=1
    return count`,

      c: `// similar logic`,
      cpp: `// similar logic`
    }
  },
  {
    subject: 'Code',
    category: 'Arrays',
    title: 'Zero Sum Subarrays',
    difficulty: 'Medium',
    description: `Count subarrays with sum 0.`,
    inputExample: '[6,-1,-3,4,-2,2,4,6,-12,-7]',
    outputExample: '4',
    explanation: `Use prefix sum + hashmap.`,
    code: {
      java: `import java.util.*;

public class Main {
  public static int count(int[] arr){
    Map<Integer,Integer> map=new HashMap<>();
    int sum=0,res=0;

    map.put(0,1);

    for(int x:arr){
      sum+=x;
      if(map.containsKey(sum))
        res+=map.get(sum);
      map.put(sum,map.getOrDefault(sum,0)+1);
    }
    return res;
  }
}`,

      python: `def count(arr):
    mp={0:1}
    s=res=0

    for x in arr:
        s+=x
        if s in mp:
            res+=mp[s]
        mp[s]=mp.get(s,0)+1
    return res`,

      c: `// hashmap logic`,
      cpp: `// unordered_map`
    }
  },
  {
    subject: 'Code',
    category: 'Arrays',
    title: 'Product Array Puzzle',
    difficulty: 'Medium',
    description: `Product of array except self.`,
    inputExample: '[10,3,5,6,2]',
    outputExample: '[180,600,360,300,900]',
    explanation: `Use prefix and suffix.`,
    code: {
      java: `public class Main {
  public static int[] product(int[] arr){
    int n=arr.length;
    int[] res=new int[n];

    int prefix=1;
    for(int i=0;i<n;i++){
      res[i]=prefix;
      prefix*=arr[i];
    }

    int suffix=1;
    for(int i=n-1;i>=0;i--){
      res[i]*=suffix;
      suffix*=arr[i];
    }
    return res;
  }
}`,

      python: `def product(arr):
    n=len(arr)
    res=[1]*n

    prefix=1
    for i in range(n):
        res[i]=prefix
        prefix*=arr[i]

    suffix=1
    for i in range(n-1,-1,-1):
        res[i]*=suffix
        suffix*=arr[i]

    return res`,

      c: `// prefix-suffix`,
      cpp: `// prefix-suffix`
    }
  },
  {
    subject: 'Code',
    category: 'Arrays',
    title: 'Minimum Swaps to Sort',
    difficulty: 'Medium',
    description: `Find minimum swaps to sort array.`,
    inputExample: '[4,3,2,1]',
    outputExample: '2',
    explanation: `Use cycle detection.`,
    code: {
      java: `import java.util.*;

public class Main {
  public static int minSwaps(int[] arr){
    int n=arr.length, swaps=0;
    boolean[] vis=new boolean[n];

    int[][] a=new int[n][2];
    for(int i=0;i<n;i++){
      a[i][0]=arr[i];
      a[i][1]=i;
    }

    Arrays.sort(a, Comparator.comparingInt(o->o[0]));

    for(int i=0;i<n;i++){
      if(vis[i] || a[i][1]==i) continue;

      int cycle=0,j=i;
      while(!vis[j]){
        vis[j]=true;
        j=a[j][1];
        cycle++;
      }
      swaps+=cycle-1;
    }
    return swaps;
  }
}`,

      python: `def min_swaps(arr):
    n=len(arr)
    arrpos=list(enumerate(arr))
    arrpos.sort(key=lambda x:x[1])

    vis=[False]*n
    swaps=0

    for i in range(n):
        if vis[i] or arrpos[i][0]==i:
            continue

        cycle=0
        j=i
        while not vis[j]:
            vis[j]=True
            j=arrpos[j][0]
            cycle+=1
        swaps+=cycle-1
    return swaps`,

      c: `// cycle detection`,
      cpp: `// cycle detection`
    }
  },
]

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB')
    const ops = problems.map((p) => ({
      updateOne: {
        filter: { title: p.title },
        update: { $setOnInsert: p },
        upsert: true,
      },
    }))

    const result = await CodeProblem.bulkWrite(ops)
    console.log(`Successfully processed ${problems.length} problems for Array batch 3`)
    await mongoose.disconnect()
    process.exit(0)
  } catch (error) {
    console.error('Seed failed:', error)
    process.exit(1)
  }
}

seed()
