import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'
import { fileURLToPath } from 'url'

export const problems = [
  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Assign Cookies',
    difficulty: 'Easy',
    description: `Assign cookies to maximize satisfied children.`,
    inputExample: 'g=[1,2,3], s=[1,1]',
    outputExample: '1',
    explanation: `Sort both arrays and greedily assign.`,
    code: {
      java: `import java.util.*;
class Main{
  static int findContent(int[] g,int[] s){
    Arrays.sort(g);
    Arrays.sort(s);
    int i=0,j=0;

    while(i<g.length && j<s.length){
      if(s[j]>=g[i]){
        i++; j++;
      } else j++;
    }
    return i;
  }
}`,

      python: `def assign(g,s):
    g.sort(); s.sort()
    i=j=0
    while i<len(g) and j<len(s):
        if s[j]>=g[i]:
            i+=1; j+=1
        else:
            j+=1
    return i`,

      c: `// sort + two pointer`,
      cpp: `int assign(vector<int>& g,vector<int>& s){
    sort(g.begin(),g.end());
    sort(s.begin(),s.end());
    int i=0,j=0;
    while(i<g.size() && j<s.size()){
        if(s[j]>=g[i]) i++,j++;
        else j++;
    }
    return i;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Fractional Knapsack',
    difficulty: 'Medium',
    description: `Maximize value with fractional items.`,
    inputExample: 'W=50, items={(60,10),(100,20),(120,30)}',
    outputExample: '240',
    explanation: `Sort by value/weight ratio.`,
    code: {
      java: `import java.util.*;
class Item{
  int value,weight;
  Item(int v,int w){value=v;weight=w;}
}

class Main{
  static double knap(Item[] arr,int W){
    Arrays.sort(arr,(a,b)->Double.compare((double)b.value/b.weight,(double)a.value/a.weight));
    double res=0;

    for(Item it:arr){
      if(W>=it.weight){
        res+=it.value;
        W-=it.weight;
      } else{
        res+=((double)it.value/it.weight)*W;
        break;
      }
    }
    return res;
  }
}`,

      python: `def knap(items,W):
    items.sort(key=lambda x:x[0]/x[1], reverse=True)
    res=0
    for v,w in items:
        if W>=w:
            res+=v
            W-=w
        else:
            res+=v*(W/w)
            break
    return res`,

      c: `// struct + sort by ratio`,
      cpp: `struct Item{int v,w;};

double knap(vector<Item>& arr,int W){
    sort(arr.begin(),arr.end(),[](Item a,Item b){
        return (double)a.v/a.w > (double)b.v/b.w;
    });

    double res=0;
    for(auto &it:arr){
        if(W>=it.w){
            res+=it.v;
            W-=it.w;
        } else{
            res+= (double)it.v/it.w * W;
            break;
        }
    }
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Minimum Number of Coins',
    difficulty: 'Medium',
    description: `Find minimum coins to make amount.`,
    inputExample: 'coins=[1,2,5], amount=11',
    outputExample: '3',
    explanation: `Pick largest coin greedily.`,
    code: {
      java: `import java.util.*;
class Main{
  static int minCoins(int[] coins,int amt){
    Arrays.sort(coins);
    int count=0;

    for(int i=coins.length-1;i>=0;i--){
      while(amt>=coins[i]){
        amt-=coins[i];
        count++;
      }
    }
    return amt==0?count:-1;
  }
}`,

      python: `def min_coins(coins,amt):
    coins.sort(reverse=True)
    count=0
    for c in coins:
        while amt>=c:
            amt-=c
            count+=1
    return count if amt==0 else -1`,

      c: `// greedy approach`,
      cpp: `int minCoins(vector<int>& coins,int amt){
    sort(coins.rbegin(),coins.rend());
    int count=0;
    for(int c:coins){
        while(amt>=c){
            amt-=c;
            count++;
        }
    }
    return amt==0?count:-1;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Lemonade Change',
    difficulty: 'Easy',
    description: `Check if change can be given.`,
    inputExample: '[5,5,5,10,20]',
    outputExample: 'true',
    explanation: `Track count of 5 and 10.`,
    code: {
      java: `class Main{
  static boolean lemonade(int[] bills){
    int five=0, ten=0;

    for(int b:bills){
      if(b==5) five++;
      else if(b==10){
        if(five==0) return false;
        five--; ten++;
      } else{
        if(ten>0 && five>0){
          ten--; five--;
        } else if(five>=3){
          five-=3;
        } else return false;
      }
    }
    return true;
  }
}`,

      python: `def lemonade(bills):
    five=ten=0
    for b in bills:
        if b==5: five+=1
        elif b==10:
            if five==0: return False
            five-=1; ten+=1
        else:
            if ten>0 and five>0:
                ten-=1; five-=1
            elif five>=3:
                five-=3
            else: return False
    return True`,

      c: `// counters`,
      cpp: `bool lemonade(vector<int>& bills){
    int five=0,ten=0;
    for(int b:bills){
        if(b==5) five++;
        else if(b==10){
            if(five==0) return false;
            five--; ten++;
        } else{
            if(ten>0 && five>0) ten--,five--;
            else if(five>=3) five-=3;
            else return false;
        }
    }
    return true;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Valid Parenthesis Checker',
    difficulty: 'Easy',
    description: `Check valid parentheses.`,
    inputExample: '"()[]{}"',
    outputExample: 'true',
    explanation: `Use stack.`,
    code: {
      java: `import java.util.*;
class Main{
  static boolean valid(String s){
    Stack<Character> st=new Stack<>();
    for(char c:s.toCharArray()){
      if(c=='('||c=='{'||c=='[') st.push(c);
      else{
        if(st.isEmpty()) return false;
        char t=st.pop();
        if((c==')'&&t!='(')||(c=='}'&&t!='{')||(c==']'&&t!='['))
          return false;
      }
    }
    return st.isEmpty();
  }
}`,

      python: `def valid(s):
    st=[]
    mp={')':'(',']':'[','}':'{'}
    for c in s:
        if c in '({[':
            st.append(c)
        else:
            if not st or st[-1]!=mp[c]:
                return False
            st.pop()
    return not st`,

      c: `// stack`,
      cpp: `bool valid(string s){
    stack<char> st;
    for(char c:s){
        if(c=='('||c=='{'||c=='[') st.push(c);
        else{
            if(st.empty()) return false;
            char t=st.top(); st.pop();
            if((c==')'&&t!='(')||(c=='}'&&t!='{')||(c==']'&&t!='['))
                return false;
        }
    }
    return st.empty();
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'N Meetings in One Room',
    difficulty: 'Medium',
    description: `Maximize number of meetings.`,
    inputExample: 'start=[1,3,0,5,8,5], end=[2,4,6,7,9,9]',
    outputExample: '4',
    explanation: `Sort by end time.`,
    code: {
      java: `import java.util.*;
class Meeting{
  int s,e;
  Meeting(int s,int e){this.s=s;this.e=e;}
}

class Main{
  static int maxMeet(int[] start,int[] end){
    int n=start.length;
    List<Meeting> list=new ArrayList<>();
    for(int i=0;i<n;i++)
      list.add(new Meeting(start[i],end[i]));

    list.sort((a,b)->a.e-b.e);

    int count=1, prev=list.get(0).e;

    for(int i=1;i<n;i++){
      if(list.get(i).s>prev){
        count++;
        prev=list.get(i).e;
      }
    }
    return count;
  }
}`,

      python: `def meetings(start,end):
    arr=sorted(zip(start,end), key=lambda x:x[1])
    count=1
    prev=arr[0][1]

    for s,e in arr[1:]:
        if s>prev:
            count+=1
            prev=e
    return count`,

      c: `// struct + sort`,
      cpp: `int maxMeet(vector<int>& s,vector<int>& e){
    vector<pair<int,int>> arr;
    for(int i=0;i<s.size();i++)
        arr.push_back({e[i],s[i]});

    sort(arr.begin(),arr.end());

    int count=1, prev=arr[0].first;

    for(int i=1;i<arr.size();i++){
        if(arr[i].second>prev){
            count++;
            prev=arr[i].first;
        }
    }
    return count;
}`
    }
  },
    {
    subject: 'Code',
    category: 'Greedy',
    title: 'Jump Game',
    difficulty: 'Medium',
    description: `Check if you can reach the last index.`,
    inputExample: '[2,3,1,1,4]',
    outputExample: 'true',
    explanation: `Track maximum reachable index.`,
    code: {
      java: `class Main{
  static boolean canJump(int[] nums){
    int reach = 0;
    for(int i=0;i<nums.length;i++){
      if(i > reach) return false;
      reach = Math.max(reach, i + nums[i]);
    }
    return true;
  }
}`,

      python: `def can_jump(nums):
    reach = 0
    for i in range(len(nums)):
        if i > reach:
            return False
        reach = max(reach, i + nums[i])
    return True`,

      c: `int canJump(int nums[], int n){
    int reach = 0;
    for(int i=0;i<n;i++){
        if(i > reach) return 0;
        if(i + nums[i] > reach)
            reach = i + nums[i];
    }
    return 1;
}`,

      cpp: `bool canJump(vector<int>& nums){
    int reach = 0;
    for(int i=0;i<nums.size();i++){
        if(i > reach) return false;
        reach = max(reach, i + nums[i]);
    }
    return true;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Jump Game II',
    difficulty: 'Medium',
    description: `Find minimum number of jumps to reach end.`,
    inputExample: '[2,3,1,1,4]',
    outputExample: '2',
    explanation: `Greedy range expansion.`,
    code: {
      java: `class Main{
  static int jump(int[] nums){
    int jumps=0, curEnd=0, farthest=0;

    for(int i=0;i<nums.length-1;i++){
      farthest = Math.max(farthest, i + nums[i]);

      if(i == curEnd){
        jumps++;
        curEnd = farthest;
      }
    }
    return jumps;
  }
}`,

      python: `def jump(nums):
    jumps=0
    curEnd=0
    farthest=0

    for i in range(len(nums)-1):
        farthest = max(farthest, i + nums[i])

        if i == curEnd:
            jumps += 1
            curEnd = farthest

    return jumps`,

      c: `int jump(int nums[], int n){
    int jumps=0, curEnd=0, farthest=0;

    for(int i=0;i<n-1;i++){
        if(i + nums[i] > farthest)
            farthest = i + nums[i];

        if(i == curEnd){
            jumps++;
            curEnd = farthest;
        }
    }
    return jumps;
}`,

      cpp: `int jump(vector<int>& nums){
    int jumps=0, curEnd=0, farthest=0;

    for(int i=0;i<nums.size()-1;i++){
        farthest = max(farthest, i + nums[i]);

        if(i == curEnd){
            jumps++;
            curEnd = farthest;
        }
    }
    return jumps;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Minimum Platforms Required for a Railway',
    difficulty: 'Medium',
    description: `Find minimum number of platforms required.`,
    inputExample: 'arr=[900,940,950,1100,1500,1800], dep=[910,1200,1120,1130,1900,2000]',
    outputExample: '3',
    explanation: `Sort arrival and departure arrays.`,
    code: {
      java: `import java.util.*;

class Main{
  static int minPlatform(int[] arr,int[] dep){
    Arrays.sort(arr);
    Arrays.sort(dep);

    int i=0,j=0,plat=0,maxPlat=0;

    while(i<arr.length && j<dep.length){
      if(arr[i] <= dep[j]){
        plat++;
        maxPlat = Math.max(maxPlat, plat);
        i++;
      } else{
        plat--;
        j++;
      }
    }
    return maxPlat;
  }
}`,

      python: `def min_platform(arr,dep):
    arr.sort()
    dep.sort()

    i=j=0
    plat=0
    maxPlat=0

    while i<len(arr) and j<len(dep):
        if arr[i] <= dep[j]:
            plat+=1
            maxPlat=max(maxPlat,plat)
            i+=1
        else:
            plat-=1
            j+=1
    return maxPlat`,

      c: `// sort arrays then two pointer`,
      cpp: `int minPlatform(vector<int>& arr,vector<int>& dep){
    sort(arr.begin(),arr.end());
    sort(dep.begin(),dep.end());

    int i=0,j=0,plat=0,maxPlat=0;

    while(i<arr.size() && j<dep.size()){
        if(arr[i] <= dep[j]){
            plat++;
            maxPlat=max(maxPlat,plat);
            i++;
        } else{
            plat--;
            j++;
        }
    }
    return maxPlat;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Greedy',
    title: 'Job Sequencing Problem',
    difficulty: 'Medium',
    description: `Schedule jobs to maximize profit within deadlines.`,
    inputExample: 'jobs={(id,deadline,profit)}',
    outputExample: 'max profit',
    explanation: `Sort by profit and assign latest possible slot.`,
    code: {
      java: `import java.util.*;

class Job{
  int id,dead,profit;
  Job(int i,int d,int p){id=i;dead=d;profit=p;}
}

class Main{
  static int jobSeq(Job[] jobs){
    Arrays.sort(jobs,(a,b)->b.profit-a.profit);

    int maxDead=0;
    for(Job j:jobs) maxDead=Math.max(maxDead,j.dead);

    int[] slot=new int[maxDead+1];
    Arrays.fill(slot,-1);

    int profit=0;

    for(Job j:jobs){
      for(int d=j.dead; d>0; d--){
        if(slot[d]==-1){
          slot[d]=j.id;
          profit+=j.profit;
          break;
        }
      }
    }
    return profit;
  }
}`,

      python: `def job_seq(jobs):
    jobs.sort(key=lambda x:x[2], reverse=True)
    maxDead=max(j[1] for j in jobs)

    slot=[-1]*(maxDead+1)
    profit=0

    for id,d,p in jobs:
        for j in range(d,0,-1):
            if slot[j]==-1:
                slot[j]=id
                profit+=p
                break
    return profit`,

      c: `// struct + sorting + slot array`,
      cpp: `struct Job{int id,dead,profit;};

int jobSeq(vector<Job>& jobs){
    sort(jobs.begin(),jobs.end(),[](Job a,Job b){
        return a.profit>b.profit;
    });

    int maxDead=0;
    for(auto &j:jobs) maxDead=max(maxDead,j.dead);

    vector<int> slot(maxDead+1,-1);
    int profit=0;

    for(auto &j:jobs){
        for(int d=j.dead; d>0; d--){
            if(slot[d]==-1){
                slot[d]=j.id;
                profit+=j.profit;
                break;
            }
        }
    }
    return profit;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Candy',
    difficulty: 'Hard',
    description: `Distribute candies such that each child gets at least one and higher rating gets more.`,
    inputExample: '[1,0,2]',
    outputExample: '5',
    explanation: `Two pass greedy (left to right, right to left).`,
    code: {
      java: `import java.util.*;

class Main{
  static int candy(int[] ratings){
    int n=ratings.length;
    int[] candies=new int[n];
    Arrays.fill(candies,1);

    for(int i=1;i<n;i++)
      if(ratings[i]>ratings[i-1])
        candies[i]=candies[i-1]+1;

    for(int i=n-2;i>=0;i--)
      if(ratings[i]>ratings[i+1])
        candies[i]=Math.max(candies[i],candies[i+1]+1);

    int sum=0;
    for(int c:candies) sum+=c;

    return sum;
  }
}`,

      python: `def candy(r):
    n=len(r)
    c=[1]*n

    for i in range(1,n):
        if r[i]>r[i-1]:
            c[i]=c[i-1]+1

    for i in range(n-2,-1,-1):
        if r[i]>r[i+1]:
            c[i]=max(c[i],c[i+1]+1)

    return sum(c)`,

      c: `// two pass array`,
      cpp: `int candy(vector<int>& r){
    int n=r.size();
    vector<int> c(n,1);

    for(int i=1;i<n;i++)
        if(r[i]>r[i-1])
            c[i]=c[i-1]+1;

    for(int i=n-2;i>=0;i--)
        if(r[i]>r[i+1])
            c[i]=max(c[i],c[i+1]+1);

    return accumulate(c.begin(),c.end(),0);
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Shortest Job First (SJF) Scheduling',
    difficulty: 'Medium',
    description: `Minimize average waiting time.`,
    inputExample: '[6,8,7,3]',
    outputExample: 'average waiting time',
    explanation: `Sort jobs by burst time.`,
    code: {
      java: `import java.util.*;

class Main{
  static double sjf(int[] bt){
    Arrays.sort(bt);
    int wait=0, total=0;

    for(int i=0;i<bt.length;i++){
      total+=wait;
      wait+=bt[i];
    }
    return (double)total/bt.length;
  }
}`,

      python: `def sjf(bt):
    bt.sort()
    wait=0
    total=0

    for b in bt:
        total+=wait
        wait+=b

    return total/len(bt)`,

      c: `// sort + accumulate`,
      cpp: `double sjf(vector<int>& bt){
    sort(bt.begin(),bt.end());
    int wait=0,total=0;

    for(int b:bt){
        total+=wait;
        wait+=b;
    }
    return (double)total/bt.size();
}`
    }
  },
    {
    subject: 'Code',
    category: 'Greedy',
    title: 'LRU Page Replacement',
    difficulty: 'Medium',
    description: `Implement LRU cache/page replacement.`,
    inputExample: 'capacity=2, put(1), put(2), get(1)',
    outputExample: '1',
    explanation: `Use hashmap + doubly linked list.`,
    code: {
      java: `import java.util.*;

class LRU {
  class Node {
    int key,val;
    Node prev,next;
    Node(int k,int v){key=k;val=v;}
  }

  int cap;
  Map<Integer,Node> map;
  Node head,tail;

  LRU(int cap){
    this.cap=cap;
    map=new HashMap<>();
    head=new Node(0,0);
    tail=new Node(0,0);
    head.next=tail;
    tail.prev=head;
  }

  void remove(Node n){
    n.prev.next=n.next;
    n.next.prev=n.prev;
  }

  void insert(Node n){
    n.next=head.next;
    n.prev=head;
    head.next.prev=n;
    head.next=n;
  }

  int get(int key){
    if(!map.containsKey(key)) return -1;
    Node n=map.get(key);
    remove(n);
    insert(n);
    return n.val;
  }

  void put(int key,int val){
    if(map.containsKey(key))
      remove(map.get(key));

    if(map.size()==cap){
      Node lru=tail.prev;
      remove(lru);
      map.remove(lru.key);
    }

    Node n=new Node(key,val);
    insert(n);
    map.put(key,n);
  }
}`,

      python: `class LRU:
    def __init__(self,cap):
        self.cap=cap
        self.cache={}

    def get(self,key):
        if key not in self.cache:
            return -1
        val=self.cache.pop(key)
        self.cache[key]=val
        return val

    def put(self,key,val):
        if key in self.cache:
            self.cache.pop(key)
        elif len(self.cache)==self.cap:
            self.cache.pop(next(iter(self.cache)))
        self.cache[key]=val`,

      c: `// complex using doubly linked list`,
      cpp: `#include <bits/stdc++.h>
using namespace std;

class LRU{
    int cap;
    list<pair<int,int>> dq;
    unordered_map<int,list<pair<int,int>>::iterator> mp;

public:
    LRU(int c):cap(c){}

    int get(int key){
        if(mp.find(key)==mp.end()) return -1;
        auto it=mp[key];
        int val=it->second;
        dq.erase(it);
        dq.push_front({key,val});
        mp[key]=dq.begin();
        return val;
    }

    void put(int key,int val){
        if(mp.find(key)!=mp.end()){
            dq.erase(mp[key]);
        } else if(dq.size()==cap){
            auto last=dq.back();
            mp.erase(last.first);
            dq.pop_back();
        }
        dq.push_front({key,val});
        mp[key]=dq.begin();
    }
};`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Insert Interval',
    difficulty: 'Medium',
    description: `Insert interval and merge if needed.`,
    inputExample: '[[1,3],[6,9]], new=[2,5]',
    outputExample: '[[1,5],[6,9]]',
    explanation: `Add and merge intervals.`,
    code: {
      java: `import java.util.*;

class Main{
  static int[][] insert(int[][] intervals,int[] newI){
    List<int[]> res=new ArrayList<>();

    for(int[] in:intervals){
      if(in[1]<newI[0])
        res.add(in);
      else if(in[0]>newI[1]){
        res.add(newI);
        newI=in;
      } else{
        newI[0]=Math.min(newI[0],in[0]);
        newI[1]=Math.max(newI[1],in[1]);
      }
    }
    res.add(newI);
    return res.toArray(new int[0][]);
  }
}`,

      python: `def insert(intervals,newI):
    res=[]
    for i in intervals:
        if i[1]<newI[0]:
            res.append(i)
        elif i[0]>newI[1]:
            res.append(newI)
            newI=i
        else:
            newI=[min(newI[0],i[0]), max(newI[1],i[1])]
    res.append(newI)
    return res`,

      c: `// interval merge`,
      cpp: `vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newI){
    vector<vector<int>> res;

    for(auto &in:intervals){
        if(in[1]<newI[0])
            res.push_back(in);
        else if(in[0]>newI[1]){
            res.push_back(newI);
            newI=in;
        } else{
            newI[0]=min(newI[0],in[0]);
            newI[1]=max(newI[1],in[1]);
        }
    }
    res.push_back(newI);
    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Merge Intervals',
    difficulty: 'Medium',
    description: `Merge overlapping intervals.`,
    inputExample: '[[1,3],[2,6],[8,10],[15,18]]',
    outputExample: '[[1,6],[8,10],[15,18]]',
    explanation: `Sort by start and merge.`,
    code: {
      java: `import java.util.*;

class Main{
  static int[][] merge(int[][] arr){
    Arrays.sort(arr,(a,b)->a[0]-b[0]);

    List<int[]> res=new ArrayList<>();
    int[] cur=arr[0];

    for(int i=1;i<arr.length;i++){
      if(arr[i][0]<=cur[1])
        cur[1]=Math.max(cur[1],arr[i][1]);
      else{
        res.add(cur);
        cur=arr[i];
      }
    }
    res.add(cur);
    return res.toArray(new int[0][]);
  }
}`,

      python: `def merge(intervals):
    intervals.sort()
    res=[intervals[0]]

    for s,e in intervals[1:]:
        if s<=res[-1][1]:
            res[-1][1]=max(res[-1][1],e)
        else:
            res.append([s,e])
    return res`,

      c: `// sort + merge`,
      cpp: `vector<vector<int>> merge(vector<vector<int>>& arr){
    sort(arr.begin(),arr.end());

    vector<vector<int>> res;
    res.push_back(arr[0]);

    for(int i=1;i<arr.size();i++){
        if(arr[i][0]<=res.back()[1])
            res.back()[1]=max(res.back()[1],arr[i][1]);
        else
            res.push_back(arr[i]);
    }
    return res;
}`
    }
  },
    {
    subject: 'Code',
    category: 'Greedy',
    title: 'Non-overlapping Intervals',
    difficulty: 'Medium',
    description: `Remove minimum intervals to avoid overlap.`,
    inputExample: '[[1,2],[2,3],[3,4],[1,3]]',
    outputExample: '1',
    explanation: `Sort by end time and count overlaps.`,
    code: {
      java: `import java.util.*;
class Main{
  static int erase(int[][] arr){
    Arrays.sort(arr,(a,b)->a[1]-b[1]);
    int count=0, end=arr[0][1];

    for(int i=1;i<arr.length;i++){
      if(arr[i][0]<end){
        count++;
      } else{
        end=arr[i][1];
      }
    }
    return count;
  }
}`,

      python: `def erase(arr):
    arr.sort(key=lambda x:x[1])
    end=arr[0][1]
    count=0

    for s,e in arr[1:]:
        if s<end:
            count+=1
        else:
            end=e
    return count`,

      c: `// sort + greedy`,
      cpp: `int erase(vector<vector<int>>& arr){
    sort(arr.begin(),arr.end(),[](auto &a,auto &b){
        return a[1]<b[1];
    });

    int count=0, end=arr[0][1];

    for(int i=1;i<arr.size();i++){
        if(arr[i][0]<end) count++;
        else end=arr[i][1];
    }
    return count;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Huffman Encoding',
    difficulty: 'Hard',
    description: `Generate Huffman codes.`,
    inputExample: 'chars=[a,b,c,d], freq=[5,9,12,13]',
    outputExample: 'codes',
    explanation: `Use min heap to build tree.`,
    code: {
      java: `// build tree using priority queue`,
      python: `# heapq based tree`,
      c: `// tree + heap`,
      cpp: `// standard implementation`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Water Connection Problem',
    difficulty: 'Medium',
    description: `Find tank-tap connections.`,
    inputExample: 'pipes data',
    outputExample: 'connections',
    explanation: `Use DFS or mapping.`,
    code: {
      java: `// mapping approach`,
      python: `# dictionary + traversal`,
      c: `// arrays`,
      cpp: `// standard`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Choose and Swap',
    difficulty: 'Medium',
    description: `Lexicographically smallest string by swapping characters.`,
    inputExample: '"ccad"',
    outputExample: '"aacd"',
    explanation: `Find smallest swap pair.`,
    code: {
      java: `import java.util.*;
class Main{
  static String solve(String s){
    char[] arr=s.toCharArray();
    char[] sorted=s.toCharArray();
    Arrays.sort(sorted);

    Map<Character,Character> map=new HashMap<>();

    for(int i=0;i<arr.length;i++){
      if(arr[i]!=sorted[i]){
        char a=arr[i], b=sorted[i];
        for(int j=0;j<arr.length;j++){
          if(arr[j]==a) arr[j]=b;
          else if(arr[j]==b) arr[j]=a;
        }
        break;
      }
    }
    return new String(arr);
  }
}`,

      python: `def choose_swap(s):
    arr=list(s)
    sorted_arr=sorted(arr)

    for i in range(len(arr)):
        if arr[i]!=sorted_arr[i]:
            a,b=arr[i],sorted_arr[i]
            for j in range(len(arr)):
                if arr[j]==a: arr[j]=b
                elif arr[j]==b: arr[j]=a
            break
    return ''.join(arr)`,

      c: `// char swap`,
      cpp: `string solve(string s){
    string sorted=s;
    sort(sorted.begin(),sorted.end());

    for(int i=0;i<s.size();i++){
        if(s[i]!=sorted[i]){
            char a=s[i], b=sorted[i];
            for(char &c:s){
                if(c==a) c=b;
                else if(c==b) c=a;
            }
            break;
        }
    }
    return s;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Maximum Trains Stoppage',
    difficulty: 'Medium',
    description: `Max trains that can stop at stations.`,
    inputExample: 'arrivals, departures, platforms',
    outputExample: 'max trains',
    explanation: `Sort by departure time per platform.`,
    code: {
      java: `import java.util.*;
class Train{
  int arr,dep,plat;
  Train(int a,int d,int p){arr=a;dep=d;plat=p;}
}

class Main{
  static int maxTrain(List<Train> trains){
    trains.sort((a,b)->a.dep-b.dep);

    Map<Integer,Integer> last=new HashMap<>();
    int count=0;

    for(Train t:trains){
      if(!last.containsKey(t.plat) || last.get(t.plat)<=t.arr){
        count++;
        last.put(t.plat,t.dep);
      }
    }
    return count;
  }
}`,

      python: `def max_train(trains):
    trains.sort(key=lambda x:x[1])
    last={}
    count=0

    for a,d,p in trains:
        if p not in last or last[p]<=a:
            count+=1
            last[p]=d
    return count`,

      c: `// struct + sorting`,
      cpp: `int maxTrain(vector<vector<int>>& trains){
    sort(trains.begin(),trains.end(),[](auto &a,auto &b){
        return a[1]<b[1];
    });

    map<int,int> last;
    int count=0;

    for(auto &t:trains){
        int a=t[0],d=t[1],p=t[2];
        if(!last.count(p) || last[p]<=a){
            count++;
            last[p]=d;
        }
    }
    return count;
}`
    }
  },
    {
    subject: 'Code',
    category: 'Greedy',
    title: 'Buy Maximum Stocks',
    difficulty: 'Medium',
    description: `Buy max stocks with limited money, each day has limit.`,
    inputExample: 'price=[10,7,19], k=45',
    outputExample: '4',
    explanation: `Buy cheapest stocks first with limit i+1.`,
    code: {
      java: `import java.util.*;

class Main{
  static int maxStocks(int[] price,int k){
    int n=price.length;
    int[][] arr=new int[n][2];

    for(int i=0;i<n;i++){
      arr[i][0]=price[i];
      arr[i][1]=i+1;
    }

    Arrays.sort(arr,(a,b)->a[0]-b[0]);

    int count=0;

    for(int[] p:arr){
      int canBuy=Math.min(p[1], k/p[0]);
      count+=canBuy;
      k-=canBuy*p[0];
    }
    return count;
  }
}`,

      python: `def max_stocks(price,k):
    arr=sorted([(price[i],i+1) for i in range(len(price))])
    count=0

    for p,limit in arr:
        buy=min(limit, k//p)
        count+=buy
        k-=buy*p

    return count`,

      c: `// sort + greedy`,
      cpp: `int maxStocks(vector<int>& price,int k){
    vector<pair<int,int>> arr;

    for(int i=0;i<price.size();i++)
        arr.push_back({price[i],i+1});

    sort(arr.begin(),arr.end());

    int count=0;

    for(auto &p:arr){
        int buy=min(p.second, k/p.first);
        count+=buy;
        k-=buy*p.first;
    }
    return count;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Shop in Candy Store',
    difficulty: 'Easy',
    description: `Find min and max cost with offer buy 1 get k free.`,
    inputExample: 'price=[3,2,1,4], k=2',
    outputExample: '[3,7]',
    explanation: `Sort array and simulate.`,
    code: {
      java: `import java.util.*;

class Main{
  static int[] candy(int[] price,int k){
    Arrays.sort(price);
    int n=price.length;

    int min=0, max=0;

    int i=0,j=n-1;
    while(i<=j){
      min+=price[i++];
      j-=k;
    }

    i=n-1; j=0;
    while(i>=j){
      max+=price[i--];
      j+=k;
    }

    return new int[]{min,max};
  }
}`,

      python: `def candy(price,k):
    price.sort()
    n=len(price)

    i,j=0,n-1
    min_cost=0
    while i<=j:
        min_cost+=price[i]
        i+=1
        j-=k

    i=n-1; j=0
    max_cost=0
    while i>=j:
        max_cost+=price[i]
        i-=1
        j+=k

    return [min_cost,max_cost]`,

      c: `// two pointer`,
      cpp: `vector<int> candy(vector<int>& price,int k){
    sort(price.begin(),price.end());
    int n=price.size();

    int minc=0,maxc=0;

    int i=0,j=n-1;
    while(i<=j){
        minc+=price[i++];
        j-=k;
    }

    i=n-1; j=0;
    while(i>=j){
        maxc+=price[i--];
        j+=k;
    }

    return {minc,maxc};
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Minimize Cash Flow',
    difficulty: 'Hard',
    description: `Minimize transactions between people.`,
    inputExample: 'graph matrix',
    outputExample: 'min transactions',
    explanation: `Use net balance + greedy settlement.`,
    code: {
      java: `// compute net amount and settle recursively`,
      python: `# net balance + recursion`,
      c: `// complex`,
      cpp: `// standard greedy`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Minimum Cost to Cut Board into Squares',
    difficulty: 'Hard',
    description: `Minimize cost of cutting board.`,
    inputExample: 'X=[2,1,3,1,4], Y=[4,1,2]',
    outputExample: '42',
    explanation: `Pick highest cost cut first.`,
    code: {
      java: `import java.util.*;

class Main{
  static int minCost(Integer[] X,Integer[] Y){
    Arrays.sort(X,Collections.reverseOrder());
    Arrays.sort(Y,Collections.reverseOrder());

    int i=0,j=0;
    int hz=1, vt=1;
    int cost=0;

    while(i<X.length && j<Y.length){
      if(X[i]>Y[j]){
        cost+=X[i]*vt;
        hz++;
        i++;
      } else{
        cost+=Y[j]*hz;
        vt++;
        j++;
      }
    }

    while(i<X.length){
      cost+=X[i]*vt;
      i++;
    }

    while(j<Y.length){
      cost+=Y[j]*hz;
      j++;
    }

    return cost;
  }
}`,

      python: `def min_cost(X,Y):
    X.sort(reverse=True)
    Y.sort(reverse=True)

    i=j=0
    hz=1
    vt=1
    cost=0

    while i<len(X) and j<len(Y):
        if X[i]>Y[j]:
            cost+=X[i]*vt
            hz+=1
            i+=1
        else:
            cost+=Y[j]*hz
            vt+=1
            j+=1

    while i<len(X):
        cost+=X[i]*vt
        i+=1

    while j<len(Y):
        cost+=Y[j]*hz
        j+=1

    return cost`,

      c: `// sort descending + greedy`,
      cpp: `int minCost(vector<int>& X,vector<int>& Y){
    sort(X.rbegin(),X.rend());
    sort(Y.rbegin(),Y.rend());

    int i=0,j=0;
    int hz=1,vt=1;
    int cost=0;

    while(i<X.size() && j<Y.size()){
        if(X[i]>Y[j]){
            cost+=X[i]*vt;
            hz++; i++;
        } else{
            cost+=Y[j]*hz;
            vt++; j++;
        }
    }

    while(i<X.size()) cost+=X[i++]*vt;
    while(j<Y.size()) cost+=Y[j++]*hz;

    return cost;
}`
    }
  },
    {
    subject: 'Code',
    category: 'Greedy',
    title: 'Survival Problem',
    difficulty: 'Medium',
    description: `Find minimum days to buy food to survive.`,
    inputExample: 'S=10, N=16, M=2',
    outputExample: '2',
    explanation: `Check if survival possible and compute minimum buying days.`,
    code: {
      java: `class Main{
  static int survival(int S,int N,int M){
    int sundays = S/7;
    int buyingDays = S - sundays;

    int totalFood = S*M;
    int daysNeeded = (int)Math.ceil((double)totalFood/N);

    if(daysNeeded > buyingDays) return -1;
    return daysNeeded;
  }
}`,

      python: `import math
def survival(S,N,M):
    sundays=S//7
    buy_days=S-sundays

    total=S*M
    need=math.ceil(total/N)

    return need if need<=buy_days else -1`,

      c: `#include <math.h>
int survival(int S,int N,int M){
    int sundays=S/7;
    int buy=S-sundays;

    int total=S*M;
    int need=ceil((double)total/N);

    return (need<=buy)?need:-1;
}`,

      cpp: `int survival(int S,int N,int M){
    int sundays=S/7;
    int buy=S-sundays;

    int total=S*M;
    int need=ceil((double)total/N);

    return (need<=buy)?need:-1;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Maximum Product Subset of an Array',
    difficulty: 'Medium',
    description: `Find maximum product subset.`,
    inputExample: '[-1,-1,-2,4,3]',
    outputExample: '24',
    explanation: `Handle negatives and zeros carefully.`,
    code: {
      java: `class Main{
  static int maxProduct(int[] arr){
    int prod=1, neg=0, zero=0, maxNeg=Integer.MIN_VALUE;

    for(int x:arr){
      if(x==0){ zero++; continue; }
      if(x<0){ neg++; maxNeg=Math.max(maxNeg,x); }
      prod*=x;
    }

    if(zero==arr.length) return 0;
    if(neg%2==1){
      if(neg==1 && zero+neg==arr.length) return 0;
      prod/=maxNeg;
    }
    return prod;
  }
}`,

      python: `def max_product(arr):
    prod=1
    neg=0
    zero=0
    maxNeg=float('-inf')

    for x in arr:
        if x==0:
            zero+=1
            continue
        if x<0:
            neg+=1
            maxNeg=max(maxNeg,x)
        prod*=x

    if zero==len(arr):
        return 0
    if neg%2==1:
        if neg==1 and zero+neg==len(arr):
            return 0
        prod//=maxNeg

    return prod`,

      c: `// similar logic`,
      cpp: `int maxProduct(vector<int>& arr){
    int prod=1,neg=0,zero=0,maxNeg=INT_MIN;

    for(int x:arr){
        if(x==0){ zero++; continue; }
        if(x<0){ neg++; maxNeg=max(maxNeg,x); }
        prod*=x;
    }

    if(zero==arr.size()) return 0;
    if(neg%2==1){
        if(neg==1 && zero+neg==arr.size()) return 0;
        prod/=maxNeg;
    }
    return prod;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Maximize Sum After K Negations',
    difficulty: 'Easy',
    description: `Flip sign of elements K times to maximize sum.`,
    inputExample: 'arr=[-2,0,5,-1,2], k=4',
    outputExample: '10',
    explanation: `Sort and flip negatives first.`,
    code: {
      java: `import java.util.*;

class Main{
  static int maxSum(int[] arr,int k){
    Arrays.sort(arr);

    for(int i=0;i<arr.length && k>0;i++){
      if(arr[i]<0){
        arr[i]=-arr[i];
        k--;
      }
    }

    int sum=0, min=Integer.MAX_VALUE;

    for(int x:arr){
      sum+=x;
      min=Math.min(min,x);
    }

    if(k%2==1) sum-=2*min;

    return sum;
  }
}`,

      python: `def max_sum(arr,k):
    arr.sort()

    for i in range(len(arr)):
        if k>0 and arr[i]<0:
            arr[i]=-arr[i]
            k-=1

    s=sum(arr)
    if k%2==1:
        s-=2*min(arr)
    return s`,

      c: `// sort + flip`,
      cpp: `int maxSum(vector<int>& arr,int k){
    sort(arr.begin(),arr.end());

    for(int i=0;i<arr.size() && k>0;i++){
        if(arr[i]<0){
            arr[i]=-arr[i];
            k--;
        }
    }

    int sum=0,minv=INT_MAX;
    for(int x:arr){
        sum+=x;
        minv=min(minv,x);
    }

    if(k%2==1) sum-=2*minv;
    return sum;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Max Value Permutation',
    difficulty: 'Medium',
    description: `Maximize sum of i*arr[i].`,
    inputExample: '[5,3,2,4,1]',
    outputExample: '40',
    explanation: `Sort array.`,
    code: {
      java: `import java.util.*;

class Main{
  static int maxValue(int[] arr){
    Arrays.sort(arr);
    int sum=0;

    for(int i=0;i<arr.length;i++)
      sum+=arr[i]*i;

    return sum;
  }
}`,

      python: `def max_value(arr):
    arr.sort()
    return sum(i*arr[i] for i in range(len(arr)))`,

      c: `// sort`,
      cpp: `int maxValue(vector<int>& arr){
    sort(arr.begin(),arr.end());
    int sum=0;

    for(int i=0;i<arr.size();i++)
        sum+=arr[i]*i;

    return sum;
}`
    }
  },
    {
    subject: 'Code',
    category: 'Greedy',
    title: 'Maximum Sum Absolute Difference Array',
    difficulty: 'Medium',
    description: `Maximize sum of |arr[i] - arr[i+1]| in circular array.`,
    inputExample: '[1,2,4,8]',
    outputExample: '18',
    explanation: `Arrange smallest and largest alternately.`,
    code: {
      java: `import java.util.*;

class Main{
  static int maxSum(int[] arr){
    Arrays.sort(arr);
    int n=arr.length;

    int[] res=new int[n];
    int l=0,r=n-1,i=0;

    while(l<=r){
      if(i<n) res[i++]=arr[l++];
      if(i<n) res[i++]=arr[r--];
    }

    int sum=0;
    for(int j=0;j<n-1;j++)
      sum+=Math.abs(res[j]-res[j+1]);

    sum+=Math.abs(res[n-1]-res[0]);

    return sum;
  }
}`,

      python: `def max_sum(arr):
    arr.sort()
    res=[]
    l,r=0,len(arr)-1

    while l<=r:
        if l<=r:
            res.append(arr[l]); l+=1
        if l<=r:
            res.append(arr[r]); r-=1

    s=0
    for i in range(len(res)-1):
        s+=abs(res[i]-res[i+1])
    s+=abs(res[-1]-res[0])

    return s`,

      c: `// sort + rearrange`,
      cpp: `int maxSum(vector<int>& arr){
    sort(arr.begin(),arr.end());
    int n=arr.size();

    vector<int> res;
    int l=0,r=n-1;

    while(l<=r){
        if(l<=r) res.push_back(arr[l++]);
        if(l<=r) res.push_back(arr[r--]);
    }

    int sum=0;
    for(int i=0;i<n-1;i++)
        sum+=abs(res[i]-res[i+1]);

    sum+=abs(res[n-1]-res[0]);
    return sum;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Swap and Maximize',
    difficulty: 'Medium',
    description: `Rearrange to maximize sum of adjacent differences.`,
    inputExample: '[4,2,1,8]',
    outputExample: '18',
    explanation: `Same pattern as max absolute difference.`,
    code: {
      java: `// same as Maximum Sum Absolute Difference Array`,
      python: `# same as Maximum Sum Absolute Difference Array`,
      c: `// same`,
      cpp: `// same logic`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Minimum Sum Absolute Difference Pairs (Two Arrays)',
    difficulty: 'Easy',
    description: `Minimize sum of absolute differences.`,
    inputExample: 'A=[4,1,8,7], B=[2,3,6,5]',
    outputExample: '6',
    explanation: `Sort both arrays and pair correspondingly.`,
    code: {
      java: `import java.util.*;

class Main{
  static int minDiff(int[] A,int[] B){
    Arrays.sort(A);
    Arrays.sort(B);

    int sum=0;
    for(int i=0;i<A.length;i++)
      sum+=Math.abs(A[i]-B[i]);

    return sum;
  }
}`,

      python: `def min_diff(A,B):
    A.sort()
    B.sort()
    return sum(abs(A[i]-B[i]) for i in range(len(A)))`,

      c: `// sort both`,
      cpp: `int minDiff(vector<int>& A,vector<int>& B){
    sort(A.begin(),A.end());
    sort(B.begin(),B.end());

    int sum=0;
    for(int i=0;i<A.size();i++)
        sum+=abs(A[i]-B[i]);
    return sum;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Greedy',
    title: 'Smallest Subset with Sum Greater Than Remaining Elements',
    difficulty: 'Medium',
    description: `Find minimum elements whose sum > remaining elements.`,
    inputExample: '[3,1,7,1]',
    outputExample: '1',
    explanation: `Pick largest elements first.`,
    code: {
      java: `import java.util.*;

class Main{
  static int minSubset(int[] arr){
    Arrays.sort(arr);
    int total=0;
    for(int x:arr) total+=x;

    int sum=0,count=0;

    for(int i=arr.length-1;i>=0;i--){
      sum+=arr[i];
      total-=arr[i];
      count++;
      if(sum>total) break;
    }
    return count;
  }
}`,

      python: `def min_subset(arr):
    arr.sort()
    total=sum(arr)
    s=0
    count=0

    for x in reversed(arr):
        s+=x
        total-=x
        count+=1
        if s>total:
            break
    return count`,

      c: `// sort + greedy`,
      cpp: `int minSubset(vector<int>& arr){
    sort(arr.begin(),arr.end());
    int total=accumulate(arr.begin(),arr.end(),0);

    int sum=0,count=0;
    for(int i=arr.size()-1;i>=0;i--){
        sum+=arr[i];
        total-=arr[i];
        count++;
        if(sum>total) break;
    }
    return count;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Chocolate Distribution Problem',
    difficulty: 'Easy',
    description: `Minimize difference between max and min chocolates.`,
    inputExample: 'arr=[7,3,2,4,9,12,56], m=3',
    outputExample: '2',
    explanation: `Sort and check sliding window.`,
    code: {
      java: `import java.util.*;

class Main{
  static int minDiff(int[] arr,int m){
    Arrays.sort(arr);
    int res=Integer.MAX_VALUE;

    for(int i=0;i+m-1<arr.length;i++)
      res=Math.min(res, arr[i+m-1]-arr[i]);

    return res;
  }
}`,

      python: `def chocolate(arr,m):
    arr.sort()
    return min(arr[i+m-1]-arr[i] for i in range(len(arr)-m+1))`,

      c: `// sort + window`,
      cpp: `int chocolate(vector<int>& arr,int m){
    sort(arr.begin(),arr.end());
    int res=INT_MAX;

    for(int i=0;i+m-1<arr.size();i++)
        res=min(res, arr[i+m-1]-arr[i]);

    return res;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'DEFKIN',
    difficulty: 'Medium',
    description: `Find largest undefended rectangle area.`,
    inputExample: 'W=15,H=8,towers',
    outputExample: 'area',
    explanation: `Find max gaps between sorted coordinates.`,
    code: {
      java: `import java.util.*;

class Main{
  static int defkin(int w,int h,int[] x,int[] y){
    Arrays.sort(x);
    Arrays.sort(y);

    int maxX=x[0]-1, maxY=y[0]-1;

    for(int i=1;i<x.length;i++)
      maxX=Math.max(maxX, x[i]-x[i-1]-1);

    for(int i=1;i<y.length;i++)
      maxY=Math.max(maxY, y[i]-y[i-1]-1);

    maxX=Math.max(maxX, w-x[x.length-1]);
    maxY=Math.max(maxY, h-y[y.length-1]);

    return maxX*maxY;
  }
}`,

      python: `def defkin(w,h,x,y):
    x.sort()
    y.sort()

    maxX=x[0]-1
    maxY=y[0]-1

    for i in range(1,len(x)):
        maxX=max(maxX,x[i]-x[i-1]-1)

    for i in range(1,len(y)):
        maxY=max(maxY,y[i]-y[i-1]-1)

    maxX=max(maxX,w-x[-1])
    maxY=max(maxY,h-y[-1])

    return maxX*maxY`,

      c: `// sort + gap`,
      cpp: `int defkin(int w,int h,vector<int>& x,vector<int>& y){
    sort(x.begin(),x.end());
    sort(y.begin(),y.end());

    int maxX=x[0]-1, maxY=y[0]-1;

    for(int i=1;i<x.size();i++)
        maxX=max(maxX,x[i]-x[i-1]-1);

    for(int i=1;i<y.size();i++)
        maxY=max(maxY,y[i]-y[i-1]-1);

    maxX=max(maxX,w-x.back());
    maxY=max(maxY,h-y.back());

    return maxX*maxY;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'DIEHARD',
    difficulty: 'Hard',
    description: `Max survival time with health and armor transitions.`,
    inputExample: 'health=20, armor=8',
    outputExample: 'survival time',
    explanation: `Greedy simulation of states.`,
    code: {
      java: `class Main{
  static int solve(int h,int a){
    int time=0;

    while(true){
      if(h>0 && a>0){
        h+=3; a+=2; time++;
      } else break;

      if(h>5 && a>10){
        h-=5; a-=10; time++;
      } else if(h>20){
        h-=20; a+=5; time++;
      } else break;
    }
    return time;
  }
}`,

      python: `def diehard(h,a):
    time=0
    while True:
        if h>0 and a>0:
            h+=3; a+=2; time+=1
        else:
            break

        if h>5 and a>10:
            h-=5; a-=10; time+=1
        elif h>20:
            h-=20; a+=5; time+=1
        else:
            break
    return time`,

      c: `// simulation`,
      cpp: `int diehard(int h,int a){
    int time=0;

    while(true){
        if(h>0 && a>0){
            h+=3; a+=2; time++;
        } else break;

        if(h>5 && a>10){
            h-=5; a-=10; time++;
        } else if(h>20){
            h-=20; a+=5; time++;
        } else break;
    }
    return time;
}`
    }
  },
    {
    subject: 'Code',
    category: 'Greedy',
    title: 'GERGOVIA (Wine trading in Gergovia)',
    difficulty: 'Medium',
    description: `Minimize work required to balance wine trading.`,
    inputExample: '[5,-4,1,-3,1]',
    outputExample: '9',
    explanation: `Track cumulative sum and add absolute values.`,
    code: {
      java: `class Main{
  static long solve(int[] arr){
    long work=0, sum=0;
    for(int x:arr){
      sum+=x;
      work+=Math.abs(sum);
    }
    return work;
  }
}`,

      python: `def gergovia(arr):
    work=0
    s=0
    for x in arr:
        s+=x
        work+=abs(s)
    return work`,

      c: `long long solve(int arr[],int n){
    long long work=0,sum=0;
    for(int i=0;i<n;i++){
        sum+=arr[i];
        work+=llabs(sum);
    }
    return work;
}`,

      cpp: `long long solve(vector<int>& arr){
    long long work=0,sum=0;
    for(int x:arr){
        sum+=x;
        work+=abs(sum);
    }
    return work;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'GCJ101BB (Minimum Scalar Product)',
    difficulty: 'Medium',
    description: `Minimize scalar product of two vectors.`,
    inputExample: 'A=[1,3,-5], B=[-2,4,1]',
    outputExample: '-25',
    explanation: `Sort one ascending, one descending.`,
    code: {
      java: `import java.util.*;

class Main{
  static int solve(int[] A,int[] B){
    Arrays.sort(A);
    Arrays.sort(B);

    int n=A.length;
    int sum=0;

    for(int i=0;i<n;i++)
      sum+=A[i]*B[n-i-1];

    return sum;
  }
}`,

      python: `def min_scalar(A,B):
    A.sort()
    B.sort(reverse=True)
    return sum(A[i]*B[i] for i in range(len(A)))`,

      c: `// sort arrays`,
      cpp: `int solve(vector<int>& A,vector<int>& B){
    sort(A.begin(),A.end());
    sort(B.rbegin(),B.rend());

    int sum=0;
    for(int i=0;i<A.size();i++)
        sum+=A[i]*B[i];
    return sum;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'CHOCOLA (Chocolate Cutting Problem)',
    difficulty: 'Hard',
    description: `Minimize cost of cutting chocolate.`,
    inputExample: 'X=[2,1,3,1,4], Y=[4,1,2]',
    outputExample: '42',
    explanation: `Pick highest cost cut first.`,
    code: {
      java: `// same as board cutting`,
      python: `# same as previous`,
      c: `// same`,
      cpp: `// same logic`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'ARRANGE',
    difficulty: 'Medium',
    description: `Rearrange array to maximize product of adjacent elements.`,
    inputExample: '[1,2,3,4]',
    outputExample: '[2,3,4,1]',
    explanation: `Place larger numbers in middle.`,
    code: {
      java: `import java.util.*;

class Main{
  static int[] arrange(int[] arr){
    Arrays.sort(arr);
    int n=arr.length;

    int[] res=new int[n];
    int i=0,j=n-1,k=0;

    while(i<=j){
      if(i<=j) res[k++]=arr[i++];
      if(i<=j) res[k++]=arr[j--];
    }
    return res;
  }
}`,

      python: `def arrange(arr):
    arr.sort()
    res=[]
    l,r=0,len(arr)-1

    while l<=r:
        if l<=r:
            res.append(arr[l]); l+=1
        if l<=r:
            res.append(arr[r]); r-=1
    return res`,

      c: `// rearrange`,
      cpp: `vector<int> arrange(vector<int>& arr){
    sort(arr.begin(),arr.end());
    vector<int> res;

    int l=0,r=arr.size()-1;
    while(l<=r){
        if(l<=r) res.push_back(arr[l++]);
        if(l<=r) res.push_back(arr[r--]);
    }
    return res;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Greedy',
    title: 'K-Centers Problem',
    difficulty: 'Hard',
    description: `Place K centers to minimize maximum distance (greedy approximation).`,
    inputExample: 'points=[...], k=2',
    outputExample: 'minimized max distance',
    explanation: `Greedy farthest point selection (approximation).`,
    code: {
      java: `import java.util.*;

class Main{
  static int kCenters(int[][] dist,int k){
    int n=dist.length;
    boolean[] visited=new boolean[n];
    int[] minDist=new int[n];
    Arrays.fill(minDist,Integer.MAX_VALUE);

    int max=0;

    for(int i=0;i<k;i++){
      int u=-1;
      for(int j=0;j<n;j++){
        if(!visited[j] && (u==-1 || minDist[j]>minDist[u]))
          u=j;
      }

      visited[u]=true;

      for(int v=0;v<n;v++){
        if(!visited[v])
          minDist[v]=Math.min(minDist[v], dist[u][v]);
      }

      max=Math.max(max,minDist[u]);
    }
    return max;
  }
}`,

      python: `def k_centers(dist,k):
    n=len(dist)
    visited=[False]*n
    minDist=[float('inf')]*n

    for _ in range(k):
        u=max(range(n), key=lambda i: minDist[i] if not visited[i] else -1)
        visited[u]=True

        for v in range(n):
            if not visited[v]:
                minDist[v]=min(minDist[v], dist[u][v])

    return max(minDist)`,

      c: `// approximation algorithm`,
      cpp: `int kCenters(vector<vector<int>>& dist,int k){
    int n=dist.size();
    vector<bool> vis(n,false);
    vector<int> minDist(n,INT_MAX);

    int maxd=0;

    for(int i=0;i<k;i++){
        int u=-1;
        for(int j=0;j<n;j++){
            if(!vis[j] && (u==-1 || minDist[j]>minDist[u]))
                u=j;
        }

        vis[u]=true;

        for(int v=0;v<n;v++){
            if(!vis[v])
                minDist[v]=min(minDist[v], dist[u][v]);
        }

        maxd=max(maxd,minDist[u]);
    }
    return maxd;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Minimum Cost of Ropes',
    difficulty: 'Easy',
    description: `Connect ropes with minimum cost.`,
    inputExample: '[4,3,2,6]',
    outputExample: '29',
    explanation: `Always combine smallest ropes first using min heap.`,
    code: {
      java: `import java.util.*;

class Main{
  static int minCost(int[] arr){
    PriorityQueue<Integer> pq=new PriorityQueue<>();
    for(int x:arr) pq.add(x);

    int cost=0;

    while(pq.size()>1){
      int a=pq.poll();
      int b=pq.poll();
      int sum=a+b;
      cost+=sum;
      pq.add(sum);
    }
    return cost;
  }
}`,

      python: `import heapq
def min_cost(arr):
    heapq.heapify(arr)
    cost=0

    while len(arr)>1:
        a=heapq.heappop(arr)
        b=heapq.heappop(arr)
        s=a+b
        cost+=s
        heapq.heappush(arr,s)

    return cost`,

      c: `// use min heap`,
      cpp: `int minCost(vector<int>& arr){
    priority_queue<int,vector<int>,greater<int>> pq(arr.begin(),arr.end());

    int cost=0;

    while(pq.size()>1){
        int a=pq.top(); pq.pop();
        int b=pq.top(); pq.pop();

        int sum=a+b;
        cost+=sum;
        pq.push(sum);
    }
    return cost;
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Smallest Number (from pattern)',
    difficulty: 'Medium',
    description: `Construct smallest number from pattern of I and D.`,
    inputExample: '"IDID"',
    outputExample: '13254',
    explanation: `Use stack to handle decreasing pattern.`,
    code: {
      java: `import java.util.*;

class Main{
  static String smallest(String s){
    Stack<Integer> st=new Stack<>();
    StringBuilder res=new StringBuilder();

    for(int i=0;i<=s.length();i++){
      st.push(i+1);

      if(i==s.length() || s.charAt(i)=='I'){
        while(!st.isEmpty())
          res.append(st.pop());
      }
    }
    return res.toString();
  }
}`,

      python: `def smallest(s):
    st=[]
    res=""

    for i in range(len(s)+1):
        st.append(i+1)

        if i==len(s) or s[i]=='I':
            while st:
                res+=str(st.pop())

    return res`,

      c: `// stack logic`,
      cpp: `string smallest(string s){
    stack<int> st;
    string res;

    for(int i=0;i<=s.size();i++){
        st.push(i+1);

        if(i==s.size() || s[i]=='I'){
            while(!st.empty()){
                res+=to_string(st.top());
                st.pop();
            }
        }
    }
    return res;
}`
    }
  },
   {
    subject: 'Code',
    category: 'Greedy',
    title: 'Rearrange Characters',
    difficulty: 'Medium',
    description: `Rearrange string so no two adjacent characters are same.`,
    inputExample: '"aaabc"',
    outputExample: '"abaca"',
    explanation: `Use max heap to always pick highest frequency character.`,
    code: {
      java: `import java.util.*;

class Main{
  static String rearrange(String s){
    Map<Character,Integer> map=new HashMap<>();
    for(char c:s.toCharArray())
      map.put(c,map.getOrDefault(c,0)+1);

    PriorityQueue<int[]> pq=new PriorityQueue<>((a,b)->b[1]-a[1]);

    for(char c:map.keySet())
      pq.add(new int[]{c,map.get(c)});

    StringBuilder res=new StringBuilder();

    int[] prev={-1,0};

    while(!pq.isEmpty()){
      int[] cur=pq.poll();
      res.append((char)cur[0]);
      cur[1]--;

      if(prev[1]>0)
        pq.add(prev);

      prev=cur;
    }

    return res.length()==s.length()?res.toString():"";
  }
}`,

      python: `import heapq
def rearrange(s):
    from collections import Counter
    freq=Counter(s)
    pq=[(-v,k) for k,v in freq.items()]
    heapq.heapify(pq)

    prev=(0,'')
    res=""

    while pq:
        v,ch=heapq.heappop(pq)
        res+=ch
        v+=1

        if prev[0]<0:
            heapq.heappush(pq,prev)

        prev=(v,ch)

    return res if len(res)==len(s) else ""`,

      c: `// use max heap`,
      cpp: `string rearrange(string s){
    unordered_map<char,int> mp;
    for(char c:s) mp[c]++;

    priority_queue<pair<int,char>> pq;
    for(auto &p:mp)
        pq.push({p.second,p.first});

    string res="";
    pair<int,char> prev={0,'#'};

    while(!pq.empty()){
        auto cur=pq.top(); pq.pop();
        res+=cur.second;
        cur.first--;

        if(prev.first>0)
            pq.push(prev);

        prev=cur;
    }

    return res.size()==s.size()?res:"";
}`
    }
  },

  {
    subject: 'Code',
    category: 'Greedy',
    title: 'Find Maximum Equal Sum of Three Stacks',
    difficulty: 'Medium',
    description: `Make three stacks equal by removing elements from top.`,
    inputExample: 's1=[3,2,1,1,1], s2=[4,3,2], s3=[1,1,4,1]',
    outputExample: '5',
    explanation: `Reduce the largest sum stack until all equal.`,
    code: {
      java: `class Main{
  static int maxSum(int[] s1,int[] s2,int[] s3){
    int sum1=0,sum2=0,sum3=0;

    for(int x:s1) sum1+=x;
    for(int x:s2) sum2+=x;
    for(int x:s3) sum3+=x;

    int i=0,j=0,k=0;

    while(true){
      if(i==s1.length || j==s2.length || k==s3.length)
        return 0;

      if(sum1==sum2 && sum2==sum3)
        return sum1;

      if(sum1>=sum2 && sum1>=sum3)
        sum1-=s1[i++];
      else if(sum2>=sum1 && sum2>=sum3)
        sum2-=s2[j++];
      else
        sum3-=s3[k++];
    }
  }
}`,

      python: `def max_sum(s1,s2,s3):
    sum1,sum2,sum3=sum(s1),sum(s2),sum(s3)
    i=j=k=0

    while True:
        if i==len(s1) or j==len(s2) or k==len(s3):
            return 0

        if sum1==sum2==sum3:
            return sum1

        if sum1>=sum2 and sum1>=sum3:
            sum1-=s1[i]; i+=1
        elif sum2>=sum1 and sum2>=sum3:
            sum2-=s2[j]; j+=1
        else:
            sum3-=s3[k]; k+=1`,

      c: `// sum reduction`,
      cpp: `int maxSum(vector<int>& s1,vector<int>& s2,vector<int>& s3){
    int sum1=accumulate(s1.begin(),s1.end(),0);
    int sum2=accumulate(s2.begin(),s2.end(),0);
    int sum3=accumulate(s3.begin(),s3.end(),0);

    int i=0,j=0,k=0;

    while(true){
        if(i==s1.size() || j==s2.size() || k==s3.size())
            return 0;

        if(sum1==sum2 && sum2==sum3)
            return sum1;

        if(sum1>=sum2 && sum1>=sum3)
            sum1-=s1[i++];
        else if(sum2>=sum1 && sum2>=sum3)
            sum2-=s2[j++];
        else
            sum3-=s3[k++];
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
        console.log(`Successfully processed ${problems.length} problems for Greedy`)
        
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