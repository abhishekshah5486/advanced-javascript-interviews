import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int t = scn.nextInt();

        for (int j=0; j<t; j++)
        {
            int n = scn.nextInt();
            int q = scn.nextInt();

            int[] arr = new int[n];
            for (int idx=0; idx<n; idx++)
            {
                arr[idx] = scn.nextInt();
            }

            int[][] queries = new int[q][3];
            for (int idx=0; idx<q; idx++)
            {
                queries[idx][0] = scn.nextInt();
                queries[idx][1] = scn.nextInt();
                queries[idx][2] = scn.nextInt();
            }

            long[] prefixSum = new long[n];
            prefixSum[0] = arr[0];
            for (int idx=1; idx<n; idx++)
            {
                prefixSum[idx] = prefixSum[idx - 1] + arr[idx];
            }

            for (int idx=0; idx<q; idx++)
            {
                int lIdx = queries[idx][0] - 1;
                int rIdx = queries[idx][1] - 1;
                int k = queries[idx][2];

                long lSum = (lIdx > 0) ? prefixSum[lIdx - 1] : 0;
                long rSum = prefixSum[n - 1] - prefixSum[rIdx];
                long kSum = (long)k * (rIdx - lIdx + 1);

                long sum = (lSum + rSum + kSum);
                if (sum % 2 == 1)
                {
                    System.out.println("YES");
                }
                else System.out.println("NO");
            }
        }
    }   
}
