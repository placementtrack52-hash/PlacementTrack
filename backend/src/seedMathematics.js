import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'
import { fileURLToPath } from 'url'

export const problems = [
{
    subject: 'Code',
    category: 'Mathematics',
    title: 'Check if a Number is Prime',
    difficulty: 'Easy',
    description:
      'Given a positive integer N, determine whether it is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.',
    inputExample: 'N = 7',
    outputExample: 'true',
    explanation:
      '7 is only divisible by 1 and 7 itself, so it is a prime number. We only need to check divisibility up to the square root of N for efficiency.',
    code: {
      java: `public class PrimeCheck {
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;

        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0)
                return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPrime(7)); // true
    }
}`,
      python: `def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False

    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

print(is_prime(7))  # True`,
      c: `#include <stdio.h>
#include <stdbool.h>

bool isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;

    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    }
    return true;
}

int main() {
    printf("%s\\n", isPrime(7) ? "true" : "false");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

bool isPrime(int n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;

    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    }
    return true;
}

int main() {
    cout << boolalpha << isPrime(7) << endl; // true
    return 0;
}`,
    },
  },
{
    subject: 'Code',
    category: 'Mathematics',
    title: 'Fibonacci Number',
    difficulty: 'Easy',
    description:
      'Given an integer N, find the Nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, 13, …',
    inputExample: 'N = 6',
    outputExample: '8',
    explanation:
      'The Fibonacci sequence is: F(0)=0, F(1)=1, F(2)=1, F(3)=2, F(4)=3, F(5)=5, F(6)=8. We use an iterative approach with O(N) time and O(1) space.',
    code: {
      java: `public class Fibonacci {
    public static int fib(int n) {
        if (n <= 1) return n;

        int prev2 = 0, prev1 = 1;
        for (int i = 2; i <= n; i++) {
            int curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }

    public static void main(String[] args) {
        System.out.println(fib(6)); // 8
    }
}`,
      python: `def fib(n):
    if n <= 1:
        return n

    prev2, prev1 = 0, 1
    for _ in range(2, n + 1):
        curr = prev1 + prev2
        prev2 = prev1
        prev1 = curr
    return prev1

print(fib(6))  # 8`,
      c: `#include <stdio.h>

int fib(int n) {
    if (n <= 1) return n;

    int prev2 = 0, prev1 = 1;
    for (int i = 2; i <= n; i++) {
        int curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}

int main() {
    printf("%d\\n", fib(6)); // 8
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

int fib(int n) {
    if (n <= 1) return n;

    int prev2 = 0, prev1 = 1;
    for (int i = 2; i <= n; i++) {
        int curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}

int main() {
    cout << fib(6) << endl; // 8
    return 0;
}`,
    },
  },
{
    subject: 'Code',
    category: 'Mathematics',
    title: 'Greatest Common Divisor (GCD)',
    difficulty: 'Medium',
    description:
      'Given two positive integers A and B, find their Greatest Common Divisor (GCD) using the Euclidean algorithm. The GCD is the largest number that divides both A and B without a remainder.',
    inputExample: 'A = 36, B = 24',
    outputExample: '12',
    explanation:
      'Using the Euclidean algorithm: GCD(36,24) → GCD(24,12) → GCD(12,0) = 12. The algorithm repeatedly replaces the larger number with the remainder of dividing the two numbers until the remainder is 0.',
    code: {
      java: `public class GCD {
    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public static void main(String[] args) {
        System.out.println(gcd(36, 24)); // 12
    }
}`,
      python: `def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

print(gcd(36, 24))  # 12`,
      c: `#include <stdio.h>

int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    printf("%d\\n", gcd(36, 24)); // 12
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    cout << gcd(36, 24) << endl; // 12
    return 0;
}`,
    },
  },
  {
    subject: 'Code',
    category: 'Mathematics',
    title: 'Count Squares',
    difficulty: 'Easy',
    description: `Count perfect squares less than N.`,
    inputExample: 'n=9',
    outputExample: '2',
    explanation: `Squares: 1,4`,
    code: {
      java: `int count(int n){ return (int)Math.sqrt(n-1); }`,
      python: `import math
def count(n): return int(math.sqrt(n-1))`,
      c: `int count(int n){ return (int)sqrt(n-1); }`,
      cpp: `int count(int n){ return sqrt(n-1); }`
    }
  },
  {
    subject: 'Code',
    category: 'Mathematics',
    title: 'Middle of Three',
    difficulty: 'Easy',
    description: `Find middle of three numbers.`,
    inputExample: 'a=20,b=30,c=40',
    outputExample: '30',
    explanation: `Sort or use conditions.`,
    code: {
      java: `int mid(int a,int b,int c){
  if((a>b && a<c)||(a<c && a>b)) return a;
  if((b>a && b<c)||(b<c && b>a)) return b;
  return c;
}`,

      python: `def mid(a,b,c):
    return sorted([a,b,c])[1]`,

      c: `// condition based`,
      cpp: `// condition based`
    }
  },
  {
    subject: 'Code',
    category: 'Mathematics',
    title: 'Print Prime Factors of a Number',
    difficulty: 'Medium',
    description: `Print all prime factors of a number.`,
    inputExample: 'n = 60',
    outputExample: '2 2 3 5',
    explanation: `Divide by smallest prime repeatedly.`,
    code: {
      java: `public class Main {
  public static void primeFactors(int n){
    for(int i=2;i*i<=n;i++){
      while(n%i==0){
        System.out.print(i+" ");
        n/=i;
      }
    }
    if(n>1) System.out.print(n);
  }
}`,

      python: `def prime_factors(n):
    i = 2
    while i*i <= n:
        while n % i == 0:
            print(i, end=" ")
            n //= i
        i += 1
    if n > 1:
        print(n)`,

      c: `#include <stdio.h>

void primeFactors(int n){
    for(int i=2;i*i<=n;i++){
        while(n%i==0){
            printf("%d ",i);
            n/=i;
        }
    }
    if(n>1) printf("%d",n);
}`,

      cpp: `#include <iostream>
using namespace std;

void primeFactors(int n){
    for(int i=2;i*i<=n;i++){
        while(n%i==0){
            cout<<i<<" ";
            n/=i;
        }
    }
    if(n>1) cout<<n;
}`
    }
  },
  {
    subject: 'Code',
    category: 'Mathematics',
    title: 'All Divisors of a Number',
    difficulty: 'Easy',
    description: `Print all divisors of a number.`,
    inputExample: 'n = 36',
    outputExample: '1 2 3 4 6 9 12 18 36',
    explanation: `Check till sqrt(n) and print pairs.`,
    code: {
      java: `public class Main {
  public static void divisors(int n){
    for(int i=1;i*i<=n;i++){
      if(n%i==0){
        System.out.print(i+" ");
        if(i!=n/i)
          System.out.print((n/i)+" ");
      }
    }
  }
}`,

      python: `def divisors(n):
    res = []
    for i in range(1,int(n**0.5)+1):
        if n % i == 0:
            res.append(i)
            if i != n//i:
                res.append(n//i)
    return sorted(res)`,

      c: `#include <stdio.h>

void divisors(int n){
    for(int i=1;i*i<=n;i++){
        if(n%i==0){
            printf("%d ",i);
            if(i!=n/i)
                printf("%d ",n/i);
        }
    }
}`,

      cpp: `#include <iostream>
using namespace std;

void divisors(int n){
    for(int i=1;i*i<=n;i++){
        if(n%i==0){
            cout<<i<<" ";
            if(i!=n/i)
                cout<<n/i<<" ";
        }
    }
}`
    }
  },
  {
    subject: 'Code',
    category: 'Mathematics',
    title: 'Sieve of Eratosthenes',
    difficulty: 'Medium',
    description: `Find all prime numbers up to n using Sieve of Eratosthenes.`,
    inputExample: 'n = 10',
    outputExample: '2 3 5 7',
    explanation: `Mark multiples of each prime starting from 2.`,
    code: {
      java: `import java.util.*;

public class Main {
  public static void sieve(int n){
    boolean[] prime = new boolean[n+1];
    Arrays.fill(prime, true);

    prime[0] = prime[1] = false;

    for(int i=2;i*i<=n;i++){
      if(prime[i]){
        for(int j=i*i;j<=n;j+=i)
          prime[j] = false;
      }
    }

    for(int i=2;i<=n;i++){
      if(prime[i])
        System.out.print(i + " ");
    }
  }
}`,

      python: `def sieve(n):
    prime = [True]*(n+1)
    prime[0] = prime[1] = False

    for i in range(2, int(n**0.5)+1):
        if prime[i]:
            for j in range(i*i, n+1, i):
                prime[j] = False

    return [i for i in range(2, n+1) if prime[i]]`,

      c: `#include <stdio.h>

void sieve(int n){
    int prime[n+1];
    for(int i=0;i<=n;i++) prime[i]=1;

    prime[0]=prime[1]=0;

    for(int i=2;i*i<=n;i++){
        if(prime[i]){
            for(int j=i*i;j<=n;j+=i)
                prime[j]=0;
        }
    }

    for(int i=2;i<=n;i++)
        if(prime[i]) printf("%d ",i);
}`,

      cpp: `#include <iostream>
#include <vector>
using namespace std;

void sieve(int n){
    vector<bool> prime(n+1,true);
    prime[0]=prime[1]=false;

    for(int i=2;i*i<=n;i++){
        if(prime[i]){
            for(int j=i*i;j<=n;j+=i)
                prime[j]=false;
        }
    }

    for(int i=2;i<=n;i++)
        if(prime[i]) cout<<i<<" ";
}`
    }
  },
  {
    subject: 'Code',
    category: 'Mathematics',
    title: 'Prime Factorisation Using Sieve',
    difficulty: 'Hard',
    description: `Find prime factorisation using smallest prime factor (SPF) array.`,
    inputExample: 'n = 60',
    outputExample: '2 2 3 5',
    explanation: `Precompute SPF and divide repeatedly.`,
    code: {
      java: `import java.util.*;

public class Main {
  static int MAX = 100000;
  static int[] spf = new int[MAX+1];

  static void computeSPF(){
    for(int i=0;i<=MAX;i++) spf[i]=i;

    for(int i=2;i*i<=MAX;i++){
      if(spf[i]==i){
        for(int j=i*i;j<=MAX;j+=i){
          if(spf[j]==j)
            spf[j]=i;
        }
      }
    }
  }

  public static void factor(int n){
    while(n!=1){
      System.out.print(spf[n]+" ");
      n/=spf[n];
    }
  }
}`,

      python: `MAX = 100000
spf = list(range(MAX+1))

def compute_spf():
    for i in range(2, int(MAX**0.5)+1):
        if spf[i] == i:
            for j in range(i*i, MAX+1, i):
                if spf[j] == j:
                    spf[j] = i

def factor(n):
    res = []
    while n != 1:
        res.append(spf[n])
        n //= spf[n]
    return res`,

      c: `#include <stdio.h>

#define MAX 100000
int spf[MAX+1];

void computeSPF(){
    for(int i=0;i<=MAX;i++) spf[i]=i;

    for(int i=2;i*i<=MAX;i++){
        if(spf[i]==i){
            for(int j=i*i;j<=MAX;j+=i){
                if(spf[j]==j)
                    spf[j]=i;
            }
        }
    }
}

void factor(int n){
    while(n!=1){
        printf("%d ",spf[n]);
        n/=spf[n];
    }
}`,

      cpp: `#include <iostream>
using namespace std;

#define MAX 100000
int spf[MAX+1];

void computeSPF(){
    for(int i=0;i<=MAX;i++) spf[i]=i;

    for(int i=2;i*i<=MAX;i++){
        if(spf[i]==i){
            for(int j=i*i;j<=MAX;j+=i){
                if(spf[j]==j)
                    spf[j]=i;
            }
        }
    }
}

void factor(int n){
    while(n!=1){
        cout<<spf[n]<<" ";
        n/=spf[n];
    }
}`
    }
  },
  {
    subject: 'Code',
    category: 'Mathematics',
    title: 'Power (n^x) using Fast Exponentiation',
    difficulty: 'Medium',
    description: `Compute n^x efficiently using binary exponentiation.`,
    inputExample: 'n = 2, x = 10',
    outputExample: '1024',
    explanation: `Use divide and conquer (log n).`,
    code: {
      java: `public class Main {
  public static long power(long n, long x){
    long res = 1;

    while(x > 0){
      if((x & 1) == 1)
        res *= n;

      n *= n;
      x >>= 1;
    }
    return res;
  }
}`,

      python: `def power(n, x):
    res = 1

    while x > 0:
        if x & 1:
            res *= n
        n *= n
        x >>= 1

    return res`,

      c: `#include <stdio.h>

long power(long n, long x){
    long res = 1;

    while(x > 0){
        if(x & 1)
            res *= n;

        n *= n;
        x >>= 1;
    }
    return res;
}`,

      cpp: `#include <iostream>
using namespace std;

long power(long n, long x){
    long res = 1;

    while(x > 0){
        if(x & 1)
            res *= n;

        n *= n;
        x >>= 1;
    }
    return res;
}`
    }
  },
  {
  subject: 'Code',
  category: 'Mathematics',
  title: 'Reverse Integer',
  difficulty: 'Easy',
  description: `Reverse digits of an integer and handle overflow.`,
  inputExample: '123',
  outputExample: '321',
  explanation: `Extract digits using modulo and rebuild number.`,
  code: {
    java: `class Solution {
  public int reverse(int x){
    long res = 0;

    while(x != 0){
      res = res * 10 + x % 10;
      x /= 10;

      if(res > Integer.MAX_VALUE || res < Integer.MIN_VALUE)
        return 0;
    }

    return (int)res;
  }
}`,

    python: `def reverse(x):
    sign = -1 if x < 0 else 1
    x = abs(x)

    res = 0
    while x:
        res = res * 10 + x % 10
        x //= 10

    res *= sign
    return res if -(2**31) <= res <= (2**31-1) else 0`,

    cpp: `int reverse(int x){
    long res = 0;

    while(x){
        res = res * 10 + x % 10;
        x /= 10;

        if(res > INT_MAX || res < INT_MIN)
            return 0;
    }

    return (int)res;
}`
  }
},

// ===============================
// 2. ADD BINARY
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Add Binary',
  difficulty: 'Easy',
  description: `Add two binary strings.`,
  inputExample: '"101", "11"',
  outputExample: '"1000"',
  explanation: `Simulate binary addition from right to left.`,
  code: {
    java: `class Solution {
  public String addBinary(String a, String b){
    StringBuilder sb = new StringBuilder();
    int i=a.length()-1, j=b.length()-1, carry=0;

    while(i>=0 || j>=0 || carry>0){
      int sum = carry;

      if(i>=0) sum += a.charAt(i--) - '0';
      if(j>=0) sum += b.charAt(j--) - '0';

      sb.append(sum % 2);
      carry = sum / 2;
    }

    return sb.reverse().toString();
  }
}`,

    python: `def addBinary(a,b):
    i,j=len(a)-1,len(b)-1
    carry=0
    res=[]

    while i>=0 or j>=0 or carry:
        s=carry

        if i>=0:
            s+=int(a[i]); i-=1
        if j>=0:
            s+=int(b[j]); j-=1

        res.append(str(s%2))
        carry=s//2

    return "".join(res[::-1])`,

    cpp: `string addBinary(string a, string b){
    int i=a.size()-1,j=b.size()-1,carry=0;
    string res="";

    while(i>=0 || j>=0 || carry){
        int sum=carry;

        if(i>=0) sum+=a[i--]-'0';
        if(j>=0) sum+=b[j--]-'0';

        res.push_back((sum%2)+'0');
        carry=sum/2;
    }

    reverse(res.begin(),res.end());
    return res;
}`
  }
},

