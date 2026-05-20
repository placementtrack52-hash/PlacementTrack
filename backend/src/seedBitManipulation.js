import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'
import { fileURLToPath } from 'url'

export const problems = [
  {
    subject: 'Code',
    category: 'Bit Manipulation',
    title: 'Check if i-th Bit is Set or Not',
    difficulty: 'Easy',
    description: `Check whether the i-th bit (0-based) of a number is set (1) or not.`,
    inputExample: 'num = 5, i = 2',
    outputExample: 'true',
    explanation: `5 = 101, 2nd bit is 1.`,
    code: {
      java: `public class Main {
  public static boolean isSet(int num, int i){
    return (num & (1 << i)) != 0;
  }
}`,

      python: `def is_set(num, i):
    return (num & (1 << i)) != 0`,

      c: `#include <stdio.h>

int isSet(int num, int i){
    return (num & (1 << i)) != 0;
}`,

      cpp: `#include <iostream>
using namespace std;

bool isSet(int num, int i){
    return (num & (1 << i)) != 0;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Bit Manipulation',
    title: 'Check if a Number is Odd or Even',
    difficulty: 'Easy',
    description: `Check if a number is odd using bit manipulation.`,
    inputExample: 'num = 7',
    outputExample: 'true',
    explanation: `If last bit is 1 → odd.`,
    code: {
      java: `public class Main {
  public static boolean isOdd(int num){
    return (num & 1) == 1;
  }
}`,

      python: `def is_odd(num):
    return (num & 1) == 1`,

      c: `#include <stdio.h>

int isOdd(int num){
    return (num & 1);
}`,

      cpp: `#include <iostream>
using namespace std;

bool isOdd(int num){
    return (num & 1);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Bit Manipulation',
    title: 'Check if a Number is Power of 2',
    difficulty: 'Easy',
    description: `Check if a number is a power of 2.`,
    inputExample: 'num = 8',
    outputExample: 'true',
    explanation: `Power of 2 has only one set bit.`,
    code: {
      java: `public class Main {
  public static boolean isPowerOfTwo(int num){
    if(num <= 0) return false;
    return (num & (num - 1)) == 0;
  }
}`,

      python: `def is_power_of_two(num):
    return num > 0 and (num & (num - 1)) == 0`,

      c: `#include <stdio.h>

int isPowerOfTwo(int num){
    if(num <= 0) return 0;
    return (num & (num - 1)) == 0;
}`,

      cpp: `#include <iostream>
using namespace std;

bool isPowerOfTwo(int num){
    if(num <= 0) return false;
    return (num & (num - 1)) == 0;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Bit Manipulation',
    title: 'Count Number of Set Bits',
    difficulty: 'Easy',
    description: `Count the number of 1s in binary representation of a number.`,
    inputExample: 'num = 5',
    outputExample: '2',
    explanation: `5 = 101 → 2 set bits.`,
    code: {
      java: `public class Main {
  public static int countBits(int num){
    int count = 0;
    while(num > 0){
      num = num & (num - 1);
      count++;
    }
    return count;
  }
}`,

      python: `def count_bits(num):
    count = 0
    while num:
        num &= (num - 1)
        count += 1
    return count`,

      c: `#include <stdio.h>

int countBits(int num){
    int count = 0;
    while(num){
        num = num & (num - 1);
        count++;
    }
    return count;
}`,

      cpp: `#include <iostream>
using namespace std;

int countBits(int num){
    int count = 0;
    while(num){
        num = num & (num - 1);
        count++;
    }
    return count;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Bit Manipulation',
    title: 'Set the Rightmost Unset Bit',
    difficulty: 'Medium',
    description: `Set the rightmost unset (0) bit of a number.`,
    inputExample: 'num = 10',
    outputExample: '11',
    explanation: `10 = 1010 → rightmost 0 becomes 1 → 1011 = 11.`,
    code: {
      java: `public class Main {
  public static int setBit(int num){
    return num | (num + 1);
  }
}`,

      python: `def set_bit(num):
    return num | (num + 1)`,

      c: `#include <stdio.h>

int setBit(int num){
    return num | (num + 1);
}`,

      cpp: `#include <iostream>
using namespace std;

int setBit(int num){
    return num | (num + 1);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Bit Manipulation',
    title: 'Swap Two Numbers (Without Extra Variable)',
    difficulty: 'Easy',
    description: `Swap two numbers without using a third variable.`,
    inputExample: 'a = 5, b = 7',
    outputExample: 'a = 7, b = 5',
    explanation: `Use XOR swapping.`,
    code: {
      java: `public class Main {
  public static void swap(int a, int b){
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    System.out.println(a + " " + b);
  }
}`,

      python: `def swap(a, b):
    a = a ^ b
    b = a ^ b
    a = a ^ b
    return a, b`,

      c: `#include <stdio.h>

void swap(int *a, int *b){
    *a = *a ^ *b;
    *b = *a ^ *b;
    *a = *a ^ *b;
}`,

      cpp: `#include <iostream>
using namespace std;

void swap(int &a, int &b){
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Bit Manipulation',
    title: 'Divide Two Integers Without Using *, /, %',
    difficulty: 'Hard',
    description: `Divide two integers without using multiplication, division, or mod operator.`,
    inputExample: 'dividend = 10, divisor = 3',
    outputExample: '3',
    explanation: `Use bit shifting and subtraction.`,
    code: {
      java: `public class Main {
  public static int divide(int dividend, int divisor) {
    if (dividend == Integer.MIN_VALUE && divisor == -1)
      return Integer.MAX_VALUE;

    int sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;

    long dvd = Math.abs((long) dividend);
    long dvs = Math.abs((long) divisor);
    int result = 0;

    while (dvd >= dvs) {
      long temp = dvs, multiple = 1;

      while (dvd >= (temp << 1)) {
        temp <<= 1;
        multiple <<= 1;
      }

      dvd -= temp;
      result += multiple;
    }

    return sign * result;
  }
}`,

      python: `def divide(dividend, divisor):
    if dividend == -2**31 and divisor == -1:
        return 2**31 - 1

    sign = -1 if (dividend < 0) ^ (divisor < 0) else 1

    dvd, dvs = abs(dividend), abs(divisor)
    res = 0

    while dvd >= dvs:
        temp, multiple = dvs, 1

        while dvd >= (temp << 1):
            temp <<= 1
            multiple <<= 1

        dvd -= temp
        res += multiple

    return sign * res`,

      c: `#include <stdio.h>
#include <limits.h>

int divide(int dividend, int divisor) {
    if (dividend == INT_MIN && divisor == -1)
        return INT_MAX;

    int sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;

    long dvd = labs(dividend);
    long dvs = labs(divisor);
    int result = 0;

    while (dvd >= dvs) {
        long temp = dvs, multiple = 1;

        while (dvd >= (temp << 1)) {
            temp <<= 1;
            multiple <<= 1;
        }

        dvd -= temp;
        result += multiple;
    }

    return sign * result;
}`,

      cpp: `#include <iostream>
#include <climits>
using namespace std;

int divide(int dividend, int divisor) {
    if (dividend == INT_MIN && divisor == -1)
        return INT_MAX;

    int sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;

    long dvd = labs(dividend);
    long dvs = labs(divisor);
    int result = 0;

    while (dvd >= dvs) {
        long temp = dvs, multiple = 1;

        while (dvd >= (temp << 1)) {
            temp <<= 1;
            multiple <<= 1;
        }

        dvd -= temp;
        result += multiple;
    }

    return sign * result;
}`
    }
  },
    {
    subject: 'Code',
    category: 'Bit Manipulation',
    title: 'Count Bits to Flip to Convert A to B',
    difficulty: 'Easy',
    description: `Find the number of bits to be flipped to convert integer A to B.`,
    inputExample: 'A = 10, B = 20',
    outputExample: '4',
    explanation: `XOR A and B, then count set bits.`,
    code: {
      java: `public class Main {
  public static int countFlip(int A, int B){
    int x = A ^ B;
    int count = 0;

    while(x > 0){
      x = x & (x - 1);
      count++;
    }
    return count;
  }
}`,

      python: `def count_flip(A, B):
    x = A ^ B
    count = 0

    while x:
        x &= (x - 1)
        count += 1

    return count`,

      c: `#include <stdio.h>

int countFlip(int A, int B){
    int x = A ^ B;
    int count = 0;

    while(x){
        x = x & (x - 1);
        count++;
    }
    return count;
}`,

      cpp: `#include <iostream>
using namespace std;

int countFlip(int A, int B){
    int x = A ^ B;
    int count = 0;

    while(x){
        x = x & (x - 1);
        count++;
    }
    return count;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Bit Manipulation',
    title: 'Find Number That Appears Odd Number of Times',
    difficulty: 'Easy',
    description: `Find the element that appears odd number of times in array.`,
    inputExample: 'arr = [1,2,3,2,3,1,3]',
    outputExample: '3',
    explanation: `XOR all elements; pairs cancel out.`,
    code: {
      java: `public class Main {
  public static int findOdd(int[] arr){
    int res = 0;
    for(int x : arr)
      res ^= x;
    return res;
  }
}`,

      python: `def find_odd(arr):
    res = 0
    for x in arr:
        res ^= x
    return res`,

      c: `#include <stdio.h>

int findOdd(int arr[], int n){
    int res = 0;
    for(int i=0;i<n;i++)
        res ^= arr[i];
    return res;
}`,

      cpp: `#include <iostream>
using namespace std;

int findOdd(int arr[], int n){
    int res = 0;
    for(int i=0;i<n;i++)
        res ^= arr[i];
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Bit Manipulation',
    title: 'Power Set (All Subsets)',
    difficulty: 'Medium',
    description: `Generate all subsets of a given set using bit manipulation.`,
    inputExample: 'arr = [1,2,3]',
    outputExample: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]',
    explanation: `Use bit masking from 0 to 2^n - 1.`,
    code: {
      java: `import java.util.*;

public class Main {
  public static List<List<Integer>> subsets(int[] arr){
    int n = arr.length;
    List<List<Integer>> res = new ArrayList<>();

    for(int i=0;i<(1<<n);i++){
      List<Integer> temp = new ArrayList<>();

      for(int j=0;j<n;j++){
        if((i & (1<<j)) != 0)
          temp.add(arr[j]);
      }
      res.add(temp);
    }
    return res;
  }
}`,

      python: `def subsets(arr):
    n = len(arr)
    res = []

    for i in range(1<<n):
        temp = []
        for j in range(n):
            if i & (1<<j):
                temp.append(arr[j])
        res.append(temp)

    return res`,

      c: `#include <stdio.h>

void subsets(int arr[], int n){
    for(int i=0;i<(1<<n);i++){
        printf("{ ");
        for(int j=0;j<n;j++){
            if(i & (1<<j))
                printf("%d ",arr[j]);
        }
        printf("}\\n");
    }
}`,

      cpp: `#include <iostream>
using namespace std;

void subsets(int arr[], int n){
    for(int i=0;i<(1<<n);i++){
        cout<<"{ ";
        for(int j=0;j<n;j++){
            if(i & (1<<j))
                cout<<arr[j]<<" ";
        }
        cout<<"}"<<endl;
    }
}`
    }
  },
   {
    subject: 'Code',
    category: 'Bit Manipulation',
    title: 'Find XOR of Numbers from L to R',
    difficulty: 'Medium',
    description: `Find XOR of all numbers in range [L, R].`,
    inputExample: 'L = 3, R = 6',
    outputExample: '4',
    explanation: `Use XOR pattern: f(n) repeats every 4.`,
    code: {
      java: `public class Main {
  static int xorUpto(int n){
    if(n % 4 == 0) return n;
    if(n % 4 == 1) return 1;
    if(n % 4 == 2) return n + 1;
    return 0;
  }

  public static int xorRange(int L, int R){
    return xorUpto(R) ^ xorUpto(L - 1);
  }
}`,

      python: `def xor_upto(n):
    if n % 4 == 0: return n
    if n % 4 == 1: return 1
    if n % 4 == 2: return n + 1
    return 0

def xor_range(L, R):
    return xor_upto(R) ^ xor_upto(L - 1)`,

      c: `#include <stdio.h>

int xorUpto(int n){
    if(n%4==0) return n;
    if(n%4==1) return 1;
    if(n%4==2) return n+1;
    return 0;
}

int xorRange(int L,int R){
    return xorUpto(R)^xorUpto(L-1);
}`,

      cpp: `#include <iostream>
using namespace std;

int xorUpto(int n){
    if(n%4==0) return n;
    if(n%4==1) return 1;
    if(n%4==2) return n+1;
    return 0;
}

int xorRange(int L,int R){
    return xorUpto(R)^xorUpto(L-1);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Bit Manipulation',
    title: 'Find Two Numbers Appearing Odd Number of Times',
    difficulty: 'Medium',
    description: `Find two elements that appear odd number of times.`,
    inputExample: 'arr = [1,2,3,2,3,1,3,5]',
    outputExample: '3,5',
    explanation: `Use XOR and rightmost set bit.`,
    code: {
      java: `public class Main {
  public static void findOdd(int[] arr){
    int xor = 0;
    for(int x : arr) xor ^= x;

    int setBit = xor & -xor;

    int x = 0, y = 0;

    for(int num : arr){
      if((num & setBit) != 0) x ^= num;
      else y ^= num;
    }

    System.out.println(x + " " + y);
  }
}`,

      python: `def find_two_odd(arr):
    xor = 0
    for x in arr:
        xor ^= x

    set_bit = xor & -xor

    x = y = 0
    for num in arr:
        if num & set_bit:
            x ^= num
        else:
            y ^= num

    return x, y`,

      c: `#include <stdio.h>

void findOdd(int arr[], int n){
    int xor=0;
    for(int i=0;i<n;i++) xor^=arr[i];

    int setBit = xor & -xor;

    int x=0,y=0;
    for(int i=0;i<n;i++){
        if(arr[i]&setBit) x^=arr[i];
        else y^=arr[i];
    }

    printf("%d %d",x,y);
}`,

      cpp: `#include <iostream>
using namespace std;

void findOdd(int arr[], int n){
    int xor=0;
    for(int i=0;i<n;i++) xor^=arr[i];

    int setBit = xor & -xor;

    int x=0,y=0;
    for(int i=0;i<n;i++){
        if(arr[i]&setBit) x^=arr[i];
        else y^=arr[i];
    }

    cout<<x<<" "<<y;
}`
  }
}

]

const seed = async () => {
    try {
        await mongoose.connect((process.env.MONGO_URI || process.env.MONGODB_URI))
        console.log('Connected to MongoDB')
        
        const ops = problems.map(p => ({
            updateOne: {
                filter: { title: p.title },
                update: { $setOnInsert: p },
                upsert: true
            }
        }))

        const result = await CodeProblem.bulkWrite(ops)
        console.log(`Successfully processed ${problems.length} problems for Bit Manipulation`)
        
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