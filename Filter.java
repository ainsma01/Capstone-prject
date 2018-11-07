import java.io.*;
import java.net.URL;
import java.util.Scanner;

public class Filter {

    public static void main(String[] args) {
        try {
            Scanner in = new Scanner(System.in);
            System.out.print("Enter a URL: ");
            String url = in.nextLine();

            URL address = new URL(url);
            BufferedReader reader =
                    new BufferedReader(new InputStreamReader(address.openStream()));
            File file =
                    new File(url.replace("http://", "").replaceAll("/", "--"));
            FileWriter writer = new FileWriter(file);

            String inputLine;

            while ((inputLine = reader.readLine()) != null) {
                writer.write(inputLine);
                writer.write("\r\n");
            }

            writer.close();
            reader.close();

            System.out.print("Search for: ");
            String search = in.nextLine();

            Scanner sc = new Scanner(file);
            int line = 0;

            while (sc.hasNextLine()) {
                String str = sc.findInLine(search);

                if (str != null) {
                    System.out.println((line + 1) + ": " + sc.nextLine());
                } else {
                    sc.nextLine();
                }
                line++;
            }

        }
        catch (IOException e) {
            System.out.println("There is an error. Please try again.");
        }
    }
}