// ===============================
// 3. PALINDROME NUMBER
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Palindrome Number',
  difficulty: 'Easy',
  description: `Check if integer is palindrome.`,
  inputExample: '121',
  outputExample: 'true',
  explanation: `Reverse half number and compare.`,
  code: {
    java: `class Solution {
  public boolean isPalindrome(int x){
    if(x < 0 || (x%10==0 && x!=0)) return false;

    int rev = 0;

    while(x > rev){
      rev = rev*10 + x%10;
      x /= 10;
    }

    return x == rev || x == rev/10;
  }
}`,

    python: `def isPalindrome(x):
    if x<0 or (x%10==0 and x!=0):
        return False

    rev=0
    while x>rev:
        rev=rev*10 + x%10
        x//=10

    return x==rev or x==rev//10`,

    cpp: `bool isPalindrome(int x){
    if(x<0 || (x%10==0 && x!=0)) return false;

    int rev=0;

    while(x>rev){
        rev=rev*10 + x%10;
        x/=10;
    }

    return x==rev || x==rev/10;
}`
  }
},

// ===============================
// 4. MINIMUM MOVES TO EQUAL ARRAY ELEMENTS
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Minimum Moves to Equal Array Elements',
  difficulty: 'Medium',
  description: `Find minimum moves to make all elements equal.`,
  inputExample: '[1,2,3]',
  outputExample: '3',
  explanation: `Increase n-1 elements = decrease 1 element logic.`,
  code: {
    java: `class Solution {
  public int minMoves(int[] nums){
    int min = Integer.MAX_VALUE;
    for(int n:nums) min = Math.min(min,n);

    int moves = 0;
    for(int n:nums)
      moves += n - min;

    return moves;
  }
}`,

    python: `def minMoves(nums):
    m=min(nums)
    return sum(n-m for n in nums)`,

    cpp: `int minMoves(vector<int>& nums){
    int mn=*min_element(nums.begin(),nums.end());
    int res=0;

    for(int n:nums)
        res+=n-mn;

    return res;
}`
  }
},

// ===============================
// 5. HAPPY NUMBER
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Happy Number',
  difficulty: 'Easy',
  description: `Check if number reaches 1 using sum of squares of digits.`,
  inputExample: '19',
  outputExample: 'true',
  explanation: `Cycle detection using set.`,
  code: {
    java: `import java.util.*;

class Solution {
  public boolean isHappy(int n){
    Set<Integer> set = new HashSet<>();

    while(n != 1 && !set.contains(n)){
      set.add(n);
      int sum = 0;

      while(n > 0){
        int d = n % 10;
        sum += d * d;
        n /= 10;
      }

      n = sum;
    }

    return n == 1;
  }
}`,

    python: `def isHappy(n):
    seen=set()

    while n!=1 and n not in seen:
        seen.add(n)
        n=sum(int(d)**2 for d in str(n))

    return n==1`,

    cpp: `bool isHappy(int n){
    unordered_set<int> s;

    while(n!=1 && !s.count(n)){
        s.insert(n);
        int sum=0;

        while(n){
            int d=n%10;
            sum+=d*d;
            n/=10;
        }

        n=sum;
    }

    return n==1;
}`
  }
},

// ===============================
// 6. EXCEL SHEET COLUMN TITLE
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Excel Sheet Column Title',
  difficulty: 'Easy',
  description: `Convert number to Excel column title.`,
  inputExample: '28',
  outputExample: 'AB',
  explanation: `Base-26 conversion with offset.`,
  code: {
    java: `class Solution {
  public String convertToTitle(int n){
    StringBuilder sb = new StringBuilder();

    while(n > 0){
      n--;
      sb.append((char)(n % 26 + 'A'));
      n /= 26;
    }

    return sb.reverse().toString();
  }
}`,

    python: `def convertToTitle(n):
    res=""

    while n:
        n-=1
        res+=chr(n%26 + 65)
        n//=26

    return res[::-1]`,

    cpp: `string convertToTitle(int n){
    string res="";

    while(n){
        n--;
        res.push_back(char(n%26 + 'A'));
        n/=26;
    }

    reverse(res.begin(),res.end());
    return res;
}`
  }
},
{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Missing Number',
  difficulty: 'Easy',
  description: `Find missing number from 0 to n.`,
  inputExample: '[3,0,1]',
  outputExample: '2',
  explanation: `Use sum formula or XOR.`,
  code: {
    java: `class Solution {
  public int missingNumber(int[] nums){
    int n = nums.length;
    int sum = n*(n+1)/2;

    for(int x:nums)
      sum -= x;

    return sum;
  }
}`,

    python: `def missingNumber(nums):
    n=len(nums)
    return n*(n+1)//2 - sum(nums)`,

    cpp: `int missingNumber(vector<int>& nums){
    int n=nums.size();
    int sum=n*(n+1)/2;

    for(int x:nums)
        sum-=x;

    return sum;
}`
  }
},

