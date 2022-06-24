String cmd = "ls -al";
Runtime run = Runtime.getRuntime();
Process pr = run.exec(cmd);
pr.waitFor();
BufferedReader buf = new BufferedReader(new InputStreamReader(pr.getInputStream()));
String line = "";
while ((line=buf.readLine())!=null) {
System.out.println(line);
}

