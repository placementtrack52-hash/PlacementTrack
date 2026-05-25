import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'
import { fileURLToPath } from 'url'

export const problems = [
  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Fibonacci Number',
    difficulty: 'Easy',
    description: 'The Fibonacci numbers form a sequence where each number is the sum of the two preceding ones, starting from 0 and 1. Given n, calculate F(n).',
    inputExample: 'n = 4',
    outputExample: '3',
    explanation: 'F(4) = F(3) + F(2) = 2 + 1 = 3. This can be optimized using DP to O(n) time and O(1) space.',
    code: {
      java: `public class Main {
    public int fib(int n) {
        if (n <= 1) return n;
        int prev2 = 0, prev = 1;
        for (int i = 2; i <= n; i++) {
            int curr = prev + prev2;
            prev2 = prev;
            prev = curr;
        }
        return prev;
    }
}`,
      python: `def fib(n):
    if n <= 1:
        return n
    prev2, prev = 0, 1
    for i in range(2, n + 1):
        curr = prev + prev2
        prev2 = prev
        prev = curr
    return prev`,
      c: `#include <stdio.h>

int fib(int n) {
    if (n <= 1) return n;
    int prev2 = 0, prev = 1, curr;
    for (int i = 2; i <= n; i++) {
        curr = prev + prev2;
        prev2 = prev;
        prev = curr;
    }
    return prev;
}`,
      cpp: `#include <iostream>
using namespace std;

class Solution {
public:
    int fib(int n) {
        if (n <= 1) return n;
        int prev2 = 0, prev = 1;
        for (int i = 2; i <= n; i++) {
            int curr = prev + prev2;
            prev2 = prev;
            prev = curr;
        }
        return prev;
    }
};`
    }
  },
  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Stickler Thief',
    difficulty: 'Medium',
    description: `Max money without stealing adjacent houses.`,
    inputExample: 'arr = [5,5,10,100,10,5]',
    outputExample: '110',
    explanation: `Classic house robber DP.`,
    code: {
      java: `public class Main {
  public static int maxMoney(int[] arr){
    int incl=0, excl=0;

    for(int x:arr){
      int new_excl = Math.max(incl, excl);
      incl = excl + x;
      excl = new_excl;
    }
    return Math.max(incl, excl);
  }
}`,

      python: `def max_money(arr):
    incl = excl = 0
    for x in arr:
        new_excl = max(incl, excl)
        incl = excl + x
        excl = new_excl
    return max(incl, excl)`,

      c: `int maxMoney(int arr[], int n){
    int incl=0, excl=0;
    for(int i=0;i<n;i++){
        int new_excl = incl>excl?incl:excl;
        incl = excl + arr[i];
        excl = new_excl;
    }
    return incl>excl?incl:excl;
}`,

      cpp: `int maxMoney(vector<int>& arr){
    int incl=0, excl=0;
    for(int x:arr){
        int new_excl = max(incl,excl);
        incl = excl + x;
        excl = new_excl;
    }
    return max(incl,excl);
}`
    }
  },
  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Weighted Job Scheduling (Log N)',
    difficulty: 'Hard',
    description: `Max profit with non-overlapping jobs.`,
    inputExample: 'start=[1,2,3], end=[3,4,5], profit=[50,10,40]',
    outputExample: '90',
    explanation: `Sort + binary search + DP.`,
    code: {
      java: `import java.util.*;

class Job{
  int s,e,p;
  Job(int s,int e,int p){this.s=s;this.e=e;this.p=p;}
}

public class Main {
  public static int solve(int[] s,int[] e,int[] p){
    int n=s.length;
    Job[] jobs=new Job[n];

    for(int i=0;i<n;i++)
      jobs[i]=new Job(s[i],e[i],p[i]);

    Arrays.sort(jobs,(a,b)->a.e-b.e);

    int[] dp=new int[n];
    dp[0]=jobs[0].p;

    for(int i=1;i<n;i++){
      int incl=jobs[i].p;
      int l=-1;

      for(int j=i-1;j>=0;j--){
        if(jobs[j].e<=jobs[i].s){
          l=j; break;
        }
      }

      if(l!=-1) incl+=dp[l];

      dp[i]=Math.max(incl,dp[i-1]);
    }
    return dp[n-1];
  }
}`,

      python: `def job_scheduling(start,end,profit):
    jobs=sorted(zip(start,end,profit), key=lambda x:x[1])
    n=len(jobs)
    dp=[0]*n
    dp[0]=jobs[0][2]

    for i in range(1,n):
        incl=jobs[i][2]
        for j in range(i-1,-1,-1):
            if jobs[j][1]<=jobs[i][0]:
                incl+=dp[j]
                break
        dp[i]=max(incl,dp[i-1])
    return dp[-1]`,

      c: `// DP + sorting`,
      cpp: `// same`
    }
  },
  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Max Profit with k Transactions',
    difficulty: 'Hard',
    description: `Max profit with at most k transactions.`,
    inputExample: 'prices=[3,2,6,5,0,3], k=2',
    outputExample: '7',
    explanation: `2D DP: dp[k][i]`,
    code: {
      java: `public class Main {
  public static int maxProfit(int[] p,int k){
    int n=p.length;
    if(n==0) return 0;
    k=Math.min(k,n/2);

    int[][] dp=new int[k+1][n];

    for(int i=1;i<=k;i++){
      int max=Integer.MIN_VALUE;
      for(int j=1;j<n;j++){
        max=Math.max(max,dp[i-1][j-1]-p[j-1]);
        dp[i][j]=Math.max(dp[i][j-1],p[j]+max);
      }
    }
    return dp[k][n-1];
  }
}`,

      python: `def max_profit(prices,k):
    n=len(prices)
    if n==0:
        return 0
    k=min(k,n//2)

    dp=[[0]*n for _ in range(k+1)]

    for i in range(1,k+1):
        m=-prices[0]
        for j in range(1,n):
            m=max(m,dp[i-1][j-1]-prices[j])
            dp[i][j]=max(dp[i][j-1],prices[j]+m)
    return dp[k][n-1]`,

      c: `// complex 2D DP`,
      cpp: `// complex 2D DP`
    }
  },
    {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    description: `Count ways to reach the top if you can climb 1 or 2 steps.`,
    inputExample: 'n = 3',
    outputExample: '3',
    explanation: `Ways(n) = Ways(n-1) + Ways(n-2) (Fibonacci pattern).`,
    code: {
      java: `class Main{
  static int climb(int n){
    if(n<=2) return n;

    int prev2=1, prev1=2;

    for(int i=3;i<=n;i++){
      int cur=prev1+prev2;
      prev2=prev1;
      prev1=cur;
    }
    return prev1;
  }
}`,

      python: `def climb(n):
    if n<=2:
        return n

    prev2, prev1 = 1, 2

    for i in range(3,n+1):
        prev2, prev1 = prev1, prev1+prev2

    return prev1`,

      c: `int climb(int n){
    if(n<=2) return n;

    int prev2=1, prev1=2;

    for(int i=3;i<=n;i++){
        int cur=prev1+prev2;
        prev2=prev1;
        prev1=cur;
    }
    return prev1;
}`,

      cpp: `int climb(int n){
    if(n<=2) return n;

    int prev2=1, prev1=2;

    for(int i=3;i<=n;i++){
        int cur=prev1+prev2;
        prev2=prev1;
        prev1=cur;
    }
    return prev1;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Frog Jump',
    difficulty: 'Easy',
    description: `Minimum cost to reach last stone (jump 1 or 2 steps).`,
    inputExample: 'heights=[10,20,30,10]',
    outputExample: '20',
    explanation: `dp[i] = min cost from previous 1 or 2 jumps.`,
    code: {
      java: `class Main{
  static int frog(int[] h){
    int n=h.length;
    int prev2=0, prev1=0;

    for(int i=1;i<n;i++){
      int jump1 = prev1 + Math.abs(h[i]-h[i-1]);
      int jump2 = Integer.MAX_VALUE;

      if(i>1)
        jump2 = prev2 + Math.abs(h[i]-h[i-2]);

      int cur = Math.min(jump1,jump2);
      prev2 = prev1;
      prev1 = cur;
    }
    return prev1;
  }
}`,

      python: `def frog(h):
    prev2=0
    prev1=0

    for i in range(1,len(h)):
        jump1 = prev1 + abs(h[i]-h[i-1])
        jump2 = float('inf')

        if i>1:
            jump2 = prev2 + abs(h[i]-h[i-2])

        cur = min(jump1,jump2)
        prev2 = prev1
        prev1 = cur

    return prev1`,

      c: `#include <stdlib.h>
int frog(int h[],int n){
    int prev2=0, prev1=0;

    for(int i=1;i<n;i++){
        int jump1 = prev1 + abs(h[i]-h[i-1]);
        int jump2 = 1e9;

        if(i>1)
            jump2 = prev2 + abs(h[i]-h[i-2]);

        int cur = jump1 < jump2 ? jump1 : jump2;
        prev2 = prev1;
        prev1 = cur;
    }
    return prev1;
}`,

      cpp: `int frog(vector<int>& h){
    int prev2=0, prev1=0;

    for(int i=1;i<h.size();i++){
        int jump1 = prev1 + abs(h[i]-h[i-1]);
        int jump2 = INT_MAX;

        if(i>1)
            jump2 = prev2 + abs(h[i]-h[i-2]);

        int cur = min(jump1,jump2);
        prev2 = prev1;
        prev1 = cur;
    }
    return prev1;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Frog Jump with K Distances',
    difficulty: 'Medium',
    description: `Minimum cost when frog can jump up to K steps.`,
    inputExample: 'heights=[10,30,40,50,20], k=3',
    outputExample: '30',
    explanation: `dp[i] = min over last k jumps.`,
    code: {
      java: `class Main{
  static int frogK(int[] h,int k){
    int n=h.length;
    int[] dp=new int[n];

    for(int i=1;i<n;i++){
      dp[i]=Integer.MAX_VALUE;

      for(int j=1;j<=k && i-j>=0;j++){
        int cost = dp[i-j] + Math.abs(h[i]-h[i-j]);
        dp[i] = Math.min(dp[i], cost);
      }
    }
    return dp[n-1];
  }
}`,

      python: `def frog_k(h,k):
    n=len(h)
    dp=[0]*n

    for i in range(1,n):
        dp[i]=float('inf')
        for j in range(1,k+1):
            if i-j>=0:
                dp[i]=min(dp[i],
                    dp[i-j]+abs(h[i]-h[i-j]))
    return dp[-1]`,

      c: `#include <stdlib.h>
int frogK(int h[],int n,int k){
    int dp[n];
    dp[0]=0;

    for(int i=1;i<n;i++){
        dp[i]=1e9;
        for(int j=1;j<=k;j++){
            if(i-j>=0){
                int cost = dp[i-j] + abs(h[i]-h[i-j]);
                if(cost < dp[i]) dp[i]=cost;
            }
        }
    }
    return dp[n-1];
}`,

      cpp: `int frogK(vector<int>& h,int k){
    int n=h.size();
    vector<int> dp(n,0);

    for(int i=1;i<n;i++){
        dp[i]=INT_MAX;
        for(int j=1;j<=k;j++){
            if(i-j>=0){
                dp[i]=min(dp[i],
                  dp[i-j]+abs(h[i]-h[i-j]));
            }
        }
    }
    return dp[n-1];
}`
    }
  },
   {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Maximum Sum of Non-Adjacent Elements',
    difficulty: 'Medium',
    description: `Find maximum sum such that no two chosen elements are adjacent.`,
    inputExample: '[2,1,4,9]',
    outputExample: '11',
    explanation: `Pick or not pick each element. dp[i] = max(dp[i-1], arr[i] + dp[i-2])`,
    code: {
      java: `class Main{
  static int maxSum(int[] arr){
    int n=arr.length;
    int prev2=0;
    int prev1=arr[0];

    for(int i=1;i<n;i++){
      int pick = arr[i];
      if(i>1) pick += prev2;

      int notPick = prev1;

      int cur = Math.max(pick, notPick);

      prev2 = prev1;
      prev1 = cur;
    }
    return prev1;
  }
}`,

      python: `def max_sum(arr):
    prev2=0
    prev1=arr[0]

    for i in range(1,len(arr)):
        pick=arr[i]
        if i>1:
            pick+=prev2

        notPick=prev1

        cur=max(pick,notPick)

        prev2=prev1
        prev1=cur

    return prev1`,

      c: `int maxSum(int arr[],int n){
    int prev2=0;
    int prev1=arr[0];

    for(int i=1;i<n;i++){
        int pick=arr[i];
        if(i>1) pick+=prev2;

        int notPick=prev1;

        int cur = pick>notPick?pick:notPick;

        prev2=prev1;
        prev1=cur;
    }
    return prev1;
}`,

      cpp: `int maxSum(vector<int>& arr){
    int prev2=0;
    int prev1=arr[0];

    for(int i=1;i<arr.size();i++){
        int pick=arr[i];
        if(i>1) pick+=prev2;

        int notPick=prev1;

        int cur = max(pick,notPick);

        prev2=prev1;
        prev1=cur;
    }
    return prev1;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'House Robber',
    difficulty: 'Medium',
    description: `Rob houses such that no two adjacent houses are robbed.`,
    inputExample: '[1,2,3,1]',
    outputExample: '4',
    explanation: `Same as max non-adjacent sum problem.`,
    code: {
      java: `class Main{
  static int rob(int[] arr){
    int prev2=0;
    int prev1=arr[0];

    for(int i=1;i<arr.length;i++){
      int pick = arr[i];
      if(i>1) pick += prev2;

      int notPick = prev1;

      int cur = Math.max(pick, notPick);

      prev2 = prev1;
      prev1 = cur;
    }
    return prev1;
  }
}`,

      python: `def rob(arr):
    prev2=0
    prev1=arr[0]

    for i in range(1,len(arr)):
        pick=arr[i]
        if i>1:
            pick+=prev2

        notPick=prev1

        cur=max(pick,notPick)

        prev2=prev1
        prev1=cur

    return prev1`,

      c: `int rob(int arr[],int n){
    int prev2=0;
    int prev1=arr[0];

    for(int i=1;i<n;i++){
        int pick=arr[i];
        if(i>1) pick+=prev2;

        int notPick=prev1;

        int cur = pick>notPick?pick:notPick;

        prev2=prev1;
        prev1=cur;
    }
    return prev1;
}`,

      cpp: `int rob(vector<int>& arr){
    int prev2=0;
    int prev1=arr[0];

    for(int i=1;i<arr.size();i++){
        int pick=arr[i];
        if(i>1) pick+=prev2;

        int notPick=prev1;

        int cur = max(pick,notPick);

        prev2=prev1;
        prev1=cur;
    }
    return prev1;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: "Ninja's Training",
    difficulty: 'Medium',
    description: `Max points with no same activity on consecutive days.`,
    inputExample: 'points=[[10,40,70],[20,50,80],[30,60,90]]',
    outputExample: '210',
    explanation: `dp[day][last] = max points avoiding last activity.`,
    code: {
      java: `class Main{
  static int ninja(int[][] p){
    int n=p.length;
    int[][] dp=new int[n][4];

    dp[0][0]=Math.max(p[0][1],p[0][2]);
    dp[0][1]=Math.max(p[0][0],p[0][2]);
    dp[0][2]=Math.max(p[0][0],p[0][1]);
    dp[0][3]=Math.max(p[0][0],Math.max(p[0][1],p[0][2]));

    for(int d=1;d<n;d++){
      for(int last=0;last<4;last++){
        dp[d][last]=0;
        for(int task=0;task<3;task++){
          if(task!=last){
            dp[d][last]=Math.max(dp[d][last],
              p[d][task]+dp[d-1][task]);
          }
        }
      }
    }
    return dp[n-1][3];
  }
}`,

      python: `def ninja(p):
    n=len(p)
    dp=[[0]*4 for _ in range(n)]

    dp[0][0]=max(p[0][1],p[0][2])
    dp[0][1]=max(p[0][0],p[0][2])
    dp[0][2]=max(p[0][0],p[0][1])
    dp[0][3]=max(p[0])

    for d in range(1,n):
        for last in range(4):
            dp[d][last]=0
            for task in range(3):
                if task!=last:
                    dp[d][last]=max(dp[d][last],
                        p[d][task]+dp[d-1][task])

    return dp[n-1][3]`,

      c: `// 2D DP`,
      cpp: `int ninja(vector<vector<int>>& p){
    int n=p.size();
    vector<vector<int>> dp(n,vector<int>(4,0));

    dp[0][0]=max(p[0][1],p[0][2]);
    dp[0][1]=max(p[0][0],p[0][2]);
    dp[0][2]=max(p[0][0],p[0][1]);
    dp[0][3]=max({p[0][0],p[0][1],p[0][2]});

    for(int d=1;d<n;d++){
        for(int last=0;last<4;last++){
            for(int task=0;task<3;task++){
                if(task!=last){
                    dp[d][last]=max(dp[d][last],
                        p[d][task]+dp[d-1][task]);
                }
            }
        }
    }
    return dp[n-1][3];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Grid Unique Paths',
    difficulty: 'Medium',
    description: `Count ways from top-left to bottom-right.`,
    inputExample: 'm=3,n=2',
    outputExample: '3',
    explanation: `dp[i][j] = dp[i-1][j] + dp[i][j-1]`,
    code: {
      java: `class Main{
  static int paths(int m,int n){
    int[][] dp=new int[m][n];

    for(int i=0;i<m;i++) dp[i][0]=1;
    for(int j=0;j<n;j++) dp[0][j]=1;

    for(int i=1;i<m;i++)
      for(int j=1;j<n;j++)
        dp[i][j]=dp[i-1][j]+dp[i][j-1];

    return dp[m-1][n-1];
  }
}`,

      python: `def paths(m,n):
    dp=[[1]*n for _ in range(m)]

    for i in range(1,m):
        for j in range(1,n):
            dp[i][j]=dp[i-1][j]+dp[i][j-1]

    return dp[-1][-1]`,

      c: `// grid dp`,
      cpp: `int paths(int m,int n){
    vector<vector<int>> dp(m,vector<int>(n,1));

    for(int i=1;i<m;i++)
        for(int j=1;j<n;j++)
            dp[i][j]=dp[i-1][j]+dp[i][j-1];

    return dp[m-1][n-1];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Grid Unique Paths 2',
    difficulty: 'Medium',
    description: `Count paths with obstacles.`,
    inputExample: 'grid=[[0,0,0],[0,1,0],[0,0,0]]',
    outputExample: '2',
    explanation: `Same as paths but block obstacle cells.`,
    code: {
      java: `class Main{
  static int paths2(int[][] g){
    int m=g.length,n=g[0].length;
    int[][] dp=new int[m][n];

    if(g[0][0]==1) return 0;
    dp[0][0]=1;

    for(int i=0;i<m;i++){
      for(int j=0;j<n;j++){
        if(g[i][j]==1) dp[i][j]=0;
        else{
          if(i>0) dp[i][j]+=dp[i-1][j];
          if(j>0) dp[i][j]+=dp[i][j-1];
        }
      }
    }
    return dp[m-1][n-1];
  }
}`,

      python: `def paths2(g):
    m,n=len(g),len(g[0])
    dp=[[0]*n for _ in range(m)]

    if g[0][0]==1: return 0
    dp[0][0]=1

    for i in range(m):
        for j in range(n):
            if g[i][j]==1:
                dp[i][j]=0
            else:
                if i>0: dp[i][j]+=dp[i-1][j]
                if j>0: dp[i][j]+=dp[i][j-1]

    return dp[-1][-1]`,

      c: `// obstacle dp`,
      cpp: `int paths2(vector<vector<int>>& g){
    int m=g.size(),n=g[0].size();
    vector<vector<int>> dp(m,vector<int>(n,0));

    if(g[0][0]==1) return 0;
    dp[0][0]=1;

    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            if(g[i][j]==1) dp[i][j]=0;
            else{
                if(i>0) dp[i][j]+=dp[i-1][j];
                if(j>0) dp[i][j]+=dp[i][j-1];
            }
        }
    }
    return dp[m-1][n-1];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Minimum Path Sum in Grid',
    difficulty: 'Medium',
    description: `Find minimum sum path.`,
    inputExample: 'grid=[[1,3,1],[1,5,1],[4,2,1]]',
    outputExample: '7',
    explanation: `dp[i][j] = grid[i][j] + min(up, left)`,
    code: {
      java: `class Main{
  static int minPath(int[][] g){
    int m=g.length,n=g[0].length;
    int[][] dp=new int[m][n];

    dp[0][0]=g[0][0];

    for(int i=0;i<m;i++){
      for(int j=0;j<n;j++){
        if(i==0 && j==0) continue;

        int up = i>0?dp[i-1][j]:Integer.MAX_VALUE;
        int left = j>0?dp[i][j-1]:Integer.MAX_VALUE;

        dp[i][j]=g[i][j]+Math.min(up,left);
      }
    }
    return dp[m-1][n-1];
  }
}`,

      python: `def min_path(g):
    m,n=len(g),len(g[0])
    dp=[[0]*n for _ in range(m)]

    dp[0][0]=g[0][0]

    for i in range(m):
        for j in range(n):
            if i==0 and j==0: continue

            up = dp[i-1][j] if i>0 else float('inf')
            left = dp[i][j-1] if j>0 else float('inf')

            dp[i][j]=g[i][j]+min(up,left)

    return dp[-1][-1]`,

      c: `// min path dp`,
      cpp: `int minPath(vector<vector<int>>& g){
    int m=g.size(),n=g[0].size();
    vector<vector<int>> dp(m,vector<int>(n,0));

    dp[0][0]=g[0][0];

    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            if(i==0 && j==0) continue;

            int up = i>0?dp[i-1][j]:INT_MAX;
            int left = j>0?dp[i][j-1]:INT_MAX;

            dp[i][j]=g[i][j]+min(up,left);
        }
    }
    return dp[m-1][n-1];
}`
    }
  },
   {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Minimum Path Sum in Triangular Grid',
    difficulty: 'Medium',
    description: `Find minimum path sum from top to bottom in triangle.`,
    inputExample: '[[2],[3,4],[6,5,7],[4,1,8,3]]',
    outputExample: '11',
    explanation: `dp[i][j] = val + min(down, diagonal)`,
    code: {
      java: `class Main{
  static int triangle(int[][] t){
    int n=t.length;
    int[] dp=new int[n];

    for(int i=0;i<n;i++)
      dp[i]=t[n-1][i];

    for(int i=n-2;i>=0;i--){
      for(int j=0;j<=i;j++){
        dp[j]=t[i][j]+Math.min(dp[j],dp[j+1]);
      }
    }
    return dp[0];
  }
}`,

      python: `def triangle(t):
    dp=t[-1][:]

    for i in range(len(t)-2,-1,-1):
        for j in range(len(t[i])):
            dp[j]=t[i][j]+min(dp[j],dp[j+1])

    return dp[0]`,

      c: `// bottom-up dp`,
      cpp: `int triangle(vector<vector<int>>& t){
    int n=t.size();
    vector<int> dp=t[n-1];

    for(int i=n-2;i>=0;i--){
        for(int j=0;j<=i;j++){
            dp[j]=t[i][j]+min(dp[j],dp[j+1]);
        }
    }
    return dp[0];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Minimum / Maximum Falling Path Sum',
    difficulty: 'Medium',
    description: `Find min/max falling path sum in matrix.`,
    inputExample: 'matrix=[[2,1,3],[6,5,4],[7,8,9]]',
    outputExample: '13',
    explanation: `dp[i][j] = val + min(up, diag left, diag right)`,
    code: {
      java: `class Main{
  static int minPath(int[][] m){
    int n=m.length;
    int[][] dp=new int[n][n];

    for(int j=0;j<n;j++)
      dp[0][j]=m[0][j];

    for(int i=1;i<n;i++){
      for(int j=0;j<n;j++){
        int up=dp[i-1][j];
        int left=j>0?dp[i-1][j-1]:Integer.MAX_VALUE;
        int right=j<n-1?dp[i-1][j+1]:Integer.MAX_VALUE;

        dp[i][j]=m[i][j]+Math.min(up,Math.min(left,right));
      }
    }

    int ans=Integer.MAX_VALUE;
    for(int j=0;j<n;j++)
      ans=Math.min(ans,dp[n-1][j]);

    return ans;
  }
}`,

      python: `def min_falling(m):
    n=len(m)
    dp=m[0][:]

    for i in range(1,n):
        new=[0]*n
        for j in range(n):
            up=dp[j]
            left=dp[j-1] if j>0 else float('inf')
            right=dp[j+1] if j<n-1 else float('inf')

            new[j]=m[i][j]+min(up,left,right)
        dp=new

    return min(dp)`,

      c: `// dp grid`,
      cpp: `int minPath(vector<vector<int>>& m){
    int n=m.size();
    vector<int> dp=m[0];

    for(int i=1;i<n;i++){
        vector<int> newRow(n);

        for(int j=0;j<n;j++){
            int up=dp[j];
            int left=j>0?dp[j-1]:INT_MAX;
            int right=j<n-1?dp[j+1]:INT_MAX;

            newRow[j]=m[i][j]+min({up,left,right});
        }
        dp=newRow;
    }

    return *min_element(dp.begin(),dp.end());
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: '3D DP : Ninja and his Friends',
    difficulty: 'Hard',
    description: `Two ninjas collect max chocolates moving down.`,
    inputExample: 'grid=[[2,3,1],[3,4,2],[5,6,3]]',
    outputExample: '21',
    explanation: `dp[i][j1][j2] = max chocolates for both paths.`,
    code: {
      java: `class Main{
  static int solve(int[][] g){
    int n=g.length,m=g[0].length;
    int[][][] dp=new int[n][m][m];

    for(int j1=0;j1<m;j1++){
      for(int j2=0;j2<m;j2++){
        if(j1==j2)
          dp[n-1][j1][j2]=g[n-1][j1];
        else
          dp[n-1][j1][j2]=g[n-1][j1]+g[n-1][j2];
      }
    }

    for(int i=n-2;i>=0;i--){
      for(int j1=0;j1<m;j1++){
        for(int j2=0;j2<m;j2++){

          int max=0;

          for(int d1=-1;d1<=1;d1++){
            for(int d2=-1;d2<=1;d2++){

              int nj1=j1+d1;
              int nj2=j2+d2;

              if(nj1>=0 && nj1<m && nj2>=0 && nj2<m){

                int val = (j1==j2)?
                  g[i][j1]:
                  g[i][j1]+g[i][j2];

                val += dp[i+1][nj1][nj2];
                max = Math.max(max,val);
              }
            }
          }
          dp[i][j1][j2]=max;
        }
      }
    }
    return dp[0][0][m-1];
  }
}`,

      python: `def ninja_friends(g):
    n,m=len(g),len(g[0])
    dp=[[[0]*m for _ in range(m)] for _ in range(n)]

    for j1 in range(m):
        for j2 in range(m):
            if j1==j2:
                dp[n-1][j1][j2]=g[n-1][j1]
            else:
                dp[n-1][j1][j2]=g[n-1][j1]+g[n-1][j2]

    for i in range(n-2,-1,-1):
        for j1 in range(m):
            for j2 in range(m):
                best=0
                for d1 in [-1,0,1]:
                    for d2 in [-1,0,1]:
                        nj1=j1+d1
                        nj2=j2+d2

                        if 0<=nj1<m and 0<=nj2<m:
                            val = g[i][j1] if j1==j2 else g[i][j1]+g[i][j2]
                            val += dp[i+1][nj1][nj2]
                            best=max(best,val)

                dp[i][j1][j2]=best

    return dp[0][0][m-1]`,

      c: `// 3D DP`,
      cpp: `int solve(vector<vector<int>>& g){
    int n=g.size(),m=g[0].size();
    vector dp(n,vector(m,vector<int>(m,0)));

    for(int j1=0;j1<m;j1++){
        for(int j2=0;j2<m;j2++){
            if(j1==j2)
                dp[n-1][j1][j2]=g[n-1][j1];
            else
                dp[n-1][j1][j2]=g[n-1][j1]+g[n-1][j2];
        }
    }

    for(int i=n-2;i>=0;i--){
        for(int j1=0;j1<m;j1++){
            for(int j2=0;j2<m;j2++){

                int best=0;

                for(int d1=-1;d1<=1;d1++){
                    for(int d2=-1;d2<=1;d2++){

                        int nj1=j1+d1;
                        int nj2=j2+d2;

                        if(nj1>=0 && nj1<m && nj2>=0 && nj2<m){
                            int val = (j1==j2)?
                                g[i][j1]:
                                g[i][j1]+g[i][j2];

                            val+=dp[i+1][nj1][nj2];
                            best=max(best,val);
                        }
                    }
                }
                dp[i][j1][j2]=best;
            }
        }
    }
    return dp[0][0][m-1];
}`
    }
  },
   {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Subset Sum Equal to Target',
    difficulty: 'Medium',
    description: `Check if subset with given sum exists.`,
    inputExample: 'arr=[1,2,3,4], target=5',
    outputExample: 'true',
    explanation: `dp[i][t] = pick or not pick.`,
    code: {
      java: `class Main{
  static boolean subset(int[] arr,int k){
    int n=arr.length;
    boolean[] dp=new boolean[k+1];
    dp[0]=true;

    for(int num:arr){
      for(int t=k;t>=num;t--){
        dp[t]=dp[t]||dp[t-num];
      }
    }
    return dp[k];
  }
}`,

      python: `def subset(arr,k):
    dp=[False]*(k+1)
    dp[0]=True

    for num in arr:
        for t in range(k,num-1,-1):
            dp[t]=dp[t] or dp[t-num]

    return dp[k]`,

      c: `// boolean dp`,
      cpp: `bool subset(vector<int>& arr,int k){
    vector<bool> dp(k+1,false);
    dp[0]=true;

    for(int num:arr){
        for(int t=k;t>=num;t--){
            dp[t]=dp[t]||dp[t-num];
        }
    }
    return dp[k];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Partition Equal Subset Sum',
    difficulty: 'Medium',
    description: `Split array into two equal sum subsets.`,
    inputExample: '[1,5,11,5]',
    outputExample: 'true',
    explanation: `Check subset sum = total/2.`,
    code: {
      java: `class Main{
  static boolean canPartition(int[] arr){
    int sum=0;
    for(int x:arr) sum+=x;

    if(sum%2!=0) return false;

    int k=sum/2;
    boolean[] dp=new boolean[k+1];
    dp[0]=true;

    for(int num:arr){
      for(int t=k;t>=num;t--){
        dp[t]=dp[t]||dp[t-num];
      }
    }
    return dp[k];
  }
}`,

      python: `def partition(arr):
    s=sum(arr)
    if s%2: return False

    k=s//2
    dp=[False]*(k+1)
    dp[0]=True

    for num in arr:
        for t in range(k,num-1,-1):
            dp[t]=dp[t] or dp[t-num]

    return dp[k]`,

      c: `// same subset sum`,
      cpp: `bool canPartition(vector<int>& arr){
    int sum=accumulate(arr.begin(),arr.end(),0);
    if(sum%2) return false;

    int k=sum/2;
    vector<bool> dp(k+1,false);
    dp[0]=true;

    for(int num:arr){
        for(int t=k;t>=num;t--){
            dp[t]=dp[t]||dp[t-num];
        }
    }
    return dp[k];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Partition Set Into 2 Subsets With Min Absolute Sum Difference',
    difficulty: 'Medium',
    description: `Minimize difference between two subset sums.`,
    inputExample: '[1,2,3,9]',
    outputExample: '3',
    explanation: `Find closest sum to total/2.`,
    code: {
      java: `class Main{
  static int minDiff(int[] arr){
    int sum=0;
    for(int x:arr) sum+=x;

    boolean[] dp=new boolean[sum+1];
    dp[0]=true;

    for(int num:arr){
      for(int t=sum;t>=num;t--){
        dp[t]=dp[t]||dp[t-num];
      }
    }

    int min=Integer.MAX_VALUE;
    for(int s=0;s<=sum/2;s++){
      if(dp[s]){
        min=Math.min(min,sum-2*s);
      }
    }
    return min;
  }
}`,

      python: `def min_diff(arr):
    s=sum(arr)
    dp=[False]*(s+1)
    dp[0]=True

    for num in arr:
        for t in range(s,num-1,-1):
            dp[t]=dp[t] or dp[t-num]

    res=float('inf')
    for i in range(s//2+1):
        if dp[i]:
            res=min(res,s-2*i)
    return res`,

      c: `// dp all sums`,
      cpp: `int minDiff(vector<int>& arr){
    int sum=accumulate(arr.begin(),arr.end(),0);
    vector<bool> dp(sum+1,false);
    dp[0]=true;

    for(int num:arr){
        for(int t=sum;t>=num;t--){
            dp[t]=dp[t]||dp[t-num];
        }
    }

    int res=INT_MAX;
    for(int s=0;s<=sum/2;s++){
        if(dp[s])
            res=min(res,sum-2*s);
    }
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Count Subsets with Sum K',
    difficulty: 'Medium',
    description: `Count number of subsets with sum K.`,
    inputExample: 'arr=[1,2,3,3], k=6',
    outputExample: '3',
    explanation: `Count ways instead of boolean.`,
    code: {
      java: `class Main{
  static int count(int[] arr,int k){
    int[] dp=new int[k+1];
    dp[0]=1;

    for(int num:arr){
      for(int t=k;t>=0;t--){
        if(t>=num)
          dp[t]+=dp[t-num];
      }
    }
    return dp[k];
  }
}`,

      python: `def count(arr,k):
    dp=[0]*(k+1)
    dp[0]=1

    for num in arr:
        for t in range(k,-1,-1):
            if t>=num:
                dp[t]+=dp[t-num]

    return dp[k]`,

      c: `// count dp`,
      cpp: `int count(vector<int>& arr,int k){
    vector<int> dp(k+1,0);
    dp[0]=1;

    for(int num:arr){
        for(int t=k;t>=0;t--){
            if(t>=num)
                dp[t]+=dp[t-num];
        }
    }
    return dp[k];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Count Partitions with Given Difference',
    difficulty: 'Hard',
    description: `Count ways to partition with given difference.`,
    inputExample: 'arr=[1,1,2,3], diff=1',
    outputExample: '3',
    explanation: `Convert to subset sum: target = (sum-diff)/2`,
    code: {
      java: `class Main{
  static int countPartitions(int[] arr,int d){
    int sum=0;
    for(int x:arr) sum+=x;

    if((sum-d)%2!=0) return 0;

    int k=(sum-d)/2;
    int[] dp=new int[k+1];
    dp[0]=1;

    for(int num:arr){
      for(int t=k;t>=0;t--){
        if(t>=num)
          dp[t]+=dp[t-num];
      }
    }
    return dp[k];
  }
}`,

      python: `def count_partitions(arr,d):
    s=sum(arr)
    if (s-d)%2: return 0

    k=(s-d)//2
    dp=[0]*(k+1)
    dp[0]=1

    for num in arr:
        for t in range(k,-1,-1):
            if t>=num:
                dp[t]+=dp[t-num]

    return dp[k]`,

      c: `// transform to subset`,
      cpp: `int countPartitions(vector<int>& arr,int d){
    int sum=accumulate(arr.begin(),arr.end(),0);

    if((sum-d)%2) return 0;

    int k=(sum-d)/2;
    vector<int> dp(k+1,0);
    dp[0]=1;

    for(int num:arr){
        for(int t=k;t>=0;t--){
            if(t>=num)
                dp[t]+=dp[t-num];
        }
    }
    return dp[k];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Minimum Coins',
    difficulty: 'Medium',
    description: `Find minimum coins to make amount.`,
    inputExample: 'coins=[1,2,5], amount=11',
    outputExample: '3',
    explanation: `Unbounded knapsack (minimization).`,
    code: {
      java: `class Main{
  static int minCoins(int[] coins,int amt){
    int[] dp=new int[amt+1];
    Arrays.fill(dp,amt+1);
    dp[0]=0;

    for(int coin:coins){
      for(int t=coin;t<=amt;t++){
        dp[t]=Math.min(dp[t],1+dp[t-coin]);
      }
    }
    return dp[amt]>amt?-1:dp[amt];
  }
}`,

      python: `def min_coins(coins,amt):
    dp=[amt+1]*(amt+1)
    dp[0]=0

    for c in coins:
        for t in range(c,amt+1):
            dp[t]=min(dp[t],1+dp[t-c])

    return -1 if dp[amt]>amt else dp[amt]`,

      c: `// unbounded dp`,
      cpp: `int minCoins(vector<int>& coins,int amt){
    vector<int> dp(amt+1,amt+1);
    dp[0]=0;

    for(int c:coins){
        for(int t=c;t<=amt;t++){
            dp[t]=min(dp[t],1+dp[t-c]);
        }
    }
    return dp[amt]>amt?-1:dp[amt];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Target Sum',
    difficulty: 'Medium',
    description: `Assign + or - to reach target sum.`,
    inputExample: 'nums=[1,1,1,1,1], target=3',
    outputExample: '5',
    explanation: `Convert to subset sum problem.`,
    code: {
      java: `class Main{
  static int targetSum(int[] arr,int target){
    int sum=0;
    for(int x:arr) sum+=x;

    if((sum-target)%2!=0) return 0;

    int k=(sum-target)/2;
    int[] dp=new int[k+1];
    dp[0]=1;

    for(int num:arr){
      for(int t=k;t>=num;t--){
        dp[t]+=dp[t-num];
      }
    }
    return dp[k];
  }
}`,

      python: `def target_sum(arr,target):
    s=sum(arr)
    if (s-target)%2: return 0

    k=(s-target)//2
    dp=[0]*(k+1)
    dp[0]=1

    for num in arr:
        for t in range(k,num-1,-1):
            dp[t]+=dp[t-num]

    return dp[k]`,

      c: `// subset transform`,
      cpp: `int targetSum(vector<int>& arr,int target){
    int sum=accumulate(arr.begin(),arr.end(),0);
    if((sum-target)%2) return 0;

    int k=(sum-target)/2;
    vector<int> dp(k+1,0);
    dp[0]=1;

    for(int num:arr){
        for(int t=k;t>=num;t--){
            dp[t]+=dp[t-num];
        }
    }
    return dp[k];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Coin Change 2',
    difficulty: 'Medium',
    description: `Count ways to make amount.`,
    inputExample: 'coins=[1,2,5], amount=5',
    outputExample: '4',
    explanation: `Unbounded knapsack (count ways).`,
    code: {
      java: `class Main{
  static int ways(int[] coins,int amt){
    int[] dp=new int[amt+1];
    dp[0]=1;

    for(int coin:coins){
      for(int t=coin;t<=amt;t++){
        dp[t]+=dp[t-coin];
      }
    }
    return dp[amt];
  }
}`,

      python: `def ways(coins,amt):
    dp=[0]*(amt+1)
    dp[0]=1

    for c in coins:
        for t in range(c,amt+1):
            dp[t]+=dp[t-c]

    return dp[amt]`,

      c: `// count ways`,
      cpp: `int ways(vector<int>& coins,int amt){
    vector<int> dp(amt+1,0);
    dp[0]=1;

    for(int c:coins){
        for(int t=c;t<=amt;t++){
            dp[t]+=dp[t-c];
        }
    }
    return dp[amt];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Unbounded Knapsack',
    difficulty: 'Medium',
    description: `Max value with unlimited items.`,
    inputExample: 'wt=[2,4,6], val=[5,11,13], W=10',
    outputExample: '27',
    explanation: `Reuse same item multiple times.`,
    code: {
      java: `class Main{
  static int knap(int[] wt,int[] val,int W){
    int[] dp=new int[W+1];

    for(int i=0;i<wt.length;i++){
      for(int w=wt[i];w<=W;w++){
        dp[w]=Math.max(dp[w],
          val[i]+dp[w-wt[i]]);
      }
    }
    return dp[W];
  }
}`,

      python: `def knap(wt,val,W):
    dp=[0]*(W+1)

    for i in range(len(wt)):
        for w in range(wt[i],W+1):
            dp[w]=max(dp[w],
                val[i]+dp[w-wt[i]])

    return dp[W]`,

      c: `// reuse items`,
      cpp: `int knap(vector<int>& wt,vector<int>& val,int W){
    vector<int> dp(W+1,0);

    for(int i=0;i<wt.size();i++){
        for(int w=wt[i];w<=W;w++){
            dp[w]=max(dp[w],
                val[i]+dp[w-wt[i]]);
        }
    }
    return dp[W];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Rod Cutting Problem',
    difficulty: 'Medium',
    description: `Max profit by cutting rod.`,
    inputExample: 'price=[2,5,7,8], n=5',
    outputExample: '12',
    explanation: `Same as unbounded knapsack.`,
    code: {
      java: `class Main{
  static int rod(int[] price,int n){
    int[] dp=new int[n+1];

    for(int i=1;i<=n;i++){
      for(int j=0;j<i;j++){
        dp[i]=Math.max(dp[i],
          price[j]+dp[i-j-1]);
      }
    }
    return dp[n];
  }
}`,

      python: `def rod(price,n):
    dp=[0]*(n+1)

    for i in range(1,n+1):
        for j in range(i):
            dp[i]=max(dp[i],
                price[j]+dp[i-j-1])

    return dp[n]`,

      c: `// rod dp`,
      cpp: `int rod(vector<int>& price,int n){
    vector<int> dp(n+1,0);

    for(int i=1;i<=n;i++){
        for(int j=0;j<i;j++){
            dp[i]=max(dp[i],
                price[j]+dp[i-j-1]);
        }
    }
    return dp[n];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Print Longest Common Subsequence',
    difficulty: 'Medium',
    description: `Return the actual LCS string.`,
    inputExample: 's1="abcde", s2="ace"',
    outputExample: '"ace"',
    explanation: `Backtrack from dp table.`,
    code: {
      java: `class Main{
  static String printLCS(String a,String b){
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

    StringBuilder res=new StringBuilder();
    int i=n,j=m;

    while(i>0 && j>0){
      if(a.charAt(i-1)==b.charAt(j-1)){
        res.append(a.charAt(i-1));
        i--; j--;
      } else if(dp[i-1][j]>dp[i][j-1]) i--;
      else j--;
    }

    return res.reverse().toString();
  }
}`,

      python: `def print_lcs(a,b):
    n,m=len(a),len(b)
    dp=[[0]*(m+1) for _ in range(n+1)]

    for i in range(1,n+1):
        for j in range(1,m+1):
            if a[i-1]==b[j-1]:
                dp[i][j]=1+dp[i-1][j-1]
            else:
                dp[i][j]=max(dp[i-1][j],dp[i][j-1])

    i,j=n,m
    res=[]

    while i>0 and j>0:
        if a[i-1]==b[j-1]:
            res.append(a[i-1])
            i-=1; j-=1
        elif dp[i-1][j]>dp[i][j-1]:
            i-=1
        else:
            j-=1

    return ''.join(reversed(res))`,

      c: `// backtracking`,
      cpp: `string printLCS(string a,string b){
    int n=a.size(),m=b.size();
    vector<vector<int>> dp(n+1,vector<int>(m+1,0));

    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            if(a[i-1]==b[j-1])
                dp[i][j]=1+dp[i-1][j-1];
            else
                dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
        }
    }

    string res="";
    int i=n,j=m;

    while(i>0 && j>0){
        if(a[i-1]==b[j-1]){
            res+=a[i-1];
            i--; j--;
        } else if(dp[i-1][j]>dp[i][j-1]) i--;
        else j--;
    }

    reverse(res.begin(),res.end());
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Longest Common Substring',
    difficulty: 'Medium',
    description: `Find longest contiguous substring.`,
    inputExample: 's1="abcde", s2="abfce"',
    outputExample: '2',
    explanation: `Reset to 0 if mismatch.`,
    code: {
      java: `class Main{
  static int lcsStr(String a,String b){
    int n=a.length(),m=b.length();
    int[][] dp=new int[n+1][m+1];
    int max=0;

    for(int i=1;i<=n;i++){
      for(int j=1;j<=m;j++){
        if(a.charAt(i-1)==b.charAt(j-1)){
          dp[i][j]=1+dp[i-1][j-1];
          max=Math.max(max,dp[i][j]);
        }
      }
    }
    return max;
  }
}`,

      python: `def lcs_str(a,b):
    n,m=len(a),len(b)
    dp=[[0]*(m+1) for _ in range(n+1)]
    res=0

    for i in range(1,n+1):
        for j in range(1,m+1):
            if a[i-1]==b[j-1]:
                dp[i][j]=1+dp[i-1][j-1]
                res=max(res,dp[i][j])

    return res`,

      c: `// substring dp`,
      cpp: `int lcsStr(string a,string b){
    int n=a.size(),m=b.size();
    vector<vector<int>> dp(n+1,vector<int>(m+1,0));
    int res=0;

    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            if(a[i-1]==b[j-1]){
                dp[i][j]=1+dp[i-1][j-1];
                res=max(res,dp[i][j]);
            }
        }
    }
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Longest Palindromic Subsequence',
    difficulty: 'Medium',
    description: `Find longest palindromic subsequence.`,
    inputExample: 's="bbbab"',
    outputExample: '4',
    explanation: `LCS of string and its reverse.`,
    code: {
      java: `class Main{
  static int lps(String s){
    String r=new StringBuilder(s).reverse().toString();
    int n=s.length();
    int[][] dp=new int[n+1][n+1];

    for(int i=1;i<=n;i++){
      for(int j=1;j<=n;j++){
        if(s.charAt(i-1)==r.charAt(j-1))
          dp[i][j]=1+dp[i-1][j-1];
        else
          dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
      }
    }
    return dp[n][n];
  }
}`,

      python: `def lps(s):
    r=s[::-1]
    n=len(s)
    dp=[[0]*(n+1) for _ in range(n+1)]

    for i in range(1,n+1):
        for j in range(1,n+1):
            if s[i-1]==r[j-1]:
                dp[i][j]=1+dp[i-1][j-1]
            else:
                dp[i][j]=max(dp[i-1][j],dp[i][j-1])

    return dp[n][n]`,

      c: `// lcs reverse`,
      cpp: `int lps(string s){
    string r=s;
    reverse(r.begin(),r.end());
    int n=s.size();

    vector<vector<int>> dp(n+1,vector<int>(n+1,0));

    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if(s[i-1]==r[j-1])
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
    category: 'Dynamic Programming',
    title: 'Minimum Insertions to Make String Palindrome',
    difficulty: 'Medium',
    description: `Minimum insertions to make palindrome.`,
    inputExample: 's="abcaa"',
    outputExample: '2',
    explanation: `n - LPS`,
    code: {
      java: `class Main{
  static int minInsert(String s){
    String r=new StringBuilder(s).reverse().toString();
    int n=s.length();
    int[][] dp=new int[n+1][n+1];

    for(int i=1;i<=n;i++){
      for(int j=1;j<=n;j++){
        if(s.charAt(i-1)==r.charAt(j-1))
          dp[i][j]=1+dp[i-1][j-1];
        else
          dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
      }
    }
    return n-dp[n][n];
  }
}`,

      python: `def min_insert(s):
    r=s[::-1]
    n=len(s)
    dp=[[0]*(n+1) for _ in range(n+1)]

    for i in range(1,n+1):
        for j in range(1,n+1):
            if s[i-1]==r[j-1]:
                dp[i][j]=1+dp[i-1][j-1]
            else:
                dp[i][j]=max(dp[i-1][j],dp[i][j-1])

    return n-dp[n][n]`,

      c: `// n - lps`,
      cpp: `int minInsert(string s){
    string r=s;
    reverse(r.begin(),r.end());
    int n=s.size();

    vector<vector<int>> dp(n+1,vector<int>(n+1,0));

    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if(s[i-1]==r[j-1])
                dp[i][j]=1+dp[i-1][j-1];
            else
                dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
        }
    }
    return n-dp[n][n];
}`
    }
  },
   {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Minimum Insertions/Deletions to Convert String',
    difficulty: 'Medium',
    description: `Convert string a to b using min insertions & deletions.`,
    inputExample: 'a="heap", b="pea"',
    outputExample: '3',
    explanation: `operations = (n - LCS) + (m - LCS)`,
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

  static int convert(String a,String b){
    int l=lcs(a,b);
    return (a.length()-l)+(b.length()-l);
  }
}`,

      python: `def convert(a,b):
    n,m=len(a),len(b)
    dp=[[0]*(m+1) for _ in range(n+1)]

    for i in range(1,n+1):
        for j in range(1,m+1):
            if a[i-1]==b[j-1]:
                dp[i][j]=1+dp[i-1][j-1]
            else:
                dp[i][j]=max(dp[i-1][j],dp[i][j-1])

    l=dp[n][m]
    return (n-l)+(m-l)`,

      c: `// LCS based`,
      cpp: `int convert(string a,string b){
    int n=a.size(),m=b.size();
    vector<vector<int>> dp(n+1,vector<int>(m+1,0));

    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            if(a[i-1]==b[j-1])
                dp[i][j]=1+dp[i-1][j-1];
            else
                dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
        }
    }

    int l=dp[n][m];
    return (n-l)+(m-l);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Shortest Common Supersequence',
    difficulty: 'Medium',
    description: `Find shortest string containing both strings.`,
    inputExample: 'a="abac", b="cab"',
    outputExample: '"cabac"',
    explanation: `Build using LCS backtracking.`,
    code: {
      java: `class Main{
  static String scs(String a,String b){
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

    StringBuilder res=new StringBuilder();
    int i=n,j=m;

    while(i>0 && j>0){
      if(a.charAt(i-1)==b.charAt(j-1)){
        res.append(a.charAt(i-1));
        i--; j--;
      } else if(dp[i-1][j]>dp[i][j-1]){
        res.append(a.charAt(i-1));
        i--;
      } else{
        res.append(b.charAt(j-1));
        j--;
      }
    }

    while(i>0) res.append(a.charAt(--i));
    while(j>0) res.append(b.charAt(--j));

    return res.reverse().toString();
  }
}`,

      python: `def scs(a,b):
    n,m=len(a),len(b)
    dp=[[0]*(m+1) for _ in range(n+1)]

    for i in range(1,n+1):
        for j in range(1,m+1):
            if a[i-1]==b[j-1]:
                dp[i][j]=1+dp[i-1][j-1]
            else:
                dp[i][j]=max(dp[i-1][j],dp[i][j-1])

    i,j=n,m
    res=[]

    while i>0 and j>0:
        if a[i-1]==b[j-1]:
            res.append(a[i-1])
            i-=1; j-=1
        elif dp[i-1][j]>dp[i][j-1]:
            res.append(a[i-1])
            i-=1
        else:
            res.append(b[j-1])
            j-=1

    while i>0:
        res.append(a[i-1]); i-=1
    while j>0:
        res.append(b[j-1]); j-=1

    return ''.join(reversed(res))`,

      c: `// scs`,
      cpp: `string scs(string a,string b){
    int n=a.size(),m=b.size();
    vector<vector<int>> dp(n+1,vector<int>(m+1,0));

    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            if(a[i-1]==b[j-1])
                dp[i][j]=1+dp[i-1][j-1];
            else
                dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
        }
    }

    string res="";
    int i=n,j=m;

    while(i>0 && j>0){
        if(a[i-1]==b[j-1]){
            res+=a[i-1]; i--; j--;
        } else if(dp[i-1][j]>dp[i][j-1]){
            res+=a[i-1]; i--;
        } else{
            res+=b[j-1]; j--;
        }
    }

    while(i>0) res+=a[--i];
    while(j>0) res+=b[--j];

    reverse(res.begin(),res.end());
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Distinct Subsequences',
    difficulty: 'Hard',
    description: `Count ways string t appears in s.`,
    inputExample: 's="babgbag", t="bag"',
    outputExample: '5',
    explanation: `dp[i][j] = take + not take`,
    code: {
      java: `class Main{
  static int count(String s,String t){
    int n=s.length(),m=t.length();
    int[][] dp=new int[n+1][m+1];

    for(int i=0;i<=n;i++) dp[i][0]=1;

    for(int i=1;i<=n;i++){
      for(int j=1;j<=m;j++){
        if(s.charAt(i-1)==t.charAt(j-1))
          dp[i][j]=dp[i-1][j-1]+dp[i-1][j];
        else
          dp[i][j]=dp[i-1][j];
      }
    }
    return dp[n][m];
  }
}`,

      python: `def distinct(s,t):
    n,m=len(s),len(t)
    dp=[[0]*(m+1) for _ in range(n+1)]

    for i in range(n+1):
        dp[i][0]=1

    for i in range(1,n+1):
        for j in range(1,m+1):
            if s[i-1]==t[j-1]:
                dp[i][j]=dp[i-1][j-1]+dp[i-1][j]
            else:
                dp[i][j]=dp[i-1][j]

    return dp[n][m]`,

      c: `// count subsequences`,
      cpp: `int distinct(string s,string t){
    int n=s.size(),m=t.size();
    vector<vector<int>> dp(n+1,vector<int>(m+1,0));

    for(int i=0;i<=n;i++) dp[i][0]=1;

    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            if(s[i-1]==t[j-1])
                dp[i][j]=dp[i-1][j-1]+dp[i-1][j];
            else
                dp[i][j]=dp[i-1][j];
        }
    }
    return dp[n][m];
}`
    }
  },


  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Wildcard Matching',
    difficulty: 'Hard',
    description: `Match string with pattern (*, ?).`,
    inputExample: 's="aa", p="*"',
    outputExample: 'true',
    explanation: `* matches multiple, ? matches one.`,
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
        if(p.charAt(j-1)=='?' || s.charAt(i-1)==p.charAt(j-1))
          dp[i][j]=dp[i-1][j-1];
        else if(p.charAt(j-1)=='*')
          dp[i][j]=dp[i-1][j] || dp[i][j-1];
      }
    }
    return dp[n][m];
  }
}`,

      python: `def wildcard(s,p):
    n,m=len(s),len(p)
    dp=[[False]*(m+1) for _ in range(n+1)]

    dp[0][0]=True

    for j in range(1,m+1):
        if p[j-1]=='*':
            dp[0][j]=dp[0][j-1]

    for i in range(1,n+1):
        for j in range(1,m+1):
            if p[j-1]=='?' or s[i-1]==p[j-1]:
                dp[i][j]=dp[i-1][j-1]
            elif p[j-1]=='*':
                dp[i][j]=dp[i-1][j] or dp[i][j-1]

    return dp[n][m]`,

      c: `// wildcard dp`,
      cpp: `bool wildcard(string s,string p){
    int n=s.size(),m=p.size();
    vector<vector<bool>> dp(n+1,vector<bool>(m+1,false));

    dp[0][0]=true;

    for(int j=1;j<=m;j++){
        if(p[j-1]=='*')
            dp[0][j]=dp[0][j-1];
    }

    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            if(p[j-1]=='?' || s[i-1]==p[j-1])
                dp[i][j]=dp[i-1][j-1];
            else if(p[j-1]=='*')
                dp[i][j]=dp[i-1][j] || dp[i][j-1];
        }
    }
    return dp[n][m];
}`
    }
  },
   {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    description: `Find max profit with only one transaction.`,
    inputExample: '[7,1,5,3,6,4]',
    outputExample: '5',
    explanation: `Track minimum price and max profit.`,
    code: {
      java: `class Main{
  static int maxProfit(int[] arr){
    int min=Integer.MAX_VALUE,profit=0;

    for(int price:arr){
      min=Math.min(min,price);
      profit=Math.max(profit,price-min);
    }
    return profit;
  }
}`,

      python: `def max_profit(arr):
    min_price=float('inf')
    profit=0

    for p in arr:
        min_price=min(min_price,p)
        profit=max(profit,p-min_price)

    return profit`,

      c: `int maxProfit(int arr[],int n){
    int min=INT_MAX,profit=0;

    for(int i=0;i<n;i++){
        if(arr[i]<min) min=arr[i];
        if(arr[i]-min>profit)
            profit=arr[i]-min;
    }
    return profit;
}`,

      cpp: `int maxProfit(vector<int>& arr){
    int minP=INT_MAX,profit=0;

    for(int p:arr){
        minP=min(minP,p);
        profit=max(profit,p-minP);
    }
    return profit;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Buy and Sell Stock II',
    difficulty: 'Medium',
    description: `Max profit with unlimited transactions.`,
    inputExample: '[7,1,5,3,6,4]',
    outputExample: '7',
    explanation: `Sum all increasing differences.`,
    code: {
      java: `class Main{
  static int maxProfit(int[] arr){
    int profit=0;

    for(int i=1;i<arr.length;i++){
      if(arr[i]>arr[i-1])
        profit+=arr[i]-arr[i-1];
    }
    return profit;
  }
}`,

      python: `def max_profit(arr):
    profit=0

    for i in range(1,len(arr)):
        if arr[i]>arr[i-1]:
            profit+=arr[i]-arr[i-1]

    return profit`,

      c: `int maxProfit(int arr[],int n){
    int profit=0;

    for(int i=1;i<n;i++){
        if(arr[i]>arr[i-1])
            profit+=arr[i]-arr[i-1];
    }
    return profit;
}`,

      cpp: `int maxProfit(vector<int>& arr){
    int profit=0;

    for(int i=1;i<arr.size();i++){
        if(arr[i]>arr[i-1])
            profit+=arr[i]-arr[i-1];
    }
    return profit;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Buy and Sell Stock III',
    difficulty: 'Hard',
    description: `Max profit with at most 2 transactions.`,
    inputExample: '[3,3,5,0,0,3,1,4]',
    outputExample: '6',
    explanation: `DP with transaction limit.`,
    code: {
      java: `class Main{
  static int maxProfit(int[] arr){
    int n=arr.length;
    int[][][] dp=new int[n][2][3];

    for(int i=n-1;i>=0;i--){
      for(int buy=0;buy<=1;buy++){
        for(int cap=1;cap<=2;cap++){

          if(buy==1){
            dp[i][buy][cap]=Math.max(
              -arr[i]+dp[i+1][0][cap],
              dp[i+1][1][cap]
            );
          } else{
            dp[i][buy][cap]=Math.max(
              arr[i]+dp[i+1][1][cap-1],
              dp[i+1][0][cap]
            );
          }
        }
      }
    }
    return dp[0][1][2];
  }
}`,

      python: `def max_profit(arr):
    n=len(arr)
    dp=[[[0]*3 for _ in range(2)] for _ in range(n+1)]

    for i in range(n-1,-1,-1):
        for buy in range(2):
            for cap in range(1,3):

                if buy:
                    dp[i][buy][cap]=max(
                        -arr[i]+dp[i+1][0][cap],
                        dp[i+1][1][cap]
                    )
                else:
                    dp[i][buy][cap]=max(
                        arr[i]+dp[i+1][1][cap-1],
                        dp[i+1][0][cap]
                    )

    return dp[0][1][2]`,

      c: `// 3D DP`,
      cpp: `int maxProfit(vector<int>& arr){
    int n=arr.size();
    vector dp(n+1,vector(2,vector<int>(3,0)));

    for(int i=n-1;i>=0;i--){
        for(int buy=0;buy<=1;buy++){
            for(int cap=1;cap<=2;cap++){

                if(buy){
                    dp[i][buy][cap]=max(
                        -arr[i]+dp[i+1][0][cap],
                        dp[i+1][1][cap]
                    );
                } else{
                    dp[i][buy][cap]=max(
                        arr[i]+dp[i+1][1][cap-1],
                        dp[i+1][0][cap]
                    );
                }
            }
        }
    }
    return dp[0][1][2];
}`
    }
  },
   {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Buy and Sell Stock IV',
    difficulty: 'Hard',
    description: `Max profit with at most k transactions.`,
    inputExample: 'k=2, prices=[3,2,6,5,0,3]',
    outputExample: '7',
    explanation: `Generalization of Stock III using k transactions.`,
    code: {
      java: `class Main{
  static int maxProfit(int k,int[] arr){
    int n=arr.length;
    int[][][] dp=new int[n+1][2][k+1];

    for(int i=n-1;i>=0;i--){
      for(int buy=0;buy<=1;buy++){
        for(int cap=1;cap<=k;cap++){

          if(buy==1){
            dp[i][buy][cap]=Math.max(
              -arr[i]+dp[i+1][0][cap],
              dp[i+1][1][cap]
            );
          } else{
            dp[i][buy][cap]=Math.max(
              arr[i]+dp[i+1][1][cap-1],
              dp[i+1][0][cap]
            );
          }

        }
      }
    }
    return dp[0][1][k];
  }
}`,

      python: `def max_profit(k,arr):
    n=len(arr)
    dp=[[[0]*(k+1) for _ in range(2)] for _ in range(n+1)]

    for i in range(n-1,-1,-1):
        for buy in range(2):
            for cap in range(1,k+1):

                if buy:
                    dp[i][buy][cap]=max(
                        -arr[i]+dp[i+1][0][cap],
                        dp[i+1][1][cap]
                    )
                else:
                    dp[i][buy][cap]=max(
                        arr[i]+dp[i+1][1][cap-1],
                        dp[i+1][0][cap]
                    )

    return dp[0][1][k]`,

      c: `// k transactions DP`,
      cpp: `int maxProfit(int k, vector<int>& arr){
    int n=arr.size();
    vector dp(n+1, vector(2, vector<int>(k+1,0)));

    for(int i=n-1;i>=0;i--){
        for(int buy=0;buy<=1;buy++){
            for(int cap=1;cap<=k;cap++){

                if(buy){
                    dp[i][buy][cap]=max(
                        -arr[i]+dp[i+1][0][cap],
                        dp[i+1][1][cap]
                    );
                } else{
                    dp[i][buy][cap]=max(
                        arr[i]+dp[i+1][1][cap-1],
                        dp[i+1][0][cap]
                    );
                }

            }
        }
    }
    return dp[0][1][k];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Buy and Sell Stocks With Cooldown',
    difficulty: 'Medium',
    description: `After selling, you cannot buy next day.`,
    inputExample: '[1,2,3,0,2]',
    outputExample: '3',
    explanation: `Skip next day after selling.`,
    code: {
      java: `class Main{
  static int maxProfit(int[] arr){
    int n=arr.length;
    int[][] dp=new int[n+2][2];

    for(int i=n-1;i>=0;i--){
      for(int buy=0;buy<=1;buy++){

        if(buy==1){
          dp[i][buy]=Math.max(
            -arr[i]+dp[i+1][0],
            dp[i+1][1]
          );
        } else{
          dp[i][buy]=Math.max(
            arr[i]+dp[i+2][1],
            dp[i+1][0]
          );
        }

      }
    }
    return dp[0][1];
  }
}`,

      python: `def max_profit(arr):
    n=len(arr)
    dp=[[0]*2 for _ in range(n+2)]

    for i in range(n-1,-1,-1):
        for buy in range(2):

            if buy:
                dp[i][buy]=max(
                    -arr[i]+dp[i+1][0],
                    dp[i+1][1]
                )
            else:
                dp[i][buy]=max(
                    arr[i]+dp[i+2][1],
                    dp[i+1][0]
                )

    return dp[0][1]`,

      c: `// cooldown dp`,
      cpp: `int maxProfit(vector<int>& arr){
    int n=arr.size();
    vector<vector<int>> dp(n+2,vector<int>(2,0));

    for(int i=n-1;i>=0;i--){
        for(int buy=0;buy<=1;buy++){

            if(buy){
                dp[i][buy]=max(
                    -arr[i]+dp[i+1][0],
                    dp[i+1][1]
                );
            } else{
                dp[i][buy]=max(
                    arr[i]+dp[i+2][1],
                    dp[i+1][0]
                );
            }

        }
    }
    return dp[0][1];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Buy and Sell Stocks With Transaction Fee',
    difficulty: 'Medium',
    description: `Each transaction has a fee.`,
    inputExample: 'prices=[1,3,2,8,4,9], fee=2',
    outputExample: '8',
    explanation: `Subtract fee when selling.`,
    code: {
      java: `class Main{
  static int maxProfit(int[] arr,int fee){
    int n=arr.length;
    int[][] dp=new int[n+1][2];

    for(int i=n-1;i>=0;i--){
      for(int buy=0;buy<=1;buy++){

        if(buy==1){
          dp[i][buy]=Math.max(
            -arr[i]+dp[i+1][0],
            dp[i+1][1]
          );
        } else{
          dp[i][buy]=Math.max(
            arr[i]-fee+dp[i+1][1],
            dp[i+1][0]
          );
        }

      }
    }
    return dp[0][1];
  }
}`,

      python: `def max_profit(arr,fee):
    n=len(arr)
    dp=[[0]*2 for _ in range(n+1)]

    for i in range(n-1,-1,-1):
        for buy in range(2):

            if buy:
                dp[i][buy]=max(
                    -arr[i]+dp[i+1][0],
                    dp[i+1][1]
                )
            else:
                dp[i][buy]=max(
                    arr[i]-fee+dp[i+1][1],
                    dp[i+1][0]
                )

    return dp[0][1]`,

      c: `// fee dp`,
      cpp: `int maxProfit(vector<int>& arr,int fee){
    int n=arr.size();
    vector<vector<int>> dp(n+1,vector<int>(2,0));

    for(int i=n-1;i>=0;i--){
        for(int buy=0;buy<=1;buy++){

            if(buy){
                dp[i][buy]=max(
                    -arr[i]+dp[i+1][0],
                    dp[i+1][1]
                );
            } else{
                dp[i][buy]=max(
                    arr[i]-fee+dp[i+1][1],
                    dp[i+1][0]
                );
            }

        }
    }
    return dp[0][1];
}`
    }
  },
   {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Longest Increasing Subsequence',
    difficulty: 'Medium',
    description: `Find length of LIS.`,
    inputExample: '[10,9,2,5,3,7,101,18]',
    outputExample: '4',
    explanation: `Classic DP (O(n^2)).`,
    code: {
      java: `class Main{
  static int lis(int[] arr){
    int n=arr.length;
    int[] dp=new int[n];
    Arrays.fill(dp,1);

    int max=1;

    for(int i=0;i<n;i++){
      for(int j=0;j<i;j++){
        if(arr[j]<arr[i]){
          dp[i]=Math.max(dp[i],1+dp[j]);
        }
      }
      max=Math.max(max,dp[i]);
    }
    return max;
  }
}`,

      python: `def lis(arr):
    n=len(arr)
    dp=[1]*n

    for i in range(n):
        for j in range(i):
            if arr[j]<arr[i]:
                dp[i]=max(dp[i],1+dp[j])

    return max(dp)`,

      c: `int lis(int arr[],int n){
    int dp[n];
    for(int i=0;i<n;i++) dp[i]=1;

    int max=1;

    for(int i=0;i<n;i++){
        for(int j=0;j<i;j++){
            if(arr[j]<arr[i] && dp[i]<dp[j]+1)
                dp[i]=dp[j]+1;
        }
        if(dp[i]>max) max=dp[i];
    }
    return max;
}`,

      cpp: `int lis(vector<int>& arr){
    int n=arr.size();
    vector<int> dp(n,1);

    int maxi=1;

    for(int i=0;i<n;i++){
        for(int j=0;j<i;j++){
            if(arr[j]<arr[i])
                dp[i]=max(dp[i],1+dp[j]);
        }
        maxi=max(maxi,dp[i]);
    }
    return maxi;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Print Longest Increasing Subsequence',
    difficulty: 'Medium',
    description: `Print the actual LIS.`,
    inputExample: '[10,9,2,5,3,7,101,18]',
    outputExample: '[2,3,7,101]',
    explanation: `Use parent array to backtrack.`,
    code: {
      java: `class Main{
  static void printLIS(int[] arr){
    int n=arr.length;
    int[] dp=new int[n];
    int[] parent=new int[n];

    Arrays.fill(dp,1);

    for(int i=0;i<n;i++) parent[i]=i;

    int max=1,last=0;

    for(int i=0;i<n;i++){
      for(int j=0;j<i;j++){
        if(arr[j]<arr[i] && dp[j]+1>dp[i]){
          dp[i]=dp[j]+1;
          parent[i]=j;
        }
      }
      if(dp[i]>max){
        max=dp[i];
        last=i;
      }
    }

    List<Integer> res=new ArrayList<>();

    while(parent[last]!=last){
      res.add(arr[last]);
      last=parent[last];
    }
    res.add(arr[last]);

    Collections.reverse(res);
    System.out.println(res);
  }
}`,

      python: `def print_lis(arr):
    n=len(arr)
    dp=[1]*n
    parent=list(range(n))

    max_len=1
    last=0

    for i in range(n):
        for j in range(i):
            if arr[j]<arr[i] and dp[j]+1>dp[i]:
                dp[i]=dp[j]+1
                parent[i]=j

        if dp[i]>max_len:
            max_len=dp[i]
            last=i

    res=[]
    while parent[last]!=last:
        res.append(arr[last])
        last=parent[last]
    res.append(arr[last])

    return res[::-1]`,

      c: `// parent tracking`,
      cpp: `vector<int> printLIS(vector<int>& arr){
    int n=arr.size();
    vector<int> dp(n,1),parent(n);

    for(int i=0;i<n;i++) parent[i]=i;

    int maxLen=1,last=0;

    for(int i=0;i<n;i++){
        for(int j=0;j<i;j++){
            if(arr[j]<arr[i] && dp[j]+1>dp[i]){
                dp[i]=dp[j]+1;
                parent[i]=j;
            }
        }
        if(dp[i]>maxLen){
            maxLen=dp[i];
            last=i;
        }
    }

    vector<int> res;
    while(parent[last]!=last){
        res.push_back(arr[last]);
        last=parent[last];
    }
    res.push_back(arr[last]);

    reverse(res.begin(),res.end());
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Longest Increasing Subsequence (Optimized)',
    difficulty: 'Medium',
    description: `Find LIS using binary search.`,
    inputExample: '[10,9,2,5,3,7,101,18]',
    outputExample: '4',
    explanation: `Use patience sorting (O(n log n)).`,
    code: {
      java: `class Main{
  static int lis(int[] arr){
    ArrayList<Integer> list=new ArrayList<>();

    for(int num:arr){
      int idx=Collections.binarySearch(list,num);

      if(idx<0) idx=-(idx+1);

      if(idx==list.size()) list.add(num);
      else list.set(idx,num);
    }
    return list.size();
  }
}`,

      python: `import bisect

def lis(arr):
    temp=[]

    for num in arr:
        i=bisect.bisect_left(temp,num)

        if i==len(temp):
            temp.append(num)
        else:
            temp[i]=num

    return len(temp)`,

      c: `// binary search LIS`,
      cpp: `int lis(vector<int>& arr){
    vector<int> temp;

    for(int num:arr){
        auto it=lower_bound(temp.begin(),temp.end(),num);

        if(it==temp.end())
            temp.push_back(num);
        else
            *it=num;
    }
    return temp.size();
}`
    }
  },
   {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Largest Divisible Subset',
    difficulty: 'Medium',
    description: `Find largest subset where every pair is divisible.`,
    inputExample: '[1,2,4,8]',
    outputExample: '[1,2,4,8]',
    explanation: `Sort + LIS style with divisibility.`,
    code: {
      java: `class Main{
  static List<Integer> solve(int[] arr){
    Arrays.sort(arr);
    int n=arr.length;

    int[] dp=new int[n];
    int[] parent=new int[n];
    Arrays.fill(dp,1);

    for(int i=0;i<n;i++) parent[i]=i;

    int max=1,last=0;

    for(int i=0;i<n;i++){
      for(int j=0;j<i;j++){
        if(arr[i]%arr[j]==0 && dp[j]+1>dp[i]){
          dp[i]=dp[j]+1;
          parent[i]=j;
        }
      }
      if(dp[i]>max){
        max=dp[i];
        last=i;
      }
    }

    List<Integer> res=new ArrayList<>();
    while(parent[last]!=last){
      res.add(arr[last]);
      last=parent[last];
    }
    res.add(arr[last]);

    Collections.reverse(res);
    return res;
  }
}`,

      python: `def solve(arr):
    arr.sort()
    n=len(arr)
    dp=[1]*n
    parent=list(range(n))

    max_len=1
    last=0

    for i in range(n):
        for j in range(i):
            if arr[i]%arr[j]==0 and dp[j]+1>dp[i]:
                dp[i]=dp[j]+1
                parent[i]=j

        if dp[i]>max_len:
            max_len=dp[i]
            last=i

    res=[]
    while parent[last]!=last:
        res.append(arr[last])
        last=parent[last]
    res.append(arr[last])

    return res[::-1]`,

      c: `// similar to LIS`,
      cpp: `vector<int> solve(vector<int>& arr){
    sort(arr.begin(),arr.end());
    int n=arr.size();

    vector<int> dp(n,1),parent(n);
    for(int i=0;i<n;i++) parent[i]=i;

    int maxLen=1,last=0;

    for(int i=0;i<n;i++){
        for(int j=0;j<i;j++){
            if(arr[i]%arr[j]==0 && dp[j]+1>dp[i]){
                dp[i]=dp[j]+1;
                parent[i]=j;
            }
        }
        if(dp[i]>maxLen){
            maxLen=dp[i];
            last=i;
        }
    }

    vector<int> res;
    while(parent[last]!=last){
        res.push_back(arr[last]);
        last=parent[last];
    }
    res.push_back(arr[last]);

    reverse(res.begin(),res.end());
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Longest String Chain',
    difficulty: 'Medium',
    description: `Find longest chain of words.`,
    inputExample: '["a","b","ba","bca","bda","bdca"]',
    outputExample: '4',
    explanation: `Check if one string can form another by adding char.`,
    code: {
      java: `class Main{
  static boolean check(String a,String b){
    if(a.length()+1!=b.length()) return false;

    int i=0,j=0;
    while(j<b.length()){
      if(i<a.length() && a.charAt(i)==b.charAt(j)){
        i++; j++;
      } else j++;
    }
    return i==a.length();
  }

  static int solve(String[] arr){
    Arrays.sort(arr,(x,y)->x.length()-y.length());
    int n=arr.length;
    int[] dp=new int[n];
    Arrays.fill(dp,1);

    int max=1;

    for(int i=0;i<n;i++){
      for(int j=0;j<i;j++){
        if(check(arr[j],arr[i]) && dp[j]+1>dp[i]){
          dp[i]=dp[j]+1;
        }
      }
      max=Math.max(max,dp[i]);
    }
    return max;
  }
}`,

      python: `def check(a,b):
    if len(a)+1!=len(b): return False

    i=j=0
    while j<len(b):
        if i<len(a) and a[i]==b[j]:
            i+=1; j+=1
        else:
            j+=1
    return i==len(a)

def solve(arr):
    arr.sort(key=len)
    n=len(arr)
    dp=[1]*n

    for i in range(n):
        for j in range(i):
            if check(arr[j],arr[i]):
                dp[i]=max(dp[i],dp[j]+1)

    return max(dp)`,

      c: `// string LIS`,
      cpp: `bool check(string a,string b){
    if(a.size()+1!=b.size()) return false;

    int i=0,j=0;
    while(j<b.size()){
        if(i<a.size() && a[i]==b[j]){
            i++; j++;
        } else j++;
    }
    return i==a.size();
}

int solve(vector<string>& arr){
    sort(arr.begin(),arr.end(),
         [](string &a,string &b){
           return a.size()<b.size();
         });

    int n=arr.size();
    vector<int> dp(n,1);

    int res=1;

    for(int i=0;i<n;i++){
        for(int j=0;j<i;j++){
            if(check(arr[j],arr[i]))
                dp[i]=max(dp[i],dp[j]+1);
        }
        res=max(res,dp[i]);
    }
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Longest Bitonic Subsequence',
    difficulty: 'Medium',
    description: `First increasing then decreasing subsequence.`,
    inputExample: '[1,11,2,10,4,5,2,1]',
    outputExample: '6',
    explanation: `LIS + LDS.`,
    code: {
      java: `class Main{
  static int solve(int[] arr){
    int n=arr.length;
    int[] lis=new int[n];
    int[] lds=new int[n];

    Arrays.fill(lis,1);
    Arrays.fill(lds,1);

    for(int i=0;i<n;i++){
      for(int j=0;j<i;j++){
        if(arr[j]<arr[i])
          lis[i]=Math.max(lis[i],lis[j]+1);
      }
    }

    for(int i=n-1;i>=0;i--){
      for(int j=n-1;j>i;j--){
        if(arr[j]<arr[i])
          lds[i]=Math.max(lds[i],lds[j]+1);
      }
    }

    int max=0;
    for(int i=0;i<n;i++){
      max=Math.max(max,lis[i]+lds[i]-1);
    }
    return max;
  }
}`,

      python: `def solve(arr):
    n=len(arr)
    lis=[1]*n
    lds=[1]*n

    for i in range(n):
        for j in range(i):
            if arr[j]<arr[i]:
                lis[i]=max(lis[i],lis[j]+1)

    for i in range(n-1,-1,-1):
        for j in range(n-1,i,-1):
            if arr[j]<arr[i]:
                lds[i]=max(lds[i],lds[j]+1)

    return max(lis[i]+lds[i]-1 for i in range(n))`,

      c: `// LIS + LDS`,
      cpp: `int solve(vector<int>& arr){
    int n=arr.size();
    vector<int> lis(n,1),lds(n,1);

    for(int i=0;i<n;i++){
        for(int j=0;j<i;j++){
            if(arr[j]<arr[i])
                lis[i]=max(lis[i],lis[j]+1);
        }
    }

    for(int i=n-1;i>=0;i--){
        for(int j=n-1;j>i;j--){
            if(arr[j]<arr[i])
                lds[i]=max(lds[i],lds[j]+1);
        }
    }

    int res=0;
    for(int i=0;i<n;i++){
        res=max(res,lis[i]+lds[i]-1);
    }
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Number of Longest Increasing Subsequences',
    difficulty: 'Medium',
    description: `Count number of LIS.`,
    inputExample: '[1,3,5,4,7]',
    outputExample: '2',
    explanation: `Track count along with length.`,
    code: {
      java: `class Main{
  static int countLIS(int[] arr){
    int n=arr.length;
    int[] dp=new int[n];
    int[] count=new int[n];

    Arrays.fill(dp,1);
    Arrays.fill(count,1);

    int max=1;

    for(int i=0;i<n;i++){
      for(int j=0;j<i;j++){
        if(arr[j]<arr[i]){
          if(dp[j]+1>dp[i]){
            dp[i]=dp[j]+1;
            count[i]=count[j];
          } else if(dp[j]+1==dp[i]){
            count[i]+=count[j];
          }
        }
      }
      max=Math.max(max,dp[i]);
    }

    int res=0;
    for(int i=0;i<n;i++){
      if(dp[i]==max) res+=count[i];
    }
    return res;
  }
}`,

      python: `def count_lis(arr):
    n=len(arr)
    dp=[1]*n
    cnt=[1]*n

    for i in range(n):
        for j in range(i):
            if arr[j]<arr[i]:
                if dp[j]+1>dp[i]:
                    dp[i]=dp[j]+1
                    cnt[i]=cnt[j]
                elif dp[j]+1==dp[i]:
                    cnt[i]+=cnt[j]

    max_len=max(dp)
    return sum(cnt[i] for i in range(n) if dp[i]==max_len)`,

      c: `// count LIS`,
      cpp: `int countLIS(vector<int>& arr){
    int n=arr.size();
    vector<int> dp(n,1),cnt(n,1);

    int maxi=1;

    for(int i=0;i<n;i++){
        for(int j=0;j<i;j++){
            if(arr[j]<arr[i]){
                if(dp[j]+1>dp[i]){
                    dp[i]=dp[j]+1;
                    cnt[i]=cnt[j];
                } else if(dp[j]+1==dp[i]){
                    cnt[i]+=cnt[j];
                }
            }
        }
        maxi=max(maxi,dp[i]);
    }

    int res=0;
    for(int i=0;i<n;i++){
        if(dp[i]==maxi)
            res+=cnt[i];
    }
    return res;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Matrix Chain Multiplication',
    difficulty: 'Hard',
    description: `Find minimum multiplication cost.`,
    inputExample: 'arr=[10,20,30,40]',
    outputExample: '18000',
    explanation: `Partition at k → dp[i][j] = min over k`,
    code: {
      java: `class Main{
  static int solve(int[] arr){
    int n=arr.length;
    int[][] dp=new int[n][n];

    for(int len=2;len<n;len++){
      for(int i=1;i<n-len+1;i++){
        int j=i+len-1;
        dp[i][j]=Integer.MAX_VALUE;

        for(int k=i;k<j;k++){
          int cost=arr[i-1]*arr[k]*arr[j]
            +dp[i][k]+dp[k+1][j];

          dp[i][j]=Math.min(dp[i][j],cost);
        }
      }
    }
    return dp[1][n-1];
  }
}`,

      python: `def mcm(arr):
    n=len(arr)
    dp=[[0]*n for _ in range(n)]

    for l in range(2,n):
        for i in range(1,n-l+1):
            j=i+l-1
            dp[i][j]=float('inf')

            for k in range(i,j):
                cost=arr[i-1]*arr[k]*arr[j] + dp[i][k] + dp[k+1][j]
                dp[i][j]=min(dp[i][j],cost)

    return dp[1][n-1]`,

      c: `// partition dp`,
      cpp: `int mcm(vector<int>& arr){
    int n=arr.size();
    vector<vector<int>> dp(n,vector<int>(n,0));

    for(int len=2;len<n;len++){
        for(int i=1;i<n-len+1;i++){
            int j=i+len-1;
            dp[i][j]=INT_MAX;

            for(int k=i;k<j;k++){
                int cost=arr[i-1]*arr[k]*arr[j]
                          +dp[i][k]+dp[k+1][j];

                dp[i][j]=min(dp[i][j],cost);
            }
        }
    }
    return dp[1][n-1];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Minimum Cost to Cut the Stick',
    difficulty: 'Hard',
    description: `Min cost to cut stick at given positions.`,
    inputExample: 'n=7, cuts=[1,3,4,5]',
    outputExample: '16',
    explanation: `Same as MCM partitioning problem.`,
    code: {
      java: `class Main{
  static int solve(int n,int[] cuts){
    int c=cuts.length;
    int[] arr=new int[c+2];

    System.arraycopy(cuts,0,arr,1,c);
    arr[0]=0;
    arr[c+1]=n;

    Arrays.sort(arr);

    int[][] dp=new int[c+2][c+2];

    for(int len=2;len<c+2;len++){
      for(int i=0;i+len<c+2;i++){
        int j=i+len;
        dp[i][j]=Integer.MAX_VALUE;

        for(int k=i+1;k<j;k++){
          int cost=arr[j]-arr[i]
            +dp[i][k]+dp[k][j];

          dp[i][j]=Math.min(dp[i][j],cost);
        }

        if(dp[i][j]==Integer.MAX_VALUE)
          dp[i][j]=0;
      }
    }
    return dp[0][c+1];
  }
}`,

      python: `def solve(n,cuts):
    cuts=[0]+sorted(cuts)+[n]
    c=len(cuts)

    dp=[[0]*c for _ in range(c)]

    for l in range(2,c):
        for i in range(c-l):
            j=i+l
            dp[i][j]=float('inf')

            for k in range(i+1,j):
                cost=cuts[j]-cuts[i] + dp[i][k] + dp[k][j]
                dp[i][j]=min(dp[i][j],cost)

            if dp[i][j]==float('inf'):
                dp[i][j]=0

    return dp[0][c-1]`,

      c: `// stick dp`,
      cpp: `int solve(int n, vector<int>& cuts){
    cuts.push_back(0);
    cuts.push_back(n);
    sort(cuts.begin(),cuts.end());

    int c=cuts.size();
    vector<vector<int>> dp(c,vector<int>(c,0));

    for(int len=2;len<c;len++){
        for(int i=0;i+len<c;i++){
            int j=i+len;
            dp[i][j]=INT_MAX;

            for(int k=i+1;k<j;k++){
                int cost=cuts[j]-cuts[i]
                          +dp[i][k]+dp[k][j];
                dp[i][j]=min(dp[i][j],cost);
            }

            if(dp[i][j]==INT_MAX)
                dp[i][j]=0;
        }
    }
    return dp[0][c-1];
}`
    }
  },
    {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Burst Balloons',
    difficulty: 'Hard',
    description: `Max coins by bursting balloons wisely.`,
    inputExample: '[3,1,5,8]',
    outputExample: '167',
    explanation: `Try last balloon to burst.`,
    code: {
      java: `class Main{
  static int solve(int[] nums){
    int n=nums.length;
    int[] arr=new int[n+2];
    arr[0]=arr[n+1]=1;

    for(int i=0;i<n;i++)
      arr[i+1]=nums[i];

    int[][] dp=new int[n+2][n+2];

    for(int len=1;len<=n;len++){
      for(int i=1;i<=n-len+1;i++){
        int j=i+len-1;

        for(int k=i;k<=j;k++){
          int coins=arr[i-1]*arr[k]*arr[j+1]
            +dp[i][k-1]+dp[k+1][j];

          dp[i][j]=Math.max(dp[i][j],coins);
        }
      }
    }
    return dp[1][n];
  }
}`,

      python: `def solve(nums):
    n=len(nums)
    arr=[1]+nums+[1]

    dp=[[0]*(n+2) for _ in range(n+2)]

    for l in range(1,n+1):
        for i in range(1,n-l+2):
            j=i+l-1

            for k in range(i,j+1):
                coins=arr[i-1]*arr[k]*arr[j+1] + dp[i][k-1] + dp[k+1][j]
                dp[i][j]=max(dp[i][j],coins)

    return dp[1][n]`,

      c: `// burst balloons`,
      cpp: `int solve(vector<int>& nums){
    int n=nums.size();
    vector<int> arr(n+2,1);

    for(int i=0;i<n;i++)
        arr[i+1]=nums[i];

    vector<vector<int>> dp(n+2,vector<int>(n+2,0));

    for(int len=1;len<=n;len++){
        for(int i=1;i<=n-len+1;i++){
            int j=i+len-1;

            for(int k=i;k<=j;k++){
                int coins=arr[i-1]*arr[k]*arr[j+1]
                           +dp[i][k-1]+dp[k+1][j];

                dp[i][j]=max(dp[i][j],coins);
            }
        }
    }
    return dp[1][n];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Evaluate Boolean Expression to True',
    difficulty: 'Hard',
    description: `Count ways to parenthesize expression to true.`,
    inputExample: 'T|F&T',
    outputExample: '2',
    explanation: `Partition at operators.`,
    code: {
      java: `class Main{
  static int solve(String s){
    int n=s.length();
    int[][][] dp=new int[n][n][2];

    for(int i=0;i<n;i++){
      if(s.charAt(i)=='T') dp[i][i][1]=1;
      else if(s.charAt(i)=='F') dp[i][i][0]=1;
    }

    for(int len=3;len<=n;len+=2){
      for(int i=0;i<=n-len;i++){
        int j=i+len-1;

        for(int k=i+1;k<j;k+=2){
          char op=s.charAt(k);

          int lt=dp[i][k-1][1], lf=dp[i][k-1][0];
          int rt=dp[k+1][j][1], rf=dp[k+1][j][0];

          if(op=='&'){
            dp[i][j][1]+=lt*rt;
            dp[i][j][0]+=lt*rf + lf*rt + lf*rf;
          } else if(op=='|'){
            dp[i][j][1]+=lt*rt + lt*rf + lf*rt;
            dp[i][j][0]+=lf*rf;
          } else{
            dp[i][j][1]+=lt*rf + lf*rt;
            dp[i][j][0]+=lt*rt + lf*rf;
          }
        }
      }
    }
    return dp[0][n-1][1];
  }
}`,

      python: `def solve(s):
    n=len(s)
    dp=[[[0]*2 for _ in range(n)] for _ in range(n)]

    for i in range(n):
        if s[i]=='T': dp[i][i][1]=1
        elif s[i]=='F': dp[i][i][0]=1

    for l in range(3,n+1,2):
        for i in range(n-l+1):
            j=i+l-1

            for k in range(i+1,j,2):
                op=s[k]

                lt,lf=dp[i][k-1][1],dp[i][k-1][0]
                rt,rf=dp[k+1][j][1],dp[k+1][j][0]

                if op=='&':
                    dp[i][j][1]+=lt*rt
                    dp[i][j][0]+=lt*rf + lf*rt + lf*rf
                elif op=='|':
                    dp[i][j][1]+=lt*rt + lt*rf + lf*rt
                    dp[i][j][0]+=lf*rf
                else:
                    dp[i][j][1]+=lt*rf + lf*rt
                    dp[i][j][0]+=lt*rt + lf*rf

    return dp[0][n-1][1]`,

      c: `// boolean dp`,
      cpp: `int solve(string s){
    int n=s.size();
    vector dp(n,vector(n,vector<int>(2,0)));

    for(int i=0;i<n;i++){
        if(s[i]=='T') dp[i][i][1]=1;
        else if(s[i]=='F') dp[i][i][0]=1;
    }

    for(int len=3;len<=n;len+=2){
        for(int i=0;i<=n-len;i++){
            int j=i+len-1;

            for(int k=i+1;k<j;k+=2){
                char op=s[k];

                int lt=dp[i][k-1][1], lf=dp[i][k-1][0];
                int rt=dp[k+1][j][1], rf=dp[k+1][j][0];

                if(op=='&'){
                    dp[i][j][1]+=lt*rt;
                    dp[i][j][0]+=lt*rf + lf*rt + lf*rf;
                } else if(op=='|'){
                    dp[i][j][1]+=lt*rt + lt*rf + lf*rt;
                    dp[i][j][0]+=lf*rf;
                } else{
                    dp[i][j][1]+=lt*rf + lf*rt;
                    dp[i][j][0]+=lt*rt + lf*rf;
                }
            }
        }
    }
    return dp[0][n-1][1];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Palindrome Partitioning II',
    difficulty: 'Hard',
    description: `Min cuts to make all substrings palindrome.`,
    inputExample: '"aab"',
    outputExample: '1',
    explanation: `DP + palindrome checking.`,
    code: {
      java: `class Main{
  static int solve(String s){
    int n=s.length();
    int[] dp=new int[n];

    boolean[][] pal=new boolean[n][n];

    for(int i=n-1;i>=0;i--){
      dp[i]=Integer.MAX_VALUE;

      for(int j=i;j<n;j++){
        if(s.charAt(i)==s.charAt(j) &&
          (j-i<=2 || pal[i+1][j-1])){

          pal[i][j]=true;

          if(j==n-1)
            dp[i]=0;
          else
            dp[i]=Math.min(dp[i],1+dp[j+1]);
        }
      }
    }
    return dp[0];
  }
}`,

      python: `def solve(s):
    n=len(s)
    dp=[0]*n
    pal=[[False]*n for _ in range(n)]

    for i in range(n-1,-1,-1):
        dp[i]=float('inf')

        for j in range(i,n):
            if s[i]==s[j] and (j-i<=2 or pal[i+1][j-1]):
                pal[i][j]=True

                if j==n-1:
                    dp[i]=0
                else:
                    dp[i]=min(dp[i],1+dp[j+1])

    return dp[0]`,

      c: `// palindrome dp`,
      cpp: `int solve(string s){
    int n=s.size();
    vector<int> dp(n,0);
    vector<vector<bool>> pal(n,vector<bool>(n,false));

    for(int i=n-1;i>=0;i--){
        dp[i]=INT_MAX;

        for(int j=i;j<n;j++){
            if(s[i]==s[j] &&
              (j-i<=2 || pal[i+1][j-1])){

                pal[i][j]=true;

                if(j==n-1)
                    dp[i]=0;
                else
                    dp[i]=min(dp[i],1+dp[j+1]);
            }
        }
    }
    return dp[0];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Partition Array for Maximum Sum',
    difficulty: 'Medium',
    description: `Partition array into subarrays of size ≤ k.`,
    inputExample: 'arr=[1,15,7,9,2,5,10], k=3',
    outputExample: '84',
    explanation: `Take max in each partition.`,
    code: {
      java: `class Main{
  static int solve(int[] arr,int k){
    int n=arr.length;
    int[] dp=new int[n+1];

    for(int i=n-1;i>=0;i--){
      int max=0;
      int best=0;

      for(int j=i;j<Math.min(n,i+k);j++){
        max=Math.max(max,arr[j]);
        best=Math.max(best, max*(j-i+1)+dp[j+1]);
      }
      dp[i]=best;
    }
    return dp[0];
  }
}`,

      python: `def solve(arr,k):
    n=len(arr)
    dp=[0]*(n+1)

    for i in range(n-1,-1,-1):
        max_val=0
        best=0

        for j in range(i,min(n,i+k)):
            max_val=max(max_val,arr[j])
            best=max(best, max_val*(j-i+1)+dp[j+1])

        dp[i]=best

    return dp[0]`,

      c: `// partition max sum`,
      cpp: `int solve(vector<int>& arr,int k){
    int n=arr.size();
    vector<int> dp(n+1,0);

    for(int i=n-1;i>=0;i--){
        int maxVal=0, best=0;

        for(int j=i;j<min(n,i+k);j++){
            maxVal=max(maxVal,arr[j]);
            best=max(best, maxVal*(j-i+1)+dp[j+1]);
        }
        dp[i]=best;
    }
    return dp[0];
}`
    }
  },
    {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Maximum Rectangle Area with all 1s',
    difficulty: 'Hard',
    description: `Find largest rectangle of 1s in a binary matrix.`,
    inputExample: '[[1,0,1,0],[1,0,1,1],[1,1,1,1]]',
    outputExample: '4',
    explanation: `Convert rows into histogram and apply largest rectangle in histogram.`,
    code: {
      java: `class Main{
  static int largestHistogram(int[] h){
    Stack<Integer> st=new Stack<>();
    int max=0,n=h.length;

    for(int i=0;i<=n;i++){
      int cur=(i==n)?0:h[i];

      while(!st.isEmpty() && cur<h[st.peek()]){
        int height=h[st.pop()];
        int width=st.isEmpty()?i:i-st.peek()-1;
        max=Math.max(max,height*width);
      }
      st.push(i);
    }
    return max;
  }

  static int solve(int[][] mat){
    int n=mat.length,m=mat[0].length;
    int[] h=new int[m];
    int max=0;

    for(int i=0;i<n;i++){
      for(int j=0;j<m;j++){
        if(mat[i][j]==1) h[j]+=1;
        else h[j]=0;
      }
      max=Math.max(max,largestHistogram(h));
    }
    return max;
  }
}`,

      python: `def largest_histogram(h):
    stack=[]
    max_area=0
    n=len(h)

    for i in range(n+1):
        cur=0 if i==n else h[i]

        while stack and cur<h[stack[-1]]:
            height=h[stack.pop()]
            width=i if not stack else i-stack[-1]-1
            max_area=max(max_area,height*width)

        stack.append(i)

    return max_area

def solve(mat):
    n,m=len(mat),len(mat[0])
    h=[0]*m
    max_area=0

    for i in range(n):
        for j in range(m):
            if mat[i][j]==1:
                h[j]+=1
            else:
                h[j]=0

        max_area=max(max_area,largest_histogram(h))

    return max_area`,

      c: `// use histogram + stack`,
      cpp: `int largestHistogram(vector<int>& h){
    stack<int> st;
    int maxA=0,n=h.size();

    for(int i=0;i<=n;i++){
        int cur=(i==n)?0:h[i];

        while(!st.empty() && cur<h[st.top()]){
            int height=h[st.top()];
            st.pop();
            int width=st.empty()?i:i-st.top()-1;
            maxA=max(maxA,height*width);
        }
        st.push(i);
    }
    return maxA;
}

int solve(vector<vector<int>>& mat){
    int n=mat.size(),m=mat[0].size();
    vector<int> h(m,0);
    int maxA=0;

    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(mat[i][j]==1) h[j]++;
            else h[j]=0;
        }
        maxA=max(maxA,largestHistogram(h));
    }
    return maxA;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Dynamic Programming',
    title: 'Count Square Submatrices with All Ones',
    difficulty: 'Medium',
    description: `Count all square submatrices of 1s.`,
    inputExample: '[[1,1,1],[1,1,1],[1,1,1]]',
    outputExample: '14',
    explanation: `DP: cell = 1 + min(top, left, diagonal).`,
    code: {
      java: `class Main{
  static int solve(int[][] mat){
    int n=mat.length,m=mat[0].length;
    int[][] dp=new int[n][m];
    int count=0;

    for(int i=0;i<n;i++){
      for(int j=0;j<m;j++){
        if(i==0 || j==0){
          dp[i][j]=mat[i][j];
        } else if(mat[i][j]==1){
          dp[i][j]=1+Math.min(dp[i-1][j],
                      Math.min(dp[i][j-1],dp[i-1][j-1]));
        }
        count+=dp[i][j];
      }
    }
    return count;
  }
}`,

      python: `def solve(mat):
    n,m=len(mat),len(mat[0])
    dp=[[0]*m for _ in range(n)]
    count=0

    for i in range(n):
        for j in range(m):
            if i==0 or j==0:
                dp[i][j]=mat[i][j]
            elif mat[i][j]==1:
                dp[i][j]=1+min(
                    dp[i-1][j],
                    dp[i][j-1],
                    dp[i-1][j-1]
                )

            count+=dp[i][j]

    return count`,

      c: `// square dp`,
      cpp: `int solve(vector<vector<int>>& mat){
    int n=mat.size(),m=mat[0].size();
    vector<vector<int>> dp(n,vector<int>(m,0));

    int count=0;

    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(i==0 || j==0)
                dp[i][j]=mat[i][j];
            else if(mat[i][j]==1)
                dp[i][j]=1+min({dp[i-1][j],
                                dp[i][j-1],
                                dp[i-1][j-1]});

            count+=dp[i][j];
        }
    }
    return count;
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
        console.log(`Successfully processed ${problems.length} problems for Dynamic Programming`)
        
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