// ===============================
// 2. MAXIMUM PRODUCT OF THREE NUMBERS
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Maximum Product of Three Numbers',
  difficulty: 'Easy',
  description: `Find maximum product of any 3 numbers.`,
  inputExample: '[1,2,3,4]',
  outputExample: '24',
  explanation: `Max of (largest3) or (2 smallest * largest).`,
  code: {
    java: `import java.util.*;

class Solution {
  public int maximumProduct(int[] nums){
    Arrays.sort(nums);
    int n = nums.length;

    return Math.max(
      nums[n-1]*nums[n-2]*nums[n-3],
      nums[0]*nums[1]*nums[n-1]
    );
  }
}`,

    python: `def maximumProduct(nums):
    nums.sort()
    return max(nums[-1]*nums[-2]*nums[-3],
               nums[0]*nums[1]*nums[-1])`,

    cpp: `int maximumProduct(vector<int>& nums){
    sort(nums.begin(),nums.end());
    int n=nums.size();

    return max(nums[n-1]*nums[n-2]*nums[n-3],
               nums[0]*nums[1]*nums[n-1]);
}`
  }
},

// ===============================
// 3. POWER OF TWO
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Power of Two',
  difficulty: 'Easy',
  description: `Check if number is power of 2.`,
  inputExample: '16',
  outputExample: 'true',
  explanation: `Bit trick: n & (n-1) == 0.`,
  code: {
    java: `class Solution {
  public boolean isPowerOfTwo(int n){
    if(n <= 0) return false;
    return (n & (n - 1)) == 0;
  }
}`,

    python: `def isPowerOfTwo(n):
    return n>0 and (n & (n-1))==0`,

    cpp: `bool isPowerOfTwo(int n){
    return n>0 && (n&(n-1))==0;
}`
  }
},

// ===============================
// 4. ENCODE AND DECODE TINYURL
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Encode and Decode TinyURL',
  difficulty: 'Medium',
  description: `Design URL shortener system.`,
  inputExample: 'https://leetcode.com/problems',
  outputExample: 'http://tinyurl.com/abcd123',
  explanation: `Use hash map + random/base62 encoding.`,
  code: {
    java: `import java.util.*;

class Codec {
  Map<String,String> map = new HashMap<>();
  String base = "http://tinyurl.com/";

  public String encode(String longUrl){
    String key = UUID.randomUUID().toString().substring(0,6);
    map.put(key,longUrl);
    return base + key;
  }

  public String decode(String shortUrl){
    return map.get(shortUrl.replace(base,""));
  }
}`,

    python: `import random,string

class Codec:
    def __init__(self):
        self.map={}
        self.base="http://tinyurl.com/"

    def encode(self,longUrl):
        key=''.join(random.choices(string.ascii_letters+string.digits,k=6))
        self.map[key]=longUrl
        return self.base+key

    def decode(self,shortUrl):
        return self.map[shortUrl.replace(self.base,"")]`,

    cpp: `class Codec {
    unordered_map<string,string> mp;
    string base="http://tinyurl.com/";

public:
    string encode(string longUrl){
        string key="abc123";
        mp[key]=longUrl;
        return base+key;
    }

    string decode(string shortUrl){
        return mp[shortUrl.substr(base.size())];
    }
};`
  }
},
{
  subject: 'Code',
  category: 'Mathematics',
  title: 'String to Integer (atoi)',
  difficulty: 'Medium',
  description: `Convert string to integer handling spaces, sign and overflow.`,
  inputExample: '"  -42"',
  outputExample: '-42',
  explanation: `Skip spaces → handle sign → build number → check overflow.`,
  code: {
    java: `class Solution {
  public int myAtoi(String s){
    int i=0, sign=1;
    long res=0;

    while(i<s.length() && s.charAt(i)==' ') i++;

    if(i<s.length() && (s.charAt(i)=='-' || s.charAt(i)=='+'))
      sign = s.charAt(i++)=='-' ? -1 : 1;

    while(i<s.length() && Character.isDigit(s.charAt(i))){
      res = res*10 + (s.charAt(i)-'0');

      if(sign*res > Integer.MAX_VALUE) return Integer.MAX_VALUE;
      if(sign*res < Integer.MIN_VALUE) return Integer.MIN_VALUE;

      i++;
    }

    return (int)(sign*res);
  }
}`,

    python: `def myAtoi(s):
    i=0
    sign=1
    res=0

    while i<len(s) and s[i]==' ':
        i+=1

    if i<len(s) and s[i] in '+-':
        sign = -1 if s[i]=='-' else 1
        i+=1

    while i<len(s) and s[i].isdigit():
        res = res*10 + int(s[i])

        if sign*res > 2**31-1:
            return 2**31-1
        if sign*res < -2**31:
            return -2**31

        i+=1

    return sign*res`,

    c: `int myAtoi(char *s){
    int i=0, sign=1;
    long res=0;

    while(s[i]==' ') i++;

    if(s[i]=='-' || s[i]=='+')
        sign = (s[i++]=='-') ? -1 : 1;

    while(s[i]>='0' && s[i]<='9'){
        res = res*10 + (s[i]-'0');

        if(sign*res > INT_MAX) return INT_MAX;
        if(sign*res < INT_MIN) return INT_MIN;

        i++;
    }

    return sign*res;
}`,

    cpp: `class Solution {
public:
  int myAtoi(string s){
    int i=0, sign=1;
    long long res=0;

    while(i<s.size() && s[i]==' ') i++;

    if(i<s.size() && (s[i]=='-' || s[i]=='+'))
      sign = (s[i++]=='-') ? -1 : 1;

    while(i<s.size() && isdigit(s[i])){
      res = res*10 + (s[i]-'0');

      if(sign*res > INT_MAX) return INT_MAX;
      if(sign*res < INT_MIN) return INT_MIN;

      i++;
    }

    return (int)(sign*res);
  }
};`
  }
},

// ===============================
// 2. MULTIPLY STRINGS
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Multiply Strings',
  difficulty: 'Medium',
  description: `Multiply two large numbers represented as strings.`,
  inputExample: '"123","456"',
  outputExample: '"56088"',
  explanation: `Use array to simulate multiplication like school method.`,
  code: {
    java: `class Solution {
  public String multiply(String a, String b){
    int m=a.length(), n=b.length();
    int[] res=new int[m+n];

    for(int i=m-1;i>=0;i--){
      for(int j=n-1;j>=0;j--){
        int mul=(a.charAt(i)-'0')*(b.charAt(j)-'0');
        int sum=mul+res[i+j+1];

        res[i+j+1]=sum%10;
        res[i+j]+=sum/10;
      }
    }

    StringBuilder sb=new StringBuilder();
    for(int r:res)
      if(!(sb.length()==0 && r==0))
        sb.append(r);

    return sb.length()==0?"0":sb.toString();
  }
}`,

    python: `def multiply(a,b):
    if a=="0" or b=="0":
        return "0"

    m,n=len(a),len(b)
    res=[0]*(m+n)

    for i in range(m-1,-1,-1):
        for j in range(n-1,-1,-1):
            mul=(ord(a[i])-48)*(ord(b[j])-48)
            s=mul+res[i+j+1]

            res[i+j+1]=s%10
            res[i+j]+=s//10

    ans="".join(map(str,res)).lstrip("0")
    return ans`,

    c: `// C implementation requires string building logic (manual array handling)`,
    
    cpp: `string multiply(string a,string b){
    int m=a.size(), n=b.size();
    vector<int> res(m+n);

    for(int i=m-1;i>=0;i--){
        for(int j=n-1;j>=0;j--){
            int mul=(a[i]-'0')*(b[j]-'0');
            int sum=mul+res[i+j+1];

            res[i+j+1]=sum%10;
            res[i+j]+=sum/10;
        }
    }

    string ans="";
    for(int r:res)
        if(!(ans.empty() && r==0))
            ans.push_back(r+'0');

    return ans.empty()?"0":ans;
}`
  }
},

// ===============================
// 3. ANGLE BETWEEN HANDS OF A CLOCK
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Angle Between Hands of a Clock',
  difficulty: 'Easy',
  description: `Find smaller angle between hour and minute hand.`,
  inputExample: 'hour=3, minutes=30',
  outputExample: '75',
  explanation: `Hour moves 30°/hr + 0.5°/min, minute moves 6°/min.`,
  code: {
    java: `class Solution {
  public double angleClock(int h, int m){
    double minute = 6*m;
    double hour = (h%12)*30 + m*0.5;

    double diff = Math.abs(hour-minute);
    return Math.min(diff, 360-diff);
  }
}`,

    python: `def angleClock(h,m):
    minute = 6*m
    hour = (h%12)*30 + 0.5*m

    diff = abs(hour-minute)
    return min(diff,360-diff)`,

    c: `double angleClock(int h,int m){
    double minute = 6*m;
    double hour = (h%12)*30 + 0.5*m;

    double diff = fabs(hour-minute);
    return diff < 360-diff ? diff : 360-diff;
}`,

    cpp: `class Solution {
public:
  double angleClock(int h,int m){
    double minute = 6*m;
    double hour = (h%12)*30 + 0.5*m;

    double diff = fabs(hour-minute);
    return min(diff,360-diff);
  }
};`
  }
},
{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Integer Break',
  difficulty: 'Medium',
  description: `Break integer n into at least two positive integers to maximize product.`,
  inputExample: '10',
  outputExample: '36',
  explanation: `Optimal strategy: break into 3s greedily for max product.`,
  code: {
    java: `class Solution {
  public int integerBreak(int n){
    if(n <= 3) return n-1;

    int product = 1;

    while(n > 4){
      product *= 3;
      n -= 3;
    }

    return product * n;
  }
}`,

    python: `def integerBreak(n):
    if n<=3:
        return n-1

    res=1

    while n>4:
        res*=3
        n-=3

    return res*n`,

    c: `int integerBreak(int n){
    if(n<=3) return n-1;

    int res=1;

    while(n>4){
        res*=3;
        n-=3;
    }

    return res*n;
}`,

    cpp: `class Solution {
public:
  int integerBreak(int n){
    if(n<=3) return n-1;

    int res=1;

    while(n>4){
      res*=3;
      n-=3;
    }

    return res*n;
  }
};`
  }
},

