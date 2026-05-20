import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'
import { fileURLToPath } from 'url'

export const problems = [
   {
    subject: 'Code',
    category: 'BackTracking',
    title: 'Remove Invalid Parentheses',
    difficulty: 'Hard',
    description: `Remove minimum invalid parentheses.`,
    inputExample: '"()())()"',
    outputExample: '["()()()", "(())()"]',
    explanation: `Use BFS to ensure minimum removals.`,
    code: {
      java: `class Main{
  static List<String> remove(String s){
    List<String> res=new ArrayList<>();
    Queue<String> q=new LinkedList<>();
    Set<String> vis=new HashSet<>();

    q.add(s);
    vis.add(s);
    boolean found=false;

    while(!q.isEmpty()){
      String cur=q.poll();

      if(isValid(cur)){
        res.add(cur);
        found=true;
      }

      if(found) continue;

      for(int i=0;i<cur.length();i++){
        if(cur.charAt(i)!='(' && cur.charAt(i)!=')') continue;

        String next=cur.substring(0,i)+cur.substring(i+1);
        if(!vis.contains(next)){
          vis.add(next);
          q.add(next);
        }
      }
    }
    return res;
  }

  static boolean isValid(String s){
    int count=0;
    for(char c:s.toCharArray()){
      if(c=='(') count++;
      if(c==')'){
        if(count==0) return false;
        count--;
      }
    }
    return count==0;
  }
}`,

      python: `from collections import deque

def removeInvalid(s):
    res=[]
    q=deque([s])
    vis=set([s])
    found=False

    def valid(x):
        cnt=0
        for c in x:
            if c=='(':
                cnt+=1
            elif c==')':
                if cnt==0:
                    return False
                cnt-=1
        return cnt==0

    while q:
        cur=q.popleft()

        if valid(cur):
            res.append(cur)
            found=True

        if found:
            continue

        for i in range(len(cur)):
            if cur[i] not in "()":
                continue
            nxt=cur[:i]+cur[i+1:]
            if nxt not in vis:
                vis.add(nxt)
                q.append(nxt)

    return res`,

      c: `// bfs approach`,
      cpp: `bool valid(string s){
    int cnt=0;
    for(char c:s){
        if(c=='(') cnt++;
        else if(c==')'){
            if(cnt==0) return false;
            cnt--;
        }
    }
    return cnt==0;
}`
    }
  },

  {
    subject: 'Code',
    category: 'BackTracking',
    title: 'Rat in a Maze',
    difficulty: 'Medium',
    description: `Find all paths from start to end.`,
    inputExample: 'matrix',
    outputExample: 'paths',
    explanation: `Use DFS + backtracking.`,
    code: {
      java: `class Main{
  static void solve(int i,int j,int[][] m,int n,String path,boolean[][] vis){
    if(i==n-1 && j==n-1){
      System.out.println(path);
      return;
    }

    String dir="DLRU";
    int di[]={1,0,0,-1};
    int dj[]={0,-1,1,0};

    for(int k=0;k<4;k++){
      int ni=i+di[k], nj=j+dj[k];

      if(ni>=0 && nj>=0 && ni<n && nj<n && m[ni][nj]==1 && !vis[ni][nj]){
        vis[i][j]=true;
        solve(ni,nj,m,n,path+dir.charAt(k),vis);
        vis[i][j]=false;
      }
    }
  }
}`,

      python: `def ratMaze(m,n):
    res=[]
    vis=[[False]*n for _ in range(n)]

    def dfs(i,j,path):
        if i==n-1 and j==n-1:
            res.append(path)
            return

        dirs="DLRU"
        di=[1,0,0,-1]
        dj=[0,-1,1,0]

        for k in range(4):
            ni,nj=i+di[k],j+dj[k]
            if 0<=ni<n and 0<=nj<n and m[ni][nj]==1 and not vis[ni][nj]:
                vis[i][j]=True
                dfs(ni,nj,path+dirs[k])
                vis[i][j]=False

    dfs(0,0,"")
    return res`,

      c: `// dfs path`,
      cpp: `void solve(int i,int j,vector<vector<int>>& m,int n,string path,vector<vector<int>>& vis){
    if(i==n-1 && j==n-1){
        cout<<path<<endl;
        return;
    }

    string dir="DLRU";
    int di[]={1,0,0,-1};
    int dj[]={0,-1,1,0};

    for(int k=0;k<4;k++){
        int ni=i+di[k], nj=j+dj[k];

        if(ni>=0 && nj>=0 && ni<n && nj<n && m[ni][nj]==1 && !vis[ni][nj]){
            vis[i][j]=1;
            solve(ni,nj,m,n,path+dir[k],vis);
            vis[i][j]=0;
        }
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'BackTracking',
    title: 'N Queen Problem (Print All Solutions)',
    difficulty: 'Hard',
    description: `Place N queens safely.`,
    inputExample: 'n=4',
    outputExample: 'all board configs',
    explanation: `Check column + diagonals.`,
    code: {
      java: `class Main{
  static boolean safe(int r,int c,char[][] b,int n){
    for(int i=0;i<c;i++)
      if(b[r][i]=='Q') return false;

    for(int i=r,j=c;i>=0 && j>=0;i--,j--)
      if(b[i][j]=='Q') return false;

    for(int i=r,j=c;i<n && j>=0;i++,j--)
      if(b[i][j]=='Q') return false;

    return true;
  }

  static void solve(int col,char[][] b,int n){
    if(col==n){
      for(char[] r:b)
        System.out.println(new String(r));
      System.out.println();
      return;
    }

    for(int i=0;i<n;i++){
      if(safe(i,col,b,n)){
        b[i][col]='Q';
        solve(col+1,b,n);
        b[i][col]='.';
      }
    }
  }
}`,

      python: `def nqueen(n):
    board=[["."]*n for _ in range(n)]
    res=[]

    def safe(r,c):
        for i in range(c):
            if board[r][i]=="Q":
                return False

        i,j=r,c
        while i>=0 and j>=0:
            if board[i][j]=="Q":
                return False
            i-=1;j-=1

        i,j=r,c
        while i<n and j>=0:
            if board[i][j]=="Q":
                return False
            i+=1;j-=1

        return True

    def solve(col):
        if col==n:
            res.append(["".join(r) for r in board])
            return

        for i in range(n):
            if safe(i,col):
                board[i][col]="Q"
                solve(col+1)
                board[i][col]="."

    solve(0)
    return res`,

      c: `// backtracking`,
      cpp: `bool safe(int r,int c,vector<string>& b,int n){
    for(int i=0;i<c;i++)
        if(b[r][i]=='Q') return false;

    for(int i=r,j=c;i>=0&&j>=0;i--,j--)
        if(b[i][j]=='Q') return false;

    for(int i=r,j=c;i<n&&j>=0;i++,j--)
        if(b[i][j]=='Q') return false;

    return true;
}`
    }
  },

  {
    subject: 'Code',
    category: 'BackTracking',
    title: 'Word Break - 2',
    difficulty: 'Hard',
    description: `Return all possible sentences.`,
    inputExample: 's="catsanddog"',
    outputExample: '["cats and dog","cat sand dog"]',
    explanation: `DFS + dictionary + memo.`,
    code: {
      java: `class Main{
  static List<String> dfs(String s,Set<String> dict,Map<String,List<String>> memo){
    if(memo.containsKey(s)) return memo.get(s);

    List<String> res=new ArrayList<>();

    if(s.length()==0){
      res.add("");
      return res;
    }

    for(String w:dict){
      if(s.startsWith(w)){
        List<String> sub=dfs(s.substring(w.length()),dict,memo);

        for(String t:sub){
          res.add(w + (t.isEmpty()?"":" "+t));
        }
      }
    }

    memo.put(s,res);
    return res;
  }
}`,

      python: `def wordBreak(s,wordDict):
    memo={}

    def dfs(s):
        if s in memo:
            return memo[s]

        if not s:
            return [""]

        res=[]
        for w in wordDict:
            if s.startswith(w):
                for sub in dfs(s[len(w):]):
                    res.append(w + ("" if sub=="" else " "+sub))

        memo[s]=res
        return res

    return dfs(s)`,

      c: `// recursion + memo`,
      cpp: `unordered_map<string,vector<string>> memo;

vector<string> dfs(string s,unordered_set<string>& dict){
    if(memo.count(s)) return memo[s];

    vector<string> res;

    if(s.empty()){
        res.push_back("");
        return res;
    }

    for(auto w:dict){
        if(s.find(w)==0){
            vector<string> sub=dfs(s.substr(w.size()),dict);

            for(auto t:sub){
                res.push_back(w + (t.empty()?"":" "+t));
            }
        }
    }

    return memo[s]=res;
}`
    }
  },
   {
    subject: 'Code',
    category: 'BackTracking',
    title: 'Solve Sudoku',
    difficulty: 'Hard',
    description: `Fill 9x9 Sudoku grid.`,
    inputExample: 'board',
    outputExample: 'solved board',
    explanation: `Try numbers 1–9 with validity check.`,
    code: {
      java: `class Main{
  static boolean solve(char[][] b){
    for(int i=0;i<9;i++){
      for(int j=0;j<9;j++){
        if(b[i][j]=='.'){
          for(char c='1';c<='9';c++){
            if(valid(b,i,j,c)){
              b[i][j]=c;
              if(solve(b)) return true;
              b[i][j]='.';
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  static boolean valid(char[][] b,int r,int c,char ch){
    for(int i=0;i<9;i++){
      if(b[r][i]==ch || b[i][c]==ch) return false;
      if(b[3*(r/3)+i/3][3*(c/3)+i%3]==ch) return false;
    }
    return true;
  }
}`,

      python: `def solveSudoku(board):
    def valid(r,c,ch):
        for i in range(9):
            if board[r][i]==ch or board[i][c]==ch:
                return False
            if board[3*(r//3)+i//3][3*(c//3)+i%3]==ch:
                return False
        return True

    def solve():
        for i in range(9):
            for j in range(9):
                if board[i][j]==".":
                    for c in "123456789":
                        if valid(i,j,c):
                            board[i][j]=c
                            if solve(): return True
                            board[i][j]="."
                    return False
        return True

    solve()`,

      c: `// sudoku recursion`,
      cpp: `bool valid(vector<vector<char>>& b,int r,int c,char ch){
    for(int i=0;i<9;i++){
        if(b[r][i]==ch || b[i][c]==ch) return false;
        if(b[3*(r/3)+i/3][3*(c/3)+i%3]==ch) return false;
    }
    return true;
}`
    }
  },

  {
    subject: 'Code',
    category: 'BackTracking',
    title: 'M-Coloring Problem',
    difficulty: 'Medium',
    description: `Color graph using M colors.`,
    inputExample: 'graph, m',
    outputExample: 'true/false',
    explanation: `Try all colors with safe check.`,
    code: {
      java: `class Main{
  static boolean solve(int node,int[] color,List<List<Integer>> g,int m){
    if(node==g.size()) return true;

    for(int c=1;c<=m;c++){
      if(isSafe(node,c,color,g)){
        color[node]=c;
        if(solve(node+1,color,g,m)) return true;
        color[node]=0;
      }
    }
    return false;
  }

  static boolean isSafe(int node,int c,int[] color,List<List<Integer>> g){
    for(int nei:g.get(node))
      if(color[nei]==c) return false;
    return true;
  }
}`,

      python: `def mColoring(graph,m):
    n=len(graph)
    color=[0]*n

    def safe(node,c):
        for nei in graph[node]:
            if color[nei]==c:
                return False
        return True

    def dfs(node):
        if node==n:
            return True

        for c in range(1,m+1):
            if safe(node,c):
                color[node]=c
                if dfs(node+1):
                    return True
                color[node]=0
        return False

    return dfs(0)`,

      c: `// graph coloring`,
      cpp: `bool dfs(int node,vector<int>& color,vector<vector<int>>& g,int m){
    if(node==g.size()) return true;

    for(int c=1;c<=m;c++){
        bool ok=true;
        for(int nei:g[node]){
            if(color[nei]==c){ ok=false; break; }
        }
        if(ok){
            color[node]=c;
            if(dfs(node+1,color,g,m)) return true;
            color[node]=0;
        }
    }
    return false;
}`
    }
  },

  {
    subject: 'Code',
    category: 'BackTracking',
    title: 'Palindrome Partitioning',
    difficulty: 'Medium',
    description: `All palindrome partitions.`,
    inputExample: '"aab"',
    outputExample: '[["a","a","b"],["aa","b"]]',
    explanation: `Check substring palindrome.`,
    code: {
      java: `class Main{
  static void dfs(int idx,String s,List<String> path,List<List<String>> res){
    if(idx==s.length()){
      res.add(new ArrayList<>(path));
      return;
    }

    for(int i=idx;i<s.length();i++){
      if(isPal(s,idx,i)){
        path.add(s.substring(idx,i+1));
        dfs(i+1,s,path,res);
        path.remove(path.size()-1);
      }
    }
  }

  static boolean isPal(String s,int l,int r){
    while(l<r){
      if(s.charAt(l++)!=s.charAt(r--)) return false;
    }
    return true;
  }
}`,

      python: `def partition(s):
    res=[]

    def isPal(x):
        return x==x[::-1]

    def dfs(idx,path):
        if idx==len(s):
            res.append(path[:])
            return

        for i in range(idx,len(s)):
            if isPal(s[idx:i+1]):
                path.append(s[idx:i+1])
                dfs(i+1,path)
                path.pop()

    dfs(0,[])
    return res`,

      c: `// recursion`,
      cpp: `bool isPal(string s,int l,int r){
    while(l<r){
        if(s[l++]!=s[r--]) return false;
    }
    return true;
}`
    }
  },

  {
    subject: 'Code',
    category: 'BackTracking',
    title: 'Partition Equal Subset Sum',
    difficulty: 'Medium',
    description: `Divide into equal sum subsets.`,
    inputExample: '[1,5,11,5]',
    outputExample: 'true',
    explanation: `Subset sum = total/2.`,
    code: {
      java: `class Main{
  static boolean dfs(int i,int sum,int[] arr,Boolean[][] dp){
    if(sum==0) return true;
    if(i==arr.length || sum<0) return false;

    if(dp[i][sum]!=null) return dp[i][sum];

    return dp[i][sum]= dfs(i+1,sum-arr[i],arr,dp) ||
                       dfs(i+1,sum,arr,dp);
  }
}`,

      python: `def canPartition(nums):
    s=sum(nums)
    if s%2: return False

    target=s//2
    dp=set([0])

    for num in nums:
        dp |= {x+num for x in dp}

    return target in dp`,

      c: `// subset sum`,
      cpp: `bool dfs(int i,int sum,vector<int>& arr,vector<vector<int>>& dp){
    if(sum==0) return true;
    if(i==arr.size() || sum<0) return false;

    if(dp[i][sum]!=-1) return dp[i][sum];

    return dp[i][sum]= dfs(i+1,sum-arr[i],arr,dp) ||
                       dfs(i+1,sum,arr,dp);
}`
    }
  },

  {
    subject: 'Code',
    category: 'BackTracking',
    title: 'Knight’s Tour',
    difficulty: 'Hard',
    description: `Visit all cells once.`,
    inputExample: 'n=8',
    outputExample: 'tour matrix',
    explanation: `Try all 8 moves.`,
    code: {
      java: `class Main{
  static int[] dx={2,1,-1,-2,-2,-1,1,2};
  static int[] dy={1,2,2,1,-1,-2,-2,-1};

  static boolean solve(int x,int y,int move,int[][] board,int n){
    if(move==n*n) return true;

    for(int i=0;i<8;i++){
      int nx=x+dx[i], ny=y+dy[i];

      if(nx>=0 && ny>=0 && nx<n && ny<n && board[nx][ny]==-1){
        board[nx][ny]=move;
        if(solve(nx,ny,move+1,board,n)) return true;
        board[nx][ny]=-1;
      }
    }
    return false;
  }
}`,

      python: `def knightTour(n):
    board=[[-1]*n for _ in range(n)]

    dx=[2,1,-1,-2,-2,-1,1,2]
    dy=[1,2,2,1,-1,-2,-2,-1]

    def solve(x,y,move):
        if move==n*n:
            return True

        for i in range(8):
            nx,ny=x+dx[i],y+dy[i]
            if 0<=nx<n and 0<=ny<n and board[nx][ny]==-1:
                board[nx][ny]=move
                if solve(nx,ny,move+1):
                    return True
                board[nx][ny]=-1
        return False

    board[0][0]=0
    solve(0,0,1)
    return board`,

      c: `// 8 moves`,
      cpp: `bool solve(int x,int y,int move,vector<vector<int>>& board,int n){
    if(move==n*n) return true;

    int dx[]={2,1,-1,-2,-2,-1,1,2};
    int dy[]={1,2,2,1,-1,-2,-2,-1};

    for(int i=0;i<8;i++){
        int nx=x+dx[i], ny=y+dy[i];

        if(nx>=0 && ny>=0 && nx<n && ny<n && board[nx][ny]==-1){
            board[nx][ny]=move;
            if(solve(nx,ny,move+1,board,n)) return true;
            board[nx][ny]=-1;
        }
    }
    return false;
}`
    }
  },
   {
    subject: 'Code',
    category: 'BackTracking',
    title: 'Subsets',
    difficulty: 'Easy',
    description: `Generate all subsets (power set).`,
    inputExample: '[1,2,3]',
    outputExample: '[[],[1],[2],[1,2]...]',
    explanation: `Pick / Not pick approach.`,
    code: {
      java: `class Main{
  static void dfs(int i,int[] arr,List<Integer> path,List<List<Integer>> res){
    if(i==arr.length){
      res.add(new ArrayList<>(path));
      return;
    }

    path.add(arr[i]);
    dfs(i+1,arr,path,res);
    path.remove(path.size()-1);

    dfs(i+1,arr,path,res);
  }
}`,

      python: `def subsets(nums):
    res=[]

    def dfs(i,path):
        if i==len(nums):
            res.append(path[:])
            return

        dfs(i+1,path+[nums[i]])
        dfs(i+1,path)

    dfs(0,[])
    return res`,

      c: `// pick/not pick`,
      cpp: `void dfs(int i,vector<int>& arr,vector<int>& path){
    if(i==arr.size()){
        for(int x:path) cout<<x<<" ";
        cout<<endl;
        return;
    }

    path.push_back(arr[i]);
    dfs(i+1,arr,path);
    path.pop_back();

    dfs(i+1,arr,path);
}`
    }
  },

  {
    subject: 'Code',
    category: 'BackTracking',
    title: 'Combination Sum',
    difficulty: 'Medium',
    description: `Find combinations with unlimited reuse.`,
    inputExample: '[2,3,6,7], target=7',
    outputExample: '[[2,2,3],[7]]',
    explanation: `Stay on same index for reuse.`,
    code: {
      java: `class Main{
  static void dfs(int i,int target,int[] arr,List<Integer> path){
    if(target==0){
      System.out.println(path);
      return;
    }
    if(i==arr.length || target<0) return;

    path.add(arr[i]);
    dfs(i,target-arr[i],arr,path);
    path.remove(path.size()-1);

    dfs(i+1,target,arr,path);
  }
}`,

      python: `def combSum(arr,target):
    res=[]

    def dfs(i,t,path):
        if t==0:
            res.append(path[:])
            return
        if i==len(arr) or t<0:
            return

        dfs(i,t-arr[i],path+[arr[i]])
        dfs(i+1,t,path)

    dfs(0,target,[])
    return res`,

      c: `// reuse allowed`,
      cpp: `void dfs(int i,int target,vector<int>& arr,vector<int>& path){
    if(target==0){
        for(int x:path) cout<<x<<" ";
        cout<<endl;
        return;
    }
    if(i==arr.size() || target<0) return;

    path.push_back(arr[i]);
    dfs(i,target-arr[i],arr,path);
    path.pop_back();

    dfs(i+1,target,arr,path);
}`
    }
  },

  {
    subject: 'Code',
    category: 'BackTracking',
    title: 'Subsets II',
    difficulty: 'Medium',
    description: `Subsets with duplicates.`,
    inputExample: '[1,2,2]',
    outputExample: 'unique subsets',
    explanation: `Skip duplicates.`,
    code: {
      java: `class Main{
  static void dfs(int idx,int[] arr,List<Integer> path,List<List<Integer>> res){
    res.add(new ArrayList<>(path));

    for(int i=idx;i<arr.length;i++){
      if(i>idx && arr[i]==arr[i-1]) continue;

      path.add(arr[i]);
      dfs(i+1,arr,path,res);
      path.remove(path.size()-1);
    }
  }
}`,

      python: `def subsets2(nums):
    nums.sort()
    res=[]

    def dfs(idx,path):
        res.append(path[:])

        for i in range(idx,len(nums)):
            if i>idx and nums[i]==nums[i-1]:
                continue
            dfs(i+1,path+[nums[i]])

    dfs(0,[])
    return res`,

      c: `// skip duplicates`,
      cpp: `void dfs(int idx,vector<int>& arr,vector<int>& path){
    for(int x:path) cout<<x<<" ";
    cout<<endl;

    for(int i=idx;i<arr.size();i++){
        if(i>idx && arr[i]==arr[i-1]) continue;

        path.push_back(arr[i]);
        dfs(i+1,arr,path);
        path.pop_back();
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'BackTracking',
    title: 'Combination Sum II',
    difficulty: 'Medium',
    description: `Each element used once (with duplicates).`,
    inputExample: '[10,1,2,7,6,1,5], target=8',
    outputExample: '[[1,1,6],[1,2,5]...]',
    explanation: `Sort + skip duplicates.`,
    code: {
      java: `class Main{
  static void dfs(int idx,int target,int[] arr,List<Integer> path){
    if(target==0){
      System.out.println(path);
      return;
    }

    for(int i=idx;i<arr.length;i++){
      if(i>idx && arr[i]==arr[i-1]) continue;
      if(arr[i]>target) break;

      path.add(arr[i]);
      dfs(i+1,target-arr[i],arr,path);
      path.remove(path.size()-1);
    }
  }
}`,

      python: `def combSum2(nums,target):
    nums.sort()
    res=[]

    def dfs(idx,t,path):
        if t==0:
            res.append(path[:])
            return

        for i in range(idx,len(nums)):
            if i>idx and nums[i]==nums[i-1]:
                continue
            if nums[i]>t:
                break

            dfs(i+1,t-nums[i],path+[nums[i]])

    dfs(0,target,[])
    return res`,

      c: `// no reuse`,
      cpp: `void dfs(int idx,int target,vector<int>& arr,vector<int>& path){
    if(target==0){
        for(int x:path) cout<<x<<" ";
        cout<<endl;
        return;
    }

    for(int i=idx;i<arr.size();i++){
        if(i>idx && arr[i]==arr[i-1]) continue;
        if(arr[i]>target) break;

        path.push_back(arr[i]);
        dfs(i+1,target-arr[i],arr,path);
        path.pop_back();
    }
}`
    }
  },
   {
    subject: 'Code',
    category: 'BackTracking',
    title: 'Word Search',
    difficulty: 'Medium',
    description: `Check if word exists in grid.`,
    inputExample: 'board, word',
    outputExample: 'true/false',
    explanation: `DFS in 4 directions.`,
    code: {
      java: `class Main{
  static boolean dfs(char[][] b,int i,int j,String w,int idx){
    if(idx==w.length()) return true;

    if(i<0||j<0||i>=b.length||j>=b[0].length||b[i][j]!=w.charAt(idx))
      return false;

    char temp=b[i][j];
    b[i][j]='#';

    boolean found = dfs(b,i+1,j,w,idx+1) ||
                    dfs(b,i-1,j,w,idx+1) ||
                    dfs(b,i,j+1,w,idx+1) ||
                    dfs(b,i,j-1,w,idx+1);

    b[i][j]=temp;
    return found;
  }
}`,

      python: `def exist(board,word):
    n,m=len(board),len(board[0])

    def dfs(i,j,k):
        if k==len(word):
            return True

        if i<0 or j<0 or i>=n or j>=m or board[i][j]!=word[k]:
            return False

        temp=board[i][j]
        board[i][j]="#"

        found = (dfs(i+1,j,k+1) or dfs(i-1,j,k+1) or
                 dfs(i,j+1,k+1) or dfs(i,j-1,k+1))

        board[i][j]=temp
        return found

    for i in range(n):
        for j in range(m):
            if dfs(i,j,0):
                return True

    return False`,

      c: `// dfs grid`,
      cpp: `bool dfs(vector<vector<char>>& b,int i,int j,string& w,int idx){
    if(idx==w.size()) return true;

    if(i<0||j<0||i>=b.size()||j>=b[0].size()||b[i][j]!=w[idx])
        return false;

    char temp=b[i][j];
    b[i][j]='#';

    bool found = dfs(b,i+1,j,w,idx+1) ||
                 dfs(b,i-1,j,w,idx+1) ||
                 dfs(b,i,j+1,w,idx+1) ||
                 dfs(b,i,j-1,w,idx+1);

    b[i][j]=temp;
    return found;
}`
    }
  },

  {
    subject: 'Code',
    category: 'BackTracking',
    title: 'Palindrome Partitioning',
    difficulty: 'Medium',
    description: `All palindrome partitions.`,
    inputExample: '"aab"',
    outputExample: '[["a","a","b"],["aa","b"]]',
    explanation: `Try all cuts + palindrome check.`,
    code: {
      java: `class Main{
  static void dfs(int idx,String s,List<String> path,List<List<String>> res){
    if(idx==s.length()){
      res.add(new ArrayList<>(path));
      return;
    }

    for(int i=idx;i<s.length();i++){
      if(isPal(s,idx,i)){
        path.add(s.substring(idx,i+1));
        dfs(i+1,s,path,res);
        path.remove(path.size()-1);
      }
    }
  }

  static boolean isPal(String s,int l,int r){
    while(l<r){
      if(s.charAt(l++)!=s.charAt(r--)) return false;
    }
    return true;
  }
}`,

      python: `def partition(s):
    res=[]

    def isPal(x):
        return x==x[::-1]

    def dfs(idx,path):
        if idx==len(s):
            res.append(path[:])
            return

        for i in range(idx,len(s)):
            if isPal(s[idx:i+1]):
                path.append(s[idx:i+1])
                dfs(i+1,path)
                path.pop()

    dfs(0,[])
    return res`,

      c: `// palindrome recursion`,
      cpp: `bool isPal(string s,int l,int r){
    while(l<r){
        if(s[l++]!=s[r--]) return false;
    }
    return true;
}`
    }
  },

  {
    subject: 'Code',
    category: 'BackTracking',
    title: 'Letter Combinations of Phone Number',
    difficulty: 'Medium',
    description: `Map digits to letters.`,
    inputExample: '"23"',
    outputExample: '["ad","ae","af","bd"...]',
    explanation: `DFS over digit mapping.`,
    code: {
      java: `class Main{
  static String[] map={"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};

  static void dfs(String digits,int idx,String path){
    if(idx==digits.length()){
      System.out.println(path);
      return;
    }

    String letters=map[digits.charAt(idx)-'0'];

    for(char c:letters.toCharArray()){
      dfs(digits,idx+1,path+c);
    }
  }
}`,

      python: `def phoneComb(digits):
    if not digits:
        return []

    mp={"2":"abc","3":"def","4":"ghi","5":"jkl",
        "6":"mno","7":"pqrs","8":"tuv","9":"wxyz"}

    res=[]

    def dfs(i,path):
        if i==len(digits):
            res.append(path)
            return

        for c in mp[digits[i]]:
            dfs(i+1,path+c)

    dfs(0,"")
    return res`,

      c: `// mapping`,
      cpp: `vector<string> mp={"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};

void dfs(string digits,int idx,string path){
    if(idx==digits.size()){
        cout<<path<<endl;
        return;
    }

    for(char c:mp[digits[idx]-'0']){
        dfs(digits,idx+1,path+c);
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'BackTracking',
    title: 'N-Queens',
    difficulty: 'Hard',
    description: `Place N queens safely.`,
    inputExample: 'n=4',
    outputExample: 'all valid boards',
    explanation: `Check column + diagonals.`,
    code: {
      java: `class Main{
  static boolean safe(int r,int c,char[][] b,int n){
    for(int i=0;i<c;i++)
      if(b[r][i]=='Q') return false;

    for(int i=r,j=c;i>=0&&j>=0;i--,j--)
      if(b[i][j]=='Q') return false;

    for(int i=r,j=c;i<n&&j>=0;i++,j--)
      if(b[i][j]=='Q') return false;

    return true;
  }

  static void solve(int col,char[][] b,int n){
    if(col==n){
      for(char[] r:b)
        System.out.println(new String(r));
      System.out.println();
      return;
    }

    for(int i=0;i<n;i++){
      if(safe(i,col,b,n)){
        b[i][col]='Q';
        solve(col+1,b,n);
        b[i][col]='.';
      }
    }
  }
}`,

      python: `def nQueens(n):
    res=[]
    board=[["."]*n for _ in range(n)]

    def safe(r,c):
        for i in range(c):
            if board[r][i]=="Q":
                return False

        i,j=r,c
        while i>=0 and j>=0:
            if board[i][j]=="Q":
                return False
            i-=1;j-=1

        i,j=r,c
        while i<n and j>=0:
            if board[i][j]=="Q":
                return False
            i+=1;j-=1

        return True

    def dfs(col):
        if col==n:
            res.append(["".join(r) for r in board])
            return

        for i in range(n):
            if safe(i,col):
                board[i][col]="Q"
                dfs(col+1)
                board[i][col]="."

    dfs(0)
    return res`,

      c: `// queen placement`,
      cpp: `bool safe(int r,int c,vector<string>& b,int n){
    for(int i=0;i<c;i++)
        if(b[r][i]=='Q') return false;

    for(int i=r,j=c;i>=0&&j>=0;i--,j--)
        if(b[i][j]=='Q') return false;

    for(int i=r,j=c;i<n&&j>=0;i++,j--)
        if(b[i][j]=='Q') return false;

    return true;
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
        console.log(`Successfully processed ${problems.length} problems for BackTracking`)
        
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