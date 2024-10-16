import java.util.*;

public class StepsDp
{   
    public static int max = 1000000007;
    public static int[][] dp;
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int A = scn.nextInt();
        int B = scn.nextInt();

        dp = new int[4][B + 1];

        for (int j=0; j<=A; j++)
        {
            for (int k=0; k<=B; k++)
            {
                if (j == 0)
                {
                    dp[j % 4][k] = 1;
                    continue;
                }
                int ans1 =  j - 1 >= 0 ? dp[(j - 1) % 4][k] : 0;
                int ans2 = j - 2 >= 0 ? dp[(j - 2) % 4][k] : 0;
        
                int ans3 = 0;
                if (k > 0)
                {
                    ans3 = (j - 3 >= 0) ? dp[(j - 3) % 4][k - 1] : 0;
                }
        
                int ans = ((ans1 + ans2) % max + ans3) % max;
                dp[j % 4][k] = ans;
            }
        }
        int ans = dp[A % 4][B];
        System.out.println(ans);
    }
    // public static int helper(int[][] dp, int A, int B)
    // {   
    //     if (A == 0)
    //     {
    //         return 1;
    //     }
    //     if (A < 0)
    //     {
    //         return 0;
    //     }

    //     if (dp[A][B] != -1)
    //     {
    //         return dp[A][B];
    //     }
    //     int ans1 = helper(dp, A - 1, B);
    //     int ans2 = helper(dp, A - 2, B);

    //     int ans3 = 0;
    //     if (B > 0)
    //     {
    //         ans3 = helper(dp, A - 3, B);
    //     }

    //     int ans = ((ans1 + ans2) % max + ans3) % max;
    //     return dp[A][B] = ans;
    // }
}