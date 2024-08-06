import java.util.*;

public class Main{
    public static void main(String[] args) {
        Scanner read = new Scanner(System.in);
        int t = read.nextInt();
        for (int j=0; j<t; j++){
            int n = read.nextInt();
            int s = read.nextInt();
            int m = read.nextInt();

            int[][] intervals = new int[n][2];
            for(int k=0; k<n; k++){
                intervals[k][0] = read.nextInt();
                intervals[k][1] = read.nextInt();
            }
            Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));
            
            boolean canShower = false;
            
            if (intervals[0][0] >= s) {
                canShower = true;
            }
            
            for (int i = 1; i < n; i++) {
                if (intervals[i][0] - intervals[i - 1][1] >= s) {
                    canShower = true;
                    break;
                }
            }
            
            if (m - intervals[n - 1][1] >= s) {
                canShower = true;
            }
            
            if (canShower) {
                System.out.println("YES");
            } else {
                System.out.println("NO");
            }
        }
    }
}