// ===============================
// 2. VALID SQUARE
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Valid Square',
  difficulty: 'Medium',
  description: `Check if 4 points form a valid square.`,
  inputExample: '4 points coordinates',
  outputExample: 'true/false',
  explanation: `Compute all pair distances → check 4 equal sides + 2 equal diagonals.`,
  code: {
    java: `import java.util.*;

class Solution {
  public boolean validSquare(int[] p1,int[] p2,int[] p3,int[] p4){
    int[][] p = {p1,p2,p3,p4};
    List<Integer> dist = new ArrayList<>();

    for(int i=0;i<4;i++){
      for(int j=i+1;j<4;j++){
        int dx = p[i][0]-p[j][0];
        int dy = p[i][1]-p[j][1];
        dist.add(dx*dx + dy*dy);
      }
    }

    Collections.sort(dist);

    return dist.get(0)>0 &&
           dist.get(0).equals(dist.get(1)) &&
           dist.get(1).equals(dist.get(2)) &&
           dist.get(2).equals(dist.get(3)) &&
           dist.get(4).equals(dist.get(5));
  }
}`,

    python: `def validSquare(p1,p2,p3,p4):
    p=[p1,p2,p3,p4]
    dist=[]

    for i in range(4):
        for j in range(i+1,4):
            dx=p[i][0]-p[j][0]
            dy=p[i][1]-p[j][1]
            dist.append(dx*dx+dy*dy)

    dist.sort()

    return dist[0]>0 and \
           dist[0]==dist[1]==dist[2]==dist[3] and \
           dist[4]==dist[5]`,

    c: `// C version uses manual distance array + sorting logic`,

    cpp: `class Solution {
public:
  bool validSquare(vector<int>& p1,vector<int>& p2,
                   vector<int>& p3,vector<int>& p4){

    vector<vector<int>> p={p1,p2,p3,p4};
    vector<int> d;

    for(int i=0;i<4;i++){
      for(int j=i+1;j<4;j++){
        int dx=p[i][0]-p[j][0];
        int dy=p[i][1]-p[j][1];
        d.push_back(dx*dx+dy*dy);
      }
    }

    sort(d.begin(),d.end());

    return d[0]>0 &&
           d[0]==d[1] &&
           d[1]==d[2] &&
           d[2]==d[3] &&
           d[4]==d[5];
  }
};`
  }
},

// ===============================
// 3. THE KTH FACTOR OF N
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'The Kth Factor of n',
  difficulty: 'Medium',
  description: `Find kth smallest factor of n.`,
  inputExample: 'n=12, k=3',
  outputExample: '3',
  explanation: `Iterate up to sqrt(n), collect factors in order.`,
  code: {
    java: `import java.util.*;

class Solution {
  public int kthFactor(int n, int k){
    List<Integer> small = new ArrayList<>();
    List<Integer> large = new ArrayList<>();

    for(int i=1;i*i<=n;i++){
      if(n%i==0){
        small.add(i);

        if(i!=n/i)
          large.add(n/i);
      }
    }

    if(k<=small.size())
      return small.get(k-1);

    k -= small.size();
    return k<=large.size() ? large.get(large.size()-k) : -1;
  }
}`,

    python: `def kthFactor(n,k):
    small=[]
    large=[]

    i=1
    while i*i<=n:
        if n%i==0:
            small.append(i)
            if i!=n//i:
                large.append(n//i)
        i+=1

    if k<=len(small):
        return small[k-1]

    k-=len(small)
    return large[-k] if k<=len(large) else -1`,

    c: `// C version uses arrays for small/large factors`,

    cpp: `class Solution {
public:
  int kthFactor(int n,int k){
    vector<int> small, large;

    for(int i=1;i*i<=n;i++){
      if(n%i==0){
        small.push_back(i);
        if(i!=n/i)
          large.push_back(n/i);
      }
    }

    if(k<=small.size())
      return small[k-1];

    k-=small.size();
    return k<=large.size() ? large[large.size()-k] : -1;
  }
};`
  }
},
{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Basic Calculator',
  difficulty: 'Hard',
  description: `Evaluate a string expression with +, -, parentheses.`,
  inputExample: '"1 + (2 - 3) + 4"',
  outputExample: '4',
  explanation: `Use stack to handle sign and parentheses.`,
  code: {
    java: `import java.util.*;

class Solution {
  public int calculate(String s){
    Stack<Integer> st = new Stack<>();
    int res=0, sign=1, num=0;

    for(char c : s.toCharArray()){
      if(Character.isDigit(c)){
        num = num*10 + (c-'0');
      }
      else if(c=='+' || c=='-'){
        res += sign*num;
        num=0;
        sign = (c=='-') ? -1 : 1;
      }
      else if(c=='('){
        st.push(res);
        st.push(sign);
        res=0;
        sign=1;
      }
      else if(c==')'){
        res += sign*num;
        num=0;
        res *= st.pop();
        res += st.pop();
      }
    }

    return res + sign*num;
  }
}`,

    python: `def calculate(s):
    stack=[]
    res=0
    sign=1
    num=0

    for c in s:
        if c.isdigit():
            num = num*10 + int(c)

        elif c in "+-":
            res += sign*num
            num=0
            sign = 1 if c=='+' else -1

        elif c=='(':
            stack.append(res)
            stack.append(sign)
            res=0
            sign=1

        elif c==')':
            res += sign*num
            num=0
            res *= stack.pop()
            res += stack.pop()

    return res + sign*num`,

    c: `// C implementation requires manual stack handling`,
    
    cpp: `class Solution {
public:
  int calculate(string s){
    stack<int> st;
    int res=0, sign=1, num=0;

    for(char c:s){
      if(isdigit(c))
        num = num*10 + (c-'0');

      else if(c=='+' || c=='-'){
        res += sign*num;
        num=0;
        sign = (c=='-')?-1:1;
      }
      else if(c=='('){
        st.push(res);
        st.push(sign);
        res=0;
        sign=1;
      }
      else if(c==')'){
        res += sign*num;
        num=0;
        res *= st.top(); st.pop();
        res += st.top(); st.pop();
      }
    }

    return res + sign*num;
  }
};`
  }
},

// ===============================
// 2. MAX POINTS ON A LINE
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Max Points on a Line',
  difficulty: 'Hard',
  description: `Find maximum number of points lying on same straight line.`,
  inputExample: 'points[]',
  outputExample: 'max count',
  explanation: `Use slope hashing (dy/dx reduced form).`,
  code: {
    java: `import java.util.*;

class Solution {
  public int maxPoints(int[][] points){
    if(points.length <= 2) return points.length;

    int res=0;

    for(int i=0;i<points.length;i++){
      Map<String,Integer> map = new HashMap<>();
      int same=1, max=0;

      for(int j=i+1;j<points.length;j++){
        int dx = points[j][0]-points[i][0];
        int dy = points[j][1]-points[i][1];

        if(dx==0 && dy==0){
          same++;
          continue;
        }

        int g = gcd(dx,dy);
        dx/=g; dy/=g;

        String key = dx+"/"+dy;
        map.put(key, map.getOrDefault(key,0)+1);
        max = Math.max(max, map.get(key));
      }

      res = Math.max(res, max+same);
    }

    return res;
  }

  int gcd(int a,int b){
    return b==0?Math.abs(a):gcd(b,a%b);
  }
}`,

    python: `from collections import defaultdict
from math import gcd

def maxPoints(points):
    n=len(points)
    if n<=2:
        return n

    res=0

    for i in range(n):
        mp=defaultdict(int)
        same=1
        best=0

        for j in range(i+1,n):
            dx=points[j][0]-points[i][0]
            dy=points[j][1]-points[i][1]

            if dx==0 and dy==0:
                same+=1
                continue

            g=gcd(dx,dy)
            dx//=g
            dy//=g

            mp[(dx,dy)]+=1
            best=max(best,mp[(dx,dy)])

        res=max(res,best+same)

    return res`,

    c: `// C version uses struct + hash simulation`,
    
    cpp: `class Solution {
public:
  int maxPoints(vector<vector<int>>& p){
    int n=p.size();
    if(n<=2) return n;

    int res=0;

    for(int i=0;i<n;i++){
      map<pair<int,int>,int> mp;
      int same=1,best=0;

      for(int j=i+1;j<n;j++){
        int dx=p[j][0]-p[i][0];
        int dy=p[j][1]-p[i][1];

        if(dx==0 && dy==0){
          same++;
          continue;
        }

        int g=__gcd(dx,dy);
        dx/=g; dy/=g;

        mp[{dx,dy}]++;
        best=max(best,mp[{dx,dy}]);
      }

      res=max(res,best+same);
    }

    return res;
  }
};`
  }
},

