import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'

const problems = [
{
    subject: 'Code',
    category: 'Strings',
    title: 'Reverse a String',
    difficulty: 'Easy',
    description:
      'Given a string S, reverse it and return the reversed string. For example, "hello" becomes "olleh".',
    inputExample: 'S = "hello"',
    outputExample: '"olleh"',
    explanation:
      'We use a two-pointer technique: swap characters from both ends moving towards the center. This runs in O(N) time and O(1) extra space (in-place for mutable representations).',
    code: {
      java: `public class ReverseString {
    public static String reverse(String s) {
        char[] chars = s.toCharArray();
        int left = 0, right = chars.length - 1;

        while (left < right) {
            char temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            left++;
            right--;
        }
        return new String(chars);
    }

    public static void main(String[] args) {
        System.out.println(reverse("hello")); // olleh
    }
}`,
      python: `def reverse_string(s):
    chars = list(s)
    left, right = 0, len(chars) - 1

    while left < right:
        chars[left], chars[right] = chars[right], chars[left]
        left += 1
        right -= 1

    return ''.join(chars)

print(reverse_string("hello"))  # olleh`,
      c: `#include <stdio.h>
#include <string.h>

void reverseString(char* s) {
    int left = 0;
    int right = strlen(s) - 1;

    while (left < right) {
        char temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
}

int main() {
    char s[] = "hello";
    reverseString(s);
    printf("%s\\n", s); // olleh
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

string reverseString(string s) {
    int left = 0, right = s.length() - 1;

    while (left < right) {
        swap(s[left], s[right]);
        left++;
        right--;
    }
    return s;
}

int main() {
    cout << reverseString("hello") << endl; // olleh
    return 0;
}`,
    },
  },
{
    subject: 'Code',
    category: 'Strings',
    title: 'Check Palindrome',
    difficulty: 'Easy',
    description:
      'Given a string S, check whether it is a palindrome. A palindrome reads the same forwards and backwards. Ignore case during comparison.',
    inputExample: 'S = "Racecar"',
    outputExample: 'true',
    explanation:
      'Converting to lowercase: "racecar". Comparing from both ends: r==r, a==a, c==c, e (middle). All characters match, so it is a palindrome.',
    code: {
      java: `public class Palindrome {
    public static boolean isPalindrome(String s) {
        s = s.toLowerCase();
        int left = 0, right = s.length() - 1;

        while (left < right) {
            if (s.charAt(left) != s.charAt(right))
                return false;
            left++;
            right--;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("Racecar")); // true
    }
}`,
      python: `def is_palindrome(s):
    s = s.lower()
    left, right = 0, len(s) - 1

    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

print(is_palindrome("Racecar"))  # True`,
      c: `#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdbool.h>

bool isPalindrome(const char* s) {
    int left = 0;
    int right = strlen(s) - 1;

    while (left < right) {
        if (tolower(s[left]) != tolower(s[right]))
            return false;
        left++;
        right--;
    }
    return true;
}

int main() {
    printf("%s\\n", isPalindrome("Racecar") ? "true" : "false");
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

bool isPalindrome(string s) {
    transform(s.begin(), s.end(), s.begin(), ::tolower);
    int left = 0, right = s.length() - 1;

    while (left < right) {
        if (s[left] != s[right])
            return false;
        left++;
        right--;
    }
    return true;
}

int main() {
    cout << boolalpha << isPalindrome("Racecar") << endl; // true
    return 0;
}`,
    },
  },
{
    subject: 'Code',
    category: 'Strings',
    title: 'Longest Common Prefix',
    difficulty: 'Medium',
    description:
      'Given an array of strings, find the longest common prefix among all the strings. If there is no common prefix, return an empty string.',
    inputExample: 'strs = ["flower", "flow", "flight"]',
    outputExample: '"fl"',
    explanation:
      'Comparing character by character: index 0 → all have "f", index 1 → all have "l", index 2 → "o" vs "o" vs "i" — mismatch. The longest common prefix is "fl".',
    code: {
      java: `public class LongestPrefix {
    public static String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) return "";

        String prefix = strs[0];
        for (int i = 1; i < strs.length; i++) {
            while (strs[i].indexOf(prefix) != 0) {
                prefix = prefix.substring(0, prefix.length() - 1);
                if (prefix.isEmpty()) return "";
            }
        }
        return prefix;
    }

    public static void main(String[] args) {
        String[] strs = {"flower", "flow", "flight"};
        System.out.println(longestCommonPrefix(strs)); // fl
    }
}`,
      python: `def longest_common_prefix(strs):
    if not strs:
        return ""

    prefix = strs[0]
    for s in strs[1:]:
        while not s.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix:
                return ""
    return prefix

print(longest_common_prefix(["flower", "flow", "flight"]))  # fl`,
      c: `#include <stdio.h>
#include <string.h>

void longestCommonPrefix(char* strs[], int n, char* result) {
    if (n == 0) { result[0] = '\\0'; return; }

    strcpy(result, strs[0]);

    for (int i = 1; i < n; i++) {
        int j = 0;
        while (result[j] && strs[i][j] && result[j] == strs[i][j])
            j++;
        result[j] = '\\0';
        if (j == 0) return;
    }
}

int main() {
    char* strs[] = {"flower", "flow", "flight"};
    char result[100];
    longestCommonPrefix(strs, 3, result);
    printf("%s\\n", result); // fl
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

string longestCommonPrefix(vector<string>& strs) {
    if (strs.empty()) return "";

    string prefix = strs[0];
    for (int i = 1; i < strs.size(); i++) {
        while (strs[i].find(prefix) != 0) {
            prefix = prefix.substr(0, prefix.length() - 1);
            if (prefix.empty()) return "";
        }
    }
    return prefix;
}

int main() {
    vector<string> strs = {"flower", "flow", "flight"};
    cout << longestCommonPrefix(strs) << endl; // fl
    return 0;
}`,
    },
  },
  {
    subject: 'Code',
    category: 'Strings',
    title: 'Rearrange Characters (No Adjacent Same)',
    difficulty: 'Medium',
    description: `Rearrange string so no adjacent characters are same.`,
    inputExample: '"aaabc"',
    outputExample: '"abaca"',
    explanation: `Use max heap.`,
    code: {
      java: `// Use PriorityQueue`,
      python: `# Use heapq`,
      c: `// complex`,
      cpp: `// priority_queue`
    }
  },
    {
    subject: 'Code',
    category: 'Strings',
    title: 'Print All Duplicates in a String',
    difficulty: 'Easy',
    description: `Print characters with frequency > 1.`,
    inputExample: 'programming',
    outputExample: 'r g m',
    explanation: `Use frequency array / map.`,
    code: {
      java: `class Main{
  static void duplicates(String s){
    int[] freq=new int[256];

    for(char c:s.toCharArray())
      freq[c]++;

    for(int i=0;i<256;i++){
      if(freq[i]>1)
        System.out.print((char)i+" ");
    }
  }
}`,

      python: `def duplicates(s):
    from collections import Counter
    freq=Counter(s)

    for k,v in freq.items():
        if v>1:
            print(k,end=" ")`,

      c: `// freq array`,
      cpp: `void duplicates(string s){
    vector<int> freq(256,0);

    for(char c:s) freq[c]++;

    for(int i=0;i<256;i++){
        if(freq[i]>1)
            cout<<(char)i<<" ";
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Check if Strings are Rotations',
    difficulty: 'Easy',
    description: `Check if s2 is rotation of s1.`,
    inputExample: 'ABCD, CDAB',
    outputExample: 'true',
    explanation: `Check if s2 is substring of s1+s1.`,
    code: {
      java: `class Main{
  static boolean isRotation(String s1,String s2){
    if(s1.length()!=s2.length()) return false;

    String temp=s1+s1;
    return temp.contains(s2);
  }
}`,

      python: `def isRotation(s1,s2):
    if len(s1)!=len(s2):
        return False

    return s2 in (s1+s1)`,

      c: `// concat trick`,
      cpp: `bool isRotation(string s1,string s2){
    if(s1.length()!=s2.length()) return false;

    string temp=s1+s1;
    return temp.find(s2)!=string::npos;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Longest Palindromic Substring',
    difficulty: 'Medium',
    description: `Find longest palindrome substring.`,
    inputExample: 'babad',
    outputExample: 'bab or aba',
    explanation: `Expand around center.`,
    code: {
      java: `class Main{
  static String longestPal(String s){
    int start=0,max=1;

    for(int i=0;i<s.length();i++){
      // odd
      int l=i,r=i;
      while(l>=0 && r<s.length() && s.charAt(l)==s.charAt(r)){
        if(r-l+1>max){
          start=l; max=r-l+1;
        }
        l--; r++;
      }

      // even
      l=i; r=i+1;
      while(l>=0 && r<s.length() && s.charAt(l)==s.charAt(r)){
        if(r-l+1>max){
          start=l; max=r-l+1;
        }
        l--; r++;
      }
    }
    return s.substring(start,start+max);
  }
}`,

      python: `def longestPal(s):
    start=0
    maxlen=1

    for i in range(len(s)):
        # odd
        l=r=i
        while l>=0 and r<len(s) and s[l]==s[r]:
            if r-l+1>maxlen:
                start=l; maxlen=r-l+1
            l-=1; r+=1

        # even
        l=i; r=i+1
        while l>=0 and r<len(s) and s[l]==s[r]:
            if r-l+1>maxlen:
                start=l; maxlen=r-l+1
            l-=1; r+=1

    return s[start:start+maxlen]`,

      c: `// expand center`,
      cpp: `string longestPal(string s){
    int start=0,maxlen=1;

    for(int i=0;i<s.size();i++){
        int l=i,r=i;
        while(l>=0 && r<s.size() && s[l]==s[r]){
            if(r-l+1>maxlen){
                start=l; maxlen=r-l+1;
            }
            l--; r++;
        }

        l=i; r=i+1;
        while(l>=0 && r<s.size() && s[l]==s[r]){
            if(r-l+1>maxlen){
                start=l; maxlen=r-l+1;
            }
            l--; r++;
        }
    }
    return s.substr(start,maxlen);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Longest Repeating Subsequence',
    difficulty: 'Medium',
    description: `Find longest subsequence repeating twice.`,
    inputExample: 'aabb',
    outputExample: 'ab',
    explanation: `LCS with same string but i != j.`,
    code: {
      java: `class Main{
  static int lrs(String s){
    int n=s.length();
    int[][] dp=new int[n+1][n+1];

    for(int i=1;i<=n;i++){
      for(int j=1;j<=n;j++){
        if(s.charAt(i-1)==s.charAt(j-1) && i!=j)
          dp[i][j]=1+dp[i-1][j-1];
        else
          dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
      }
    }
    return dp[n][n];
  }
}`,

      python: `def lrs(s):
    n=len(s)
    dp=[[0]*(n+1) for _ in range(n+1)]

    for i in range(1,n+1):
        for j in range(1,n+1):
            if s[i-1]==s[j-1] and i!=j:
                dp[i][j]=1+dp[i-1][j-1]
            else:
                dp[i][j]=max(dp[i-1][j],dp[i][j-1])

    return dp[n][n]`,

      c: `// dp`,
      cpp: `int lrs(string s){
    int n=s.size();
    vector<vector<int>> dp(n+1,vector<int>(n+1,0));

    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if(s[i-1]==s[j-1] && i!=j)
                dp[i][j]=1+dp[i-1][j-1];
            else
                dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
        }
    }
    return dp[n][n];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Print All Subsequences of String',
    difficulty: 'Easy',
    description: `Generate all subsequences.`,
    inputExample: 'abc',
    outputExample: 'a b c ab ac bc abc',
    explanation: `Recursion: include/exclude.`,
    code: {
      java: `class Main{
  static void subseq(String s,String ans,int i){
    if(i==s.length()){
      System.out.print(ans+" ");
      return;
    }

    subseq(s,ans+s.charAt(i),i+1);
    subseq(s,ans,i+1);
  }
}`,

      python: `def subseq(s,ans,i):
    if i==len(s):
        print(ans,end=" ")
        return

    subseq(s,ans+s[i],i+1)
    subseq(s,ans,i+1)`,

      c: `// recursion`,
      cpp: `void subseq(string s,string ans,int i){
    if(i==s.size()){
        cout<<ans<<" ";
        return;
    }

    subseq(s,ans+s[i],i+1);
    subseq(s,ans,i+1);
}`
    }
  },
   {
    subject: 'Code',
    category: 'Strings',
    title: 'Permutations of a String',
    difficulty: 'Medium',
    description: `Generate all permutations.`,
    inputExample: 'abc',
    outputExample: 'abc acb bac bca cab cba',
    explanation: `Backtracking with swapping.`,
    code: {
      java: `class Main{
  static void permute(char[] s,int i){
    if(i==s.length){
      System.out.println(new String(s));
      return;
    }

    for(int j=i;j<s.length;j++){
      swap(s,i,j);
      permute(s,i+1);
      swap(s,i,j);
    }
  }

  static void swap(char[] s,int i,int j){
    char t=s[i]; s[i]=s[j]; s[j]=t;
  }
}`,

      python: `def permute(s,i):
    if i==len(s):
        print("".join(s))
        return

    for j in range(i,len(s)):
        s[i],s[j]=s[j],s[i]
        permute(s,i+1)
        s[i],s[j]=s[j],s[i]`,

      c: `// backtracking`,
      cpp: `void permute(string &s,int i){
    if(i==s.size()){
        cout<<s<<endl;
        return;
    }

    for(int j=i;j<s.size();j++){
        swap(s[i],s[j]);
        permute(s,i+1);
        swap(s[i],s[j]);
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Split Binary String into Equal 0s and 1s',
    difficulty: 'Easy',
    description: `Max number of substrings with equal 0 and 1.`,
    inputExample: '0100110101',
    outputExample: '4',
    explanation: `Count balance of 0 and 1.`,
    code: {
      java: `class Main{
  static int split(String s){
    int c0=0,c1=0,count=0;

    for(char c:s.toCharArray()){
      if(c=='0') c0++;
      else c1++;

      if(c0==c1){
        count++;
      }
    }
    return (c0==c1)?count:-1;
  }
}`,

      python: `def split(s):
    c0=c1=count=0

    for c in s:
        if c=='0': c0+=1
        else: c1+=1

        if c0==c1:
            count+=1

    return count if c0==c1 else -1`,

      c: `// balance`,
      cpp: `int split(string s){
    int c0=0,c1=0,count=0;

    for(char c:s){
        if(c=='0') c0++;
        else c1++;

        if(c0==c1) count++;
    }
    return (c0==c1)?count:-1;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Word Wrap Problem',
    difficulty: 'Hard',
    description: `Minimize extra spaces cost.`,
    inputExample: 'words[], width',
    outputExample: 'min cost',
    explanation: `DP solution.`,
    code: {
      java: `class Main{
  static int wordWrap(int[] nums,int k){
    int n=nums.length;
    int[] dp=new int[n+1];

    Arrays.fill(dp,Integer.MAX_VALUE);
    dp[n]=0;

    for(int i=n-1;i>=0;i--){
      int len=-1;

      for(int j=i;j<n;j++){
        len+=nums[j]+1;

        if(len>k) break;

        int cost = (j==n-1)?0:(k-len)*(k-len) + dp[j+1];
        dp[i]=Math.min(dp[i],cost);
      }
    }
    return dp[0];
  }
}`,

      python: `def wordWrap(nums,k):
    n=len(nums)
    dp=[float('inf')]*(n+1)
    dp[n]=0

    for i in range(n-1,-1,-1):
        length=-1
        for j in range(i,n):
            length+=nums[j]+1
            if length>k:
                break

            cost = 0 if j==n-1 else (k-length)**2 + dp[j+1]
            dp[i]=min(dp[i],cost)

    return dp[0]`,

      c: `// dp`,
      cpp: `int wordWrap(vector<int>& nums,int k){
    int n=nums.size();
    vector<int> dp(n+1,INT_MAX);
    dp[n]=0;

    for(int i=n-1;i>=0;i--){
        int len=-1;

        for(int j=i;j<n;j++){
            len+=nums[j]+1;

            if(len>k) break;

            int cost=(j==n-1)?0:(k-len)*(k-len)+dp[j+1];
            dp[i]=min(dp[i],cost);
        }
    }
    return dp[0];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Edit Distance',
    difficulty: 'Medium',
    description: `Min operations to convert s1 → s2.`,
    inputExample: 'horse, ros',
    outputExample: '3',
    explanation: `Insert, delete, replace.`,
    code: {
      java: `class Main{
  static int edit(String a,String b){
    int n=a.length(), m=b.length();
    int[][] dp=new int[n+1][m+1];

    for(int i=0;i<=n;i++){
      for(int j=0;j<=m;j++){
        if(i==0) dp[i][j]=j;
        else if(j==0) dp[i][j]=i;
        else if(a.charAt(i-1)==b.charAt(j-1))
          dp[i][j]=dp[i-1][j-1];
        else
          dp[i][j]=1+Math.min(dp[i-1][j-1],
                   Math.min(dp[i-1][j],dp[i][j-1]));
      }
    }
    return dp[n][m];
  }
}`,

      python: `def edit(a,b):
    n,m=len(a),len(b)
    dp=[[0]*(m+1) for _ in range(n+1)]

    for i in range(n+1):
        for j in range(m+1):
            if i==0:
                dp[i][j]=j
            elif j==0:
                dp[i][j]=i
            elif a[i-1]==b[j-1]:
                dp[i][j]=dp[i-1][j-1]
            else:
                dp[i][j]=1+min(
                    dp[i-1][j-1],
                    dp[i-1][j],
                    dp[i][j-1]
                )
    return dp[n][m]`,

      c: `// dp`,
      cpp: `int edit(string a,string b){
    int n=a.size(), m=b.size();
    vector<vector<int>> dp(n+1,vector<int>(m+1));

    for(int i=0;i<=n;i++){
        for(int j=0;j<=m;j++){
            if(i==0) dp[i][j]=j;
            else if(j==0) dp[i][j]=i;
            else if(a[i-1]==b[j-1])
                dp[i][j]=dp[i-1][j-1];
            else
                dp[i][j]=1+min({dp[i-1][j-1],
                                dp[i-1][j],
                                dp[i][j-1]});
        }
    }
    return dp[n][m];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Next Permutation',
    difficulty: 'Medium',
    description: `Next lexicographical permutation.`,
    inputExample: '[1,2,3]',
    outputExample: '[1,3,2]',
    explanation: `Find dip → swap → reverse.`,
    code: {
      java: `class Main{
  static void nextPerm(int[] arr){
    int i=arr.length-2;

    while(i>=0 && arr[i]>=arr[i+1]) i--;

    if(i>=0){
      int j=arr.length-1;
      while(arr[j]<=arr[i]) j--;

      int temp=arr[i];
      arr[i]=arr[j];
      arr[j]=temp;
    }

    reverse(arr,i+1,arr.length-1);
  }
}`,

      python: `def nextPerm(arr):
    i=len(arr)-2

    while i>=0 and arr[i]>=arr[i+1]:
        i-=1

    if i>=0:
        j=len(arr)-1
        while arr[j]<=arr[i]:
            j-=1
        arr[i],arr[j]=arr[j],arr[i]

    arr[i+1:]=reversed(arr[i+1:])`,

      c: `// next permutation`,
      cpp: `void nextPerm(vector<int>& arr){
    int i=arr.size()-2;

    while(i>=0 && arr[i]>=arr[i+1]) i--;

    if(i>=0){
        int j=arr.size()-1;
        while(arr[j]<=arr[i]) j--;
        swap(arr[i],arr[j]);
    }

    reverse(arr.begin()+i+1,arr.end());
}`
    }
  },
   {
    subject: 'Code',
    category: 'Strings',
    title: 'Parenthesis Checker',
    difficulty: 'Easy',
    description: `Check if brackets are balanced.`,
    inputExample: '{[()]}',
    outputExample: 'true',
    explanation: `Use stack.`,
    code: {
      java: `class Main{
  static boolean check(String s){
    Stack<Character> st=new Stack<>();

    for(char c:s.toCharArray()){
      if(c=='('||c=='{'||c=='[')
        st.push(c);
      else{
        if(st.isEmpty()) return false;

        char top=st.pop();
        if((c==')' && top!='(') ||
           (c=='}' && top!='{') ||
           (c==']' && top!='['))
          return false;
      }
    }
    return st.isEmpty();
  }
}`,

      python: `def check(s):
    stack=[]

    for c in s:
        if c in "({[":
            stack.append(c)
        else:
            if not stack:
                return False

            top=stack.pop()
            if (c==')' and top!='(') or \\
               (c=='}' and top!='{') or \\
               (c==']' and top!='['):
                return False

    return len(stack)==0`,

      c: `// stack`,
      cpp: `bool check(string s){
    stack<char> st;

    for(char c:s){
        if(c=='('||c=='{'||c=='[')
            st.push(c);
        else{
            if(st.empty()) return false;

            char top=st.top(); st.pop();

            if((c==')' && top!='(') ||
               (c=='}' && top!='{') ||
               (c==']' && top!='['))
                return false;
        }
    }
    return st.empty();
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Word Break',
    difficulty: 'Medium',
    description: `Check if string can be segmented.`,
    inputExample: 'leetcode, [leet, code]',
    outputExample: 'true',
    explanation: `DP on string.`,
    code: {
      java: `class Main{
  static boolean wordBreak(String s,Set<String> dict){
    boolean[] dp=new boolean[s.length()+1];
    dp[0]=true;

    for(int i=1;i<=s.length();i++){
      for(int j=0;j<i;j++){
        if(dp[j] && dict.contains(s.substring(j,i))){
          dp[i]=true;
          break;
        }
      }
    }
    return dp[s.length()];
  }
}`,

      python: `def wordBreak(s,wordDict):
    dp=[False]*(len(s)+1)
    dp[0]=True

    for i in range(1,len(s)+1):
        for j in range(i):
            if dp[j] and s[j:i] in wordDict:
                dp[i]=True
                break

    return dp[len(s)]`,

      c: `// dp`,
      cpp: `bool wordBreak(string s,unordered_set<string>& dict){
    vector<bool> dp(s.size()+1,false);
    dp[0]=true;

    for(int i=1;i<=s.size();i++){
        for(int j=0;j<i;j++){
            if(dp[j] && dict.count(s.substr(j,i-j))){
                dp[i]=true;
                break;
            }
        }
    }
    return dp[s.size()];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Rabin-Karp Pattern Searching',
    difficulty: 'Medium',
    description: `Search pattern using rolling hash.`,
    inputExample: 'text, pattern',
    outputExample: 'index positions',
    explanation: `Hash comparison + sliding window.`,
    code: {
      java: `class Main{
  static void search(String txt,String pat){
    int d=256, q=101;
    int m=pat.length(), n=txt.length();
    int p=0,t=0,h=1;

    for(int i=0;i<m-1;i++)
      h=(h*d)%q;

    for(int i=0;i<m;i++){
      p=(d*p+pat.charAt(i))%q;
      t=(d*t+txt.charAt(i))%q;
    }

    for(int i=0;i<=n-m;i++){
      if(p==t){
        if(txt.substring(i,i+m).equals(pat))
          System.out.println(i);
      }

      if(i<n-m){
        t=(d*(t-txt.charAt(i)*h)+txt.charAt(i+m))%q;
        if(t<0) t+=q;
      }
    }
  }
}`,

      python: `def rabinKarp(txt,pat):
    d=256
    q=101
    m=len(pat)
    n=len(txt)
    h=pow(d,m-1)%q

    p=t=0

    for i in range(m):
        p=(d*p+ord(pat[i]))%q
        t=(d*t+ord(txt[i]))%q

    for i in range(n-m+1):
        if p==t:
            if txt[i:i+m]==pat:
                print(i)

        if i<n-m:
            t=(d*(t-ord(txt[i])*h)+ord(txt[i+m]))%q
            if t<0:
                t+=q`,

      c: `// rolling hash`,
      cpp: `void rabinKarp(string txt,string pat){
    int d=256,q=101;
    int m=pat.size(), n=txt.size();
    int p=0,t=0,h=1;

    for(int i=0;i<m-1;i++)
        h=(h*d)%q;

    for(int i=0;i<m;i++){
        p=(d*p+pat[i])%q;
        t=(d*t+txt[i])%q;
    }

    for(int i=0;i<=n-m;i++){
        if(p==t){
            if(txt.substr(i,m)==pat)
                cout<<i<<" ";
        }

        if(i<n-m){
            t=(d*(t-txt[i]*h)+txt[i+m])%q;
            if(t<0) t+=q;
        }
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Longest Prefix Suffix (LPS)',
    difficulty: 'Medium',
    description: `Find longest prefix which is also suffix.`,
    inputExample: 'abab',
    outputExample: '2',
    explanation: `Used in KMP.`,
    code: {
      java: `class Main{
  static int lps(String s){
    int n=s.length();
    int[] lps=new int[n];
    int len=0,i=1;

    while(i<n){
      if(s.charAt(i)==s.charAt(len)){
        len++;
        lps[i]=len;
        i++;
      }else{
        if(len!=0)
          len=lps[len-1];
        else{
          lps[i]=0;
          i++;
        }
      }
    }
    return lps[n-1];
  }
}`,

      python: `def lps(s):
    n=len(s)
    lps=[0]*n
    length=0
    i=1

    while i<n:
        if s[i]==s[length]:
            length+=1
            lps[i]=length
            i+=1
        else:
            if length!=0:
                length=lps[length-1]
            else:
                lps[i]=0
                i+=1

    return lps[-1]`,

      c: `// prefix suffix`,
      cpp: `int lps(string s){
    int n=s.size();
    vector<int> lps(n,0);

    int len=0,i=1;

    while(i<n){
        if(s[i]==s[len]){
            len++;
            lps[i]=len;
            i++;
        }else{
            if(len!=0)
                len=lps[len-1];
            else{
                lps[i]=0;
                i++;
            }
        }
    }
    return lps[n-1];
}`
    }
  },
   {
    subject: 'Code',
    category: 'Strings',
    title: 'Convert Sentence to Mobile Numeric Keypad Sequence',
    difficulty: 'Easy',
    description: `Map characters to old mobile keypad numbers.`,
    inputExample: 'HELLO',
    outputExample: '4433555555666',
    explanation: `Use mapping array.`,
    code: {
      java: `class Main{
  static void convert(String s){
    String[] keys={
      "2","22","222","3","33","333",
      "4","44","444","5","55","555",
      "6","66","666","7","77","777","7777",
      "8","88","888","9","99","999","9999"
    };

    for(char c:s.toCharArray()){
      if(c==' ') System.out.print("0");
      else System.out.print(keys[c-'A']);
    }
  }
}`,

      python: `def convert(s):
    keys=[
      "2","22","222","3","33","333",
      "4","44","444","5","55","555",
      "6","66","666","7","77","777","7777",
      "8","88","888","9","99","999","9999"
    ]

    for c in s:
        if c==' ':
            print("0",end="")
        else:
            print(keys[ord(c)-ord('A')],end="")`,

      c: `// mapping`,
      cpp: `void convert(string s){
    vector<string> keys={
      "2","22","222","3","33","333",
      "4","44","444","5","55","555",
      "6","66","666","7","77","777","7777",
      "8","88","888","9","99","999","9999"
    };

    for(char c:s){
        if(c==' ') cout<<"0";
        else cout<<keys[c-'A'];
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Count the Reversals (Brackets)',
    difficulty: 'Medium',
    description: `Min reversals to balance brackets.`,
    inputExample: '}}{{',
    outputExample: '2',
    explanation: `Use stack or count unbalanced.`,
    code: {
      java: `class Main{
  static int countRev(String s){
    if(s.length()%2!=0) return -1;

    Stack<Character> st=new Stack<>();

    for(char c:s.toCharArray()){
      if(c=='{' ) st.push(c);
      else{
        if(!st.isEmpty() && st.peek()=='{')
          st.pop();
        else
          st.push(c);
      }
    }

    int m=st.size();
    int open=0;

    while(!st.isEmpty() && st.peek()=='{'){
      st.pop();
      open++;
    }

    return (m/2 + open%2);
  }
}`,

      python: `def countRev(s):
    if len(s)%2:
        return -1

    stack=[]

    for c in s:
        if c=='{':
            stack.append(c)
        else:
            if stack and stack[-1]=='{':
                stack.pop()
            else:
                stack.append(c)

    m=len(stack)
    open=sum(1 for x in stack if x=='{')

    return m//2 + open%2`,

      c: `// stack`,
      cpp: `int countRev(string s){
    if(s.size()%2) return -1;

    stack<char> st;

    for(char c:s){
        if(c=='{') st.push(c);
        else{
            if(!st.empty() && st.top()=='{')
                st.pop();
            else
                st.push(c);
        }
    }

    int m=st.size();
    int open=0;

    while(!st.empty() && st.top()=='{'){
        st.pop();
        open++;
    }

    return m/2 + open%2;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Count Palindromic Subsequences',
    difficulty: 'Hard',
    description: `Count all palindromic subsequences.`,
    inputExample: 'aaa',
    outputExample: '6',
    explanation: `DP on substring.`,
    code: {
      java: `class Main{
  static int countPS(String s){
    int n=s.length();
    int[][] dp=new int[n][n];

    for(int i=0;i<n;i++) dp[i][i]=1;

    for(int len=2;len<=n;len++){
      for(int i=0;i<n-len+1;i++){
        int j=i+len-1;

        if(s.charAt(i)==s.charAt(j))
          dp[i][j]=1+dp[i+1][j]+dp[i][j-1];
        else
          dp[i][j]=dp[i+1][j]+dp[i][j-1]-dp[i+1][j-1];
      }
    }
    return dp[0][n-1];
  }
}`,

      python: `def countPS(s):
    n=len(s)
    dp=[[0]*n for _ in range(n)]

    for i in range(n):
        dp[i][i]=1

    for length in range(2,n+1):
        for i in range(n-length+1):
            j=i+length-1

            if s[i]==s[j]:
                dp[i][j]=1+dp[i+1][j]+dp[i][j-1]
            else:
                dp[i][j]=dp[i+1][j]+dp[i][j-1]-dp[i+1][j-1]

    return dp[0][n-1]`,

      c: `// dp`,
      cpp: `int countPS(string s){
    int n=s.size();
    vector<vector<int>> dp(n,vector<int>(n));

    for(int i=0;i<n;i++) dp[i][i]=1;

    for(int len=2;len<=n;len++){
        for(int i=0;i<n-len+1;i++){
            int j=i+len-1;

            if(s[i]==s[j])
                dp[i][j]=1+dp[i+1][j]+dp[i][j-1];
            else
                dp[i][j]=dp[i+1][j]+dp[i][j-1]-dp[i+1][j-1];
        }
    }
    return dp[0][n-1];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Count String Occurrences in 2D Grid',
    difficulty: 'Medium',
    description: `Count occurrences of word in grid.`,
    inputExample: 'grid, word',
    outputExample: 'count',
    explanation: `DFS in all directions.`,
    code: {
      java: `class Main{
  static int count(char[][] g,String w){
    int n=g.length,m=g[0].length;
    int count=0;

    int[] dx={-1,1,0,0,1,1,-1,-1};
    int[] dy={0,0,-1,1,1,-1,1,-1};

    for(int i=0;i<n;i++){
      for(int j=0;j<m;j++){
        if(g[i][j]==w.charAt(0)){
          for(int d=0;d<8;d++){
            int x=i,y=j,k;

            for(k=0;k<w.length();k++){
              if(x<0||y<0||x>=n||y>=m||g[x][y]!=w.charAt(k))
                break;
              x+=dx[d]; y+=dy[d];
            }
            if(k==w.length()) count++;
          }
        }
      }
    }
    return count;
  }
}`,

      python: `def count(grid,word):
    n,m=len(grid),len(grid[0])
    dirs=[(-1,0),(1,0),(0,-1),(0,1),(1,1),(1,-1),(-1,1),(-1,-1)]
    cnt=0

    for i in range(n):
        for j in range(m):
            if grid[i][j]==word[0]:
                for dx,dy in dirs:
                    x,y=i,j
                    k=0
                    while k<len(word) and 0<=x<n and 0<=y<m and grid[x][y]==word[k]:
                        x+=dx; y+=dy; k+=1
                    if k==len(word):
                        cnt+=1
    return cnt`,

      c: `// grid dfs`,
      cpp: `int count(vector<vector<char>>& g,string w){
    int n=g.size(),m=g[0].size();
    int cnt=0;

    int dx[]={-1,1,0,0,1,1,-1,-1};
    int dy[]={0,0,-1,1,1,-1,1,-1};

    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(g[i][j]==w[0]){
                for(int d=0;d<8;d++){
                    int x=i,y=j,k;
                    for(k=0;k<w.size();k++){
                        if(x<0||y<0||x>=n||y>=m||g[x][y]!=w[k])
                            break;
                        x+=dx[d]; y+=dy[d];
                    }
                    if(k==w.size()) cnt++;
                }
            }
        }
    }
    return cnt;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Boyer-Moore Pattern Searching',
    difficulty: 'Hard',
    description: `Efficient pattern search using bad character heuristic.`,
    inputExample: 'text, pattern',
    outputExample: 'positions',
    explanation: `Skip characters using last occurrence.`,
    code: {
      java: `class Main{
  static void search(String txt,String pat){
    int[] bad=new int[256];
    Arrays.fill(bad,-1);

    for(int i=0;i<pat.length();i++)
      bad[pat.charAt(i)]=i;

    int s=0;
    while(s<=txt.length()-pat.length()){
      int j=pat.length()-1;

      while(j>=0 && pat.charAt(j)==txt.charAt(s+j))
        j--;

      if(j<0){
        System.out.println(s);
        s+=(s+pat.length()<txt.length())?
           pat.length()-bad[txt.charAt(s+pat.length())]:1;
      }else{
        s+=Math.max(1,j-bad[txt.charAt(s+j)]);
      }
    }
  }
}`,

      python: `def boyerMoore(txt,pat):
    bad={c:i for i,c in enumerate(pat)}

    s=0
    while s<=len(txt)-len(pat):
        j=len(pat)-1

        while j>=0 and pat[j]==txt[s+j]:
            j-=1

        if j<0:
            print(s)
            s+= len(pat)-bad.get(txt[s+len(pat)],-1) if s+len(pat)<len(txt) else 1
        else:
            s+= max(1, j-bad.get(txt[s+j],-1))`,

      c: `// boyer moore`,
      cpp: `void boyerMoore(string txt,string pat){
    vector<int> bad(256,-1);

    for(int i=0;i<pat.size();i++)
        bad[pat[i]]=i;

    int s=0;

    while(s<=txt.size()-pat.size()){
        int j=pat.size()-1;

        while(j>=0 && pat[j]==txt[s+j])
            j--;

        if(j<0){
            cout<<s<<" ";
            s+=(s+pat.size()<txt.size())?
               pat.size()-bad[txt[s+pat.size()]]:1;
        }else{
            s+=max(1,j-bad[txt[s+j]]);
        }
    }
}`
    }
  },
    {
    subject: 'Code',
    category: 'Strings',
    title: 'Roman Number to Integer',
    difficulty: 'Easy',
    description: `Convert Roman numeral to integer.`,
    inputExample: 'MCMIV',
    outputExample: '1904',
    explanation: `Scan from left, handle subtractive cases.`,
    code: {
      java: `class Main{
  static int romanToInt(String s){
    java.util.Map<Character,Integer> map=new java.util.HashMap<>();
    map.put('I',1); map.put('V',5); map.put('X',10);
    map.put('L',50); map.put('C',100);
    map.put('D',500); map.put('M',1000);

    int res=0;

    for(int i=0;i<s.length();i++){
      int val=map.get(s.charAt(i));

      if(i+1<s.length() && val<map.get(s.charAt(i+1)))
        res-=val;
      else
        res+=val;
    }
    return res;
  }
}`,

      python: `def romanToInt(s):
    roman={'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
    res=0

    for i in range(len(s)):
        if i+1<len(s) and roman[s[i]]<roman[s[i+1]]:
            res-=roman[s[i]]
        else:
            res+=roman[s[i]]

    return res`,

      c: `// roman`,
      cpp: `int romanToInt(string s){
    map<char,int> m={
        {'I',1},{'V',5},{'X',10},
        {'L',50},{'C',100},
        {'D',500},{'M',1000}
    };

    int res=0;

    for(int i=0;i<s.size();i++){
        if(i+1<s.size() && m[s[i]]<m[s[i+1]])
            res-=m[s[i]];
        else
            res+=m[s[i]];
    }
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Minimum Number of Flips',
    difficulty: 'Medium',
    description: `Min flips to make binary string alternating.`,
    inputExample: '001',
    outputExample: '1',
    explanation: `Compare with patterns 010... and 101...`,
    code: {
      java: `class Main{
  static int minFlips(String s){
    int c1=0,c2=0;

    for(int i=0;i<s.length();i++){
      char expected1=(i%2==0)?'0':'1';
      char expected2=(i%2==0)?'1':'0';

      if(s.charAt(i)!=expected1) c1++;
      if(s.charAt(i)!=expected2) c2++;
    }
    return Math.min(c1,c2);
  }
}`,

      python: `def minFlips(s):
    c1=c2=0

    for i,ch in enumerate(s):
        if ch!=str(i%2):
            c1+=1
        if ch!=str(1-i%2):
            c2+=1

    return min(c1,c2)`,

      c: `// flips`,
      cpp: `int minFlips(string s){
    int c1=0,c2=0;

    for(int i=0;i<s.size();i++){
        char e1=(i%2)?'1':'0';
        char e2=(i%2)?'0':'1';

        if(s[i]!=e1) c1++;
        if(s[i]!=e2) c2++;
    }
    return min(c1,c2);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Second Most Repeated String in Sequence',
    difficulty: 'Easy',
    description: `Find second most frequent string.`,
    inputExample: '[a,b,c,a,b,a]',
    outputExample: 'b',
    explanation: `Frequency map + sorting.`,
    code: {
      java: `class Main{
  static String secondMost(String[] arr){
    Map<String,Integer> map=new HashMap<>();

    for(String s:arr)
      map.put(s,map.getOrDefault(s,0)+1);

    String first="",second="";
    int f1=0,f2=0;

    for(String key:map.keySet()){
      int val=map.get(key);

      if(val>f1){
        f2=f1; second=first;
        f1=val; first=key;
      }else if(val>f2 && !key.equals(first)){
        f2=val; second=key;
      }
    }
    return second;
  }
}`,

      python: `from collections import Counter

def secondMost(arr):
    freq=Counter(arr)

    first=second=""
    f1=f2=0

    for k,v in freq.items():
        if v>f1:
            f2=f1; second=first
            f1=v; first=k
        elif v>f2 and k!=first:
            f2=v; second=k

    return second`,

      c: `// freq`,
      cpp: `string secondMost(vector<string>& arr){
    map<string,int> mp;

    for(auto s:arr) mp[s]++;

    string first="",second="";
    int f1=0,f2=0;

    for(auto &p:mp){
        if(p.second>f1){
            f2=f1; second=first;
            f1=p.second; first=p.first;
        }else if(p.second>f2 && p.first!=first){
            f2=p.second; second=p.first;
        }
    }
    return second;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Minimum Swaps for Bracket Balancing',
    difficulty: 'Medium',
    description: `Minimum swaps to balance brackets.`,
    inputExample: '[]][][',
    outputExample: '2',
    explanation: `Track imbalance.`,
    code: {
      java: `class Main{
  static int swaps(String s){
    int open=0, close=0, swaps=0;

    for(char c:s.toCharArray()){
      if(c=='[') open++;
      else close++;

      if(close>open){
        swaps++;
        open++;
        close--;
      }
    }
    return swaps;
  }
}`,

      python: `def swaps(s):
    open=close=swaps=0

    for c in s:
        if c=='[':
            open+=1
        else:
            close+=1

        if close>open:
            swaps+=1
            open+=1
            close-=1

    return swaps`,

      c: `// bracket swap`,
      cpp: `int swaps(string s){
    int open=0,close=0,swaps=0;

    for(char c:s){
        if(c=='[') open++;
        else close++;

        if(close>open){
            swaps++;
            open++;
            close--;
        }
    }
    return swaps;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Longest Common Subsequence',
    difficulty: 'Medium',
    description: `Find LCS length.`,
    inputExample: 'abcde, ace',
    outputExample: '3',
    explanation: `DP on two strings.`,
    code: {
      java: `class Main{
  static int lcs(String a,String b){
    int n=a.length(),m=b.length();
    int[][] dp=new int[n+1][m+1];

    for(int i=1;i<=n;i++){
      for(int j=1;j<=m;j++){
        if(a.charAt(i-1)==b.charAt(j-1))
          dp[i][j]=1+dp[i-1][j-1];
        else
          dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
      }
    }
    return dp[n][m];
  }
}`,

      python: `def lcs(a,b):
    n,m=len(a),len(b)
    dp=[[0]*(m+1) for _ in range(n+1)]

    for i in range(1,n+1):
        for j in range(1,m+1):
            if a[i-1]==b[j-1]:
                dp[i][j]=1+dp[i-1][j-1]
            else:
                dp[i][j]=max(dp[i-1][j],dp[i][j-1])

    return dp[n][m]`,

      c: `// lcs`,
      cpp: `int lcs(string a,string b){
    int n=a.size(),m=b.size();
    vector<vector<int>> dp(n+1,vector<int>(m+1));

    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            if(a[i-1]==b[j-1])
                dp[i][j]=1+dp[i-1][j-1];
            else
                dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
        }
    }
    return dp[n][m];
}`
    }
  },
    {
    subject: 'Code',
    category: 'Strings',
    title: 'Generate All Valid IP Addresses',
    difficulty: 'Medium',
    description: `Split string into valid IPv4 addresses.`,
    inputExample: '25525511135',
    outputExample: '255.255.11.135, 255.255.111.35',
    explanation: `Backtracking with validation.`,
    code: {
      java: `class Main{
  static void solve(String s,int idx,int parts,String path){
    if(parts==4 && idx==s.length()){
      System.out.println(path.substring(0,path.length()-1));
      return;
    }

    if(parts>=4) return;

    for(int len=1;len<=3 && idx+len<=s.length();len++){
      String seg=s.substring(idx,idx+len);

      if(isValid(seg)){
        solve(s,idx+len,parts+1,path+seg+".");
      }
    }
  }

  static boolean isValid(String s){
    if(s.length()>1 && s.charAt(0)=='0') return false;
    int val=Integer.parseInt(s);
    return val>=0 && val<=255;
  }
}`,

      python: `def isValid(s):
    if len(s)>1 and s[0]=='0':
        return False
    return int(s)<=255

def solve(s,idx,parts,path,res):
    if parts==4 and idx==len(s):
        res.append(path[:-1])
        return

    if parts>=4:
        return

    for l in range(1,4):
        if idx+l<=len(s):
            seg=s[idx:idx+l]
            if isValid(seg):
                solve(s,idx+l,parts+1,path+seg+".",res)`,

      c: `// backtracking`,
      cpp: `void solve(string s,int idx,int parts,string path){
    if(parts==4 && idx==s.size()){
        cout<<path.substr(0,path.size()-1)<<endl;
        return;
    }

    if(parts>=4) return;

    for(int len=1;len<=3 && idx+len<=s.size();len++){
        string seg=s.substr(idx,len);

        if(isValid(seg)){
            solve(s,idx+len,parts+1,path+seg+".");
        }
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Smallest Distinct Window',
    difficulty: 'Medium',
    description: `Find smallest substring containing all unique characters.`,
    inputExample: 'aabcbcdbca',
    outputExample: 'dbca',
    explanation: `Sliding window + frequency.`,
    code: {
      java: `class Main{
  static int minWindow(String s){
    boolean[] visited=new boolean[256];
    int dist=0;

    for(char c:s.toCharArray())
      if(!visited[c]){
        visited[c]=true;
        dist++;
      }

    int[] freq=new int[256];
    int count=0,left=0,minLen=Integer.MAX_VALUE;

    for(int right=0;right<s.length();right++){
      freq[s.charAt(right)]++;

      if(freq[s.charAt(right)]==1)
        count++;

      while(count==dist){
        minLen=Math.min(minLen,right-left+1);

        freq[s.charAt(left)]--;

        if(freq[s.charAt(left)]==0)
          count--;

        left++;
      }
    }
    return minLen;
  }
}`,

      python: `def minWindow(s):
    unique=len(set(s))
    freq={}
    l=count=0
    res=float('inf')

    for r in range(len(s)):
        freq[s[r]]=freq.get(s[r],0)+1

        if freq[s[r]]==1:
            count+=1

        while count==unique:
            res=min(res,r-l+1)
            freq[s[l]]-=1

            if freq[s[l]]==0:
                count-=1
            l+=1

    return res`,

      c: `// sliding window`,
      cpp: `int minWindow(string s){
    vector<int> freq(256,0);
    vector<bool> vis(256,false);
    int dist=0;

    for(char c:s)
        if(!vis[c]){
            vis[c]=true;
            dist++;
        }

    int l=0,count=0,res=INT_MAX;

    for(int r=0;r<s.size();r++){
        freq[s[r]]++;

        if(freq[s[r]]==1)
            count++;

        while(count==dist){
            res=min(res,r-l+1);

            freq[s[l]]--;

            if(freq[s[l]]==0)
                count--;

            l++;
        }
    }
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Rearrange Characters',
    difficulty: 'Medium',
    description: `Rearrange so no adjacent characters are same.`,
    inputExample: 'aaabc',
    outputExample: 'abaca',
    explanation: `Max heap greedy.`,
    code: {
      java: `class Main{
  static String rearrange(String s){
    int[] freq=new int[256];

    for(char c:s.toCharArray())
      freq[c]++;

    PriorityQueue<Character> pq=new PriorityQueue<>(
      (a,b)->freq[b]-freq[a]);

    for(int i=0;i<256;i++)
      if(freq[i]>0) pq.add((char)i);

    StringBuilder sb=new StringBuilder();
    char prev='#';

    while(!pq.isEmpty()){
      char cur=pq.poll();
      sb.append(cur);
      freq[cur]--;

      if(prev!='#' && freq[prev]>0)
        pq.add(prev);

      prev=cur;
    }
    return sb.toString();
  }
}`,

      python: `from heapq import *

def rearrange(s):
    from collections import Counter
    freq=Counter(s)

    heap=[(-v,k) for k,v in freq.items()]
    heapify(heap)

    prev=None
    res=""

    while heap:
        f,ch=heappop(heap)
        res+=ch
        f+=1

        if prev:
            heappush(heap,prev)

        prev=(f,ch) if f!=0 else None

    return res`,

      c: `// heap`,
      cpp: `// greedy heap approach`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Minimum Characters Added to Make Palindrome (Front)',
    difficulty: 'Medium',
    description: `Find minimum chars to add in front.`,
    inputExample: 'ABC',
    outputExample: '2',
    explanation: `Use LPS on s + reverse(s).`,
    code: {
      java: `class Main{
  static int minAdd(String s){
    String rev=new StringBuilder(s).reverse().toString();
    String temp=s+"#"+rev;

    int[] lps=new int[temp.length()];
    int len=0,i=1;

    while(i<temp.length()){
      if(temp.charAt(i)==temp.charAt(len)){
        lps[i++]=++len;
      }else{
        if(len!=0) len=lps[len-1];
        else lps[i++]=0;
      }
    }

    return s.length()-lps[temp.length()-1];
  }
}`,

      python: `def minAdd(s):
    rev=s[::-1]
    temp=s+"#"+rev

    lps=[0]*len(temp)
    i=1
    length=0

    while i<len(temp):
        if temp[i]==temp[length]:
            length+=1
            lps[i]=length
            i+=1
        else:
            if length:
                length=lps[length-1]
            else:
                lps[i]=0
                i+=1

    return len(s)-lps[-1]`,

      c: `// lps trick`,
      cpp: `int minAdd(string s){
    string rev=s;
    reverse(rev.begin(),rev.end());

    string temp=s+"#"+rev;

    vector<int> lps(temp.size(),0);
    int len=0,i=1;

    while(i<temp.size()){
        if(temp[i]==temp[len])
            lps[i++]=++len;
        else{
            if(len) len=lps[len-1];
            else lps[i++]=0;
        }
    }
    return s.size()-lps.back();
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Print Anagrams Together',
    difficulty: 'Medium',
    description: `Group anagrams.`,
    inputExample: '[eat, tea, tan, ate, nat]',
    outputExample: '[[eat, tea, ate], [tan, nat]]',
    explanation: `Sort or frequency signature.`,
    code: {
      java: `class Main{
  static void group(String[] arr){
    Map<String,List<String>> map=new HashMap<>();

    for(String s:arr){
      char[] c=s.toCharArray();
      Arrays.sort(c);
      String key=new String(c);

      map.computeIfAbsent(key,k->new ArrayList<>()).add(s);
    }

    for(List<String> group:map.values())
      System.out.println(group);
  }
}`,

      python: `from collections import defaultdict

def group(arr):
    mp=defaultdict(list)

    for s in arr:
        key="".join(sorted(s))
        mp[key].append(s)

    return list(mp.values())`,

      c: `// anagram grouping`,
      cpp: `map<string,vector<string>> mp;

for(string s:arr){
    string key=s;
    sort(key.begin(),key.end());
    mp[key].push_back(s);
}`
    }
  },
   {
    subject: 'Code',
    category: 'Strings',
    title: 'Smallest Window Containing All Characters',
    difficulty: 'Hard',
    description: `Find smallest substring containing all characters of pattern.`,
    inputExample: 'ADOBECODEBANC, ABC',
    outputExample: 'BANC',
    explanation: `Sliding window + frequency match.`,
    code: {
      java: `class Main{
  static String minWindow(String s,String t){
    int[] need=new int[256];
    int required=0;

    for(char c:t.toCharArray()){
      if(need[c]==0) required++;
      need[c]++;
    }

    int[] window=new int[256];
    int formed=0,l=0,minLen=Integer.MAX_VALUE,start=0;

    for(int r=0;r<s.length();r++){
      char c=s.charAt(r);
      window[c]++;

      if(window[c]==need[c])
        formed++;

      while(formed==required){
        if(r-l+1<minLen){
          minLen=r-l+1;
          start=l;
        }

        window[s.charAt(l)]--;

        if(window[s.charAt(l)]<need[s.charAt(l)])
          formed--;

        l++;
      }
    }
    return minLen==Integer.MAX_VALUE?"":s.substring(start,start+minLen);
  }
}`,

      python: `def minWindow(s,t):
    from collections import Counter

    need=Counter(t)
    window={}
    required=len(need)
    formed=0

    l=0
    res=float('inf'),0,0

    for r,c in enumerate(s):
        window[c]=window.get(c,0)+1

        if c in need and window[c]==need[c]:
            formed+=1

        while formed==required:
            if r-l+1<res[0]:
                res=(r-l+1,l,r)

            window[s[l]]-=1

            if s[l] in need and window[s[l]]<need[s[l]]:
                formed-=1

            l+=1

    return "" if res[0]==float('inf') else s[res[1]:res[2]+1]`,

      c: `// sliding window`,
      cpp: `string minWindow(string s,string t){
    vector<int> need(256,0), window(256,0);
    int required=0;

    for(char c:t){
        if(need[c]==0) required++;
        need[c]++;
    }

    int formed=0,l=0,minLen=INT_MAX,start=0;

    for(int r=0;r<s.size();r++){
        window[s[r]]++;

        if(window[s[r]]==need[s[r]])
            formed++;

        while(formed==required){
            if(r-l+1<minLen){
                minLen=r-l+1;
                start=l;
            }

            window[s[l]]--;

            if(window[s[l]]<need[s[l]])
                formed--;

            l++;
        }
    }

    return minLen==INT_MAX?"":s.substr(start,minLen);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Remove Consecutive Characters',
    difficulty: 'Easy',
    description: `Remove adjacent duplicate characters.`,
    inputExample: 'aabbcc',
    outputExample: 'abc',
    explanation: `Linear scan.`,
    code: {
      java: `class Main{
  static String remove(String s){
    StringBuilder sb=new StringBuilder();
    sb.append(s.charAt(0));

    for(int i=1;i<s.length();i++){
      if(s.charAt(i)!=s.charAt(i-1))
        sb.append(s.charAt(i));
    }
    return sb.toString();
  }
}`,

      python: `def remove(s):
    res=[s[0]]

    for i in range(1,len(s)):
        if s[i]!=s[i-1]:
            res.append(s[i])

    return "".join(res)`,

      c: `// simple scan`,
      cpp: `string remove(string s){
    string res="";
    res+=s[0];

    for(int i=1;i<s.size();i++){
        if(s[i]!=s[i-1])
            res+=s[i];
    }
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Wildcard String Matching',
    difficulty: 'Hard',
    description: `Match pattern with ? and *.`,
    inputExample: 'a*b?d vs abcd',
    outputExample: 'true',
    explanation: `DP matching.`,
    code: {
      java: `class Main{
  static boolean match(String s,String p){
    int n=s.length(),m=p.length();
    boolean[][] dp=new boolean[n+1][m+1];

    dp[0][0]=true;

    for(int j=1;j<=m;j++){
      if(p.charAt(j-1)=='*')
        dp[0][j]=dp[0][j-1];
    }

    for(int i=1;i<=n;i++){
      for(int j=1;j<=m;j++){
        if(p.charAt(j-1)=='*')
          dp[i][j]=dp[i-1][j]||dp[i][j-1];
        else if(p.charAt(j-1)=='?'||p.charAt(j-1)==s.charAt(i-1))
          dp[i][j]=dp[i-1][j-1];
      }
    }
    return dp[n][m];
  }
}`,

      python: `def match(s,p):
    n,m=len(s),len(p)
    dp=[[False]*(m+1) for _ in range(n+1)]

    dp[0][0]=True

    for j in range(1,m+1):
        if p[j-1]=='*':
            dp[0][j]=dp[0][j-1]

    for i in range(1,n+1):
        for j in range(1,m+1):
            if p[j-1]=='*':
                dp[i][j]=dp[i-1][j] or dp[i][j-1]
            elif p[j-1]=='?' or p[j-1]==s[i-1]:
                dp[i][j]=dp[i-1][j-1]

    return dp[n][m]`,

      c: `// dp`,
      cpp: `bool match(string s,string p){
    int n=s.size(),m=p.size();
    vector<vector<bool>> dp(n+1,vector<bool>(m+1,false));

    dp[0][0]=true;

    for(int j=1;j<=m;j++){
        if(p[j-1]=='*')
            dp[0][j]=dp[0][j-1];
    }

    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            if(p[j-1]=='*')
                dp[i][j]=dp[i-1][j]||dp[i][j-1];
            else if(p[j-1]=='?'||p[j-1]==s[i-1])
                dp[i][j]=dp[i-1][j-1];
        }
    }
    return dp[n][m];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Number of Customers Who Could Not Get a Computer',
    difficulty: 'Medium',
    description: `Simulate computer allocation using set.`,
    inputExample: 'sequence, capacity',
    outputExample: 'count',
    explanation: `Track occupied/free slots.`,
    code: {
      java: `class Main{
  static int countMiss(String s,int cap){
    Set<Character> set=new HashSet<>();
    Set<Character> using=new HashSet<>();
    int miss=0;

    for(char c:s.toCharArray()){
      if(using.contains(c)){
        using.remove(c);
      }else{
        if(set.size()<cap){
          set.add(c);
          using.add(c);
        }else{
          miss++;
        }
      }
    }
    return miss;
  }
}`,

      python: `def countMiss(s,cap):
    used=set()
    available=set()
    miss=0

    for c in s:
        if c in used:
            used.remove(c)
        else:
            if len(available)<cap:
                available.add(c)
                used.add(c)
            else:
                miss+=1

    return miss`,

      c: `// simulation`,
      cpp: `int countMiss(string s,int cap){
    set<char> used, avail;
    int miss=0;

    for(char c:s){
        if(used.count(c)){
            used.erase(c);
        }else{
            if(avail.size()<cap){
                avail.insert(c);
                used.insert(c);
            }else{
                miss++;
            }
        }
    }
    return miss;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Strings',
    title: 'Transform One String to Another (Minimum Operations)',
    difficulty: 'Hard',
    description: `Find minimum operations to transform s1 → s2.`,
    inputExample: 'heap, pea',
    outputExample: '2',
    explanation: `LCS-based transformation.`,
    code: {
      java: `class Main{
  static int lcs(String a,String b){
    int n=a.length(),m=b.length();
    int[][] dp=new int[n+1][m+1];

    for(int i=1;i<=n;i++){
      for(int j=1;j<=m;j++){
        if(a.charAt(i-1)==b.charAt(j-1))
          dp[i][j]=1+dp[i-1][j-1];
        else
          dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
      }
    }
    return dp[n][m];
  }

  static int transform(String a,String b){
    int lcs=lcs(a,b);
    return (a.length()-lcs)+(b.length()-lcs);
  }
}`,

      python: `def lcs(a,b):
    n,m=len(a),len(b)
    dp=[[0]*(m+1) for _ in range(n+1)]

    for i in range(1,n+1):
        for j in range(1,m+1):
            if a[i-1]==b[j-1]:
                dp[i][j]=1+dp[i-1][j-1]
            else:
                dp[i][j]=max(dp[i-1][j],dp[i][j-1])

    return dp[n][m]

def transform(a,b):
    l=lcs(a,b)
    return (len(a)-l)+(len(b)-l)`,

      c: `// LCS`,
      cpp: `int lcs(string a,string b){
    int n=a.size(),m=b.size();
    vector<vector<int>> dp(n+1,vector<int>(m+1));

    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            if(a[i-1]==b[j-1])
                dp[i][j]=1+dp[i-1][j-1];
            else
                dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
        }
    }
    return dp[n][m];
}

int transform(string a,string b){
    int l=lcs(a,b);
    return (a.size()-l)+(b.size()-l);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Isomorphic Strings',
    difficulty: 'Easy',
    description: `Check if characters map one-to-one.`,
    inputExample: 'egg, add',
    outputExample: 'true',
    explanation: `Bi-directional mapping.`,
    code: {
      java: `class Main{
  static boolean isIso(String s,String t){
    if(s.length()!=t.length()) return false;

    Map<Character,Character> m1=new HashMap<>();
    Map<Character,Character> m2=new HashMap<>();

    for(int i=0;i<s.length();i++){
      char c1=s.charAt(i),c2=t.charAt(i);

      if((m1.containsKey(c1)&&m1.get(c1)!=c2) ||
         (m2.containsKey(c2)&&m2.get(c2)!=c1))
        return false;

      m1.put(c1,c2);
      m2.put(c2,c1);
    }
    return true;
  }
}`,

      python: `def isIso(s,t):
    if len(s)!=len(t):
        return False

    m1={}
    m2={}

    for a,b in zip(s,t):
        if (a in m1 and m1[a]!=b) or (b in m2 and m2[b]!=a):
            return False

        m1[a]=b
        m2[b]=a

    return True`,

      c: `// mapping`,
      cpp: `bool isIso(string s,string t){
    if(s.size()!=t.size()) return false;

    map<char,char> m1,m2;

    for(int i=0;i<s.size();i++){
        if((m1.count(s[i]) && m1[s[i]]!=t[i]) ||
           (m2.count(t[i]) && m2[t[i]]!=s[i]))
            return false;

        m1[s[i]]=t[i];
        m2[t[i]]=s[i];
    }
    return true;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Strings',
    title: 'Recursively Print All Sentences from Word Lists',
    difficulty: 'Medium',
    description: `Generate all possible sentences from word matrix.`,
    inputExample: '[[you, we], [have, are], [sleep, eat]]',
    outputExample: 'you have sleep ...',
    explanation: `Backtracking row by row.`,
    code: {
      java: `class Main{
  static void solve(String[][] arr,int row,String res){
    if(row==arr.length){
      System.out.println(res.trim());
      return;
    }

    for(int i=0;i<arr[row].length;i++){
      solve(arr,row+1,res+arr[row][i]+" ");
    }
  }
}`,

      python: `def solve(arr,row,res):
    if row==len(arr):
        print(res.strip())
        return

    for word in arr[row]:
        solve(arr,row+1,res+word+" ")`,

      c: `// recursion`,
      cpp: `void solve(vector<vector<string>>& arr,int row,string res){
    if(row==arr.size()){
        cout<<res<<endl;
        return;
    }

    for(string w:arr[row]){
        solve(arr,row+1,res+w+" ");
    }
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
        console.log(`Successfully processed ${problems.length} problems for Strings`)
        
        await mongoose.disconnect()
        process.exit(0)
    } catch (error) {
        console.error('Seed failed:', error)
        process.exit(1)
    }
}

seed()
