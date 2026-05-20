import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'

const problems = [
 {
    subject: 'Code',
    category: 'Graph',
    title: 'Number of Provinces',
    difficulty: 'Medium',
    description: `Find number of connected components in adjacency matrix.`,
    inputExample: '[[1,1,0],[1,1,0],[0,0,1]]',
    outputExample: '2',
    explanation: `Count components using DFS/BFS.`,
    code: {
      java: `class Main{
  static void dfs(int[][] g,boolean[] vis,int i){
    vis[i]=true;
    for(int j=0;j<g.length;j++){
      if(g[i][j]==1 && !vis[j])
        dfs(g,vis,j);
    }
  }

  static int solve(int[][] g){
    int n=g.length,count=0;
    boolean[] vis=new boolean[n];

    for(int i=0;i<n;i++){
      if(!vis[i]){
        dfs(g,vis,i);
        count++;
      }
    }
    return count;
  }
}`,

      python: `def solve(g):
    n=len(g)
    vis=[False]*n

    def dfs(i):
        vis[i]=True
        for j in range(n):
            if g[i][j]==1 and not vis[j]:
                dfs(j)

    count=0
    for i in range(n):
        if not vis[i]:
            dfs(i)
            count+=1

    return count`,

      c: `// dfs`,
      cpp: `void dfs(vector<vector<int>>& g,vector<bool>& vis,int i){
    vis[i]=true;
    for(int j=0;j<g.size();j++){
        if(g[i][j]==1 && !vis[j])
            dfs(g,vis,j);
    }
}

int solve(vector<vector<int>>& g){
    int n=g.size(),count=0;
    vector<bool> vis(n,false);

    for(int i=0;i<n;i++){
        if(!vis[i]){
            dfs(g,vis,i);
            count++;
        }
    }
    return count;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Connected Components in Matrix',
    difficulty: 'Medium',
    description: `Count islands in grid.`,
    inputExample: '[[1,1,0],[0,1,0],[1,0,1]]',
    outputExample: '3',
    explanation: `DFS/BFS on grid.`,
    code: {
      java: `class Main{
  static void dfs(int[][] g,int i,int j){
    int n=g.length,m=g[0].length;

    if(i<0||j<0||i>=n||j>=m||g[i][j]==0) return;

    g[i][j]=0;

    dfs(g,i+1,j); dfs(g,i-1,j);
    dfs(g,i,j+1); dfs(g,i,j-1);
  }

  static int solve(int[][] g){
    int n=g.length,m=g[0].length,count=0;

    for(int i=0;i<n;i++){
      for(int j=0;j<m;j++){
        if(g[i][j]==1){
          dfs(g,i,j);
          count++;
        }
      }
    }
    return count;
  }
}`,

      python: `def solve(g):
    n,m=len(g),len(g[0])

    def dfs(i,j):
        if i<0 or j<0 or i>=n or j>=m or g[i][j]==0:
            return
        g[i][j]=0

        dfs(i+1,j); dfs(i-1,j)
        dfs(i,j+1); dfs(i,j-1)

    count=0
    for i in range(n):
        for j in range(m):
            if g[i][j]==1:
                dfs(i,j)
                count+=1

    return count`,

      c: `// grid dfs`,
      cpp: `void dfs(vector<vector<int>>& g,int i,int j){
    int n=g.size(),m=g[0].size();

    if(i<0||j<0||i>=n||j>=m||g[i][j]==0) return;

    g[i][j]=0;

    dfs(g,i+1,j); dfs(g,i-1,j);
    dfs(g,i,j+1); dfs(g,i,j-1);
}

int solve(vector<vector<int>>& g){
    int n=g.size(),m=g[0].size(),count=0;

    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(g[i][j]==1){
                dfs(g,i,j);
                count++;
            }
        }
    }
    return count;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Rotten Oranges',
    difficulty: 'Medium',
    description: `Find time to rot all oranges.`,
    inputExample: '[[2,1,1],[1,1,0],[0,1,1]]',
    outputExample: '4',
    explanation: `Multi-source BFS.`,
    code: {
      java: `class Main{
  static int solve(int[][] g){
    int n=g.length,m=g[0].length;
    Queue<int[]> q=new LinkedList<>();
    int fresh=0,time=0;

    for(int i=0;i<n;i++){
      for(int j=0;j<m;j++){
        if(g[i][j]==2) q.add(new int[]{i,j});
        if(g[i][j]==1) fresh++;
      }
    }

    int[][] d={{1,0},{-1,0},{0,1},{0,-1}};

    while(!q.isEmpty() && fresh>0){
      int size=q.size();
      time++;

      while(size-->0){
        int[] cur=q.poll();

        for(int[] dir:d){
          int x=cur[0]+dir[0];
          int y=cur[1]+dir[1];

          if(x>=0&&y>=0&&x<n&&y<m&&g[x][y]==1){
            g[x][y]=2;
            fresh--;
            q.add(new int[]{x,y});
          }
        }
      }
    }
    return fresh==0?time:-1;
  }
}`,

      python: `from collections import deque

def solve(g):
    n,m=len(g),len(g[0])
    q=deque()
    fresh=0

    for i in range(n):
        for j in range(m):
            if g[i][j]==2:
                q.append((i,j))
            elif g[i][j]==1:
                fresh+=1

    time=0
    dirs=[(1,0),(-1,0),(0,1),(0,-1)]

    while q and fresh>0:
        for _ in range(len(q)):
            x,y=q.popleft()
            for dx,dy in dirs:
                nx,ny=x+dx,y+dy
                if 0<=nx<n and 0<=ny<m and g[nx][ny]==1:
                    g[nx][ny]=2
                    fresh-=1
                    q.append((nx,ny))
        time+=1

    return time if fresh==0 else -1`,

      c: `// bfs`,
      cpp: `int solve(vector<vector<int>>& g){
    int n=g.size(),m=g[0].size();
    queue<pair<int,int>> q;
    int fresh=0,time=0;

    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(g[i][j]==2) q.push({i,j});
            if(g[i][j]==1) fresh++;
        }
    }

    vector<pair<int,int>> d={{1,0},{-1,0},{0,1},{0,-1}};

    while(!q.empty() && fresh>0){
        int size=q.size();
        time++;

        while(size--){
            auto [x,y]=q.front(); q.pop();

            for(auto dir:d){
                int nx=x+dir.first, ny=y+dir.second;

                if(nx>=0&&ny>=0&&nx<n&&ny<m&&g[nx][ny]==1){
                    g[nx][ny]=2;
                    fresh--;
                    q.push({nx,ny});
                }
            }
        }
    }
    return fresh==0?time:-1;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Flood Fill',
    difficulty: 'Easy',
    description: `Replace connected component color.`,
    inputExample: 'image=[[1,1,1],[1,1,0],[1,0,1]], sr=1, sc=1, newColor=2',
    outputExample: '[[2,2,2],[2,2,0],[2,0,1]]',
    explanation: `DFS/BFS fill.`,
    code: {
      java: `class Main{
  static void dfs(int[][] g,int i,int j,int old,int newC){
    int n=g.length,m=g[0].length;

    if(i<0||j<0||i>=n||j>=m||g[i][j]!=old) return;

    g[i][j]=newC;

    dfs(g,i+1,j,old,newC);
    dfs(g,i-1,j,old,newC);
    dfs(g,i,j+1,old,newC);
    dfs(g,i,j-1,old,newC);
  }
}`,

      python: `def floodFill(g,sr,sc,newC):
    n,m=len(g),len(g[0])
    old=g[sr][sc]

    def dfs(i,j):
        if i<0 or j<0 or i>=n or j>=m or g[i][j]!=old:
            return
        g[i][j]=newC
        dfs(i+1,j); dfs(i-1,j)
        dfs(i,j+1); dfs(i,j-1)

    dfs(sr,sc)
    return g`,

      c: `// flood fill`,
      cpp: `void dfs(vector<vector<int>>& g,int i,int j,int old,int newC){
    int n=g.size(),m=g[0].size();

    if(i<0||j<0||i>=n||j>=m||g[i][j]!=old) return;

    g[i][j]=newC;

    dfs(g,i+1,j,old,newC);
    dfs(g,i-1,j,old,newC);
    dfs(g,i,j+1,old,newC);
    dfs(g,i,j-1,old,newC);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Cycle Detection in Undirected Graph (BFS)',
    difficulty: 'Medium',
    description: `Detect cycle using BFS.`,
    inputExample: 'edges',
    outputExample: 'true/false',
    explanation: `Track parent in BFS.`,
    code: {
      java: `class Main{
  static boolean bfs(List<List<Integer>> g,int src,boolean[] vis){
    Queue<int[]> q=new LinkedList<>();
    q.add(new int[]{src,-1});
    vis[src]=true;

    while(!q.isEmpty()){
      int[] cur=q.poll();

      for(int nei:g.get(cur[0])){
        if(!vis[nei]){
          vis[nei]=true;
          q.add(new int[]{nei,cur[0]});
        } else if(nei!=cur[1]){
          return true;
        }
      }
    }
    return false;
  }
}`,

      python: `from collections import deque

def hasCycle(g):
    n=len(g)
    vis=[False]*n

    for i in range(n):
        if not vis[i]:
            q=deque([(i,-1)])
            vis[i]=True

            while q:
                node,parent=q.popleft()

                for nei in g[node]:
                    if not vis[nei]:
                        vis[nei]=True
                        q.append((nei,node))
                    elif nei!=parent:
                        return True
    return False`,

      c: `// bfs cycle`,
      cpp: `bool bfs(vector<vector<int>>& g,int src,vector<bool>& vis){
    queue<pair<int,int>> q;
    q.push({src,-1});
    vis[src]=true;

    while(!q.empty()){
        auto [node,parent]=q.front(); q.pop();

        for(int nei:g[node]){
            if(!vis[nei]){
                vis[nei]=true;
                q.push({nei,node});
            } else if(nei!=parent){
                return true;
            }
        }
    }
    return false;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Cycle Detection in Undirected Graph (DFS)',
    difficulty: 'Medium',
    description: `Detect cycle using DFS.`,
    inputExample: 'edges',
    outputExample: 'true/false',
    explanation: `Track parent in DFS.`,
    code: {
      java: `class Main{
  static boolean dfs(List<List<Integer>> g,int node,int parent,boolean[] vis){
    vis[node]=true;

    for(int nei:g.get(node)){
      if(!vis[nei]){
        if(dfs(g,nei,node,vis)) return true;
      } else if(nei!=parent){
        return true;
      }
    }
    return false;
  }
}`,

      python: `def hasCycle(g):
    n=len(g)
    vis=[False]*n

    def dfs(node,parent):
        vis[node]=True

        for nei in g[node]:
            if not vis[nei]:
                if dfs(nei,node): return True
            elif nei!=parent:
                return True
        return False

    for i in range(n):
        if not vis[i]:
            if dfs(i,-1): return True

    return False`,

      c: `// dfs cycle`,
      cpp: `bool dfs(vector<vector<int>>& g,int node,int parent,vector<bool>& vis){
    vis[node]=true;

    for(int nei:g[node]){
        if(!vis[nei]){
            if(dfs(g,nei,node,vis)) return true;
        } else if(nei!=parent){
            return true;
        }
    }
    return false;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Graph',
    title: '0/1 Matrix (BFS Problem)',
    difficulty: 'Medium',
    description: `Find distance of nearest 0 for each cell.`,
    inputExample: '[[0,0,0],[0,1,0],[1,1,1]]',
    outputExample: '[[0,0,0],[0,1,0],[1,2,1]]',
    explanation: `Multi-source BFS from all 0s.`,
    code: {
      java: `class Main{
  static int[][] solve(int[][] mat){
    int n=mat.length,m=mat[0].length;
    Queue<int[]> q=new LinkedList<>();
    int[][] dist=new int[n][m];

    for(int i=0;i<n;i++){
      for(int j=0;j<m;j++){
        if(mat[i][j]==0){
          q.add(new int[]{i,j});
        } else{
          dist[i][j]=Integer.MAX_VALUE;
        }
      }
    }

    int[][] d={{1,0},{-1,0},{0,1},{0,-1}};

    while(!q.isEmpty()){
      int[] cur=q.poll();

      for(int[] dir:d){
        int x=cur[0]+dir[0], y=cur[1]+dir[1];

        if(x>=0&&y>=0&&x<n&&y<m){
          if(dist[x][y] > dist[cur[0]][cur[1]]+1){
            dist[x][y]=dist[cur[0]][cur[1]]+1;
            q.add(new int[]{x,y});
          }
        }
      }
    }
    return dist;
  }
}`,

      python: `from collections import deque

def solve(mat):
    n,m=len(mat),len(mat[0])
    q=deque()
    dist=[[10**9]*m for _ in range(n)]

    for i in range(n):
        for j in range(m):
            if mat[i][j]==0:
                q.append((i,j))
                dist[i][j]=0

    dirs=[(1,0),(-1,0),(0,1),(0,-1)]

    while q:
        x,y=q.popleft()

        for dx,dy in dirs:
            nx,ny=x+dx,y+dy
            if 0<=nx<n and 0<=ny<m:
                if dist[nx][ny]>dist[x][y]+1:
                    dist[nx][ny]=dist[x][y]+1
                    q.append((nx,ny))

    return dist`,

      c: `// bfs`,
      cpp: `vector<vector<int>> solve(vector<vector<int>>& mat){
    int n=mat.size(),m=mat[0].size();
    queue<pair<int,int>> q;
    vector<vector<int>> dist(n,vector<int>(m,1e9));

    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(mat[i][j]==0){
                q.push({i,j});
                dist[i][j]=0;
            }
        }
    }

    vector<pair<int,int>> d={{1,0},{-1,0},{0,1},{0,-1}};

    while(!q.empty()){
        auto [x,y]=q.front(); q.pop();

        for(auto dir:d){
            int nx=x+dir.first, ny=y+dir.second;

            if(nx>=0&&ny>=0&&nx<n&&ny<m){
                if(dist[nx][ny]>dist[x][y]+1){
                    dist[nx][ny]=dist[x][y]+1;
                    q.push({nx,ny});
                }
            }
        }
    }
    return dist;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Surrounded Regions',
    difficulty: 'Medium',
    description: `Capture surrounded regions.`,
    inputExample: '[["X","X","X"],["X","O","X"],["X","X","X"]]',
    outputExample: 'All surrounded O → X',
    explanation: `DFS from boundary O.`,
    code: {
      java: `class Main{
  static void dfs(char[][] b,int i,int j){
    int n=b.length,m=b[0].length;

    if(i<0||j<0||i>=n||j>=m||b[i][j]!='O') return;

    b[i][j]='#';

    dfs(b,i+1,j); dfs(b,i-1,j);
    dfs(b,i,j+1); dfs(b,i,j-1);
  }
}`,

      python: `def solve(board):
    n,m=len(board),len(board[0])

    def dfs(i,j):
        if i<0 or j<0 or i>=n or j>=m or board[i][j]!='O':
            return
        board[i][j]='#'
        dfs(i+1,j); dfs(i-1,j)
        dfs(i,j+1); dfs(i,j-1)

    for i in range(n):
        dfs(i,0); dfs(i,m-1)
    for j in range(m):
        dfs(0,j); dfs(n-1,j)

    for i in range(n):
        for j in range(m):
            if board[i][j]=='O':
                board[i][j]='X'
            elif board[i][j]=='#':
                board[i][j]='O'

    return board`,

      c: `// dfs`,
      cpp: `void dfs(vector<vector<char>>& b,int i,int j){
    int n=b.size(),m=b[0].size();

    if(i<0||j<0||i>=n||j>=m||b[i][j]!='O') return;

    b[i][j]='#';

    dfs(b,i+1,j); dfs(b,i-1,j);
    dfs(b,i,j+1); dfs(b,i,j-1);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Number of Enclaves',
    difficulty: 'Medium',
    description: `Count land cells not reachable from boundary.`,
    inputExample: '[[0,0,0],[1,0,1],[1,1,1]]',
    outputExample: '3',
    explanation: `Remove boundary-connected land using BFS/DFS.`,
    code: {
      java: `class Main{
  static void dfs(int[][] g,int i,int j){
    int n=g.length,m=g[0].length;

    if(i<0||j<0||i>=n||j>=m||g[i][j]==0) return;

    g[i][j]=0;

    dfs(g,i+1,j); dfs(g,i-1,j);
    dfs(g,i,j+1); dfs(g,i,j-1);
  }
}`,

      python: `def solve(g):
    n,m=len(g),len(g[0])

    def dfs(i,j):
        if i<0 or j<0 or i>=n or j>=m or g[i][j]==0:
            return
        g[i][j]=0
        dfs(i+1,j); dfs(i-1,j)
        dfs(i,j+1); dfs(i,j-1)

    for i in range(n):
        dfs(i,0); dfs(i,m-1)
    for j in range(m):
        dfs(0,j); dfs(n-1,j)

    return sum(sum(row) for row in g)`,

      c: `// flood fill`,
      cpp: `void dfs(vector<vector<int>>& g,int i,int j){
    int n=g.size(),m=g[0].size();

    if(i<0||j<0||i>=n||j>=m||g[i][j]==0) return;

    g[i][j]=0;

    dfs(g,i+1,j); dfs(g,i-1,j);
    dfs(g,i,j+1); dfs(g,i,j-1);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Word Ladder I',
    difficulty: 'Hard',
    description: `Shortest transformation sequence length.`,
    inputExample: 'begin="hit", end="cog"',
    outputExample: '5',
    explanation: `BFS with word transformation.`,
    code: {
      java: `class Main{
  static int solve(String begin,String end,List<String> list){
    Set<String> set=new HashSet<>(list);
    Queue<String> q=new LinkedList<>();
    q.add(begin);

    int level=1;

    while(!q.isEmpty()){
      int size=q.size();

      while(size-->0){
        String word=q.poll();

        if(word.equals(end)) return level;

        char[] arr=word.toCharArray();

        for(int i=0;i<arr.length;i++){
          char old=arr[i];

          for(char c='a';c<='z';c++){
            arr[i]=c;
            String next=new String(arr);

            if(set.contains(next)){
              q.add(next);
              set.remove(next);
            }
          }
          arr[i]=old;
        }
      }
      level++;
    }
    return 0;
  }
}`,

      python: `from collections import deque

def solve(begin,end,wordList):
    wordSet=set(wordList)
    q=deque([(begin,1)])

    while q:
        word,level=q.popleft()

        if word==end:
            return level

        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                new=word[:i]+c+word[i+1:]
                if new in wordSet:
                    q.append((new,level+1))
                    wordSet.remove(new)

    return 0`,

      c: `// bfs`,
      cpp: `int solve(string begin,string end,vector<string>& list){
    unordered_set<string> st(list.begin(),list.end());
    queue<pair<string,int>> q;
    q.push({begin,1});

    while(!q.empty()){
        auto [word,level]=q.front(); q.pop();

        if(word==end) return level;

        for(int i=0;i<word.size();i++){
            char old=word[i];

            for(char c='a';c<='z';c++){
                word[i]=c;
                if(st.count(word)){
                    q.push({word,level+1});
                    st.erase(word);
                }
            }
            word[i]=old;
        }
    }
    return 0;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Word Ladder II',
    difficulty: 'Hard',
    description: `Find all shortest transformation sequences.`,
    inputExample: 'begin="hit", end="cog"',
    outputExample: '[[...paths...]]',
    explanation: `BFS + backtracking.`,
    code: {
      java: `// complex: BFS + path tracking`,
      python: `# use BFS + parent map`,
      c: `// advanced`,
      cpp: `// BFS + backtracking`
    }
  },
   {
    subject: 'Code',
    category: 'Graph',
    title: 'Number of Distinct Islands',
    difficulty: 'Medium',
    description: `Count distinct island shapes in a grid.`,
    inputExample: '[[1,1,0],[0,1,0],[1,0,1]]',
    outputExample: '2',
    explanation: `Store relative positions (shape) using DFS.`,
    code: {
      java: `class Main{
  static void dfs(int[][] g,int i,int j,int bi,int bj,StringBuilder sb){
    int n=g.length,m=g[0].length;

    if(i<0||j<0||i>=n||j>=m||g[i][j]==0) return;

    g[i][j]=0;
    sb.append((i-bi)+","+(j-bj)+"|");

    dfs(g,i+1,j,bi,bj,sb);
    dfs(g,i-1,j,bi,bj,sb);
    dfs(g,i,j+1,bi,bj,sb);
    dfs(g,i,j-1,bi,bj,sb);
  }

  static int solve(int[][] g){
    int n=g.length,m=g[0].length;
    Set<String> set=new HashSet<>();

    for(int i=0;i<n;i++){
      for(int j=0;j<m;j++){
        if(g[i][j]==1){
          StringBuilder sb=new StringBuilder();
          dfs(g,i,j,i,j,sb);
          set.add(sb.toString());
        }
      }
    }
    return set.size();
  }
}`,

      python: `def solve(g):
    n,m=len(g),len(g[0])
    shapes=set()

    def dfs(i,j,bi,bj,path):
        if i<0 or j<0 or i>=n or j>=m or g[i][j]==0:
            return
        g[i][j]=0
        path.append((i-bi,j-bj))

        dfs(i+1,j,bi,bj,path)
        dfs(i-1,j,bi,bj,path)
        dfs(i,j+1,bi,bj,path)
        dfs(i,j-1,bi,bj,path)

    for i in range(n):
        for j in range(m):
            if g[i][j]==1:
                path=[]
                dfs(i,j,i,j,path)
                shapes.add(tuple(path))

    return len(shapes)`,

      c: `// store shapes`,
      cpp: `void dfs(vector<vector<int>>& g,int i,int j,int bi,int bj,vector<pair<int,int>>& shape){
    int n=g.size(),m=g[0].size();

    if(i<0||j<0||i>=n||j>=m||g[i][j]==0) return;

    g[i][j]=0;
    shape.push_back({i-bi,j-bj});

    dfs(g,i+1,j,bi,bj,shape);
    dfs(g,i-1,j,bi,bj,shape);
    dfs(g,i,j+1,bi,bj,shape);
    dfs(g,i,j-1,bi,bj,shape);
}

int solve(vector<vector<int>>& g){
    int n=g.size(),m=g[0].size();
    set<vector<pair<int,int>>> st;

    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(g[i][j]==1){
                vector<pair<int,int>> shape;
                dfs(g,i,j,i,j,shape);
                st.insert(shape);
            }
        }
    }
    return st.size();
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Bipartite Graph (DFS)',
    difficulty: 'Medium',
    description: `Check if graph can be colored with 2 colors.`,
    inputExample: 'adj list',
    outputExample: 'true/false',
    explanation: `Color nodes using DFS.`,
    code: {
      java: `class Main{
  static boolean dfs(List<List<Integer>> g,int node,int col,int[] color){
    color[node]=col;

    for(int nei:g.get(node)){
      if(color[nei]==-1){
        if(!dfs(g,nei,1-col,color)) return false;
      } else if(color[nei]==col){
        return false;
      }
    }
    return true;
  }
}`,

      python: `def isBipartite(g):
    n=len(g)
    color=[-1]*n

    def dfs(node,col):
        color[node]=col

        for nei in g[node]:
            if color[nei]==-1:
                if not dfs(nei,1-col):
                    return False
            elif color[nei]==col:
                return False
        return True

    for i in range(n):
        if color[i]==-1:
            if not dfs(i,0):
                return False
    return True`,

      c: `// coloring`,
      cpp: `bool dfs(vector<vector<int>>& g,int node,int col,vector<int>& color){
    color[node]=col;

    for(int nei:g[node]){
        if(color[nei]==-1){
            if(!dfs(g,nei,1-col,color)) return false;
        } else if(color[nei]==col){
            return false;
        }
    }
    return true;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Cycle Detection in Directed Graph (DFS)',
    difficulty: 'Medium',
    description: `Detect cycle in directed graph.`,
    inputExample: 'edges',
    outputExample: 'true/false',
    explanation: `Use visited + pathVisited.`,
    code: {
      java: `class Main{
  static boolean dfs(List<List<Integer>> g,int node,boolean[] vis,boolean[] path){
    vis[node]=true;
    path[node]=true;

    for(int nei:g.get(node)){
      if(!vis[nei]){
        if(dfs(g,nei,vis,path)) return true;
      } else if(path[nei]){
        return true;
      }
    }

    path[node]=false;
    return false;
  }
}`,

      python: `def hasCycle(g):
    n=len(g)
    vis=[False]*n
    path=[False]*n

    def dfs(node):
        vis[node]=True
        path[node]=True

        for nei in g[node]:
            if not vis[nei]:
                if dfs(nei):
                    return True
            elif path[nei]:
                return True

        path[node]=False
        return False

    for i in range(n):
        if not vis[i]:
            if dfs(i):
                return True
    return False`,

      c: `// directed cycle`,
      cpp: `bool dfs(vector<vector<int>>& g,int node,vector<bool>& vis,vector<bool>& path){
    vis[node]=true;
    path[node]=true;

    for(int nei:g[node]){
        if(!vis[nei]){
            if(dfs(g,nei,vis,path)) return true;
        } else if(path[nei]){
            return true;
        }
    }

    path[node]=false;
    return false;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Graph',
    title: 'Topological Sort (DFS)',
    difficulty: 'Medium',
    description: `Return topological ordering of a DAG using DFS.`,
    inputExample: 'V=6, edges',
    outputExample: '[...]',
    explanation: `Push node to stack after DFS.`,
    code: {
      java: `class Main{
  static void dfs(List<List<Integer>> g,int node,boolean[] vis,Stack<Integer> st){
    vis[node]=true;

    for(int nei:g.get(node)){
      if(!vis[nei]){
        dfs(g,nei,vis,st);
      }
    }
    st.push(node);
  }

  static List<Integer> topo(int V,List<List<Integer>> g){
    boolean[] vis=new boolean[V];
    Stack<Integer> st=new Stack<>();

    for(int i=0;i<V;i++){
      if(!vis[i]) dfs(g,i,vis,st);
    }

    List<Integer> res=new ArrayList<>();
    while(!st.isEmpty()) res.add(st.pop());
    return res;
  }
}`,

      python: `def topo_sort(g):
    n=len(g)
    vis=[False]*n
    stack=[]

    def dfs(node):
        vis[node]=True
        for nei in g[node]:
            if not vis[nei]:
                dfs(nei)
        stack.append(node)

    for i in range(n):
        if not vis[i]:
            dfs(i)

    return stack[::-1]`,

      c: `// dfs topo`,
      cpp: `void dfs(vector<vector<int>>& g,int node,vector<bool>& vis,stack<int>& st){
    vis[node]=true;

    for(int nei:g[node]){
        if(!vis[nei]) dfs(g,nei,vis,st);
    }
    st.push(node);
}

vector<int> topo(int V,vector<vector<int>>& g){
    vector<bool> vis(V,false);
    stack<int> st;

    for(int i=0;i<V;i++){
        if(!vis[i]) dfs(g,i,vis,st);
    }

    vector<int> res;
    while(!st.empty()){
        res.push_back(st.top());
        st.pop();
    }
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: "Kahn's Algorithm (BFS Topological Sort)",
    difficulty: 'Medium',
    description: `Topological sort using BFS (indegree method).`,
    inputExample: 'V=6, edges',
    outputExample: '[...]',
    explanation: `Process nodes with indegree 0.`,
    code: {
      java: `class Main{
  static List<Integer> topo(int V,List<List<Integer>> g){
    int[] indeg=new int[V];

    for(int i=0;i<V;i++){
      for(int nei:g.get(i)){
        indeg[nei]++;
      }
    }

    Queue<Integer> q=new LinkedList<>();

    for(int i=0;i<V;i++){
      if(indeg[i]==0) q.add(i);
    }

    List<Integer> res=new ArrayList<>();

    while(!q.isEmpty()){
      int node=q.poll();
      res.add(node);

      for(int nei:g.get(node)){
        indeg[nei]--;
        if(indeg[nei]==0) q.add(nei);
      }
    }
    return res;
  }
}`,

      python: `from collections import deque

def kahn(g):
    n=len(g)
    indeg=[0]*n

    for i in range(n):
        for nei in g[i]:
            indeg[nei]+=1

    q=deque([i for i in range(n) if indeg[i]==0])
    res=[]

    while q:
        node=q.popleft()
        res.append(node)

        for nei in g[node]:
            indeg[nei]-=1
            if indeg[nei]==0:
                q.append(nei)

    return res`,

      c: `// bfs topo`,
      cpp: `vector<int> kahn(int V,vector<vector<int>>& g){
    vector<int> indeg(V,0);

    for(int i=0;i<V;i++){
        for(int nei:g[i]) indeg[nei]++;
    }

    queue<int> q;
    for(int i=0;i<V;i++){
        if(indeg[i]==0) q.push(i);
    }

    vector<int> res;

    while(!q.empty()){
        int node=q.front(); q.pop();
        res.push_back(node);

        for(int nei:g[node]){
            indeg[nei]--;
            if(indeg[nei]==0) q.push(nei);
        }
    }
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Cycle Detection in Directed Graph (BFS)',
    difficulty: 'Medium',
    description: `Detect cycle using Kahn’s Algorithm.`,
    inputExample: 'V, edges',
    outputExample: 'true/false',
    explanation: `If topo size != V → cycle exists.`,
    code: {
      java: `class Main{
  static boolean hasCycle(int V,List<List<Integer>> g){
    int[] indeg=new int[V];

    for(int i=0;i<V;i++){
      for(int nei:g.get(i)){
        indeg[nei]++;
      }
    }

    Queue<Integer> q=new LinkedList<>();
    for(int i=0;i<V;i++){
      if(indeg[i]==0) q.add(i);
    }

    int count=0;

    while(!q.isEmpty()){
      int node=q.poll();
      count++;

      for(int nei:g.get(node)){
        indeg[nei]--;
        if(indeg[nei]==0) q.add(nei);
      }
    }

    return count!=V;
  }
}`,

      python: `from collections import deque

def hasCycle(g):
    n=len(g)
    indeg=[0]*n

    for i in range(n):
        for nei in g[i]:
            indeg[nei]+=1

    q=deque([i for i in range(n) if indeg[i]==0])
    count=0

    while q:
        node=q.popleft()
        count+=1

        for nei in g[node]:
            indeg[nei]-=1
            if indeg[nei]==0:
                q.append(nei)

    return count!=n`,

      c: `// kahn cycle`,
      cpp: `bool hasCycle(int V,vector<vector<int>>& g){
    vector<int> indeg(V,0);

    for(int i=0;i<V;i++){
        for(int nei:g[i]) indeg[nei]++;
    }

    queue<int> q;
    for(int i=0;i<V;i++){
        if(indeg[i]==0) q.push(i);
    }

    int count=0;

    while(!q.empty()){
        int node=q.front(); q.pop();
        count++;

        for(int nei:g[node]){
            indeg[nei]--;
            if(indeg[nei]==0) q.push(nei);
        }
    }

    return count!=V;
}`
    }
  },
    {
    subject: 'Code',
    category: 'Graph',
    title: 'Course Schedule I',
    difficulty: 'Medium',
    description: `Check if all courses can be finished.`,
    inputExample: 'numCourses=2, prereq=[[1,0]]',
    outputExample: 'true',
    explanation: `Cycle detection using Kahn's Algorithm.`,
    code: {
      java: `class Main{
  static boolean canFinish(int n,int[][] pre){
    List<List<Integer>> g=new ArrayList<>();
    for(int i=0;i<n;i++) g.add(new ArrayList<>());

    int[] indeg=new int[n];

    for(int[] p:pre){
      g.get(p[1]).add(p[0]);
      indeg[p[0]]++;
    }

    Queue<Integer> q=new LinkedList<>();
    for(int i=0;i<n;i++)
      if(indeg[i]==0) q.add(i);

    int count=0;

    while(!q.isEmpty()){
      int node=q.poll();
      count++;

      for(int nei:g.get(node)){
        indeg[nei]--;
        if(indeg[nei]==0) q.add(nei);
      }
    }
    return count==n;
  }
}`,

      python: `from collections import deque

def canFinish(n,pre):
    g=[[] for _ in range(n)]
    indeg=[0]*n

    for a,b in pre:
        g[b].append(a)
        indeg[a]+=1

    q=deque([i for i in range(n) if indeg[i]==0])
    count=0

    while q:
        node=q.popleft()
        count+=1

        for nei in g[node]:
            indeg[nei]-=1
            if indeg[nei]==0:
                q.append(nei)

    return count==n`,

      c: `// kahn`,
      cpp: `bool canFinish(int n,vector<vector<int>>& pre){
    vector<vector<int>> g(n);
    vector<int> indeg(n,0);

    for(auto& p:pre){
        g[p[1]].push_back(p[0]);
        indeg[p[0]]++;
    }

    queue<int> q;
    for(int i=0;i<n;i++)
        if(indeg[i]==0) q.push(i);

    int count=0;

    while(!q.empty()){
        int node=q.front(); q.pop();
        count++;

        for(int nei:g[node]){
            indeg[nei]--;
            if(indeg[nei]==0) q.push(nei);
        }
    }
    return count==n;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Course Schedule II',
    difficulty: 'Medium',
    description: `Return valid course order.`,
    inputExample: 'numCourses=2, prereq=[[1,0]]',
    outputExample: '[0,1]',
    explanation: `Topo sort using Kahn's.`,
    code: {
      java: `class Main{
  static List<Integer> findOrder(int n,int[][] pre){
    List<List<Integer>> g=new ArrayList<>();
    for(int i=0;i<n;i++) g.add(new ArrayList<>());

    int[] indeg=new int[n];

    for(int[] p:pre){
      g.get(p[1]).add(p[0]);
      indeg[p[0]]++;
    }

    Queue<Integer> q=new LinkedList<>();
    for(int i=0;i<n;i++)
      if(indeg[i]==0) q.add(i);

    List<Integer> res=new ArrayList<>();

    while(!q.isEmpty()){
      int node=q.poll();
      res.add(node);

      for(int nei:g.get(node)){
        indeg[nei]--;
        if(indeg[nei]==0) q.add(nei);
      }
    }

    return res.size()==n ? res : new ArrayList<>();
  }
}`,

      python: `from collections import deque

def findOrder(n,pre):
    g=[[] for _ in range(n)]
    indeg=[0]*n

    for a,b in pre:
        g[b].append(a)
        indeg[a]+=1

    q=deque([i for i in range(n) if indeg[i]==0])
    res=[]

    while q:
        node=q.popleft()
        res.append(node)

        for nei in g[node]:
            indeg[nei]-=1
            if indeg[nei]==0:
                q.append(nei)

    return res if len(res)==n else []`,

      c: `// topo order`,
      cpp: `vector<int> findOrder(int n,vector<vector<int>>& pre){
    vector<vector<int>> g(n);
    vector<int> indeg(n,0);

    for(auto& p:pre){
        g[p[1]].push_back(p[0]);
        indeg[p[0]]++;
    }

    queue<int> q;
    for(int i=0;i<n;i++)
        if(indeg[i]==0) q.push(i);

    vector<int> res;

    while(!q.empty()){
        int node=q.front(); q.pop();
        res.push_back(node);

        for(int nei:g[node]){
            indeg[nei]--;
            if(indeg[nei]==0) q.push(nei);
        }
    }

    if(res.size()!=n) return {};
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Find Eventual Safe States',
    difficulty: 'Medium',
    description: `Nodes that are not part of any cycle.`,
    inputExample: 'graph',
    outputExample: '[...]',
    explanation: `Reverse graph + topo sort.`,
    code: {
      java: `class Main{
  static List<Integer> solve(List<List<Integer>> g){
    int n=g.size();
    List<List<Integer>> rev=new ArrayList<>();
    for(int i=0;i<n;i++) rev.add(new ArrayList<>());

    int[] indeg=new int[n];

    for(int i=0;i<n;i++){
      for(int nei:g.get(i)){
        rev.get(nei).add(i);
        indeg[i]++;
      }
    }

    Queue<Integer> q=new LinkedList<>();
    for(int i=0;i<n;i++)
      if(indeg[i]==0) q.add(i);

    List<Integer> safe=new ArrayList<>();

    while(!q.isEmpty()){
      int node=q.poll();
      safe.add(node);

      for(int nei:rev.get(node)){
        indeg[nei]--;
        if(indeg[nei]==0) q.add(nei);
      }
    }

    Collections.sort(safe);
    return safe;
  }
}`,

      python: `from collections import deque

def solve(g):
    n=len(g)
    rev=[[] for _ in range(n)]
    indeg=[0]*n

    for i in range(n):
        for nei in g[i]:
            rev[nei].append(i)
            indeg[i]+=1

    q=deque([i for i in range(n) if indeg[i]==0])
    safe=[]

    while q:
        node=q.popleft()
        safe.append(node)

        for nei in rev[node]:
            indeg[nei]-=1
            if indeg[nei]==0:
                q.append(nei)

    return sorted(safe)`,

      c: `// reverse graph`,
      cpp: `vector<int> solve(vector<vector<int>>& g){
    int n=g.size();
    vector<vector<int>> rev(n);
    vector<int> indeg(n,0);

    for(int i=0;i<n;i++){
        for(int nei:g[i]){
            rev[nei].push_back(i);
            indeg[i]++;
        }
    }

    queue<int> q;
    for(int i=0;i<n;i++)
        if(indeg[i]==0) q.push(i);

    vector<int> safe;

    while(!q.empty()){
        int node=q.front(); q.pop();
        safe.push_back(node);

        for(int nei:rev[node]){
            indeg[nei]--;
            if(indeg[nei]==0) q.push(nei);
        }
    }

    sort(safe.begin(),safe.end());
    return safe;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Alien Dictionary',
    difficulty: 'Hard',
    description: `Find order of characters from sorted dictionary.`,
    inputExample: '["baa","abcd","abca","cab","cad"]',
    outputExample: '"bdac"',
    explanation: `Build graph from adjacent words + topo sort.`,
    code: {
      java: `class Main{
  static String solve(String[] words,int K){
    List<List<Integer>> g=new ArrayList<>();
    for(int i=0;i<K;i++) g.add(new ArrayList<>());

    for(int i=0;i<words.length-1;i++){
      String a=words[i], b=words[i+1];
      int len=Math.min(a.length(),b.length());

      for(int j=0;j<len;j++){
        if(a.charAt(j)!=b.charAt(j)){
          g.get(a.charAt(j)-'a')
           .add(b.charAt(j)-'a');
          break;
        }
      }
    }

    int[] indeg=new int[K];
    for(int i=0;i<K;i++){
      for(int nei:g.get(i)) indeg[nei]++;
    }

    Queue<Integer> q=new LinkedList<>();
    for(int i=0;i<K;i++)
      if(indeg[i]==0) q.add(i);

    StringBuilder res=new StringBuilder();

    while(!q.isEmpty()){
      int node=q.poll();
      res.append((char)(node+'a'));

      for(int nei:g.get(node)){
        indeg[nei]--;
        if(indeg[nei]==0) q.add(nei);
      }
    }
    return res.toString();
  }
}`,

      python: `from collections import deque

def solve(words,K):
    g=[[] for _ in range(K)]

    for i in range(len(words)-1):
        a,b=words[i],words[i+1]
        for x,y in zip(a,b):
            if x!=y:
                g[ord(x)-97].append(ord(y)-97)
                break

    indeg=[0]*K
    for i in range(K):
        for nei in g[i]:
            indeg[nei]+=1

    q=deque([i for i in range(K) if indeg[i]==0])
    res=[]

    while q:
        node=q.popleft()
        res.append(chr(node+97))

        for nei in g[node]:
            indeg[nei]-=1
            if indeg[nei]==0:
                q.append(nei)

    return ''.join(res)`,

      c: `// topo`,
      cpp: `string solve(vector<string>& words,int K){
    vector<vector<int>> g(K);

    for(int i=0;i<words.size()-1;i++){
        string a=words[i],b=words[i+1];

        for(int j=0;j<min(a.size(),b.size());j++){
            if(a[j]!=b[j]){
                g[a[j]-'a'].push_back(b[j]-'a');
                break;
            }
        }
    }

    vector<int> indeg(K,0);
    for(int i=0;i<K;i++){
        for(int nei:g[i]) indeg[nei]++;
    }

    queue<int> q;
    for(int i=0;i<K;i++)
        if(indeg[i]==0) q.push(i);

    string res="";

    while(!q.empty()){
        int node=q.front(); q.pop();
        res+=char(node+'a');

        for(int nei:g[node]){
            indeg[nei]--;
            if(indeg[nei]==0) q.push(nei);
        }
    }
    return res;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Graph',
    title: 'Number of Islands',
    difficulty: 'Medium',
    description: `Count number of islands in grid.`,
    inputExample: '[[1,1,0],[0,1,0],[1,0,1]]',
    outputExample: '3',
    explanation: `DFS/BFS traversal.`,
    code: {
      java: `class Main{
  static void dfs(int[][] g,int i,int j){
    int n=g.length,m=g[0].length;

    if(i<0||j<0||i>=n||j>=m||g[i][j]==0) return;

    g[i][j]=0;

    dfs(g,i+1,j); dfs(g,i-1,j);
    dfs(g,i,j+1); dfs(g,i,j-1);
  }

  static int solve(int[][] g){
    int n=g.length,m=g[0].length,count=0;

    for(int i=0;i<n;i++){
      for(int j=0;j<m;j++){
        if(g[i][j]==1){
          dfs(g,i,j);
          count++;
        }
      }
    }
    return count;
  }
}`,

      python: `def solve(g):
    n,m=len(g),len(g[0])

    def dfs(i,j):
        if i<0 or j<0 or i>=n or j>=m or g[i][j]==0:
            return
        g[i][j]=0
        dfs(i+1,j); dfs(i-1,j)
        dfs(i,j+1); dfs(i,j-1)

    count=0
    for i in range(n):
        for j in range(m):
            if g[i][j]==1:
                dfs(i,j)
                count+=1

    return count`,

      c: `// dfs islands`,
      cpp: `void dfs(vector<vector<int>>& g,int i,int j){
    int n=g.size(),m=g[0].size();

    if(i<0||j<0||i>=n||j>=m||g[i][j]==0) return;

    g[i][j]=0;

    dfs(g,i+1,j); dfs(g,i-1,j);
    dfs(g,i,j+1); dfs(g,i,j-1);
}

int solve(vector<vector<int>>& g){
    int n=g.size(),m=g[0].size(),count=0;

    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(g[i][j]==1){
                dfs(g,i,j);
                count++;
            }
        }
    }
    return count;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Max Area of Island',
    difficulty: 'Medium',
    description: `Find largest island area.`,
    inputExample: '[[1,1,0],[1,0,0],[1,1,1]]',
    outputExample: '5',
    explanation: `DFS count size.`,
    code: {
      java: `class Main{
  static int dfs(int[][] g,int i,int j){
    int n=g.length,m=g[0].length;

    if(i<0||j<0||i>=n||j>=m||g[i][j]==0) return 0;

    g[i][j]=0;

    return 1 + dfs(g,i+1,j)+dfs(g,i-1,j)+dfs(g,i,j+1)+dfs(g,i,j-1);
  }

  static int solve(int[][] g){
    int max=0;

    for(int i=0;i<g.length;i++){
      for(int j=0;j<g[0].length;j++){
        if(g[i][j]==1){
          max=Math.max(max,dfs(g,i,j));
        }
      }
    }
    return max;
  }
}`,

      python: `def solve(g):
    n,m=len(g),len(g[0])

    def dfs(i,j):
        if i<0 or j<0 or i>=n or j>=m or g[i][j]==0:
            return 0
        g[i][j]=0
        return 1 + dfs(i+1,j)+dfs(i-1,j)+dfs(i,j+1)+dfs(i,j-1)

    return max((dfs(i,j) for i in range(n) for j in range(m) if g[i][j]==1), default=0)`,

      c: `// dfs area`,
      cpp: `int dfs(vector<vector<int>>& g,int i,int j){
    int n=g.size(),m=g[0].size();

    if(i<0||j<0||i>=n||j>=m||g[i][j]==0) return 0;

    g[i][j]=0;

    return 1 + dfs(g,i+1,j)+dfs(g,i-1,j)+dfs(g,i,j+1)+dfs(g,i,j-1);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Clone Graph',
    difficulty: 'Medium',
    description: `Deep copy graph.`,
    inputExample: 'graph',
    outputExample: 'cloned graph',
    explanation: `DFS/BFS + hashmap.`,
    code: {
      java: `class Node{
  int val;
  List<Node> neighbors=new ArrayList<>();
}

class Main{
  static Node clone(Node node){
    if(node==null) return null;

    Map<Node,Node> map=new HashMap<>();
    return dfs(node,map);
  }

  static Node dfs(Node node,Map<Node,Node> map){
    if(map.containsKey(node)) return map.get(node);

    Node copy=new Node();
    copy.val=node.val;
    map.put(node,copy);

    for(Node nei:node.neighbors){
      copy.neighbors.add(dfs(nei,map));
    }
    return copy;
  }
}`,

      python: `class Node:
    def __init__(self,val):
        self.val=val
        self.neighbors=[]

def clone(node):
    if not node: return None
    mp={}

    def dfs(n):
        if n in mp: return mp[n]
        copy=Node(n.val)
        mp[n]=copy
        for nei in n.neighbors:
            copy.neighbors.append(dfs(nei))
        return copy

    return dfs(node)`,

      c: `// graph clone`,
      cpp: `Node* dfs(Node* node,unordered_map<Node*,Node*>& mp){
    if(mp.count(node)) return mp[node];

    Node* copy=new Node(node->val);
    mp[node]=copy;

    for(auto nei:node->neighbors){
        copy->neighbors.push_back(dfs(nei,mp));
    }
    return copy;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Walls and Gates',
    difficulty: 'Medium',
    description: `Fill rooms with distance to nearest gate.`,
    inputExample: 'grid with INF,0,-1',
    outputExample: 'distance filled',
    explanation: `Multi-source BFS from gates.`,
    code: {
      java: `class Main{
  static void solve(int[][] g){
    int n=g.length,m=g[0].length;
    Queue<int[]> q=new LinkedList<>();

    for(int i=0;i<n;i++){
      for(int j=0;j<m;j++){
        if(g[i][j]==0) q.add(new int[]{i,j});
      }
    }

    int[][] d={{1,0},{-1,0},{0,1},{0,-1}};

    while(!q.isEmpty()){
      int[] cur=q.poll();

      for(int[] dir:d){
        int x=cur[0]+dir[0], y=cur[1]+dir[1];

        if(x>=0&&y>=0&&x<n&&y<m && g[x][y]>g[cur[0]][cur[1]]+1){
          g[x][y]=g[cur[0]][cur[1]]+1;
          q.add(new int[]{x,y});
        }
      }
    }
  }
}`,

      python: `from collections import deque

def solve(g):
    n,m=len(g),len(g[0])
    q=deque()

    for i in range(n):
        for j in range(m):
            if g[i][j]==0:
                q.append((i,j))

    dirs=[(1,0),(-1,0),(0,1),(0,-1)]

    while q:
        x,y=q.popleft()
        for dx,dy in dirs:
            nx,ny=x+dx,y+dy
            if 0<=nx<n and 0<=ny<m and g[nx][ny]>g[x][y]+1:
                g[nx][ny]=g[x][y]+1
                q.append((nx,ny))`,

      c: `// bfs`,
      cpp: `void solve(vector<vector<int>>& g){
    int n=g.size(),m=g[0].size();
    queue<pair<int,int>> q;

    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if(g[i][j]==0) q.push({i,j});
        }
    }

    vector<pair<int,int>> d={{1,0},{-1,0},{0,1},{0,-1}};

    while(!q.empty()){
        auto [x,y]=q.front(); q.pop();

        for(auto dir:d){
            int nx=x+dir.first, ny=y+dir.second;

            if(nx>=0&&ny>=0&&nx<n&&ny<m && g[nx][ny]>g[x][y]+1){
                g[nx][ny]=g[x][y]+1;
                q.push({nx,ny});
            }
        }
    }
}`
    }
  },
 {
    subject: 'Code',
    category: 'Graph',
    title: 'Pacific Atlantic Water Flow',
    difficulty: 'Medium',
    description: `Find cells where water can flow to both Pacific and Atlantic oceans.`,
    inputExample: 'heights matrix',
    outputExample: 'list of coordinates',
    explanation: `DFS from borders (reverse thinking).`,
    code: {
      java: `class Main{
  static void dfs(int[][] h,boolean[][] vis,int i,int j){
    int n=h.length,m=h[0].length;
    vis[i][j]=true;

    int[][] d={{1,0},{-1,0},{0,1},{0,-1}};

    for(int[] dir:d){
      int x=i+dir[0], y=j+dir[1];

      if(x>=0&&y>=0&&x<n&&y<m && !vis[x][y] && h[x][y]>=h[i][j]){
        dfs(h,vis,x,y);
      }
    }
  }

  static List<List<Integer>> solve(int[][] h){
    int n=h.length,m=h[0].length;

    boolean[][] pac=new boolean[n][m];
    boolean[][] atl=new boolean[n][m];

    for(int i=0;i<n;i++){
      dfs(h,pac,i,0);
      dfs(h,atl,i,m-1);
    }

    for(int j=0;j<m;j++){
      dfs(h,pac,0,j);
      dfs(h,atl,n-1,j);
    }

    List<List<Integer>> res=new ArrayList<>();

    for(int i=0;i<n;i++){
      for(int j=0;j<m;j++){
        if(pac[i][j] && atl[i][j]){
          res.add(Arrays.asList(i,j));
        }
      }
    }
    return res;
  }
}`,

      python: `def solve(h):
    n,m=len(h),len(h[0])
    pac=[[False]*m for _ in range(n)]
    atl=[[False]*m for _ in range(n)]

    def dfs(i,j,vis):
        vis[i][j]=True
        for dx,dy in [(1,0),(-1,0),(0,1),(0,-1)]:
            x,y=i+dx,j+dy
            if 0<=x<n and 0<=y<m and not vis[x][y] and h[x][y]>=h[i][j]:
                dfs(x,y,vis)

    for i in range(n):
        dfs(i,0,pac)
        dfs(i,m-1,atl)

    for j in range(m):
        dfs(0,j,pac)
        dfs(n-1,j,atl)

    return [[i,j] for i in range(n) for j in range(m) if pac[i][j] and atl[i][j]]`,

      c: `// dfs grid`,
      cpp: `void dfs(vector<vector<int>>& h,vector<vector<bool>>& vis,int i,int j){
    int n=h.size(),m=h[0].size();
    vis[i][j]=true;

    vector<pair<int,int>> d={{1,0},{-1,0},{0,1},{0,-1}};

    for(auto dir:d){
        int x=i+dir.first,y=j+dir.second;
        if(x>=0&&y>=0&&x<n&&y<m && !vis[x][y] && h[x][y]>=h[i][j]){
            dfs(h,vis,x,y);
        }
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Surrounded Regions',
    difficulty: 'Medium',
    description: `Capture surrounded regions in grid.`,
    inputExample: 'board',
    outputExample: 'modified board',
    explanation: `DFS from boundary O.`,
    code: {
      java: `class Main{
  static void dfs(char[][] b,int i,int j){
    int n=b.length,m=b[0].length;

    if(i<0||j<0||i>=n||j>=m||b[i][j]!='O') return;

    b[i][j]='#';

    dfs(b,i+1,j); dfs(b,i-1,j);
    dfs(b,i,j+1); dfs(b,i,j-1);
  }
}`,

      python: `def solve(board):
    n,m=len(board),len(board[0])

    def dfs(i,j):
        if i<0 or j<0 or i>=n or j>=m or board[i][j]!='O':
            return
        board[i][j]='#'
        dfs(i+1,j); dfs(i-1,j)
        dfs(i,j+1); dfs(i,j-1)

    for i in range(n):
        dfs(i,0); dfs(i,m-1)
    for j in range(m):
        dfs(0,j); dfs(n-1,j)

    for i in range(n):
        for j in range(m):
            if board[i][j]=='O':
                board[i][j]='X'
            elif board[i][j]=='#':
                board[i][j]='O'

    return board`,

      c: `// dfs`,
      cpp: `void dfs(vector<vector<char>>& b,int i,int j){
    int n=b.size(),m=b[0].size();

    if(i<0||j<0||i>=n||j>=m||b[i][j]!='O') return;

    b[i][j]='#';

    dfs(b,i+1,j); dfs(b,i-1,j);
    dfs(b,i,j+1); dfs(b,i,j-1);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Course Schedule',
    difficulty: 'Medium',
    description: `Check if all courses can be completed.`,
    inputExample: 'numCourses, prerequisites',
    outputExample: 'true/false',
    explanation: `Kahn’s Algorithm (cycle detection).`,
    code: {
      java: `class Main{
  static boolean solve(int n,int[][] pre){
    List<List<Integer>> g=new ArrayList<>();
    for(int i=0;i<n;i++) g.add(new ArrayList<>());

    int[] indeg=new int[n];

    for(int[] p:pre){
      g.get(p[1]).add(p[0]);
      indeg[p[0]]++;
    }

    Queue<Integer> q=new LinkedList<>();
    for(int i=0;i<n;i++)
      if(indeg[i]==0) q.add(i);

    int count=0;

    while(!q.isEmpty()){
      int node=q.poll();
      count++;

      for(int nei:g.get(node)){
        indeg[nei]--;
        if(indeg[nei]==0) q.add(nei);
      }
    }
    return count==n;
  }
}`,

      python: `from collections import deque

def solve(n,pre):
    g=[[] for _ in range(n)]
    indeg=[0]*n

    for a,b in pre:
        g[b].append(a)
        indeg[a]+=1

    q=deque([i for i in range(n) if indeg[i]==0])
    count=0

    while q:
        node=q.popleft()
        count+=1

        for nei in g[node]:
            indeg[nei]-=1
            if indeg[nei]==0:
                q.append(nei)

    return count==n`,

      c: `// kahn`,
      cpp: `bool solve(int n,vector<vector<int>>& pre){
    vector<vector<int>> g(n);
    vector<int> indeg(n,0);

    for(auto& p:pre){
        g[p[1]].push_back(p[0]);
        indeg[p[0]]++;
    }

    queue<int> q;
    for(int i=0;i<n;i++)
        if(indeg[i]==0) q.push(i);

    int count=0;

    while(!q.empty()){
        int node=q.front(); q.pop();
        count++;

        for(int nei:g[node]){
            indeg[nei]--;
            if(indeg[nei]==0) q.push(nei);
        }
    }
    return count==n;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Course Schedule II',
    difficulty: 'Medium',
    description: `Return course order.`,
    inputExample: 'numCourses, prerequisites',
    outputExample: 'order array',
    explanation: `Topological sort.`,
    code: {
      java: `class Main{
  static List<Integer> solve(int n,int[][] pre){
    List<List<Integer>> g=new ArrayList<>();
    for(int i=0;i<n;i++) g.add(new ArrayList<>());

    int[] indeg=new int[n];

    for(int[] p:pre){
      g.get(p[1]).add(p[0]);
      indeg[p[0]]++;
    }

    Queue<Integer> q=new LinkedList<>();
    for(int i=0;i<n;i++)
      if(indeg[i]==0) q.add(i);

    List<Integer> res=new ArrayList<>();

    while(!q.isEmpty()){
      int node=q.poll();
      res.add(node);

      for(int nei:g.get(node)){
        indeg[nei]--;
        if(indeg[nei]==0) q.add(nei);
      }
    }

    return res.size()==n?res:new ArrayList<>();
  }
}`,

      python: `from collections import deque

def solve(n,pre):
    g=[[] for _ in range(n)]
    indeg=[0]*n

    for a,b in pre:
        g[b].append(a)
        indeg[a]+=1

    q=deque([i for i in range(n) if indeg[i]==0])
    res=[]

    while q:
        node=q.popleft()
        res.append(node)

        for nei in g[node]:
            indeg[nei]-=1
            if indeg[nei]==0:
                q.append(nei)

    return res if len(res)==n else []`,

      c: `// topo`,
      cpp: `vector<int> solve(int n,vector<vector<int>>& pre){
    vector<vector<int>> g(n);
    vector<int> indeg(n,0);

    for(auto& p:pre){
        g[p[1]].push_back(p[0]);
        indeg[p[0]]++;
    }

    queue<int> q;
    for(int i=0;i<n;i++)
        if(indeg[i]==0) q.push(i);

    vector<int> res;

    while(!q.empty()){
        int node=q.front(); q.pop();
        res.push_back(node);

        for(int nei:g[node]){
            indeg[nei]--;
            if(indeg[nei]==0) q.push(nei);
        }
    }

    if(res.size()!=n) return {};
    return res;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Graph',
    title: 'Graph Valid Tree',
    difficulty: 'Medium',
    description: `Check if given edges form a valid tree.`,
    inputExample: 'n=5, edges=[[0,1],[0,2],[0,3],[1,4]]',
    outputExample: 'true',
    explanation: `Tree = connected + no cycle.`,
    code: {
      java: `class Main{
  static boolean validTree(int n,int[][] edges){
    if(edges.length!=n-1) return false;

    List<List<Integer>> g=new ArrayList<>();
    for(int i=0;i<n;i++) g.add(new ArrayList<>());

    for(int[] e:edges){
      g.get(e[0]).add(e[1]);
      g.get(e[1]).add(e[0]);
    }

    boolean[] vis=new boolean[n];
    if(hasCycle(g,0,-1,vis)) return false;

    for(boolean v:vis) if(!v) return false;

    return true;
  }

  static boolean hasCycle(List<List<Integer>> g,int node,int parent,boolean[] vis){
    vis[node]=true;

    for(int nei:g.get(node)){
      if(!vis[nei]){
        if(hasCycle(g,nei,node,vis)) return true;
      } else if(nei!=parent){
        return true;
      }
    }
    return false;
  }
}`,

      python: `def validTree(n,edges):
    if len(edges)!=n-1:
        return False

    g=[[] for _ in range(n)]
    for u,v in edges:
        g[u].append(v)
        g[v].append(u)

    vis=[False]*n

    def dfs(node,parent):
        vis[node]=True
        for nei in g[node]:
            if not vis[nei]:
                if dfs(nei,node): return True
            elif nei!=parent:
                return True
        return False

    if dfs(0,-1): return False
    return all(vis)`,

      c: `// dfs + cycle check`,
      cpp: `bool dfs(int node,int parent,vector<vector<int>>& g,vector<bool>& vis){
    vis[node]=true;

    for(int nei:g[node]){
        if(!vis[nei]){
            if(dfs(nei,node,g,vis)) return true;
        } else if(nei!=parent){
            return true;
        }
    }
    return false;
}

bool validTree(int n,vector<vector<int>>& edges){
    if(edges.size()!=n-1) return false;

    vector<vector<int>> g(n);
    for(auto& e:edges){
        g[e[0]].push_back(e[1]);
        g[e[1]].push_back(e[0]);
    }

    vector<bool> vis(n,false);
    if(dfs(0,-1,g,vis)) return false;

    for(bool v:vis) if(!v) return false;
    return true;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Number of Connected Components in an Undirected Graph',
    difficulty: 'Medium',
    description: `Count connected components.`,
    inputExample: 'n=5, edges=[[0,1],[1,2],[3,4]]',
    outputExample: '2',
    explanation: `DFS/BFS count.`,
    code: {
      java: `class Main{
  static void dfs(List<List<Integer>> g,int node,boolean[] vis){
    vis[node]=true;
    for(int nei:g.get(node)){
      if(!vis[nei]) dfs(g,nei,vis);
    }
  }

  static int countComp(int n,int[][] edges){
    List<List<Integer>> g=new ArrayList<>();
    for(int i=0;i<n;i++) g.add(new ArrayList<>());

    for(int[] e:edges){
      g.get(e[0]).add(e[1]);
      g.get(e[1]).add(e[0]);
    }

    boolean[] vis=new boolean[n];
    int count=0;

    for(int i=0;i<n;i++){
      if(!vis[i]){
        dfs(g,i,vis);
        count++;
      }
    }
    return count;
  }
}`,

      python: `def countComponents(n,edges):
    g=[[] for _ in range(n)]
    for u,v in edges:
        g[u].append(v)
        g[v].append(u)

    vis=[False]*n

    def dfs(node):
        vis[node]=True
        for nei in g[node]:
            if not vis[nei]:
                dfs(nei)

    count=0
    for i in range(n):
        if not vis[i]:
            dfs(i)
            count+=1

    return count`,

      c: `// dfs count`,
      cpp: `void dfs(int node,vector<vector<int>>& g,vector<bool>& vis){
    vis[node]=true;
    for(int nei:g[node]){
        if(!vis[nei]) dfs(nei,g,vis);
    }
}

int countComponents(int n,vector<vector<int>>& edges){
    vector<vector<int>> g(n);
    for(auto& e:edges){
        g[e[0]].push_back(e[1]);
        g[e[1]].push_back(e[0]);
    }

    vector<bool> vis(n,false);
    int count=0;

    for(int i=0;i<n;i++){
        if(!vis[i]){
            dfs(i,g,vis);
            count++;
        }
    }
    return count;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Word Ladder',
    difficulty: 'Hard',
    description: `Shortest transformation sequence length.`,
    inputExample: 'begin="hit", end="cog"',
    outputExample: '5',
    explanation: `BFS word transformation.`,
    code: {
      java: `class Main{
  static int ladderLength(String begin,String end,List<String> list){
    Set<String> set=new HashSet<>(list);
    Queue<String> q=new LinkedList<>();
    q.add(begin);

    int level=1;

    while(!q.isEmpty()){
      int size=q.size();

      while(size-->0){
        String word=q.poll();
        if(word.equals(end)) return level;

        char[] arr=word.toCharArray();

        for(int i=0;i<arr.length;i++){
          char old=arr[i];

          for(char c='a';c<='z';c++){
            arr[i]=c;
            String next=new String(arr);

            if(set.contains(next)){
              q.add(next);
              set.remove(next);
            }
          }
          arr[i]=old;
        }
      }
      level++;
    }
    return 0;
  }
}`,

      python: `from collections import deque

def ladderLength(begin,end,wordList):
    wordSet=set(wordList)
    q=deque([(begin,1)])

    while q:
        word,level=q.popleft()

        if word==end:
            return level

        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                new=word[:i]+c+word[i+1:]
                if new in wordSet:
                    q.append((new,level+1))
                    wordSet.remove(new)

    return 0`,

      c: `// bfs`,
      cpp: `int ladderLength(string begin,string end,vector<string>& list){
    unordered_set<string> st(list.begin(),list.end());
    queue<pair<string,int>> q;
    q.push({begin,1});

    while(!q.empty()){
        auto [word,level]=q.front(); q.pop();

        if(word==end) return level;

        for(int i=0;i<word.size();i++){
            char old=word[i];

            for(char c='a';c<='z';c++){
                word[i]=c;
                if(st.count(word)){
                    q.push({word,level+1});
                    st.erase(word);
                }
            }
            word[i]=old;
        }
    }
    return 0;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Redundant Connection',
    difficulty: 'Medium',
    description: `Find edge that creates cycle.`,
    inputExample: '[[1,2],[1,3],[2,3]]',
    outputExample: '[2,3]',
    explanation: `Union-Find (DSU).`,
    code: {
      java: `class Main{
  static int[] parent;

  static int find(int x){
    if(parent[x]!=x)
      parent[x]=find(parent[x]);
    return parent[x];
  }

  static boolean union(int a,int b){
    int pa=find(a), pb=find(b);
    if(pa==pb) return false;
    parent[pa]=pb;
    return true;
  }

  static int[] solve(int[][] edges){
    int n=edges.length;
    parent=new int[n+1];

    for(int i=1;i<=n;i++) parent[i]=i;

    for(int[] e:edges){
      if(!union(e[0],e[1])) return e;
    }
    return new int[]{};
  }
}`,

      python: `def find(x,parent):
    if parent[x]!=x:
        parent[x]=find(parent[x],parent)
    return parent[x]

def union(a,b,parent):
    pa,pb=find(a,parent),find(b,parent)
    if pa==pb:
        return False
    parent[pa]=pb
    return True

def solve(edges):
    n=len(edges)
    parent=list(range(n+1))

    for u,v in edges:
        if not union(u,v,parent):
            return [u,v]
    return []`,

      c: `// union find`,
      cpp: `int find(int x,vector<int>& p){
    if(p[x]!=x) p[x]=find(p[x],p);
    return p[x];
}

bool unite(int a,int b,vector<int>& p){
    int pa=find(a,p), pb=find(b,p);
    if(pa==pb) return false;
    p[pa]=pb;
    return true;
}

vector<int> solve(vector<vector<int>>& edges){
    int n=edges.size();
    vector<int> p(n+1);
    for(int i=1;i<=n;i++) p[i]=i;

    for(auto& e:edges){
        if(!unite(e[0],e[1],p))
            return e;
    }
    return {};
}`
    }
  },
  {
    subject: 'Code',
    category: 'Graph',
    title: "Dijkstra's Algorithm",
    difficulty: 'Medium',
    description: `Find shortest distance from source to all nodes.`,
    inputExample: 'V, edges with weights',
    outputExample: 'distance array',
    explanation: `Use priority queue for greedy shortest path.`,
    code: {
      java: `class Main{
  static int[] dijkstra(int V,List<List<int[]>> g,int src){
    int[] dist=new int[V];
    Arrays.fill(dist,Integer.MAX_VALUE);
    dist[src]=0;

    PriorityQueue<int[]> pq=new PriorityQueue<>((a,b)->a[1]-b[1]);
    pq.add(new int[]{src,0});

    while(!pq.isEmpty()){
      int[] cur=pq.poll();
      int node=cur[0], d=cur[1];

      if(d>dist[node]) continue;

      for(int[] nei:g.get(node)){
        int v=nei[0], w=nei[1];

        if(dist[node]+w < dist[v]){
          dist[v]=dist[node]+w;
          pq.add(new int[]{v,dist[v]});
        }
      }
    }
    return dist;
  }
}`,

      python: `import heapq

def dijkstra(V,g,src):
    dist=[float('inf')]*V
    dist[src]=0

    pq=[(0,src)]

    while pq:
        d,node=heapq.heappop(pq)

        if d>dist[node]:
            continue

        for v,w in g[node]:
            if dist[node]+w < dist[v]:
                dist[v]=dist[node]+w
                heapq.heappush(pq,(dist[v],v))

    return dist`,

      c: `// priority queue based shortest path`,
      cpp: `vector<int> dijkstra(int V,vector<vector<pair<int,int>>>& g,int src){
    vector<int> dist(V,INT_MAX);
    dist[src]=0;

    priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>> pq;
    pq.push({0,src});

    while(!pq.empty()){
        auto [d,node]=pq.top(); pq.pop();

        if(d>dist[node]) continue;

        for(auto& [v,w]:g[node]){
            if(dist[node]+w < dist[v]){
                dist[v]=dist[node]+w;
                pq.push({dist[v],v});
            }
        }
    }
    return dist;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Why Priority Queue is used in Dijkstra',
    difficulty: 'Easy',
    description: `Explain why PQ is required.`,
    inputExample: '-',
    outputExample: '-',
    explanation: `Always process minimum distance node first.`,
    code: {
      java: `// Priority Queue ensures:
// 1. Extract minimum distance node
// 2. Greedy correctness
// Without PQ -> O(V^2), with PQ -> O(E log V)`,

      python: `# heapq gives smallest distance first
# ensures optimal relaxation order`,

      c: `// min-heap for efficiency`,
      cpp: `// priority_queue (min heap) ensures
// shortest node processed first`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Shortest Path in Binary Maze',
    difficulty: 'Medium',
    description: `Find shortest path in grid (0/1).`,
    inputExample: 'grid, source, destination',
    outputExample: 'distance',
    explanation: `BFS since equal weight edges.`,
    code: {
      java: `class Main{
  static int solve(int[][] g,int[] src,int[] dst){
    int n=g.length,m=g[0].length;

    if(g[src[0]][src[1]]==0) return -1;

    Queue<int[]> q=new LinkedList<>();
    boolean[][] vis=new boolean[n][m];

    q.add(new int[]{src[0],src[1],0});
    vis[src[0]][src[1]]=true;

    int[][] d={{1,0},{-1,0},{0,1},{0,-1}};

    while(!q.isEmpty()){
      int[] cur=q.poll();

      if(cur[0]==dst[0] && cur[1]==dst[1])
        return cur[2];

      for(int[] dir:d){
        int x=cur[0]+dir[0], y=cur[1]+dir[1];

        if(x>=0&&y>=0&&x<n&&y<m && g[x][y]==1 && !vis[x][y]){
          vis[x][y]=true;
          q.add(new int[]{x,y,cur[2]+1});
        }
      }
    }
    return -1;
  }
}`,

      python: `from collections import deque

def solve(g,src,dst):
    n,m=len(g),len(g[0])

    if g[src[0]][src[1]]==0:
        return -1

    q=deque([(src[0],src[1],0)])
    vis=set([(src[0],src[1])])

    while q:
        x,y,d=q.popleft()

        if [x,y]==dst:
            return d

        for dx,dy in [(1,0),(-1,0),(0,1),(0,-1)]:
            nx,ny=x+dx,y+dy
            if 0<=nx<n and 0<=ny<m and g[nx][ny]==1 and (nx,ny) not in vis:
                vis.add((nx,ny))
                q.append((nx,ny,d+1))

    return -1`,

      c: `// bfs grid`,
      cpp: `int solve(vector<vector<int>>& g,vector<int>& src,vector<int>& dst){
    int n=g.size(),m=g[0].size();

    if(g[src[0]][src[1]]==0) return -1;

    queue<vector<int>> q;
    vector<vector<bool>> vis(n,vector<bool>(m,false));

    q.push({src[0],src[1],0});
    vis[src[0]][src[1]]=true;

    vector<pair<int,int>> d={{1,0},{-1,0},{0,1},{0,-1}};

    while(!q.empty()){
        auto cur=q.front(); q.pop();

        if(cur[0]==dst[0] && cur[1]==dst[1])
            return cur[2];

        for(auto dir:d){
            int x=cur[0]+dir.first, y=cur[1]+dir.second;

            if(x>=0&&y>=0&&x<n&&y<m && g[x][y]==1 && !vis[x][y]){
                vis[x][y]=true;
                q.push({x,y,cur[2]+1});
            }
        }
    }
    return -1;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Path with Minimum Effort',
    difficulty: 'Hard',
    description: `Minimize maximum difference in path.`,
    inputExample: 'heights grid',
    outputExample: 'minimum effort',
    explanation: `Modified Dijkstra (minimize max weight).`,
    code: {
      java: `class Main{
  static int solve(int[][] h){
    int n=h.length,m=h[0].length;

    int[][] dist=new int[n][m];
    for(int[] row:dist)
      Arrays.fill(row,Integer.MAX_VALUE);

    PriorityQueue<int[]> pq=new PriorityQueue<>((a,b)->a[0]-b[0]);
    pq.add(new int[]{0,0,0});
    dist[0][0]=0;

    int[][] d={{1,0},{-1,0},{0,1},{0,-1}};

    while(!pq.isEmpty()){
      int[] cur=pq.poll();
      int effort=cur[0], x=cur[1], y=cur[2];

      if(x==n-1 && y==m-1) return effort;

      for(int[] dir:d){
        int nx=x+dir[0], ny=y+dir[1];

        if(nx>=0&&ny>=0&&nx<n&&ny<m){
          int newEff=Math.max(effort,Math.abs(h[x][y]-h[nx][ny]));

          if(newEff < dist[nx][ny]){
            dist[nx][ny]=newEff;
            pq.add(new int[]{newEff,nx,ny});
          }
        }
      }
    }
    return 0;
  }
}`,

      python: `import heapq

def solve(h):
    n,m=len(h),len(h[0])
    dist=[[float('inf')]*m for _ in range(n)]
    dist[0][0]=0

    pq=[(0,0,0)]

    while pq:
        effort,x,y=heapq.heappop(pq)

        if x==n-1 and y==m-1:
            return effort

        for dx,dy in [(1,0),(-1,0),(0,1),(0,-1)]:
            nx,ny=x+dx,y+dy
            if 0<=nx<n and 0<=ny<m:
                newEff=max(effort,abs(h[x][y]-h[nx][ny]))
                if newEff < dist[nx][ny]:
                    dist[nx][ny]=newEff
                    heapq.heappush(pq,(newEff,nx,ny))`,

      c: `// modified dijkstra`,
      cpp: `int solve(vector<vector<int>>& h){
    int n=h.size(),m=h[0].size();

    vector<vector<int>> dist(n,vector<int>(m,INT_MAX));
    priority_queue<vector<int>,vector<vector<int>>,greater<vector<int>>> pq;

    pq.push({0,0,0});
    dist[0][0]=0;

    vector<pair<int,int>> d={{1,0},{-1,0},{0,1},{0,-1}};

    while(!pq.empty()){
        auto cur=pq.top(); pq.pop();
        int effort=cur[0], x=cur[1], y=cur[2];

        if(x==n-1 && y==m-1) return effort;

        for(auto dir:d){
            int nx=x+dir.first, ny=y+dir.second;

            if(nx>=0&&ny>=0&&nx<n&&ny<m){
                int newEff=max(effort,abs(h[x][y]-h[nx][ny]));

                if(newEff < dist[nx][ny]){
                    dist[nx][ny]=newEff;
                    pq.push({newEff,nx,ny});
                }
            }
        }
    }
    return 0;
}`
    }
  },
    {
    subject: 'Code',
    category: 'Graph',
    title: 'Cheapest Flights Within K Stops',
    difficulty: 'Medium',
    description: `Find cheapest flight within at most K stops.`,
    inputExample: 'n, flights, src, dst, k',
    outputExample: 'minimum cost',
    explanation: `Modified BFS/Dijkstra with stops constraint.`,
    code: {
      java: `class Main{
  static int solve(int n,int[][] flights,int src,int dst,int k){
    List<List<int[]>> g=new ArrayList<>();
    for(int i=0;i<n;i++) g.add(new ArrayList<>());

    for(int[] f:flights){
      g.get(f[0]).add(new int[]{f[1],f[2]});
    }

    Queue<int[]> q=new LinkedList<>();
    q.add(new int[]{src,0,0});

    int[] dist=new int[n];
    Arrays.fill(dist,Integer.MAX_VALUE);
    dist[src]=0;

    while(!q.isEmpty()){
      int[] cur=q.poll();
      int node=cur[0], cost=cur[1], stops=cur[2];

      if(stops>k) continue;

      for(int[] nei:g.get(node)){
        int v=nei[0], w=nei[1];

        if(cost+w < dist[v]){
          dist[v]=cost+w;
          q.add(new int[]{v,dist[v],stops+1});
        }
      }
    }
    return dist[dst]==Integer.MAX_VALUE ? -1 : dist[dst];
  }
}`,

      python: `from collections import deque

def solve(n,flights,src,dst,k):
    g=[[] for _ in range(n)]
    for u,v,w in flights:
        g[u].append((v,w))

    dist=[float('inf')]*n
    dist[src]=0

    q=deque([(src,0,0)])

    while q:
        node,cost,stops=q.popleft()

        if stops>k:
            continue

        for v,w in g[node]:
            if cost+w < dist[v]:
                dist[v]=cost+w
                q.append((v,dist[v],stops+1))

    return -1 if dist[dst]==float('inf') else dist[dst]`,

      c: `// bfs with stops`,
      cpp: `int solve(int n,vector<vector<int>>& flights,int src,int dst,int k){
    vector<vector<pair<int,int>>> g(n);
    for(auto& f:flights){
        g[f[0]].push_back({f[1],f[2]});
    }

    queue<vector<int>> q;
    q.push({src,0,0});

    vector<int> dist(n,INT_MAX);
    dist[src]=0;

    while(!q.empty()){
        auto cur=q.front(); q.pop();
        int node=cur[0],cost=cur[1],stops=cur[2];

        if(stops>k) continue;

        for(auto& [v,w]:g[node]){
            if(cost+w < dist[v]){
                dist[v]=cost+w;
                q.push({v,dist[v],stops+1});
            }
        }
    }
    return dist[dst]==INT_MAX?-1:dist[dst];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Network Delay Time',
    difficulty: 'Medium',
    description: `Time for signal to reach all nodes.`,
    inputExample: 'times, n, k',
    outputExample: 'time or -1',
    explanation: `Dijkstra to find max shortest path.`,
    code: {
      java: `class Main{
  static int solve(int[][] times,int n,int k){
    List<List<int[]>> g=new ArrayList<>();
    for(int i=0;i<=n;i++) g.add(new ArrayList<>());

    for(int[] t:times){
      g.get(t[0]).add(new int[]{t[1],t[2]});
    }

    int[] dist=new int[n+1];
    Arrays.fill(dist,Integer.MAX_VALUE);
    dist[k]=0;

    PriorityQueue<int[]> pq=new PriorityQueue<>((a,b)->a[1]-b[1]);
    pq.add(new int[]{k,0});

    while(!pq.isEmpty()){
      int[] cur=pq.poll();
      int node=cur[0], d=cur[1];

      if(d>dist[node]) continue;

      for(int[] nei:g.get(node)){
        int v=nei[0], w=nei[1];

        if(dist[node]+w < dist[v]){
          dist[v]=dist[node]+w;
          pq.add(new int[]{v,dist[v]});
        }
      }
    }

    int ans=0;
    for(int i=1;i<=n;i++){
      if(dist[i]==Integer.MAX_VALUE) return -1;
      ans=Math.max(ans,dist[i]);
    }
    return ans;
  }
}`,

      python: `import heapq

def solve(times,n,k):
    g=[[] for _ in range(n+1)]
    for u,v,w in times:
        g[u].append((v,w))

    dist=[float('inf')]*(n+1)
    dist[k]=0

    pq=[(0,k)]

    while pq:
        d,node=heapq.heappop(pq)

        if d>dist[node]:
            continue

        for v,w in g[node]:
            if dist[node]+w < dist[v]:
                dist[v]=dist[node]+w
                heapq.heappush(pq,(dist[v],v))

    ans=max(dist[1:])
    return -1 if ans==float('inf') else ans`,

      c: `// dijkstra`,
      cpp: `int solve(vector<vector<int>>& times,int n,int k){
    vector<vector<pair<int,int>>> g(n+1);

    for(auto& t:times){
        g[t[0]].push_back({t[1],t[2]});
    }

    vector<int> dist(n+1,INT_MAX);
    dist[k]=0;

    priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>> pq;
    pq.push({0,k});

    while(!pq.empty()){
        auto [d,node]=pq.top(); pq.pop();

        if(d>dist[node]) continue;

        for(auto& [v,w]:g[node]){
            if(dist[node]+w < dist[v]){
                dist[v]=dist[node]+w;
                pq.push({dist[v],v});
            }
        }
    }

    int ans=0;
    for(int i=1;i<=n;i++){
        if(dist[i]==INT_MAX) return -1;
        ans=max(ans,dist[i]);
    }
    return ans;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Number of Ways to Arrive at Destination',
    difficulty: 'Medium',
    description: `Count number of shortest paths.`,
    inputExample: 'n, roads',
    outputExample: 'ways count',
    explanation: `Dijkstra + path counting.`,
    code: {
      java: `class Main{
  static int solve(int n,int[][] roads){
    List<List<int[]>> g=new ArrayList<>();
    for(int i=0;i<n;i++) g.add(new ArrayList<>());

    for(int[] r:roads){
      g.get(r[0]).add(new int[]{r[1],r[2]});
      g.get(r[1]).add(new int[]{r[0],r[2]});
    }

    long[] dist=new long[n];
    Arrays.fill(dist,Long.MAX_VALUE);
    dist[0]=0;

    int mod=1000000007;
    int[] ways=new int[n];
    ways[0]=1;

    PriorityQueue<long[]> pq=new PriorityQueue<>((a,b)->Long.compare(a[1],b[1]));
    pq.add(new long[]{0,0});

    while(!pq.isEmpty()){
      long[] cur=pq.poll();
      int node=(int)cur[0];
      long d=cur[1];

      if(d>dist[node]) continue;

      for(int[] nei:g.get(node)){
        int v=nei[0];
        long w=nei[1];

        if(d+w < dist[v]){
          dist[v]=d+w;
          ways[v]=ways[node];
          pq.add(new long[]{v,dist[v]});
        } else if(d+w == dist[v]){
          ways[v]=(ways[v]+ways[node])%mod;
        }
      }
    }
    return ways[n-1];
  }
}`,

      python: `import heapq

def solve(n,roads):
    g=[[] for _ in range(n)]
    for u,v,w in roads:
        g[u].append((v,w))
        g[v].append((u,w))

    dist=[float('inf')]*n
    ways=[0]*n

    dist[0]=0
    ways[0]=1

    pq=[(0,0)]
    mod=10**9+7

    while pq:
        d,node=heapq.heappop(pq)

        if d>dist[node]:
            continue

        for v,w in g[node]:
            if d+w < dist[v]:
                dist[v]=d+w
                ways[v]=ways[node]
                heapq.heappush(pq,(dist[v],v))
            elif d+w == dist[v]:
                ways[v]=(ways[v]+ways[node])%mod

    return ways[n-1]`,

      c: `// dijkstra + ways`,
      cpp: `int solve(int n,vector<vector<int>>& roads){
    vector<vector<pair<int,int>>> g(n);

    for(auto& r:roads){
        g[r[0]].push_back({r[1],r[2]});
        g[r[1]].push_back({r[0],r[2]});
    }

    vector<long long> dist(n,LLONG_MAX);
    vector<int> ways(n,0);

    dist[0]=0;
    ways[0]=1;

    priority_queue<pair<long long,int>,vector<pair<long long,int>>,greater<pair<long long,int>>> pq;
    pq.push({0,0});

    int mod=1e9+7;

    while(!pq.empty()){
        auto [d,node]=pq.top(); pq.pop();

        if(d>dist[node]) continue;

        for(auto& [v,w]:g[node]){
            if(d+w < dist[v]){
                dist[v]=d+w;
                ways[v]=ways[node];
                pq.push({dist[v],v});
            }
            else if(d+w == dist[v]){
                ways[v]=(ways[v]+ways[node])%mod;
            }
        }
    }
    return ways[n-1];
}`
    }
  },
    {
    subject: 'Code',
    category: 'Graph',
    title: 'Alien Dictionary',
    difficulty: 'Hard',
    description: `Find order of characters from sorted dictionary.`,
    inputExample: '["baa","abcd","abca","cab","cad"]',
    outputExample: '"bdac"',
    explanation: `Build graph + Topological sort (Kahn).`,
    code: {
      java: `class Main{
  static String solve(String[] words,int K){
    List<List<Integer>> g=new ArrayList<>();
    for(int i=0;i<K;i++) g.add(new ArrayList<>());

    for(int i=0;i<words.length-1;i++){
      String a=words[i],b=words[i+1];
      int len=Math.min(a.length(),b.length());

      for(int j=0;j<len;j++){
        if(a.charAt(j)!=b.charAt(j)){
          g.get(a.charAt(j)-'a').add(b.charAt(j)-'a');
          break;
        }
      }
    }

    int[] indeg=new int[K];
    for(int i=0;i<K;i++){
      for(int nei:g.get(i)) indeg[nei]++;
    }

    Queue<Integer> q=new LinkedList<>();
    for(int i=0;i<K;i++)
      if(indeg[i]==0) q.add(i);

    StringBuilder res=new StringBuilder();

    while(!q.isEmpty()){
      int node=q.poll();
      res.append((char)(node+'a'));

      for(int nei:g.get(node)){
        indeg[nei]--;
        if(indeg[nei]==0) q.add(nei);
      }
    }
    return res.toString();
  }
}`,

      python: `from collections import deque

def solve(words,K):
    g=[[] for _ in range(K)]

    for i in range(len(words)-1):
        a,b=words[i],words[i+1]
        for x,y in zip(a,b):
            if x!=y:
                g[ord(x)-97].append(ord(y)-97)
                break

    indeg=[0]*K
    for i in range(K):
        for nei in g[i]:
            indeg[nei]+=1

    q=deque([i for i in range(K) if indeg[i]==0])
    res=[]

    while q:
        node=q.popleft()
        res.append(chr(node+97))
        for nei in g[node]:
            indeg[nei]-=1
            if indeg[nei]==0:
                q.append(nei)

    return ''.join(res)`,

      c: `// topo sort`,
      cpp: `string solve(vector<string>& words,int K){
    vector<vector<int>> g(K);

    for(int i=0;i<words.size()-1;i++){
        string a=words[i],b=words[i+1];

        for(int j=0;j<min(a.size(),b.size());j++){
            if(a[j]!=b[j]){
                g[a[j]-'a'].push_back(b[j]-'a');
                break;
            }
        }
    }

    vector<int> indeg(K,0);
    for(int i=0;i<K;i++){
        for(int nei:g[i]) indeg[nei]++;
    }

    queue<int> q;
    for(int i=0;i<K;i++)
        if(indeg[i]==0) q.push(i);

    string res="";
    while(!q.empty()){
        int node=q.front(); q.pop();
        res+=char(node+'a');

        for(int nei:g[node]){
            indeg[nei]--;
            if(indeg[nei]==0) q.push(nei);
        }
    }
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: "Kruskal's Minimum Spanning Tree",
    difficulty: 'Medium',
    description: `Find MST using Kruskal's algorithm.`,
    inputExample: 'edges with weights',
    outputExample: 'total weight',
    explanation: `Sort edges + DSU.`,
    code: {
      java: `class Main{
  static int find(int x,int[] p){
    if(p[x]!=x) p[x]=find(p[x],p);
    return p[x];
  }

  static boolean union(int a,int b,int[] p){
    int pa=find(a,p),pb=find(b,p);
    if(pa==pb) return false;
    p[pa]=pb;
    return true;
  }

  static int solve(int n,int[][] edges){
    Arrays.sort(edges,(a,b)->a[2]-b[2]);

    int[] p=new int[n];
    for(int i=0;i<n;i++) p[i]=i;

    int sum=0;

    for(int[] e:edges){
      if(union(e[0],e[1],p)){
        sum+=e[2];
      }
    }
    return sum;
  }
}`,

      python: `def solve(n,edges):
    edges.sort(key=lambda x:x[2])
    parent=list(range(n))

    def find(x):
        if parent[x]!=x:
            parent[x]=find(parent[x])
        return parent[x]

    def union(a,b):
        pa,pb=find(a),find(b)
        if pa==pb: return False
        parent[pa]=pb
        return True

    total=0
    for u,v,w in edges:
        if union(u,v):
            total+=w

    return total`,

      c: `// kruskal`,
      cpp: `int find(int x,vector<int>& p){
    if(p[x]!=x) p[x]=find(p[x],p);
    return p[x];
}

bool unite(int a,int b,vector<int>& p){
    int pa=find(a,p),pb=find(b,p);
    if(pa==pb) return false;
    p[pa]=pb;
    return true;
}

int solve(int n,vector<vector<int>>& edges){
    sort(edges.begin(),edges.end(),[](auto&a,auto&b){
        return a[2]<b[2];
    });

    vector<int> p(n);
    for(int i=0;i<n;i++) p[i]=i;

    int sum=0;

    for(auto& e:edges){
        if(unite(e[0],e[1],p)){
            sum+=e[2];
        }
    }
    return sum;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: "Prim's Minimum Spanning Tree",
    difficulty: 'Medium',
    description: `Find MST using Prim's algorithm.`,
    inputExample: 'adj list',
    outputExample: 'total weight',
    explanation: `Greedy + Priority Queue.`,
    code: {
      java: `class Main{
  static int solve(int V,List<List<int[]>> g){
    boolean[] vis=new boolean[V];

    PriorityQueue<int[]> pq=new PriorityQueue<>((a,b)->a[1]-b[1]);
    pq.add(new int[]{0,0});

    int sum=0;

    while(!pq.isEmpty()){
      int[] cur=pq.poll();
      int node=cur[0],wt=cur[1];

      if(vis[node]) continue;

      vis[node]=true;
      sum+=wt;

      for(int[] nei:g.get(node)){
        if(!vis[nei[0]]){
          pq.add(new int[]{nei[0],nei[1]});
        }
      }
    }
    return sum;
  }
}`,

      python: `import heapq

def solve(V,g):
    vis=[False]*V
    pq=[(0,0)]
    total=0

    while pq:
        wt,node=heapq.heappop(pq)

        if vis[node]:
            continue

        vis[node]=True
        total+=wt

        for v,w in g[node]:
            if not vis[v]:
                heapq.heappush(pq,(w,v))

    return total`,

      c: `// prim`,
      cpp: `int solve(int V,vector<vector<pair<int,int>>>& g){
    vector<bool> vis(V,false);

    priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>> pq;
    pq.push({0,0});

    int sum=0;

    while(!pq.empty()){
        auto [wt,node]=pq.top(); pq.pop();

        if(vis[node]) continue;

        vis[node]=true;
        sum+=wt;

        for(auto& [v,w]:g[node]){
            if(!vis[v]){
                pq.push({w,v});
            }
        }
    }
    return sum;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Total Number of Spanning Trees',
    difficulty: 'Hard',
    description: `Count total spanning trees using Kirchhoff’s theorem.`,
    inputExample: 'graph adjacency matrix',
    outputExample: 'number of spanning trees',
    explanation: `Use Laplacian matrix determinant.`,
    code: {
      java: `class Main{
  static int determinant(int[][] mat,int n){
    int res=1;

    for(int i=0;i<n;i++){
      int pivot=i;

      for(int j=i;j<n;j++){
        if(mat[j][i]!=0){
          pivot=j; break;
        }
      }

      if(mat[pivot][i]==0) return 0;

      int[] temp=mat[i];
      mat[i]=mat[pivot];
      mat[pivot]=temp;

      if(i!=pivot) res*=-1;

      res*=mat[i][i];

      for(int j=i+1;j<n;j++){
        int factor=mat[j][i]/mat[i][i];
        for(int k=i;k<n;k++){
          mat[j][k]-=factor*mat[i][k];
        }
      }
    }
    return Math.abs(res);
  }
}`,

      python: `import copy

def determinant(mat):
    n=len(mat)
    mat=copy.deepcopy(mat)
    res=1

    for i in range(n):
        pivot=i
        while pivot<n and mat[pivot][i]==0:
            pivot+=1
        if pivot==n:
            return 0

        mat[i],mat[pivot]=mat[pivot],mat[i]
        if i!=pivot:
            res*=-1

        res*=mat[i][i]

        for j in range(i+1,n):
            factor=mat[j][i]/mat[i][i]
            for k in range(i,n):
                mat[j][k]-=factor*mat[i][k]

    return abs(int(res))`,

      c: `// matrix determinant`,
      cpp: `int determinant(vector<vector<int>> mat){
    int n=mat.size();
    int res=1;

    for(int i=0;i<n;i++){
        int pivot=i;
        while(pivot<n && mat[pivot][i]==0) pivot++;

        if(pivot==n) return 0;

        swap(mat[i],mat[pivot]);
        if(i!=pivot) res*=-1;

        res*=mat[i][i];

        for(int j=i+1;j<n;j++){
            int factor=mat[j][i]/mat[i][i];
            for(int k=i;k<n;k++){
                mat[j][k]-=factor*mat[i][k];
            }
        }
    }
    return abs(res);
}`
    }
  },
    {
    subject: 'Code',
    category: 'Graph',
    title: 'Negative Weight Cycle',
    difficulty: 'Medium',
    description: `Detect if graph contains negative weight cycle.`,
    inputExample: 'V, edges',
    outputExample: 'true/false',
    explanation: `Use Bellman-Ford. If relaxation possible in Vth step → cycle.`,
    code: {
      java: `class Main{
  static boolean hasNegativeCycle(int V,int[][] edges){
    int[] dist=new int[V];
    Arrays.fill(dist,0);

    for(int i=0;i<V-1;i++){
      for(int[] e:edges){
        int u=e[0],v=e[1],w=e[2];
        if(dist[u]+w < dist[v]){
          dist[v]=dist[u]+w;
        }
      }
    }

    for(int[] e:edges){
      int u=e[0],v=e[1],w=e[2];
      if(dist[u]+w < dist[v]) return true;
    }
    return false;
  }
}`,

      python: `def hasNegativeCycle(V,edges):
    dist=[0]*V

    for _ in range(V-1):
        for u,v,w in edges:
            if dist[u]+w < dist[v]:
                dist[v]=dist[u]+w

    for u,v,w in edges:
        if dist[u]+w < dist[v]:
            return True
    return False`,

      c: `// bellman ford cycle check`,
      cpp: `bool hasNegativeCycle(int V,vector<vector<int>>& edges){
    vector<int> dist(V,0);

    for(int i=0;i<V-1;i++){
        for(auto& e:edges){
            int u=e[0],v=e[1],w=e[2];
            if(dist[u]+w < dist[v]){
                dist[v]=dist[u]+w;
            }
        }
    }

    for(auto& e:edges){
        int u=e[0],v=e[1],w=e[2];
        if(dist[u]+w < dist[v]) return true;
    }
    return false;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Floyd Warshall',
    difficulty: 'Medium',
    description: `All pairs shortest path.`,
    inputExample: 'adj matrix',
    outputExample: 'distance matrix',
    explanation: `DP: dist[i][j] = min(dist[i][j], dist[i][k]+dist[k][j])`,
    code: {
      java: `class Main{
  static void floyd(int[][] dist){
    int n=dist.length;

    for(int k=0;k<n;k++){
      for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
          if(dist[i][k]!=1e9 && dist[k][j]!=1e9){
            dist[i][j]=Math.min(dist[i][j],dist[i][k]+dist[k][j]);
          }
        }
      }
    }
  }
}`,

      python: `def floyd(dist):
    n=len(dist)
    INF=10**9

    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][k]!=INF and dist[k][j]!=INF:
                    dist[i][j]=min(dist[i][j],dist[i][k]+dist[k][j])`,

      c: `// triple loop dp`,
      cpp: `void floyd(vector<vector<int>>& dist){
    int n=dist.size();
    int INF=1e9;

    for(int k=0;k<n;k++){
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                if(dist[i][k]!=INF && dist[k][j]!=INF){
                    dist[i][j]=min(dist[i][j],dist[i][k]+dist[k][j]);
                }
            }
        }
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Travelling Salesman Problem (TSP)',
    difficulty: 'Hard',
    description: `Find minimum cost to visit all cities and return.`,
    inputExample: 'cost matrix',
    outputExample: 'minimum tour cost',
    explanation: `Bitmask DP.`,
    code: {
      java: `class Main{
  static int tsp(int[][] cost){
    int n=cost.length;
    int[][] dp=new int[1<<n][n];

    for(int[] row:dp)
      Arrays.fill(row,-1);

    return solve(1,0,cost,dp,n);
  }

  static int solve(int mask,int pos,int[][] cost,int[][] dp,int n){
    if(mask==(1<<n)-1) return cost[pos][0];

    if(dp[mask][pos]!=-1) return dp[mask][pos];

    int ans=Integer.MAX_VALUE;

    for(int city=0;city<n;city++){
      if((mask&(1<<city))==0){
        int newAns=cost[pos][city] + solve(mask|(1<<city),city,cost,dp,n);
        ans=Math.min(ans,newAns);
      }
    }
    return dp[mask][pos]=ans;
  }
}`,

      python: `def tsp(cost):
    n=len(cost)
    dp=[[-1]*n for _ in range(1<<n)]

    def solve(mask,pos):
        if mask==(1<<n)-1:
            return cost[pos][0]

        if dp[mask][pos]!=-1:
            return dp[mask][pos]

        ans=float('inf')

        for city in range(n):
            if not (mask&(1<<city)):
                ans=min(ans, cost[pos][city] + solve(mask|(1<<city),city))

        dp[mask][pos]=ans
        return ans

    return solve(1,0)`,

      c: `// bitmask dp`,
      cpp: `int tsp(vector<vector<int>>& cost){
    int n=cost.size();
    vector<vector<int>> dp(1<<n,vector<int>(n,-1));

    function<int(int,int)> solve=[&](int mask,int pos){
        if(mask==(1<<n)-1) return cost[pos][0];

        if(dp[mask][pos]!=-1) return dp[mask][pos];

        int ans=INT_MAX;

        for(int city=0;city<n;city++){
            if(!(mask&(1<<city))){
                ans=min(ans, cost[pos][city] + solve(mask|(1<<city),city));
            }
        }
        return dp[mask][pos]=ans;
    };

    return solve(1,0);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Graph Coloring Applications',
    difficulty: 'Medium',
    description: `Assign colors so no adjacent nodes have same color.`,
    inputExample: 'graph, m colors',
    outputExample: 'true/false',
    explanation: `Backtracking.`,
    code: {
      java: `class Main{
  static boolean solve(int[][] g,int m){
    int n=g.length;
    int[] color=new int[n];
    return dfs(0,g,color,m,n);
  }

  static boolean dfs(int node,int[][] g,int[] color,int m,int n){
    if(node==n) return true;

    for(int c=1;c<=m;c++){
      if(isSafe(node,g,color,c,n)){
        color[node]=c;
        if(dfs(node+1,g,color,m,n)) return true;
        color[node]=0;
      }
    }
    return false;
  }

  static boolean isSafe(int node,int[][] g,int[] color,int c,int n){
    for(int i=0;i<n;i++){
      if(g[node][i]==1 && color[i]==c) return false;
    }
    return true;
  }
}`,

      python: `def solve(g,m):
    n=len(g)
    color=[0]*n

    def dfs(node):
        if node==n:
            return True

        for c in range(1,m+1):
            if all(g[node][i]==0 or color[i]!=c for i in range(n)):
                color[node]=c
                if dfs(node+1):
                    return True
                color[node]=0
        return False

    return dfs(0)`,

      c: `// backtracking`,
      cpp: `bool isSafe(int node,vector<vector<int>>& g,vector<int>& color,int c){
    for(int i=0;i<g.size();i++){
        if(g[node][i]==1 && color[i]==c) return false;
    }
    return true;
}

bool dfs(int node,vector<vector<int>>& g,vector<int>& color,int m){
    if(node==g.size()) return true;

    for(int c=1;c<=m;c++){
        if(isSafe(node,g,color,c)){
            color[node]=c;
            if(dfs(node+1,g,color,m)) return true;
            color[node]=0;
        }
    }
    return false;
}`
    }
  },
    {
    subject: 'Code',
    category: 'Graph',
    title: 'Bridge in a Graph',
    difficulty: 'Medium',
    description: `Find all bridges in an undirected graph.`,
    inputExample: 'n, edges',
    outputExample: 'list of bridges',
    explanation: `Tarjan’s Algorithm using low and discovery time.`,
    code: {
      java: `class Main{
  static int time=0;
  static List<List<Integer>> res=new ArrayList<>();

  static void dfs(int node,int parent,List<List<Integer>> g,int[] vis,int[] tin,int[] low){
    vis[node]=1;
    tin[node]=low[node]=time++;

    for(int nei:g.get(node)){
      if(nei==parent) continue;

      if(vis[nei]==0){
        dfs(nei,node,g,vis,tin,low);
        low[node]=Math.min(low[node],low[nei]);

        if(low[nei] > tin[node]){
          res.add(Arrays.asList(node,nei));
        }
      } else {
        low[node]=Math.min(low[node],tin[nei]);
      }
    }
  }
}`,

      python: `def findBridges(n,edges):
    g=[[] for _ in range(n)]
    for u,v in edges:
        g[u].append(v)
        g[v].append(u)

    tin=[-1]*n
    low=[-1]*n
    vis=[False]*n
    res=[]
    timer=0

    def dfs(node,parent):
        nonlocal timer
        vis[node]=True
        tin[node]=low[node]=timer
        timer+=1

        for nei in g[node]:
            if nei==parent:
                continue
            if not vis[nei]:
                dfs(nei,node)
                low[node]=min(low[node],low[nei])
                if low[nei] > tin[node]:
                    res.append([node,nei])
            else:
                low[node]=min(low[node],tin[nei])

    for i in range(n):
        if not vis[i]:
            dfs(i,-1)

    return res`,

      c: `// tarjan bridge`,
      cpp: `void dfs(int node,int parent,vector<vector<int>>& g,
         vector<int>& tin,vector<int>& low,vector<bool>& vis,
         vector<vector<int>>& res,int& timer){

    vis[node]=true;
    tin[node]=low[node]=timer++;

    for(int nei:g[node]){
        if(nei==parent) continue;

        if(!vis[nei]){
            dfs(nei,node,g,tin,low,vis,res,timer);
            low[node]=min(low[node],low[nei]);

            if(low[nei] > tin[node]){
                res.push_back({node,nei});
            }
        } else {
            low[node]=min(low[node],tin[nei]);
        }
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Strongly Connected Components',
    difficulty: 'Medium',
    description: `Find SCCs in directed graph.`,
    inputExample: 'n, edges',
    outputExample: 'list of SCCs',
    explanation: `Kosaraju’s Algorithm (2 DFS).`,
    code: {
      java: `class Main{
  static void dfs1(int node,List<List<Integer>> g,boolean[] vis,Stack<Integer> st){
    vis[node]=true;
    for(int nei:g.get(node)){
      if(!vis[nei]) dfs1(nei,g,vis,st);
    }
    st.push(node);
  }

  static void dfs2(int node,List<List<Integer>> gT,boolean[] vis){
    vis[node]=true;
    for(int nei:gT.get(node)){
      if(!vis[nei]) dfs2(nei,gT,vis);
    }
  }
}`,

      python: `def kosaraju(n,edges):
    g=[[] for _ in range(n)]
    gt=[[] for _ in range(n)]

    for u,v in edges:
        g[u].append(v)
        gt[v].append(u)

    vis=[False]*n
    stack=[]

    def dfs1(node):
        vis[node]=True
        for nei in g[node]:
            if not vis[nei]:
                dfs1(nei)
        stack.append(node)

    for i in range(n):
        if not vis[i]:
            dfs1(i)

    vis=[False]*n
    scc=0

    def dfs2(node):
        vis[node]=True
        for nei in gt[node]:
            if not vis[nei]:
                dfs2(nei)

    while stack:
        node=stack.pop()
        if not vis[node]:
            dfs2(node)
            scc+=1

    return scc`,

      c: `// kosaraju`,
      cpp: `void dfs1(int node,vector<vector<int>>& g,vector<bool>& vis,stack<int>& st){
    vis[node]=true;
    for(int nei:g[node]){
        if(!vis[nei]) dfs1(nei,g,vis,st);
    }
    st.push(node);
}

void dfs2(int node,vector<vector<int>>& gt,vector<bool>& vis){
    vis[node]=true;
    for(int nei:gt[node]){
        if(!vis[nei]) dfs2(nei,gt,vis);
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Bipartite Graph',
    difficulty: 'Easy',
    description: `Check if graph is bipartite.`,
    inputExample: 'graph adjacency list',
    outputExample: 'true/false',
    explanation: `2-coloring using BFS/DFS.`,
    code: {
      java: `class Main{
  static boolean solve(List<List<Integer>> g){
    int n=g.size();
    int[] color=new int[n];
    Arrays.fill(color,-1);

    for(int i=0;i<n;i++){
      if(color[i]==-1){
        Queue<Integer> q=new LinkedList<>();
        q.add(i);
        color[i]=0;

        while(!q.isEmpty()){
          int node=q.poll();

          for(int nei:g.get(node)){
            if(color[nei]==-1){
              color[nei]=1-color[node];
              q.add(nei);
            } else if(color[nei]==color[node]){
              return false;
            }
          }
        }
      }
    }
    return true;
  }
}`,

      python: `from collections import deque

def isBipartite(g):
    n=len(g)
    color=[-1]*n

    for i in range(n):
        if color[i]==-1:
            q=deque([i])
            color[i]=0

            while q:
                node=q.popleft()
                for nei in g[node]:
                    if color[nei]==-1:
                        color[nei]=1-color[node]
                        q.append(nei)
                    elif color[nei]==color[node]:
                        return False
    return True`,

      c: `// bfs coloring`,
      cpp: `bool isBipartite(vector<vector<int>>& g){
    int n=g.size();
    vector<int> color(n,-1);

    for(int i=0;i<n;i++){
        if(color[i]==-1){
            queue<int> q;
            q.push(i);
            color[i]=0;

            while(!q.empty()){
                int node=q.front(); q.pop();

                for(int nei:g[node]){
                    if(color[nei]==-1){
                        color[nei]=1-color[node];
                        q.push(nei);
                    }
                    else if(color[nei]==color[node]){
                        return false;
                    }
                }
            }
        }
    }
    return true;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Detect Negative Cycle (Bellman-Ford)',
    difficulty: 'Medium',
    description: `Detect negative cycle using Bellman-Ford.`,
    inputExample: 'V, edges',
    outputExample: 'true/false',
    explanation: `Extra relaxation step.`,
    code: {
      java: `class Main{
  static boolean solve(int V,int[][] edges){
    int[] dist=new int[V];
    Arrays.fill(dist,100000000);

    dist[0]=0;

    for(int i=0;i<V-1;i++){
      for(int[] e:edges){
        int u=e[0],v=e[1],w=e[2];
        if(dist[u]!=100000000 && dist[u]+w < dist[v]){
          dist[v]=dist[u]+w;
        }
      }
    }

    for(int[] e:edges){
      int u=e[0],v=e[1],w=e[2];
      if(dist[u]!=100000000 && dist[u]+w < dist[v]){
        return true;
      }
    }
    return false;
  }
}`,

      python: `def solve(V,edges):
    INF=10**9
    dist=[INF]*V
    dist[0]=0

    for _ in range(V-1):
        for u,v,w in edges:
            if dist[u]!=INF and dist[u]+w < dist[v]:
                dist[v]=dist[u]+w

    for u,v,w in edges:
        if dist[u]!=INF and dist[u]+w < dist[v]:
            return True
    return False`,

      c: `// bellman ford`,
      cpp: `bool solve(int V,vector<vector<int>>& edges){
    int INF=1e9;
    vector<int> dist(V,INF);
    dist[0]=0;

    for(int i=0;i<V-1;i++){
        for(auto& e:edges){
            int u=e[0],v=e[1],w=e[2];
            if(dist[u]!=INF && dist[u]+w < dist[v]){
                dist[v]=dist[u]+w;
            }
        }
    }

    for(auto& e:edges){
        int u=e[0],v=e[1],w=e[2];
        if(dist[u]!=INF && dist[u]+w < dist[v]){
            return true;
        }
    }
    return false;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Graph',
    title: 'Find Longest Path in Directed Acyclic Graph',
    difficulty: 'Medium',
    description: `Find longest path from source in DAG.`,
    inputExample: 'V, edges, source',
    outputExample: 'distance array',
    explanation: `Topological sort + relax edges (reverse of shortest path).`,
    code: {
      java: `class Main{
  static void topo(int node,List<List<int[]>> g,boolean[] vis,Stack<Integer> st){
    vis[node]=true;
    for(int[] nei:g.get(node)){
      if(!vis[nei[0]]) topo(nei[0],g,vis,st);
    }
    st.push(node);
  }

  static int[] longestPath(int V,List<List<int[]>> g,int src){
    Stack<Integer> st=new Stack<>();
    boolean[] vis=new boolean[V];

    for(int i=0;i<V;i++){
      if(!vis[i]) topo(i,g,vis,st);
    }

    int[] dist=new int[V];
    Arrays.fill(dist,Integer.MIN_VALUE);
    dist[src]=0;

    while(!st.isEmpty()){
      int node=st.pop();

      if(dist[node]!=Integer.MIN_VALUE){
        for(int[] nei:g.get(node)){
          int v=nei[0],w=nei[1];
          dist[v]=Math.max(dist[v],dist[node]+w);
        }
      }
    }
    return dist;
  }
}`,

      python: `def longestPath(V,g,src):
    vis=[False]*V
    stack=[]

    def topo(node):
        vis[node]=True
        for v,w in g[node]:
            if not vis[v]:
                topo(v)
        stack.append(node)

    for i in range(V):
        if not vis[i]:
            topo(i)

    dist=[float('-inf')]*V
    dist[src]=0

    while stack:
        node=stack.pop()
        if dist[node]!=float('-inf'):
            for v,w in g[node]:
                dist[v]=max(dist[v],dist[node]+w)

    return dist`,

      c: `// topo + relax`,
      cpp: `void topo(int node,vector<vector<pair<int,int>>>& g,vector<bool>& vis,stack<int>& st){
    vis[node]=true;
    for(auto& [v,w]:g[node]){
        if(!vis[v]) topo(v,g,vis,st);
    }
    st.push(node);
}

vector<int> longestPath(int V,vector<vector<pair<int,int>>>& g,int src){
    stack<int> st;
    vector<bool> vis(V,false);

    for(int i=0;i<V;i++){
        if(!vis[i]) topo(i,g,vis,st);
    }

    vector<int> dist(V,INT_MIN);
    dist[src]=0;

    while(!st.empty()){
        int node=st.top(); st.pop();

        if(dist[node]!=INT_MIN){
            for(auto& [v,w]:g[node]){
                dist[v]=max(dist[v],dist[node]+w);
            }
        }
    }
    return dist;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Journey to the Moon',
    difficulty: 'Medium',
    description: `Count valid astronaut pairs from different countries.`,
    inputExample: 'n astronauts, pairs',
    outputExample: 'number of pairs',
    explanation: `Find connected components sizes.`,
    code: {
      java: `class Main{
  static int dfs(int node,List<List<Integer>> g,boolean[] vis){
    vis[node]=true;
    int size=1;

    for(int nei:g.get(node)){
      if(!vis[nei]){
        size+=dfs(nei,g,vis);
      }
    }
    return size;
  }

  static long solve(int n,int[][] edges){
    List<List<Integer>> g=new ArrayList<>();
    for(int i=0;i<n;i++) g.add(new ArrayList<>());

    for(int[] e:edges){
      g.get(e[0]).add(e[1]);
      g.get(e[1]).add(e[0]);
    }

    boolean[] vis=new boolean[n];
    List<Integer> comps=new ArrayList<>();

    for(int i=0;i<n;i++){
      if(!vis[i]){
        comps.add(dfs(i,g,vis));
      }
    }

    long res=0,sum=0;
    for(int size:comps){
      res+=sum*size;
      sum+=size;
    }
    return res;
  }
}`,

      python: `def solve(n,edges):
    g=[[] for _ in range(n)]
    for u,v in edges:
        g[u].append(v)
        g[v].append(u)

    vis=[False]*n

    def dfs(node):
        vis[node]=True
        size=1
        for nei in g[node]:
            if not vis[nei]:
                size+=dfs(nei)
        return size

    comps=[]
    for i in range(n):
        if not vis[i]:
            comps.append(dfs(i))

    res=0
    s=0
    for size in comps:
        res+=s*size
        s+=size

    return res`,

      c: `// components`,
      cpp: `int dfs(int node,vector<vector<int>>& g,vector<bool>& vis){
    vis[node]=true;
    int size=1;

    for(int nei:g[node]){
        if(!vis[nei]){
            size+=dfs(nei,g,vis);
        }
    }
    return size;
}

long long solve(int n,vector<vector<int>>& edges){
    vector<vector<int>> g(n);
    for(auto& e:edges){
        g[e[0]].push_back(e[1]);
        g[e[1]].push_back(e[0]);
    }

    vector<bool> vis(n,false);
    vector<int> comps;

    for(int i=0;i<n;i++){
        if(!vis[i]){
            comps.push_back(dfs(i,g,vis));
        }
    }

    long long res=0,sum=0;
    for(int size:comps){
        res+=sum*size;
        sum+=size;
    }
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Oliver and the Game 3',
    difficulty: 'Hard',
    description: `Check if one node lies in subtree of another.`,
    inputExample: 'tree queries',
    outputExample: 'YES/NO',
    explanation: `Use Euler Tour (in-time, out-time).`,
    code: {
      java: `class Main{
  static int timer=0;

  static void dfs(int node,int parent,List<List<Integer>> g,int[] in,int[] out){
    in[node]=timer++;

    for(int nei:g.get(node)){
      if(nei!=parent){
        dfs(nei,node,g,in,out);
      }
    }
    out[node]=timer++;
  }

  static boolean isSubtree(int u,int v,int[] in,int[] out){
    return in[u] <= in[v] && out[u] >= out[v];
  }
}`,

      python: `def preprocess(n,g):
    timer=0
    tin=[0]*n
    tout=[0]*n

    def dfs(node,parent):
        nonlocal timer
        tin[node]=timer
        timer+=1

        for nei in g[node]:
            if nei!=parent:
                dfs(nei,node)

        tout[node]=timer
        timer+=1

    dfs(0,-1)
    return tin,tout

def isSubtree(u,v,tin,tout):
    return tin[u] <= tin[v] and tout[u] >= tout[v]`,

      c: `// euler tour`,
      cpp: `int timer=0;

void dfs(int node,int parent,vector<vector<int>>& g,vector<int>& in,vector<int>& out){
    in[node]=timer++;

    for(int nei:g[node]){
        if(nei!=parent){
            dfs(nei,node,g,in,out);
        }
    }
    out[node]=timer++;
}

bool isSubtree(int u,int v,vector<int>& in,vector<int>& out){
    return in[u] <= in[v] && out[u] >= out[v];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Water Jug Problem (BFS)',
    difficulty: 'Medium',
    description: `Measure target using two jugs.`,
    inputExample: 'jug1, jug2, target',
    outputExample: 'true/false',
    explanation: `State space BFS.`,
    code: {
      java: `class Main{
  static boolean solve(int x,int y,int target){
    Queue<int[]> q=new LinkedList<>();
    Set<String> vis=new HashSet<>();

    q.add(new int[]{0,0});

    while(!q.isEmpty()){
      int[] cur=q.poll();
      int a=cur[0],b=cur[1];

      if(a==target || b==target || a+b==target)
        return true;

      String key=a+","+b;
      if(vis.contains(key)) continue;
      vis.add(key);

      q.add(new int[]{x,b});
      q.add(new int[]{a,y});
      q.add(new int[]{0,b});
      q.add(new int[]{a,0});

      int pour=Math.min(a,y-b);
      q.add(new int[]{a-pour,b+pour});

      pour=Math.min(b,x-a);
      q.add(new int[]{a+pour,b-pour});
    }
    return false;
  }
}`,

      python: `from collections import deque

def solve(x,y,target):
    q=deque([(0,0)])
    vis=set()

    while q:
        a,b=q.popleft()

        if a==target or b==target or a+b==target:
            return True

        if (a,b) in vis:
            continue
        vis.add((a,b))

        q.append((x,b))
        q.append((a,y))
        q.append((0,b))
        q.append((a,0))

        pour=min(a,y-b)
        q.append((a-pour,b+pour))

        pour=min(b,x-a)
        q.append((a+pour,b-pour))

    return False`,

      c: `// bfs states`,
      cpp: `bool solve(int x,int y,int target){
    queue<pair<int,int>> q;
    set<pair<int,int>> vis;

    q.push({0,0});

    while(!q.empty()){
        auto [a,b]=q.front(); q.pop();

        if(a==target || b==target || a+b==target)
            return true;

        if(vis.count({a,b})) continue;
        vis.insert({a,b});

        q.push({x,b});
        q.push({a,y});
        q.push({0,b});
        q.push({a,0});

        int pour=min(a,y-b);
        q.push({a-pour,b+pour});

        pour=min(b,x-a);
        q.push({a+pour,b-pour});
    }
    return false;
}`
    }
  },
    {
    subject: 'Code',
    category: 'Graph',
    title: 'Path of More Than K Length from Source',
    difficulty: 'Hard',
    description: `Check if there exists a path with total weight > K.`,
    inputExample: 'graph, source, K',
    outputExample: 'true/false',
    explanation: `DFS + backtracking.`,
    code: {
      java: `class Main{
  static boolean dfs(int node,int k,List<List<int[]>> g,boolean[] vis){
    if(k<=0) return true;

    for(int[] nei:g.get(node)){
      int v=nei[0],w=nei[1];

      if(vis[v]) continue;

      if(w>=k) return true;

      vis[v]=true;
      if(dfs(v,k-w,g,vis)) return true;
      vis[v]=false;
    }
    return false;
  }
}`,

      python: `def solve(g,src,k):
    n=len(g)
    vis=[False]*n

    def dfs(node,k):
        if k<=0:
            return True

        for v,w in g[node]:
            if vis[v]:
                continue
            if w>=k:
                return True

            vis[v]=True
            if dfs(v,k-w):
                return True
            vis[v]=False
        return False

    vis[src]=True
    return dfs(src,k)`,

      c: `// dfs backtracking`,
      cpp: `bool dfs(int node,int k,vector<vector<pair<int,int>>>& g,vector<bool>& vis){
    if(k<=0) return true;

    for(auto& [v,w]:g[node]){
        if(vis[v]) continue;

        if(w>=k) return true;

        vis[v]=true;
        if(dfs(v,k-w,g,vis)) return true;
        vis[v]=false;
    }
    return false;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'M-Coloring Problem',
    difficulty: 'Medium',
    description: `Color graph with M colors.`,
    inputExample: 'graph, m',
    outputExample: 'true/false',
    explanation: `Backtracking.`,
    code: {
      java: `class Main{
  static boolean solve(int[][] g,int m){
    int n=g.length;
    int[] color=new int[n];
    return dfs(0,g,color,m,n);
  }

  static boolean dfs(int node,int[][] g,int[] color,int m,int n){
    if(node==n) return true;

    for(int c=1;c<=m;c++){
      if(isSafe(node,g,color,c,n)){
        color[node]=c;
        if(dfs(node+1,g,color,m,n)) return true;
        color[node]=0;
      }
    }
    return false;
  }

  static boolean isSafe(int node,int[][] g,int[] color,int c,int n){
    for(int i=0;i<n;i++){
      if(g[node][i]==1 && color[i]==c) return false;
    }
    return true;
  }
}`,

      python: `def solve(g,m):
    n=len(g)
    color=[0]*n

    def dfs(node):
        if node==n:
            return True

        for c in range(1,m+1):
            if all(g[node][i]==0 or color[i]!=c for i in range(n)):
                color[node]=c
                if dfs(node+1):
                    return True
                color[node]=0
        return False

    return dfs(0)`,

      c: `// backtracking coloring`,
      cpp: `bool isSafe(int node,vector<vector<int>>& g,vector<int>& color,int c){
    for(int i=0;i<g.size();i++){
        if(g[node][i]==1 && color[i]==c) return false;
    }
    return true;
}

bool dfs(int node,vector<vector<int>>& g,vector<int>& color,int m){
    if(node==g.size()) return true;

    for(int c=1;c<=m;c++){
        if(isSafe(node,g,color,c)){
            color[node]=c;
            if(dfs(node+1,g,color,m)) return true;
            color[node]=0;
        }
    }
    return false;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Minimum Edges to Reverse to Reach Destination',
    difficulty: 'Medium',
    description: `Minimum edges to reverse for path.`,
    inputExample: 'n, edges, src, dst',
    outputExample: 'min reversals',
    explanation: `0-1 BFS.`,
    code: {
      java: `class Main{
  static int solve(int n,int[][] edges,int src,int dst){
    List<List<int[]>> g=new ArrayList<>();
    for(int i=0;i<n;i++) g.add(new ArrayList<>());

    for(int[] e:edges){
      g.get(e[0]).add(new int[]{e[1],0});
      g.get(e[1]).add(new int[]{e[0],1});
    }

    Deque<int[]> dq=new ArrayDeque<>();
    int[] dist=new int[n];
    Arrays.fill(dist,Integer.MAX_VALUE);

    dq.addFirst(new int[]{src,0});
    dist[src]=0;

    while(!dq.isEmpty()){
      int[] cur=dq.pollFirst();
      int node=cur[0];

      for(int[] nei:g.get(node)){
        int v=nei[0],w=nei[1];

        if(dist[node]+w < dist[v]){
          dist[v]=dist[node]+w;
          if(w==0) dq.addFirst(new int[]{v,dist[v]});
          else dq.addLast(new int[]{v,dist[v]});
        }
      }
    }
    return dist[dst];
  }
}`,

      python: `from collections import deque

def solve(n,edges,src,dst):
    g=[[] for _ in range(n)]

    for u,v in edges:
        g[u].append((v,0))
        g[v].append((u,1))

    dist=[float('inf')]*n
    dist[src]=0

    dq=deque([(src,0)])

    while dq:
        node,d=dq.popleft()

        for v,w in g[node]:
            if dist[node]+w < dist[v]:
                dist[v]=dist[node]+w
                if w==0:
                    dq.appendleft((v,dist[v]))
                else:
                    dq.append((v,dist[v]))

    return dist[dst]`,

      c: `// 0-1 bfs`,
      cpp: `int solve(int n,vector<vector<int>>& edges,int src,int dst){
    vector<vector<pair<int,int>>> g(n);

    for(auto& e:edges){
        g[e[0]].push_back({e[1],0});
        g[e[1]].push_back({e[0],1});
    }

    deque<int> dq;
    vector<int> dist(n,INT_MAX);

    dq.push_front(src);
    dist[src]=0;

    while(!dq.empty()){
        int node=dq.front(); dq.pop_front();

        for(auto& [v,w]:g[node]){
            if(dist[node]+w < dist[v]){
                dist[v]=dist[node]+w;
                if(w==0) dq.push_front(v);
                else dq.push_back(v);
            }
        }
    }
    return dist[dst];
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Paths Visiting All Nodes (Konigsberg / Euler Concept)',
    difficulty: 'Medium',
    description: `Check if Euler Path/Circuit exists.`,
    inputExample: 'graph',
    outputExample: 'path or possible/impossible',
    explanation: `Degree based + connectivity.`,
    code: {
      java: `class Main{
  static boolean isEuler(int V,List<List<Integer>> g){
    int odd=0;

    for(int i=0;i<V;i++){
      if(g.get(i).size()%2!=0) odd++;
    }

    if(odd==0) return true; // circuit
    if(odd==2) return true; // path
    return false;
  }
}`,

      python: `def isEuler(g):
    odd=sum(1 for adj in g if len(adj)%2!=0)

    if odd==0:
        return "Euler Circuit"
    elif odd==2:
        return "Euler Path"
    else:
        return "Not Possible"`,

      c: `// degree check`,
      cpp: `string isEuler(vector<vector<int>>& g){
    int odd=0;

    for(auto& adj:g){
        if(adj.size()%2!=0) odd++;
    }

    if(odd==0) return "Euler Circuit";
    if(odd==2) return "Euler Path";
    return "Not Possible";
}`
    }
  },
  {
    subject: 'Code',
    category: 'Graph',
    title: 'Vertex Cover (Approximation)',
    difficulty: 'Medium',
    description: `Find approximate vertex cover.`,
    inputExample: 'edges',
    outputExample: 'vertex set',
    explanation: `Pick edge → add both vertices → remove incident edges.`,
    code: {
      java: `class Main{
  static Set<Integer> solve(int[][] edges){
    Set<Integer> cover=new HashSet<>();
    boolean[] used=new boolean[edges.length];

    for(int i=0;i<edges.length;i++){
      if(!used[i]){
        int u=edges[i][0],v=edges[i][1];
        cover.add(u);
        cover.add(v);

        for(int j=0;j<edges.length;j++){
          if(edges[j][0]==u || edges[j][1]==u ||
             edges[j][0]==v || edges[j][1]==v){
            used[j]=true;
          }
        }
      }
    }
    return cover;
  }
}`,

      python: `def vertexCover(edges):
    cover=set()
    used=[False]*len(edges)

    for i,(u,v) in enumerate(edges):
        if not used[i]:
            cover.add(u)
            cover.add(v)

            for j,(a,b) in enumerate(edges):
                if a in (u,v) or b in (u,v):
                    used[j]=True
    return cover`,

      c: `// greedy approx`,
      cpp: `set<int> vertexCover(vector<vector<int>>& edges){
    set<int> cover;
    vector<bool> used(edges.size(),false);

    for(int i=0;i<edges.size();i++){
        if(!used[i]){
            int u=edges[i][0],v=edges[i][1];
            cover.insert(u);
            cover.insert(v);

            for(int j=0;j<edges.size();j++){
                if(edges[j][0]==u || edges[j][1]==u ||
                   edges[j][0]==v || edges[j][1]==v){
                    used[j]=true;
                }
            }
        }
    }
    return cover;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Chinese Postman Problem (Intro)',
    difficulty: 'Hard',
    description: `Minimum cost to traverse all edges.`,
    inputExample: 'graph',
    outputExample: 'cost',
    explanation: `If all degrees even → Euler circuit else pair odd nodes.`,
    code: {
      java: `class Main{
  static int solve(int V,List<List<int[]>> g){
    int sum=0;
    List<Integer> odd=new ArrayList<>();

    for(int i=0;i<V;i++){
      int deg=g.get(i).size();
      if(deg%2!=0) odd.add(i);

      for(int[] e:g.get(i)){
        sum+=e[1];
      }
    }

    sum/=2;

    if(odd.size()==0) return sum;

    // simplified: return sum (pairing omitted)
    return sum;
  }
}`,

      python: `def chinesePostman(g):
    total=0
    odd=[]

    for i in range(len(g)):
        if len(g[i])%2!=0:
            odd.append(i)
        for v,w in g[i]:
            total+=w

    total//=2

    if not odd:
        return total

    return total  # simplified`,

      c: `// euler concept`,
      cpp: `int chinesePostman(vector<vector<pair<int,int>>>& g){
    int total=0;
    vector<int> odd;

    for(int i=0;i<g.size();i++){
        if(g[i].size()%2!=0) odd.push_back(i);

        for(auto& e:g[i]){
            total+=e.second;
        }
    }

    total/=2;

    if(odd.size()==0) return total;

    return total; // simplified
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Number of Triangles in Graph',
    difficulty: 'Medium',
    description: `Count triangles in graph.`,
    inputExample: 'adj matrix',
    outputExample: 'count',
    explanation: `Use matrix multiplication idea.`,
    code: {
      java: `class Main{
  static int solve(int[][] g){
    int n=g.length;
    int count=0;

    for(int i=0;i<n;i++){
      for(int j=0;j<n;j++){
        for(int k=0;k<n;k++){
          if(g[i][j]==1 && g[j][k]==1 && g[k][i]==1){
            count++;
          }
        }
      }
    }
    return count/6;
  }
}`,

      python: `def countTriangles(g):
    n=len(g)
    count=0

    for i in range(n):
        for j in range(n):
            for k in range(n):
                if g[i][j] and g[j][k] and g[k][i]:
                    count+=1

    return count//6`,

      c: `// triple loop`,
      cpp: `int countTriangles(vector<vector<int>>& g){
    int n=g.size(),count=0;

    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            for(int k=0;k<n;k++){
                if(g[i][j] && g[j][k] && g[k][i]){
                    count++;
                }
            }
        }
    }
    return count/6;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Minimize Cash Flow',
    difficulty: 'Medium',
    description: `Minimize transactions among friends.`,
    inputExample: 'graph of debts',
    outputExample: 'min transactions',
    explanation: `Greedy: settle max creditor & debtor.`,
    code: {
      java: `class Main{
  static void solve(int[][] g){
    int n=g.length;
    int[] net=new int[n];

    for(int i=0;i<n;i++){
      for(int j=0;j<n;j++){
        net[i]+=g[j][i]-g[i][j];
      }
    }

    while(true){
      int maxC=0,maxD=0;

      for(int i=0;i<n;i++){
        if(net[i]>net[maxC]) maxC=i;
        if(net[i]<net[maxD]) maxD=i;
      }

      if(net[maxC]==0 && net[maxD]==0) break;

      int amt=Math.min(net[maxC],-net[maxD]);
      net[maxC]-=amt;
      net[maxD]+=amt;

      System.out.println(maxD+" pays "+amt+" to "+maxC);
    }
  }
}`,

      python: `def minimize(g):
    n=len(g)
    net=[0]*n

    for i in range(n):
        for j in range(n):
            net[i]+=g[j][i]-g[i][j]

    while True:
        mx=max(range(n),key=lambda i:net[i])
        mn=min(range(n),key=lambda i:net[i])

        if net[mx]==0 and net[mn]==0:
            break

        amt=min(net[mx],-net[mn])
        net[mx]-=amt
        net[mn]+=amt

        print(mn,"pays",amt,"to",mx)`,

      c: `// greedy`,
      cpp: `void minimize(vector<vector<int>>& g){
    int n=g.size();
    vector<int> net(n,0);

    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            net[i]+=g[j][i]-g[i][j];
        }
    }

    while(true){
        int mx=max_element(net.begin(),net.end())-net.begin();
        int mn=min_element(net.begin(),net.end())-net.begin();

        if(net[mx]==0 && net[mn]==0) break;

        int amt=min(net[mx],-net[mn]);
        net[mx]-=amt;
        net[mn]+=amt;

        cout<<mn<<" pays "<<amt<<" to "<<mx<<endl;
    }
}`
    }
  },

  {
    subject: 'Code',
    category: 'Graph',
    title: 'Two Clique Problem',
    difficulty: 'Medium',
    description: `Check if graph can be divided into two cliques.`,
    inputExample: 'graph',
    outputExample: 'true/false',
    explanation: `Check complement graph is bipartite.`,
    code: {
      java: `class Main{
  static boolean solve(int[][] g){
    int n=g.length;
    int[][] comp=new int[n][n];

    for(int i=0;i<n;i++){
      for(int j=0;j<n;j++){
        if(i!=j && g[i][j]==0) comp[i][j]=1;
      }
    }

    int[] color=new int[n];
    Arrays.fill(color,-1);

    for(int i=0;i<n;i++){
      if(color[i]==-1){
        Queue<Integer> q=new LinkedList<>();
        q.add(i);
        color[i]=0;

        while(!q.isEmpty()){
          int node=q.poll();

          for(int j=0;j<n;j++){
            if(comp[node][j]==1){
              if(color[j]==-1){
                color[j]=1-color[node];
                q.add(j);
              } else if(color[j]==color[node]){
                return false;
              }
            }
          }
        }
      }
    }
    return true;
  }
}`,

      python: `def twoClique(g):
    n=len(g)
    comp=[[0]*n for _ in range(n)]

    for i in range(n):
        for j in range(n):
            if i!=j and g[i][j]==0:
                comp[i][j]=1

    color=[-1]*n

    from collections import deque

    for i in range(n):
        if color[i]==-1:
            q=deque([i])
            color[i]=0

            while q:
                node=q.popleft()
                for j in range(n):
                    if comp[node][j]:
                        if color[j]==-1:
                            color[j]=1-color[node]
                            q.append(j)
                        elif color[j]==color[node]:
                            return False
    return True`,

      c: `// complement bipartite`,
      cpp: `bool twoClique(vector<vector<int>>& g){
    int n=g.size();
    vector<vector<int>> comp(n,vector<int>(n,0));

    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i!=j && g[i][j]==0) comp[i][j]=1;
        }
    }

    vector<int> color(n,-1);

    for(int i=0;i<n;i++){
        if(color[i]==-1){
            queue<int> q;
            q.push(i);
            color[i]=0;

            while(!q.empty()){
                int node=q.front(); q.pop();

                for(int j=0;j<n;j++){
                    if(comp[node][j]){
                        if(color[j]==-1){
                            color[j]=1-color[node];
                            q.push(j);
                        }
                        else if(color[j]==color[node]){
                            return false;
                        }
                    }
                }
            }
        }
    }
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
        console.log(`Successfully processed ${problems.length} problems for Graph`)
        
        await mongoose.disconnect()
        process.exit(0)
    } catch (error) {
        console.error('Seed failed:', error)
        process.exit(1)
    }
}

seed()