// ===============================
// 3. PERMUTATION SEQUENCE
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Permutation Sequence',
  difficulty: 'Hard',
  description: `Find kth permutation of numbers 1 to n.`,
  inputExample: 'n=3, k=3',
  outputExample: '"213"',
  explanation: `Use factorial number system.`,
  code: {
    java: `import java.util.*;

class Solution {
  public String getPermutation(int n, int k){
    List<Integer> nums = new ArrayList<>();
    int fact = 1;

    for(int i=1;i<n;i++){
      fact *= i;
      nums.add(i);
    }
    nums.add(n);

    k--;

    StringBuilder sb = new StringBuilder();

    for(int i=n-1;i>=0;i--){
      int idx = k / fact;
      sb.append(nums.get(idx));
      nums.remove(idx);

      if(i>0){
        k %= fact;
        fact /= i;
      }
    }

    return sb.toString();
  }
}`,

    python: `import math

def getPermutation(n,k):
    nums=list(range(1,n+1))
    k-=1
    res=""

    fact=math.factorial(n-1)

    for i in range(n-1, -1, -1):
        idx = k//fact
        res += str(nums[idx])
        nums.pop(idx)

        if i>0:
            k %= fact
            fact//=i

    return res`,

    c: `// C version uses factorial + array shifting`,
    
    cpp: `class Solution {
public:
  string getPermutation(int n,int k){
    vector<int> nums;
    int fact=1;

    for(int i=1;i<n;i++){
      fact*=i;
      nums.push_back(i);
    }
    nums.push_back(n);

    k--;

    string res="";

    for(int i=n-1;i>=0;i--){
      int idx=k/fact;
      res+=to_string(nums[idx]);
      nums.erase(nums.begin()+idx);

      if(i>0){
        k%=fact;
        fact/=i;
      }
    }

    return res;
  }
};`
  }
},

// ===============================
// 4. NUMBER OF DIGIT ONE
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Number of Digit One',
  difficulty: 'Hard',
  description: `Count number of digit 1 appearing from 1 to n.`,
  inputExample: '13',
  outputExample: '6',
  explanation: `Count contribution of 1 at each digit place.`,
  code: {
    java: `class Solution {
  public int countDigitOne(int n){
    long factor = 1;
    int res = 0;

    while(factor <= n){
      long lower = n - (n/factor)*factor;
      long curr = (n/factor)%10;
      long higher = n/(factor*10);

      if(curr == 0)
        res += higher * factor;
      else if(curr == 1)
        res += higher*factor + lower + 1;
      else
        res += (higher+1)*factor;

      factor *= 10;
    }

    return res;
  }
}`,

    python: `def countDigitOne(n):
    factor=1
    res=0

    while factor<=n:
        lower=n%factor
        curr=(n//factor)%10
        higher=n//(factor*10)

        if curr==0:
            res+=higher*factor
        elif curr==1:
            res+=higher*factor + lower + 1
        else:
            res+=(higher+1)*factor

        factor*=10

    return res`,

    c: `// C version follows same digit DP logic`,
    
    cpp: `class Solution {
public:
  int countDigitOne(int n){
    long long factor=1;
    int res=0;

    while(factor<=n){
      long long lower=n%factor;
      long long curr=(n/factor)%10;
      long long higher=n/(factor*10);

      if(curr==0)
        res+=higher*factor;
      else if(curr==1)
        res+=higher*factor + lower + 1;
      else
        res+=(higher+1)*factor;

      factor*=10;
    }

    return res;
  }
};`
  }
},
{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Two Sum',
  difficulty: 'Easy',
  description: `Find indices of two numbers that add up to target.`,
  inputExample: '[2,7,11,15], target=9',
  outputExample: '[0,1]',
  explanation: `Use hashmap to store complement.`,
  code: {
    java: `import java.util.*;

class Solution {
  public int[] twoSum(int[] nums, int target){
    Map<Integer,Integer> map = new HashMap<>();

    for(int i=0;i<nums.length;i++){
      int need = target - nums[i];

      if(map.containsKey(need))
        return new int[]{map.get(need), i};

      map.put(nums[i], i);
    }

    return new int[]{};
  }
}`,

    python: `def twoSum(nums,target):
    mp={}

    for i,n in enumerate(nums):
        need=target-n

        if need in mp:
            return [mp[need],i]

        mp[n]=i`,

    c: `// C version uses struct or sorting + two pointers (not hashmap native)`,

    cpp: `class Solution {
public:
  vector<int> twoSum(vector<int>& nums,int target){
    unordered_map<int,int> mp;

    for(int i=0;i<nums.size();i++){
      int need=target-nums[i];

      if(mp.count(need))
        return {mp[need],i};

      mp[nums[i]]=i;
    }

    return {};
  }
};`
  }
},

// ===============================
// 2. PLUS ONE
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Plus One',
  difficulty: 'Easy',
  description: `Add 1 to a number represented as an array.`,
  inputExample: '[1,2,3]',
  outputExample: '[1,2,4]',
  explanation: `Add carry from rightmost digit.`,
  code: {
    java: `class Solution {
  public int[] plusOne(int[] digits){
    for(int i=digits.length-1;i>=0;i--){
      if(digits[i]<9){
        digits[i]++;
        return digits;
      }
      digits[i]=0;
    }

    int[] res = new int[digits.length+1];
    res[0]=1;
    return res;
  }
}`,

    python: `def plusOne(digits):
    for i in range(len(digits)-1,-1,-1):
        if digits[i]<9:
            digits[i]+=1
            return digits
        digits[i]=0

    return [1]+digits`,

    c: `// C version requires manual array handling`,

    cpp: `vector<int> plusOne(vector<int>& digits){
    for(int i=digits.size()-1;i>=0;i--){
        if(digits[i]<9){
            digits[i]++;
            return digits;
        }
        digits[i]=0;
    }

    digits.insert(digits.begin(),1);
    return digits;
}`
  }
},

// ===============================
// 3. SQUARE ROOT (x)
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Sqrt(x)',
  difficulty: 'Easy',
  description: `Find integer square root using binary search.`,
  inputExample: '8',
  outputExample: '2',
  explanation: `Binary search on answer space.`,
  code: {
    java: `class Solution {
  public int mySqrt(int x){
    long l=0, r=x, ans=0;

    while(l<=r){
      long mid=(l+r)/2;

      if(mid*mid<=x){
        ans=mid;
        l=mid+1;
      }else{
        r=mid-1;
      }
    }

    return (int)ans;
  }
}`,

    python: `def mySqrt(x):
    l,r=0,x
    ans=0

    while l<=r:
        mid=(l+r)//2

        if mid*mid<=x:
            ans=mid
            l=mid+1
        else:
            r=mid-1

    return ans`,

    c: `int mySqrt(int x){
    long l=0,r=x,ans=0;

    while(l<=r){
        long mid=(l+r)/2;

        if(mid*mid<=x){
            ans=mid;
            l=mid+1;
        }else{
            r=mid-1;
        }
    }

    return ans;
}`,

    cpp: `class Solution {
public:
  int mySqrt(int x){
    long long l=0,r=x,ans=0;

    while(l<=r){
      long long mid=(l+r)/2;

      if(mid*mid<=x){
        ans=mid;
        l=mid+1;
      }else{
        r=mid-1;
      }
    }

    return (int)ans;
  }
};`
  }
},

// ===============================
// 4. POW(x, n)
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Pow(x, n)',
  difficulty: 'Medium',
  description: `Compute x raised to power n efficiently.`,
  inputExample: '2, 10',
  outputExample: '1024',
  explanation: `Use fast exponentiation (binary exponentiation).`,
  code: {
    java: `class Solution {
  public double myPow(double x, int n){
    long N = n;
    if(N<0){
      x = 1/x;
      N = -N;
    }

    double res=1;

    while(N>0){
      if((N&1)==1)
        res *= x;

      x *= x;
      N >>= 1;
    }

    return res;
  }
}`,

    python: `def myPow(x,n):
    N=n
    if N<0:
        x=1/x
        N=-N

    res=1

    while N>0:
        if N%2:
            res*=x
        x*=x
        N//=2

    return res`,

    c: `double myPow(double x,int n){
    long N=n;
    if(N<0){
        x=1/x;
        N=-N;
    }

    double res=1;

    while(N){
        if(N&1) res*=x;
        x*=x;
        N>>=1;
    }

    return res;
}`,

    cpp: `class Solution {
public:
  double myPow(double x,int n){
    long long N=n;

    if(N<0){
      x=1/x;
      N=-N;
    }

    double res=1;

    while(N){
      if(N&1) res*=x;
      x*=x;
      N>>=1;
    }

    return res;
  }
};`
  }
},
{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Divide Two Integers',
  difficulty: 'Medium',
  description: `Divide two integers without using multiplication, division or mod.`,
  inputExample: '10, 3',
  outputExample: '3',
  explanation: `Use bit shifting for fast subtraction.`,
  code: {
    java: `class Solution {
  public int divide(int dividend, int divisor){
    if(dividend == Integer.MIN_VALUE && divisor == -1)
      return Integer.MAX_VALUE;

    long a = Math.abs((long)dividend);
    long b = Math.abs((long)divisor);
    int res = 0;

    while(a >= b){
      long temp = b, mult = 1;

      while(a >= (temp << 1)){
        temp <<= 1;
        mult <<= 1;
      }

      a -= temp;
      res += mult;
    }

    return (dividend>0 == divisor>0) ? res : -res;
  }
}`,

    python: `def divide(dividend, divisor):
    if dividend == -2**31 and divisor == -1:
        return 2**31-1

    a,b=abs(dividend),abs(divisor)
    res=0

    while a>=b:
        temp=b
        mult=1

        while a>=(temp<<1):
            temp<<=1
            mult<<=1

        a-=temp
        res+=mult

    return res if (dividend>0)==(divisor>0) else -res`,

    c: `// C version uses long long + bit shifting logic`,

    cpp: `class Solution {
public:
  int divide(int dividend,int divisor){
    if(dividend==INT_MIN && divisor==-1)
      return INT_MAX;

    long long a=abs((long long)dividend);
    long long b=abs((long long)divisor);
    long long res=0;

    while(a>=b){
      long long temp=b, mult=1;

      while(a>=(temp<<1)){
        temp<<=1;
        mult<<=1;
      }

      a-=temp;
      res+=mult;
    }

    return (dividend>0 == divisor>0) ? res : -res;
  }
};`
  }
},

