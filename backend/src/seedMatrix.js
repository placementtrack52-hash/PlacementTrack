import 'dotenv/config'
import mongoose from 'mongoose'
import CodeProblem from './models/CodeProblem.js'

const problems = [
{
    subject: 'Code',
    category: 'Matrix',
    title: 'Set Matrix Zeros',
    difficulty: 'Medium',
    description: `If an element is 0, set its entire row and column to 0.`,
    inputExample: 'matrix = [[1,1,1],[1,0,1],[1,1,1]]',
    outputExample: '[[1,0,1],[0,0,0],[1,0,1]]',
    explanation: `Use markers to track rows and columns.`,
    code: {
      java: `public class Main {
  public static void setZeroes(int[][] matrix) {
    int m = matrix.length, n = matrix[0].length;
    boolean[] rows = new boolean[m];
    boolean[] cols = new boolean[n];

    for (int i = 0; i < m; i++)
      for (int j = 0; j < n; j++)
        if (matrix[i][j] == 0) {
          rows[i] = true;
          cols[j] = true;
        }

    for (int i = 0; i < m; i++)
      for (int j = 0; j < n; j++)
        if (rows[i] || cols[j])
          matrix[i][j] = 0;
  }
}`,

      python: `def set_zeroes(matrix):
    rows, cols = set(), set()

    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            if matrix[i][j] == 0:
                rows.add(i)
                cols.add(j)

    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            if i in rows or j in cols:
                matrix[i][j] = 0`,

      c: `#include <stdio.h>

void setZeroes(int matrix[100][100], int m, int n) {
    int rows[100] = {0}, cols[100] = {0};

    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            if (matrix[i][j] == 0) {
                rows[i] = 1;
                cols[j] = 1;
            }

    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            if (rows[i] || cols[j])
                matrix[i][j] = 0;
}`,

      cpp: `#include <iostream>
using namespace std;

void setZeroes(int matrix[100][100], int m, int n) {
    int rows[100] = {0}, cols[100] = {0};

    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            if (matrix[i][j] == 0) {
                rows[i] = 1;
                cols[j] = 1;
            }

    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            if (rows[i] || cols[j])
                matrix[i][j] = 0;
}`
    }
  },
{
    subject: 'Code',
    category: 'Matrix',
    title: 'Rotate Matrix by 90 Degrees',
    difficulty: 'Medium',
    description: `Rotate matrix by 90 degrees clockwise.`,
    inputExample: '[[1,2,3],[4,5,6],[7,8,9]]',
    outputExample: '[[7,4,1],[8,5,2],[9,6,3]]',
    explanation: `Transpose then reverse rows.`,
    code: {
      java: `public class Main {
  public static void rotate(int[][] matrix) {
    int n = matrix.length;

    for (int i = 0; i < n; i++)
      for (int j = i; j < n; j++) {
        int temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }

    for (int i = 0; i < n; i++)
      for (int j = 0; j < n/2; j++) {
        int temp = matrix[i][j];
        matrix[i][j] = matrix[i][n-j-1];
        matrix[i][n-j-1] = temp;
      }
  }
}`,

      python: `def rotate(matrix):
    n = len(matrix)

    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

    for row in matrix:
        row.reverse()`,

      c: `#include <stdio.h>

void rotate(int matrix[100][100], int n) {
    for (int i = 0; i < n; i++)
        for (int j = i; j < n; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }

    for (int i = 0; i < n; i++)
        for (int j = 0; j < n/2; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[i][n-j-1];
            matrix[i][n-j-1] = temp;
        }
}`,

      cpp: `#include <iostream>
using namespace std;

void rotate(int matrix[100][100], int n) {
    for (int i = 0; i < n; i++)
        for (int j = i; j < n; j++)
            swap(matrix[i][j], matrix[j][i]);

    for (int i = 0; i < n; i++)
        for (int j = 0; j < n/2; j++)
            swap(matrix[i][j], matrix[i][n-j-1]);
}`
    }
  },
{
    subject: 'Code',
    category: 'Matrix',
    title: 'Search a 2D Matrix',
    difficulty: 'Medium',
    description: `Search a target value in a matrix where each row is sorted and first element of each row is greater than last of previous row.`,
    inputExample: 'matrix = [[1,3,5],[7,9,11]], target = 9',
    outputExample: 'true',
    explanation: `Treat matrix as a flattened sorted array and apply binary search.`,
    code: {
      java: `public class Main {
  public static boolean search(int[][] matrix, int target) {
    int m = matrix.length, n = matrix[0].length;
    int low = 0, high = m*n - 1;

    while (low <= high) {
      int mid = (low + high) / 2;
      int val = matrix[mid/n][mid%n];

      if (val == target) return true;
      else if (val < target) low = mid + 1;
      else high = mid - 1;
    }
    return false;
  }
}`,

      python: `def search(matrix, target):
    m, n = len(matrix), len(matrix[0])
    low, high = 0, m*n - 1

    while low <= high:
        mid = (low + high) // 2
        val = matrix[mid//n][mid%n]

        if val == target:
            return True
        elif val < target:
            low = mid + 1
        else:
            high = mid - 1

    return False`,

      c: `#include <stdio.h>

int search(int matrix[100][100], int m, int n, int target) {
    int low = 0, high = m*n - 1;

    while (low <= high) {
        int mid = (low + high) / 2;
        int val = matrix[mid/n][mid%n];

        if (val == target) return 1;
        else if (val < target) low = mid + 1;
        else high = mid - 1;
    }
    return 0;
}`,

      cpp: `#include <iostream>
using namespace std;

bool search(int matrix[100][100], int m, int n, int target) {
    int low = 0, high = m*n - 1;

    while (low <= high) {
        int mid = (low + high) / 2;
        int val = matrix[mid/n][mid%n];

        if (val == target) return true;
        else if (val < target) low = mid + 1;
        else high = mid - 1;
    }
    return false;
}`
    }
  },
{
    subject: 'Code',
    category: 'Matrix',
    title: 'Spirally Traversing a Matrix',
    difficulty: 'Medium',
    description: `Print elements of matrix in spiral order.`,
    inputExample: '[[1,2,3],[4,5,6],[7,8,9]]',
    outputExample: '[1,2,3,6,9,8,7,4,5]',
    explanation: `Use four boundaries (top, bottom, left, right).`,
    code: {
      java: `import java.util.*;

public class Main {
  public static List<Integer> spiral(int[][] mat) {
    List<Integer> res = new ArrayList<>();
    int top=0, bottom=mat.length-1, left=0, right=mat[0].length-1;

    while (top<=bottom && left<=right) {
      for(int i=left;i<=right;i++) res.add(mat[top][i]);
      top++;

      for(int i=top;i<=bottom;i++) res.add(mat[i][right]);
      right--;

      if(top<=bottom){
        for(int i=right;i>=left;i--) res.add(mat[bottom][i]);
        bottom--;
      }

      if(left<=right){
        for(int i=bottom;i>=top;i--) res.add(mat[i][left]);
        left++;
      }
    }
    return res;
  }
}`,

      python: `def spiral(mat):
    res=[]
    top, bottom = 0, len(mat)-1
    left, right = 0, len(mat[0])-1

    while top<=bottom and left<=right:
        for i in range(left,right+1):
            res.append(mat[top][i])
        top+=1

        for i in range(top,bottom+1):
            res.append(mat[i][right])
        right-=1

        if top<=bottom:
            for i in range(right,left-1,-1):
                res.append(mat[bottom][i])
            bottom-=1

        if left<=right:
            for i in range(bottom,top-1,-1):
                res.append(mat[i][left])
            left+=1

    return res`,

      c: `#include <stdio.h>

void spiral(int mat[100][100], int m, int n){
    int top=0,bottom=m-1,left=0,right=n-1;

    while(top<=bottom && left<=right){
        for(int i=left;i<=right;i++) printf("%d ",mat[top][i]);
        top++;

        for(int i=top;i<=bottom;i++) printf("%d ",mat[i][right]);
        right--;

        if(top<=bottom){
            for(int i=right;i>=left;i--) printf("%d ",mat[bottom][i]);
            bottom--;
        }

        if(left<=right){
            for(int i=bottom;i>=top;i--) printf("%d ",mat[i][left]);
            left++;
        }
    }
}`,

      cpp: `#include <iostream>
using namespace std;

void spiral(int mat[100][100], int m, int n){
    int top=0,bottom=m-1,left=0,right=n-1;

    while(top<=bottom && left<=right){
        for(int i=left;i<=right;i++) cout<<mat[top][i]<<" ";
        top++;

        for(int i=top;i<=bottom;i++) cout<<mat[i][right]<<" ";
        right--;

        if(top<=bottom){
            for(int i=right;i>=left;i--) cout<<mat[bottom][i]<<" ";
            bottom--;
        }

        if(left<=right){
            for(int i=bottom;i>=top;i--) cout<<mat[i][left]<<" ";
            left++;
        }
    }
}`
    }
  },
{
    subject: 'Code',
    category: 'Matrix',
    title: 'Median in a Row-wise Sorted Matrix',
    difficulty: 'Hard',
    description: `Find median of a row-wise sorted matrix.`,
    inputExample: '[[1,3,5],[2,6,9],[3,6,9]]',
    outputExample: '5',
    explanation: `Use binary search on value range.`,
    code: {
      java: `public class Main {
  public static int median(int[][] mat, int r, int c) {
    int low = 1, high = 100000;

    while (low < high) {
      int mid = (low + high) / 2;
      int count = 0;

      for (int i = 0; i < r; i++) {
        int l=0,h=c-1;
        while(l<=h){
          int m=(l+h)/2;
          if(mat[i][m]<=mid) l=m+1;
          else h=m-1;
        }
        count += l;
      }

      if (count <= (r*c)/2) low = mid + 1;
      else high = mid;
    }
    return low;
  }
}`,

      python: `def median(mat):
    r, c = len(mat), len(mat[0])
    low, high = 1, 100000

    while low < high:
        mid = (low + high)//2
        count = 0

        for row in mat:
            l, h = 0, c-1
            while l<=h:
                m=(l+h)//2
                if row[m]<=mid:
                    l=m+1
                else:
                    h=m-1
            count += l

        if count <= (r*c)//2:
            low = mid+1
        else:
            high = mid

    return low`,

      c: `#include <stdio.h>

int countSmaller(int row[], int n, int x){
    int l=0,h=n-1;
    while(l<=h){
        int m=(l+h)/2;
        if(row[m]<=x) l=m+1;
        else h=m-1;
    }
    return l;
}

int median(int mat[100][100], int r, int c){
    int low=1,high=100000;

    while(low<high){
        int mid=(low+high)/2,count=0;

        for(int i=0;i<r;i++)
            count+=countSmaller(mat[i],c,mid);

        if(count<=(r*c)/2) low=mid+1;
        else high=mid;
    }
    return low;
}`,

      cpp: `#include <iostream>
using namespace std;

int countSmaller(int row[], int n, int x){
    int l=0,h=n-1;
    while(l<=h){
        int m=(l+h)/2;
        if(row[m]<=x) l=m+1;
        else h=m-1;
    }
    return l;
}

int median(int mat[100][100], int r, int c){
    int low=1,high=100000;

    while(low<high){
        int mid=(low+high)/2,count=0;

        for(int i=0;i<r;i++)
            count+=countSmaller(mat[i],c,mid);

        if(count<=(r*c)/2) low=mid+1;
        else high=mid;
    }
    return low;
}`
    }
  },
{
    subject: 'Code',
    category: 'Matrix',
    title: 'Row with Maximum 1s',
    difficulty: 'Medium',
    description: `Find the row with maximum number of 1s in a binary sorted matrix.`,
    inputExample: '[[0,1,1],[0,0,1],[1,1,1]]',
    outputExample: '2',
    explanation: `Start from top-right and move left/down.`,
    code: {
      java: `public class Main {
  public static int rowMax(int[][] mat) {
    int r=mat.length,c=mat[0].length;
    int j=c-1, maxRow=-1;

    for(int i=0;i<r;i++){
      while(j>=0 && mat[i][j]==1){
        j--;
        maxRow=i;
      }
    }
    return maxRow;
  }
}`,

      python: `def row_max(mat):
    r, c = len(mat), len(mat[0])
    j = c-1
    max_row = -1

    for i in range(r):
        while j>=0 and mat[i][j]==1:
            j -= 1
            max_row = i

    return max_row`,

      c: `#include <stdio.h>

int rowMax(int mat[100][100], int r, int c){
    int j=c-1,maxRow=-1;

    for(int i=0;i<r;i++){
        while(j>=0 && mat[i][j]==1){
            j--;
            maxRow=i;
        }
    }
    return maxRow;
}`,

      cpp: `#include <iostream>
using namespace std;

int rowMax(int mat[100][100], int r, int c){
    int j=c-1,maxRow=-1;

    for(int i=0;i<r;i++){
        while(j>=0 && mat[i][j]==1){
            j--;
            maxRow=i;
        }
    }
    return maxRow;
}`
    }
  },
{
    subject: 'Code',
    category: 'Matrix',
    title: 'Sorted Matrix',
    difficulty: 'Medium',
    description: `Given an n x n matrix, sort all elements of the matrix.`,
    inputExample: '[[5,4,7],[1,3,8],[2,9,6]]',
    outputExample: '[[1,2,3],[4,5,6],[7,8,9]]',
    explanation: `Flatten matrix, sort it, and put elements back.`,
    code: {
      java: `import java.util.*;

public class Main {
  public static void sortMatrix(int[][] mat) {
    int n = mat.length;
    int[] arr = new int[n*n];
    int k = 0;

    for(int i=0;i<n;i++)
      for(int j=0;j<n;j++)
        arr[k++] = mat[i][j];

    Arrays.sort(arr);

    k = 0;
    for(int i=0;i<n;i++)
      for(int j=0;j<n;j++)
        mat[i][j] = arr[k++];
  }
}`,

      python: `def sort_matrix(mat):
    n = len(mat)
    arr = []

    for row in mat:
        arr.extend(row)

    arr.sort()
    k = 0

    for i in range(n):
        for j in range(n):
            mat[i][j] = arr[k]
            k += 1`,

      c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void* a,const void* b){
    return (*(int*)a - *(int*)b);
}

void sortMatrix(int mat[100][100], int n){
    int arr[10000], k=0;

    for(int i=0;i<n;i++)
        for(int j=0;j<n;j++)
            arr[k++] = mat[i][j];

    qsort(arr, n*n, sizeof(int), cmp);

    k=0;
    for(int i=0;i<n;i++)
        for(int j=0;j<n;j++)
            mat[i][j] = arr[k++];
}`,

      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void sortMatrix(int mat[100][100], int n){
    vector<int> arr;

    for(int i=0;i<n;i++)
        for(int j=0;j<n;j++)
            arr.push_back(mat[i][j]);

    sort(arr.begin(), arr.end());

    int k=0;
    for(int i=0;i<n;i++)
        for(int j=0;j<n;j++)
            mat[i][j] = arr[k++];
}`
    }
  },
{
    subject: 'Code',
    category: 'Matrix',
    title: 'Maximum Rectangle in Binary Matrix',
    difficulty: 'Hard',
    description: `Find the largest rectangle containing only 1s in a binary matrix.`,
    inputExample: '[[0,1,1,0],[1,1,1,1],[1,1,1,1],[1,1,0,0]]',
    outputExample: '8',
    explanation: `Treat each row as histogram and apply largest rectangle in histogram.`,
    code: {
      java: `import java.util.*;

public class Main {
  static int maxHist(int[] row){
    Stack<Integer> st = new Stack<>();
    int max = 0, i = 0;

    while(i < row.length){
      if(st.isEmpty() || row[st.peek()] <= row[i])
        st.push(i++);
      else{
        int top = st.pop();
        int area = row[top] * (st.isEmpty() ? i : i - st.peek() - 1);
        max = Math.max(max, area);
      }
    }

    while(!st.isEmpty()){
      int top = st.pop();
      int area = row[top] * (st.isEmpty() ? i : i - st.peek() - 1);
      max = Math.max(max, area);
    }
    return max;
  }

  public static int maxRectangle(int[][] mat){
    int[] row = mat[0];
    int max = maxHist(row);

    for(int i=1;i<mat.length;i++){
      for(int j=0;j<mat[0].length;j++){
        if(mat[i][j] != 0)
          row[j] += mat[i][j];
        else
          row[j] = 0;
      }
      max = Math.max(max, maxHist(row));
    }
    return max;
  }
}`,

      python: `def max_hist(row):
    stack = []
    max_area = 0
    i = 0

    while i < len(row):
        if not stack or row[stack[-1]] <= row[i]:
            stack.append(i)
            i += 1
        else:
            top = stack.pop()
            area = row[top] * (i if not stack else i - stack[-1] - 1)
            max_area = max(max_area, area)

    while stack:
        top = stack.pop()
        area = row[top] * (i if not stack else i - stack[-1] - 1)
        max_area = max(max_area, area)

    return max_area

def max_rectangle(mat):
    row = mat[0][:]
    max_area = max_hist(row)

    for i in range(1, len(mat)):
        for j in range(len(mat[0])):
            if mat[i][j] != 0:
                row[j] += mat[i][j]
            else:
                row[j] = 0
        max_area = max(max_area, max_hist(row))

    return max_area`,

      c: `#include <stdio.h>

int max(int a,int b){return a>b?a:b;}

int maxHist(int row[], int n){
    int stack[100], top=-1, maxA=0, i=0;

    while(i<n){
        if(top==-1 || row[stack[top]]<=row[i])
            stack[++top]=i++;
        else{
            int t=stack[top--];
            int area=row[t]*(top==-1?i:i-stack[top]-1);
            maxA=max(maxA,area);
        }
    }

    while(top!=-1){
        int t=stack[top--];
        int area=row[t]*(top==-1?i:i-stack[top]-1);
        maxA=max(maxA,area);
    }
    return maxA;
}

int maxRectangle(int mat[100][100], int r, int c){
    int row[100];
    for(int j=0;j<c;j++) row[j]=mat[0][j];

    int maxA = maxHist(row,c);

    for(int i=1;i<r;i++){
        for(int j=0;j<c;j++){
            if(mat[i][j]) row[j]+=mat[i][j];
            else row[j]=0;
        }
        maxA=max(maxA,maxHist(row,c));
    }
    return maxA;
}`,

      cpp: `#include <iostream>
#include <stack>
using namespace std;

int maxHist(int row[], int n){
    stack<int> st;
    int maxA=0,i=0;

    while(i<n){
        if(st.empty() || row[st.top()]<=row[i])
            st.push(i++);
        else{
            int t=st.top(); st.pop();
            int area=row[t]*(st.empty()?i:i-st.top()-1);
            maxA=max(maxA,area);
        }
    }

    while(!st.empty()){
        int t=st.top(); st.pop();
        int area=row[t]*(st.empty()?i:i-st.top()-1);
        maxA=max(maxA,area);
    }
    return maxA;
}

int maxRectangle(int mat[100][100], int r, int c){
    int row[100];
    for(int j=0;j<c;j++) row[j]=mat[0][j];

    int maxA=maxHist(row,c);

    for(int i=1;i<r;i++){
        for(int j=0;j<c;j++){
            if(mat[i][j]) row[j]+=mat[i][j];
            else row[j]=0;
        }
        maxA=max(maxA,maxHist(row,c));
    }
    return maxA;
}`
    }
  },
{
    subject: 'Code',
    category: 'Matrix',
    title: 'Find A Specific Pair In Matrix',
    difficulty: 'Hard',
    description: `Find maximum value of mat[c][d] - mat[a][b] such that c > a and d > b.`,
    inputExample: '[[1,2,-1,-4,-20],[-8,-3,4,2,1],[3,8,6,1,3],[-4,-1,1,7,-6],[0,-4,10,-5,1]]',
    outputExample: '18',
    explanation: `Use preprocessing from bottom-right.`,
    code: {
      java: `public class Main {
  public static int findPair(int[][] mat){
    int n = mat.length;
    int[][] maxArr = new int[n][n];

    maxArr[n-1][n-1] = mat[n-1][n-1];

    for(int i=n-2;i>=0;i--)
      maxArr[i][n-1] = Math.max(mat[i][n-1], maxArr[i+1][n-1]);

    for(int j=n-2;j>=0;j--)
      maxArr[n-1][j] = Math.max(mat[n-1][j], maxArr[n-1][j+1]);

    int maxVal = Integer.MIN_VALUE;

    for(int i=n-2;i>=0;i--){
      for(int j=n-2;j>=0;j--){
        maxVal = Math.max(maxVal, maxArr[i+1][j+1] - mat[i][j]);
        maxArr[i][j] = Math.max(mat[i][j],
          Math.max(maxArr[i][j+1], maxArr[i+1][j]));
      }
    }
    return maxVal;
  }
}`,

      python: `def find_pair(mat):
    n = len(mat)
    max_arr = [[0]*n for _ in range(n)]

    max_arr[n-1][n-1] = mat[n-1][n-1]

    for i in range(n-2,-1,-1):
        max_arr[i][n-1] = max(mat[i][n-1], max_arr[i+1][n-1])

    for j in range(n-2,-1,-1):
        max_arr[n-1][j] = max(mat[n-1][j], max_arr[n-1][j+1])

    max_val = float('-inf')

    for i in range(n-2,-1,-1):
        for j in range(n-2,-1,-1):
            max_val = max(max_val, max_arr[i+1][j+1] - mat[i][j])
            max_arr[i][j] = max(mat[i][j],
                max(max_arr[i][j+1], max_arr[i+1][j]))

    return max_val`,

      c: `#include <stdio.h>

int max(int a,int b){return a>b?a:b;}

int findPair(int mat[100][100], int n){
    int maxArr[100][100];

    maxArr[n-1][n-1]=mat[n-1][n-1];

    for(int i=n-2;i>=0;i--)
        maxArr[i][n-1]=max(mat[i][n-1],maxArr[i+1][n-1]);

    for(int j=n-2;j>=0;j--)
        maxArr[n-1][j]=max(mat[n-1][j],maxArr[n-1][j+1]);

    int maxVal=-100000;

    for(int i=n-2;i>=0;i--){
        for(int j=n-2;j>=0;j--){
            if(maxArr[i+1][j+1]-mat[i][j] > maxVal)
                maxVal = maxArr[i+1][j+1]-mat[i][j];

            maxArr[i][j]=max(mat[i][j],
                max(maxArr[i][j+1],maxArr[i+1][j]));
        }
    }
    return maxVal;
}`,

      cpp: `#include <iostream>
using namespace std;

int findPair(int mat[100][100], int n){
    int maxArr[100][100];

    maxArr[n-1][n-1]=mat[n-1][n-1];

    for(int i=n-2;i>=0;i--)
        maxArr[i][n-1]=max(mat[i][n-1],maxArr[i+1][n-1]);

    for(int j=n-2;j>=0;j--)
        maxArr[n-1][j]=max(mat[n-1][j],maxArr[n-1][j+1]);

    int maxVal=-100000;

    for(int i=n-2;i>=0;i--){
        for(int j=n-2;j>=0;j--){
            if(maxArr[i+1][j+1]-mat[i][j] > maxVal)
                maxVal = maxArr[i+1][j+1]-mat[i][j];

            maxArr[i][j]=max(mat[i][j],
                max(maxArr[i][j+1],maxArr[i+1][j]));
        }
    }
    return maxVal;
}`
    }
  },
{
    subject: 'Code',
    category: 'Matrix',
    title: 'Rotate Matrix by 90 Degree (In-place)',
    difficulty: 'Medium',
    description: `Rotate a square matrix by 90 degrees clockwise without using extra space.`,
    inputExample: '[[1,2,3],[4,5,6],[7,8,9]]',
    outputExample: '[[7,4,1],[8,5,2],[9,6,3]]',
    explanation: `Transpose the matrix and then reverse each row.`,
    code: {
      java: `public class Main {
  public static void rotate(int[][] mat) {
    int n = mat.length;

    for (int i = 0; i < n; i++) {
      for (int j = i; j < n; j++) {
        int temp = mat[i][j];
        mat[i][j] = mat[j][i];
        mat[j][i] = temp;
      }
    }

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n/2; j++) {
        int temp = mat[i][j];
        mat[i][j] = mat[i][n-j-1];
        mat[i][n-j-1] = temp;
      }
    }
  }
}`,

      python: `def rotate(mat):
    n = len(mat)

    for i in range(n):
        for j in range(i, n):
            mat[i][j], mat[j][i] = mat[j][i], mat[i][j]

    for row in mat:
        row.reverse()`,

      c: `#include <stdio.h>

void rotate(int mat[100][100], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i; j < n; j++) {
            int temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n/2; j++) {
            int temp = mat[i][j];
            mat[i][j] = mat[i][n-j-1];
            mat[i][n-j-1] = temp;
        }
    }
}`,

      cpp: `#include <iostream>
using namespace std;

void rotate(int mat[100][100], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i; j < n; j++) {
            swap(mat[i][j], mat[j][i]);
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n/2; j++) {
            swap(mat[i][j], mat[i][n-j-1]);
        }
    }
}`
    }
  },
{
    subject: 'Code',
    category: 'Matrix',
    title: 'Kth Smallest Element in a Sorted Matrix',
    difficulty: 'Medium',
    description: `Find the kth smallest element in a row-wise and column-wise sorted matrix.`,
    inputExample: 'matrix = [[1,5,9],[10,11,13],[12,13,15]], k=8',
    outputExample: '13',
    explanation: `Use binary search on value range.`,
    code: {
      java: `public class Main {
  static int countLessEqual(int[][] mat, int x) {
    int n = mat.length, count = 0;
    int i = n-1, j = 0;

    while (i >= 0 && j < n) {
      if (mat[i][j] <= x) {
        count += i + 1;
        j++;
      } else {
        i--;
      }
    }
    return count;
  }

  public static int kthSmallest(int[][] mat, int k) {
    int low = mat[0][0], high = mat[mat.length-1][mat.length-1];

    while (low < high) {
      int mid = (low + high) / 2;

      if (countLessEqual(mat, mid) < k)
        low = mid + 1;
      else
        high = mid;
    }
    return low;
  }
}`,

      python: `def count_le(mat, x):
    n = len(mat)
    count = 0
    i, j = n-1, 0

    while i >= 0 and j < n:
        if mat[i][j] <= x:
            count += i + 1
            j += 1
        else:
            i -= 1
    return count

def kth_smallest(mat, k):
    n = len(mat)
    low, high = mat[0][0], mat[n-1][n-1]

    while low < high:
        mid = (low + high)//2
        if count_le(mat, mid) < k:
            low = mid + 1
        else:
            high = mid
    return low`,

      c: `#include <stdio.h>

int countLE(int mat[100][100], int n, int x) {
    int count = 0, i = n-1, j = 0;

    while (i >= 0 && j < n) {
        if (mat[i][j] <= x) {
            count += i + 1;
            j++;
        } else {
            i--;
        }
    }
    return count;
}

int kthSmallest(int mat[100][100], int n, int k) {
    int low = mat[0][0], high = mat[n-1][n-1];

    while (low < high) {
        int mid = (low + high) / 2;

        if (countLE(mat, n, mid) < k)
            low = mid + 1;
        else
            high = mid;
    }
    return low;
}`,

      cpp: `#include <iostream>
using namespace std;

int countLE(int mat[100][100], int n, int x) {
    int count = 0, i = n-1, j = 0;

    while (i >= 0 && j < n) {
        if (mat[i][j] <= x) {
            count += i + 1;
            j++;
        } else {
            i--;
        }
    }
    return count;
}

int kthSmallest(int mat[100][100], int n, int k) {
    int low = mat[0][0], high = mat[n-1][n-1];

    while (low < high) {
        int mid = (low + high) / 2;

        if (countLE(mat, n, mid) < k)
            low = mid + 1;
        else
            high = mid;
    }
    return low;
}`
    }
  },
{
    subject: 'Code',
    category: 'Matrix',
    title: 'Common Elements in All Rows of Matrix',
    difficulty: 'Medium',
    description: `Find elements present in all rows of a matrix.`,
    inputExample: '[[1,2,1,4,8],[3,7,8,5,1],[8,7,7,3,1],[8,1,2,7,9]]',
    outputExample: '[1,8]',
    explanation: `Use hashmap to count frequency across rows.`,
    code: {
      java: `import java.util.*;

public class Main {
  public static List<Integer> common(int[][] mat) {
    int r = mat.length, c = mat[0].length;
    Map<Integer,Integer> map = new HashMap<>();

    for (int j = 0; j < c; j++)
      map.put(mat[0][j], 1);

    for (int i = 1; i < r; i++) {
      for (int j = 0; j < c; j++) {
        if (map.containsKey(mat[i][j]) && map.get(mat[i][j]) == i)
          map.put(mat[i][j], i+1);
      }
    }

    List<Integer> res = new ArrayList<>();
    for (int key : map.keySet()) {
      if (map.get(key) == r)
        res.add(key);
    }
    return res;
  }
}`,

      python: `def common(mat):
    r, c = len(mat), len(mat[0])
    freq = {}

    for j in range(c):
        freq[mat[0][j]] = 1

    for i in range(1, r):
        for j in range(c):
            if mat[i][j] in freq and freq[mat[i][j]] == i:
                freq[mat[i][j]] += 1

    return [k for k,v in freq.items() if v == r]`,

      c: `#include <stdio.h>

void common(int mat[100][100], int r, int c){
    int freq[1000]={0};

    for(int j=0;j<c;j++)
        freq[mat[0][j]] = 1;

    for(int i=1;i<r;i++){
        for(int j=0;j<c;j++){
            if(freq[mat[i][j]]==i)
                freq[mat[i][j]]++;
        }
    }

    for(int i=0;i<1000;i++){
        if(freq[i]==r)
            printf("%d ",i);
    }
}`,

      cpp: `#include <iostream>
using namespace std;

void common(int mat[100][100], int r, int c){
    int freq[1000]={0};

    for(int j=0;j<c;j++)
        freq[mat[0][j]] = 1;

    for(int i=1;i<r;i++){
        for(int j=0;j<c;j++){
            if(freq[mat[i][j]]==i)
                freq[mat[i][j]]++;
        }
    }

    for(int i=0;i<1000;i++){
        if(freq[i]==r)
            cout<<i<<" ";
    }
}`
    }
  }
]

const seed = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to MongoDB')
        
        const ops = problems.map(p => ({
            updateOne: {
                filter: { title: p.title },
                update: { $setOnInsert: p },
                upsert: true
            }
        }))

        const result = await CodeProblem.bulkWrite(ops)
        console.log(`Successfully processed ${problems.length} problems for Matrix`)
        
        await mongoose.disconnect()
        process.exit(0)
    } catch (error) {
        console.error('Seed failed:', error)
        process.exit(1)
    }
}

seed()