// ===============================
// 2. ROMAN TO INTEGER
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Roman to Integer',
  difficulty: 'Easy',
  description: `Convert Roman numeral to integer.`,
  inputExample: '"MCMXCIV"',
  outputExample: '1994',
  explanation: `Add if previous >= current else subtract.`,
  code: {
    java: `import java.util.*;

class Solution {
  public int romanToInt(String s){
    Map<Character,Integer> map = new HashMap<>();
    map.put('I',1); map.put('V',5);
    map.put('X',10); map.put('L',50);
    map.put('C',100); map.put('D',500);
    map.put('M',1000);

    int res=0;

    for(int i=0;i<s.length();i++){
      int val = map.get(s.charAt(i));

      if(i+1<s.length() && val < map.get(s.charAt(i+1)))
        res -= val;
      else
        res += val;
    }

    return res;
  }
}`,

    python: `def romanToInt(s):
    mp={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    res=0

    for i in range(len(s)):
        if i+1<len(s) and mp[s[i]]<mp[s[i+1]]:
            res-=mp[s[i]]
        else:
            res+=mp[s[i]]

    return res`,

    c: `// C version uses switch-case mapping`,

    cpp: `class Solution {
public:
  int romanToInt(string s){
    unordered_map<char,int> mp={
      {'I',1},{'V',5},{'X',10},
      {'L',50},{'C',100},{'D',500},{'M',1000}
    };

    int res=0;

    for(int i=0;i<s.size();i++){
      if(i+1<s.size() && mp[s[i]]<mp[s[i+1]])
        res-=mp[s[i]];
      else
        res+=mp[s[i]];
    }

    return res;
  }
};`
  }
},

// ===============================
// 3. INTEGER TO ROMAN
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Integer to Roman',
  difficulty: 'Medium',
  description: `Convert integer to Roman numeral.`,
  inputExample: '1994',
  outputExample: '"MCMXCIV"',
  explanation: `Greedy subtraction using value-symbol pairs.`,
  code: {
    java: `class Solution {
  public String intToRoman(int num){
    int[] val = {1000,900,500,400,100,90,50,40,10,9,5,4,1};
    String[] sym = {"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};

    StringBuilder sb = new StringBuilder();

    for(int i=0;i<val.length;i++){
      while(num >= val[i]){
        num -= val[i];
        sb.append(sym[i]);
      }
    }

    return sb.toString();
  }
}`,

    python: `def intToRoman(num):
    val=[1000,900,500,400,100,90,50,40,10,9,5,4,1]
    sym=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

    res=""

    for i in range(len(val)):
        while num>=val[i]:
            num-=val[i]
            res+=sym[i]

    return res`,

    c: `// C version uses array of structs mapping values to symbols`,

    cpp: `class Solution {
public:
  string intToRoman(int num){
    vector<int> val={1000,900,500,400,100,90,50,40,10,9,5,4,1};
    vector<string> sym={"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};

    string res="";

    for(int i=0;i<val.size();i++){
      while(num>=val[i]){
        num-=val[i];
        res+=sym[i];
      }
    }

    return res;
  }
};`
  }
},

// ===============================
// 4. COUNT PRIMES
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Count Primes',
  difficulty: 'Medium',
  description: `Count number of primes less than n.`,
  inputExample: '10',
  outputExample: '4',
  explanation: `Sieve of Eratosthenes.`,
  code: {
    java: `class Solution {
  public int countPrimes(int n){
    if(n<=2) return 0;

    boolean[] prime = new boolean[n];
    for(int i=2;i<n;i++) prime[i]=true;

    for(int i=2;i*i<n;i++){
      if(prime[i]){
        for(int j=i*i;j<n;j+=i)
          prime[j]=false;
      }
    }

    int count=0;
    for(int i=2;i<n;i++)
      if(prime[i]) count++;

    return count;
  }
}`,

    python: `def countPrimes(n):
    if n<=2:
        return 0

    prime=[True]*n
    prime[0]=prime[1]=False

    i=2
    while i*i<n:
        if prime[i]:
            for j in range(i*i,n,i):
                prime[j]=False
        i+=1

    return sum(prime)`,

    c: `// C version uses boolean array sieve`,

    cpp: `class Solution {
public:
  int countPrimes(int n){
    if(n<=2) return 0;

    vector<bool> prime(n,true);
    prime[0]=prime[1]=false;

    for(int i=2;i*i<n;i++){
      if(prime[i]){
        for(int j=i*i;j<n;j+=i)
          prime[j]=false;
      }
    }

    return count(prime.begin(),prime.end(),true);
  }
};`
  }
},
{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Fizz Buzz',
  difficulty: 'Easy',
  description: `Print numbers from 1 to n with FizzBuzz rules.`,
  inputExample: '5',
  outputExample: '["1","2","Fizz","4","Buzz"]',
  explanation: `Replace multiples of 3 → Fizz, 5 → Buzz, both → FizzBuzz.`,
  code: {
    java: `import java.util.*;

class Solution {
  public List<String> fizzBuzz(int n){
    List<String> res = new ArrayList<>();

    for(int i=1;i<=n;i++){
      if(i%15==0) res.add("FizzBuzz");
      else if(i%3==0) res.add("Fizz");
      else if(i%5==0) res.add("Buzz");
      else res.add(String.valueOf(i));
    }

    return res;
  }
}`,

    python: `def fizzBuzz(n):
    res=[]

    for i in range(1,n+1):
        if i%15==0:
            res.append("FizzBuzz")
        elif i%3==0:
            res.append("Fizz")
        elif i%5==0:
            res.append("Buzz")
        else:
            res.append(str(i))

    return res`,

    c: `#include <stdio.h>

void fizzBuzz(int n){
    for(int i=1;i<=n;i++){
        if(i%15==0) printf("FizzBuzz\\n");
        else if(i%3==0) printf("Fizz\\n");
        else if(i%5==0) printf("Buzz\\n");
        else printf("%d\\n",i);
    }
}`,

    cpp: `class Solution {
public:
  vector<string> fizzBuzz(int n){
    vector<string> res;

    for(int i=1;i<=n;i++){
      if(i%15==0) res.push_back("FizzBuzz");
      else if(i%3==0) res.push_back("Fizz");
      else if(i%5==0) res.push_back("Buzz");
      else res.push_back(to_string(i));
    }

    return res;
  }
};`
  }
},

// ===============================
// 2. UGLY NUMBER
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Ugly Number',
  difficulty: 'Easy',
  description: `Check if number has only prime factors 2, 3, 5.`,
  inputExample: '6',
  outputExample: 'true',
  explanation: `Keep dividing by 2,3,5.`,
  code: {
    java: `class Solution {
  public boolean isUgly(int n){
    if(n<=0) return false;

    int[] primes = {2,3,5};

    for(int p:primes){
      while(n%p==0)
        n/=p;
    }

    return n==1;
  }
}`,

    python: `def isUgly(n):
    if n<=0:
        return False

    for p in [2,3,5]:
        while n%p==0:
            n//=p

    return n==1`,

    c: `int isUgly(int n){
    if(n<=0) return 0;

    int p[3]={2,3,5};

    for(int i=0;i<3;i++){
        while(n%p[i]==0)
            n/=p[i];
    }

    return n==1;
}`,

    cpp: `class Solution {
public:
  bool isUgly(int n){
    if(n<=0) return false;

    for(int p:{2,3,5}){
      while(n%p==0)
        n/=p;
    }

    return n==1;
  }
};`
  }
},

// ===============================
// 3. UGLY NUMBER II
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Ugly Number II',
  difficulty: 'Medium',
  description: `Find nth ugly number.`,
  inputExample: '10',
  outputExample: '12',
  explanation: `Use 3 pointers for 2,3,5 multiples.`,
  code: {
    java: `class Solution {
  public int nthUglyNumber(int n){
    int[] dp = new int[n];
    dp[0]=1;

    int i2=0,i3=0,i5=0;

    for(int i=1;i<n;i++){
      int a=dp[i2]*2;
      int b=dp[i3]*3;
      int c=dp[i5]*5;

      dp[i]=Math.min(a,Math.min(b,c));

      if(dp[i]==a) i2++;
      if(dp[i]==b) i3++;
      if(dp[i]==c) i5++;
    }

    return dp[n-1];
  }
}`,

    python: `def nthUglyNumber(n):
    dp=[1]*n
    i2=i3=i5=0

    for i in range(1,n):
        a,b,c=dp[i2]*2,dp[i3]*3,dp[i5]*5
        dp[i]=min(a,b,c)

        if dp[i]==a: i2+=1
        if dp[i]==b: i3+=1
        if dp[i]==c: i5+=1

    return dp[-1]`,

    c: `// C version uses dp array + pointers`,

    cpp: `class Solution {
public:
  int nthUglyNumber(int n){
    vector<int> dp(n,1);

    int i2=0,i3=0,i5=0;

    for(int i=1;i<n;i++){
      int a=dp[i2]*2;
      int b=dp[i3]*3;
      int c=dp[i5]*5;

      dp[i]=min(a,min(b,c));

      if(dp[i]==a) i2++;
      if(dp[i]==b) i3++;
      if(dp[i]==c) i5++;
    }

    return dp[n-1];
  }
};`
  }
},

// ===============================
// 4. SUPER UGLY NUMBER
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Super Ugly Number',
  difficulty: 'Medium',
  description: `Find nth number whose prime factors are given list.`,
  inputExample: 'n=12, primes=[2,7,13,19]',
  outputExample: '32',
  explanation: `Generalized ugly number using multiple pointers.`,
  code: {
    java: `import java.util.*;

class Solution {
  public int nthSuperUglyNumber(int n, int[] primes){
    int[] dp = new int[n];
    int k = primes.length;

    int[] idx = new int[k];
    int[] val = new int[k];

    Arrays.fill(val,1);
    dp[0]=1;

    for(int i=1;i<n;i++){
      int min=Integer.MAX_VALUE;

      for(int j=0;j<k;j++)
        min=Math.min(min, val[j]);

      dp[i]=min;

      for(int j=0;j<k;j++){
        if(val[j]==min){
          idx[j]++;
          val[j]=dp[idx[j]]*primes[j];
        }
      }
    }

    return dp[n-1];
  }
}`,

    python: `def nthSuperUglyNumber(n,primes):
    dp=[1]*n
    k=len(primes)

    idx=[0]*k
    val=[1]*k

    for i in range(1,n):
        mn=min(val)
        dp[i]=mn

        for j in range(k):
            if val[j]==mn:
                idx[j]+=1
                val[j]=dp[idx[j]]*primes[j]

    return dp[-1]`,

    c: `// C version uses arrays for dp, idx, val`,

    cpp: `class Solution {
public:
  int nthSuperUglyNumber(int n, vector<int>& primes){
    vector<int> dp(n,1);
    int k=primes.size();

    vector<int> idx(k,0), val(k,1);

    for(int i=1;i<n;i++){
      int mn=INT_MAX;

      for(int j=0;j<k;j++)
        mn=min(mn,val[j]);

      dp[i]=mn;

      for(int j=0;j<k;j++){
        if(val[j]==mn){
          idx[j]++;
          val[j]=dp[idx[j]]*primes[j];
        }
      }
    }

    return dp[n-1];
  }
};`
  }
},
{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Perfect Squares',
  difficulty: 'Medium',
  description: `Find minimum number of perfect squares that sum to n.`,
  inputExample: '12',
  outputExample: '3',
  explanation: `DP or BFS: build from square numbers.`,
  code: {
    java: `import java.util.*;

class Solution {
  public int numSquares(int n){
    int[] dp = new int[n+1];
    Arrays.fill(dp, Integer.MAX_VALUE);
    dp[0]=0;

    for(int i=1;i<=n;i++){
      for(int j=1;j*j<=i;j++){
        dp[i]=Math.min(dp[i], dp[i-j*j]+1);
      }
    }

    return dp[n];
  }
}`,

    python: `def numSquares(n):
    dp=[float('inf')]*(n+1)
    dp[0]=0

    for i in range(1,n+1):
        for j in range(1,int(i**0.5)+1):
            dp[i]=min(dp[i],dp[i-j*j]+1)

    return dp[n]`,

    c: `// C version uses DP array`,

    cpp: `class Solution {
public:
  int numSquares(int n){
    vector<int> dp(n+1,1e9);
    dp[0]=0;

    for(int i=1;i<=n;i++){
      for(int j=1;j*j<=i;j++){
        dp[i]=min(dp[i],dp[i-j*j]+1);
      }
    }

    return dp[n];
  }
};`
  }
},

// ===============================
// 2. TRAILING ZEROES IN FACTORIAL
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Trailing Zeroes in Factorial',
  difficulty: 'Easy',
  description: `Count trailing zeros in n!.`,
  inputExample: '10',
  outputExample: '2',
  explanation: `Count factors of 5 in factorial.`,
  code: {
    java: `class Solution {
  public int trailingZeroes(int n){
    int count=0;

    while(n>0){
      n/=5;
      count+=n;
    }

    return count;
  }
}`,

    python: `def trailingZeroes(n):
    count=0

    while n>0:
        n//=5
        count+=n

    return count`,

    c: `int trailingZeroes(int n){
    int count=0;

    while(n){
        n/=5;
        count+=n;
    }

    return count;
}`,

    cpp: `class Solution {
public:
  int trailingZeroes(int n){
    int count=0;

    while(n){
      n/=5;
      count+=n;
    }

    return count;
  }
};`
  }
},

// ===============================
// 3. EXCEL SHEET COLUMN NUMBER
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Excel Sheet Column Number',
  difficulty: 'Easy',
  description: `Convert Excel column title to number.`,
  inputExample: '"AB"',
  outputExample: '28',
  explanation: `Base-26 conversion.`,
  code: {
    java: `class Solution {
  public int titleToNumber(String s){
    int res=0;

    for(char c : s.toCharArray()){
      res = res*26 + (c-'A'+1);
    }

    return res;
  }
}`,

    python: `def titleToNumber(s):
    res=0

    for c in s:
        res = res*26 + (ord(c)-64)

    return res`,

    c: `int titleToNumber(char *s){
    int res=0;

    for(int i=0;s[i];i++){
        res = res*26 + (s[i]-'A'+1);
    }

    return res;
}`,

    cpp: `class Solution {
public:
  int titleToNumber(string s){
    int res=0;

    for(char c:s){
      res = res*26 + (c-'A'+1);
    }

    return res;
  }
};`
  }
},

// ===============================
// 4. FACTORIAL TRAILING ZEROES (DUPLICATE CORE CONCEPT)
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Factorial Trailing Zeroes (Alternative View)',
  difficulty: 'Easy',
  description: `Count trailing zeros in factorial using factor counting.`,
  inputExample: '25',
  outputExample: '6',
  explanation: `Each 5 contributes a zero; higher powers counted repeatedly.`,
  code: {
    java: `class Solution {
  public int trailingZeroes(int n){
    int res=0;

    for(long i=5;i<=n;i*=5){
      res += n/i;
    }

    return res;
  }
}`,

    python: `def trailingZeroes(n):
    res=0
    i=5

    while i<=n:
        res+=n//i
        i*=5

    return res`,

    c: `int trailingZeroes(int n){
    int res=0;

    for(long i=5;i<=n;i*=5){
        res+=n/i;
    }

    return res;
}`,

    cpp: `class Solution {
public:
  int trailingZeroes(int n){
    int res=0;

    for(long long i=5;i<=n;i*=5){
      res+=n/i;
    }

    return res;
  }
};`
  }
},
{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Evaluate Reverse Polish Notation',
  difficulty: 'Medium',
  description: `Evaluate expression given in postfix (RPN) form.`,
  inputExample: '["2","1","+","3","*"]',
  outputExample: '9',
  explanation: `Use stack; apply operators on last two operands.`,
  code: {
    java: `import java.util.*;

class Solution {
  public int evalRPN(String[] tokens){
    Stack<Integer> st = new Stack<>();

    for(String t : tokens){
      if(t.equals("+") || t.equals("-") || t.equals("*") || t.equals("/")){
        int b = st.pop();
        int a = st.pop();

        if(t.equals("+")) st.push(a+b);
        else if(t.equals("-")) st.push(a-b);
        else if(t.equals("*")) st.push(a*b);
        else st.push(a/b);
      } else {
        st.push(Integer.parseInt(t));
      }
    }

    return st.pop();
  }
}`,

    python: `def evalRPN(tokens):
    st=[]

    for t in tokens:
        if t in "+-*/":
            b=st.pop()
            a=st.pop()

            if t=="+": st.append(a+b)
            elif t=="-": st.append(a-b)
            elif t=="*": st.append(a*b)
            else: st.append(int(a/b))
        else:
            st.append(int(t))

    return st.pop()`,

    c: `// C version uses integer stack implementation`,

    cpp: `class Solution {
public:
  int evalRPN(vector<string>& tokens){
    stack<int> st;

    for(string t:tokens){
      if(t=="+"||t=="-"||t=="*"||t=="/"){
        int b=st.top(); st.pop();
        int a=st.top(); st.pop();

        if(t=="+") st.push(a+b);
        else if(t=="-") st.push(a-b);
        else if(t=="*") st.push(a*b);
        else st.push(a/b);
      } else {
        st.push(stoi(t));
      }
    }

    return st.top();
  }
};`
  }
},

// ===============================
// 2. BASIC CALCULATOR II
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Basic Calculator II',
  difficulty: 'Medium',
  description: `Evaluate expression with + - * / without parentheses.`,
  inputExample: '"3+2*2"',
  outputExample: '7',
  explanation: `Use stack to handle multiplication/division priority.`,
  code: {
    java: `import java.util.*;

class Solution {
  public int calculate(String s){
    Stack<Integer> st = new Stack<>();
    char sign='+';
    int num=0;

    for(int i=0;i<s.length();i++){
      char c=s.charAt(i);

      if(Character.isDigit(c))
        num = num*10 + (c-'0');

      if(!Character.isDigit(c) && c!=' ' || i==s.length()-1){
        if(sign=='+') st.push(num);
        else if(sign=='-') st.push(-num);
        else if(sign=='*') st.push(st.pop()*num);
        else if(sign=='/') st.push(st.pop()/num);

        sign=c;
        num=0;
      }
    }

    int res=0;
    for(int n:st) res+=n;
    return res;
  }
}`,

    python: `def calculate(s):
    st=[]
    num=0
    sign='+'

    for i,c in enumerate(s):
        if c.isdigit():
            num=num*10+int(c)

        if c in "+-*/" or i==len(s)-1:
            if sign=='+': st.append(num)
            elif sign=='-': st.append(-num)
            elif sign=='*': st[-1]*=num
            elif sign=='/': st[-1]=int(st[-1]/num)

            sign=c
            num=0

    return sum(st)`,

    c: `// C implementation uses stack simulation`,

    cpp: `class Solution {
public:
  int calculate(string s){
    stack<int> st;
    long num=0;
    char sign='+';

    for(int i=0;i<s.size();i++){
      char c=s[i];

      if(isdigit(c))
        num=num*10+(c-'0');

      if((!isdigit(c)&&c!=' ')||i==s.size()-1){
        if(sign=='+') st.push(num);
        else if(sign=='-') st.push(-num);
        else if(sign=='*'){ int t=st.top(); st.pop(); st.push(t*num); }
        else if(sign=='/'){ int t=st.top(); st.pop(); st.push(t/num); }

        sign=c;
        num=0;
      }
    }

    int res=0;
    while(!st.empty()){
      res+=st.top();
      st.pop();
    }

    return res;
  }
};`
  }
},

// ===============================
// 3. BASIC CALCULATOR III
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Basic Calculator III',
  difficulty: 'Hard',
  description: `Evaluate expression with + - * / and parentheses.`,
  inputExample: '"(2+3)*4"',
  outputExample: '20',
  explanation: `Use recursion + stack for nested expressions.`,
  code: {
    java: `import java.util.*;

class Solution {
  int i=0;

  public int calculate(String s){
    return helper(s);
  }

  int helper(String s){
    Stack<Integer> st = new Stack<>();
    char sign='+';
    int num=0;

    while(i<s.length()){
      char c=s.charAt(i++);

      if(Character.isDigit(c))
        num=num*10+(c-'0');

      if(c=='(')
        num = helper(s);

      if((!Character.isDigit(c)&&c!=' ')||i==s.length()){
        if(sign=='+') st.push(num);
        else if(sign=='-') st.push(-num);
        else if(sign=='*') st.push(st.pop()*num);
        else if(sign=='/') st.push(st.pop()/num);

        sign=c;
        num=0;
      }

      if(c==')') break;
    }

    int res=0;
    for(int n:st) res+=n;
    return res;
  }
}`,

    python: `def calculate(s):
    def helper():
        nonlocal i
        st=[]
        num=0
        sign='+'

        while i<len(s):
            c=s[i]; i+=1

            if c.isdigit():
                num=num*10+int(c)

            if c=='(':
                num=helper()

            if c in "+-*/)" or i==len(s):
                if sign=='+': st.append(num)
                elif sign=='-': st.append(-num)
                elif sign=='*': st[-1]*=num
                elif sign=='/': st[-1]=int(st[-1]/num)

                sign=c
                num=0

            if c==')':
                break

        return sum(st)

    i=0
    return helper()`,

    c: `// C version uses recursive parsing`,

    cpp: `class Solution {
public:
  int i=0;

  int calculate(string s){
    return helper(s);
  }

  int helper(string s){
    stack<int> st;
    long num=0;
    char sign='+';

    while(i<s.size()){
      char c=s[i++];

      if(isdigit(c))
        num=num*10+(c-'0');

      if(c=='(')
        num=helper(s);

      if((!isdigit(c)&&c!=' ')||i==s.size()){
        if(sign=='+') st.push(num);
        else if(sign=='-') st.push(-num);
        else if(sign=='*'){ int t=st.top(); st.pop(); st.push(t*num); }
        else if(sign=='/') { int t=st.top(); st.pop(); st.push(t/num); }

        sign=c;
        num=0;
      }

      if(c==')') break;
    }

    int res=0;
    while(!st.empty()){
      res+=st.top();
      st.pop();
    }

    return res;
  }
};`
  }
},
{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Climbing Stairs',
  difficulty: 'Easy',
  description: `Find number of ways to climb n stairs taking 1 or 2 steps.`,
  inputExample: '5',
  outputExample: '8',
  explanation: `Fibonacci DP: ways[i] = ways[i-1] + ways[i-2]`,
  code: {
    java: `class Solution {
  public int climbStairs(int n){
    if(n<=2) return n;

    int a=1,b=2;

    for(int i=3;i<=n;i++){
      int c=a+b;
      a=b;
      b=c;
    }

    return b;
  }
}`,

    python: `def climbStairs(n):
    if n<=2:
        return n

    a,b=1,2

    for i in range(3,n+1):
        a,b=b,a+b

    return b`,

    c: `int climbStairs(int n){
    if(n<=2) return n;

    int a=1,b=2;

    for(int i=3;i<=n;i++){
        int c=a+b;
        a=b;
        b=c;
    }

    return b;
}`,

    cpp: `class Solution {
public:
  int climbStairs(int n){
    if(n<=2) return n;

    int a=1,b=2;

    for(int i=3;i<=n;i++){
      int c=a+b;
      a=b;
      b=c;
    }

    return b;
  }
};`
  }
},

// ===============================
// 2. SUM OF SQUARE NUMBERS
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Sum of Square Numbers',
  difficulty: 'Medium',
  description: `Check if n can be expressed as a^2 + b^2.`,
  inputExample: '5',
  outputExample: 'true',
  explanation: `Two pointers from 0 to sqrt(n).`,
  code: {
    java: `class Solution {
  public boolean judgeSquareSum(int c){
    long l=0, r=(long)Math.sqrt(c);

    while(l<=r){
      long sum = l*l + r*r;

      if(sum == c) return true;
      else if(sum < c) l++;
      else r--;
    }

    return false;
  }
}`,

    python: `import math

def judgeSquareSum(c):
    l=0
    r=int(math.sqrt(c))

    while l<=r:
        s=l*l + r*r

        if s==c:
            return True
        elif s<c:
            l+=1
        else:
            r-=1

    return False`,

    c: `int judgeSquareSum(int c){
    long l=0, r=sqrt(c);

    while(l<=r){
        long sum=l*l + r*r;

        if(sum==c) return 1;
        else if(sum<c) l++;
        else r--;
    }

    return 0;
}`,

    cpp: `class Solution {
public:
  bool judgeSquareSum(int c){
    long l=0,r=sqrt(c);

    while(l<=r){
      long sum=l*l + r*r;

      if(sum==c) return true;
      else if(sum<c) l++;
      else r--;
    }

    return false;
  }
};`
  }
},

// ===============================
// 3. VALID PERFECT SQUARE
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Valid Perfect Square',
  difficulty: 'Easy',
  description: `Check if a number is a perfect square without sqrt().`,
  inputExample: '16',
  outputExample: 'true',
  explanation: `Binary search on answer space.`,
  code: {
    java: `class Solution {
  public boolean isPerfectSquare(int num){
    long l=1, r=num;

    while(l<=r){
      long mid=(l+r)/2;
      long sq=mid*mid;

      if(sq==num) return true;
      else if(sq<num) l=mid+1;
      else r=mid-1;
    }

    return false;
  }
}`,

    python: `def isPerfectSquare(num):
    l,r=1,num

    while l<=r:
        mid=(l+r)//2
        sq=mid*mid

        if sq==num:
            return True
        elif sq<num:
            l=mid+1
        else:
            r=mid-1

    return False`,

    c: `int isPerfectSquare(int num){
    long l=1,r=num;

    while(l<=r){
        long mid=(l+r)/2;
        long sq=mid*mid;

        if(sq==num) return 1;
        else if(sq<num) l=mid+1;
        else r=mid-1;
    }

    return 0;
}`,

    cpp: `class Solution {
public:
  bool isPerfectSquare(int num){
    long l=1,r=num;

    while(l<=r){
      long mid=(l+r)/2;
      long sq=mid*mid;

      if(sq==num) return true;
      else if(sq<num) l=mid+1;
      else r=mid-1;
    }

    return false;
  }
};`
  }
},
{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Water and Jug Problem',
  difficulty: 'Medium',
  description: `Check if we can measure exactly target using two jugs of given capacities.`,
  inputExample: 'jug1=3, jug2=5, target=4',
  outputExample: 'true',
  explanation: `Based on GCD: target must be multiple of gcd(jug1, jug2).`,
  code: {
    java: `class Solution {
  public boolean canMeasureWater(int x, int y, int target){
    if(target > x + y) return false;
    return target % gcd(x,y) == 0;
  }

  int gcd(int a,int b){
    if(b==0) return a;
    return gcd(b, a%b);
  }
}`,

    python: `import math

def canMeasureWater(x,y,target):
    if target > x+y:
        return False

    return target % math.gcd(x,y) == 0`,

    c: `int gcd(int a,int b){
    return b==0?a:gcd(b,a%b);
}

int canMeasureWater(int x,int y,int target){
    if(target > x+y) return 0;
    return target % gcd(x,y) == 0;
}`,

    cpp: `class Solution {
public:
  bool canMeasureWater(int x,int y,int target){
    if(target > x+y) return false;
    return target % gcd(x,y) == 0;
  }

  int gcd(int a,int b){
    return b==0?a:gcd(b,a%b);
  }
};`
  }
},

// ===============================
// 2. MULTIPLY STRINGS
// ===============================

{
  subject: 'Code',
  category: 'Mathematics',
  title: 'Multiply Strings',
  difficulty: 'Medium',
  description: `Multiply two large numbers given as strings.`,
  inputExample: '"123","456"',
  outputExample: '"56088"',
  explanation: `Simulate multiplication like manual school method.`,
  code: {
    java: `class Solution {
  public String multiply(String num1, String num2){
    int n=num1.length(), m=num2.length();
    int[] res = new int[n+m];

    for(int i=n-1;i>=0;i--){
      for(int j=m-1;j>=0;j--){
        int mul = (num1.charAt(i)-'0') * (num2.charAt(j)-'0');
        int sum = mul + res[i+j+1];

        res[i+j+1] = sum % 10;
        res[i+j] += sum / 10;
      }
    }

    StringBuilder sb = new StringBuilder();

    for(int num:res){
      if(!(sb.length()==0 && num==0))
        sb.append(num);
    }

    return sb.length()==0 ? "0" : sb.toString();
  }
}`,

    python: `def multiply(num1,num2):
    if num1=="0" or num2=="0":
        return "0"

    res=[0]*(len(num1)+len(num2))

    for i in range(len(num1)-1,-1,-1):
        for j in range(len(num2)-1,-1,-1):
            mul = int(num1[i])*int(num2[j])
            s = mul + res[i+j+1]

            res[i+j+1]=s%10
            res[i+j]+=s//10

    result=""
    for num in res:
        if not (len(result)==0 and num==0):
            result+=str(num)

    return result if result else "0"`,

    c: `// C implementation uses char array arithmetic`,

    cpp: `class Solution {
public:
  string multiply(string num1,string num2){
    int n=num1.size(), m=num2.size();
    vector<int> res(n+m,0);

    for(int i=n-1;i>=0;i--){
      for(int j=m-1;j>=0;j--){
        int mul=(num1[i]-'0')*(num2[j]-'0');
        int sum=mul+res[i+j+1];

        res[i+j+1]=sum%10;
        res[i+j]+=sum/10;
      }
    }

    string s="";
    for(int num:res){
      if(!(s.empty() && num==0))
        s.push_back(num+'0');
    }

    return s.empty() ? "0" : s;
  }
};`
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
        console.log(`Successfully processed ${problems.length} problems for Mathematics`)
        
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