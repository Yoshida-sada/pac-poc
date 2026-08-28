function FindProxyForURL(url, host){
  host = host.toLowerCase();

  if (
      host == "login.microsoftonline.com" ||
      host == "login.microsoft.com" ||
      shExpMathc(host, "*.msauth.net") ||
      shExpMathc(host, "*.msftauth.net") 
  ){
      return "PROXY proxy.test.123.sb.jp:8080";
  }

  if (
      host == "outlook.office365.com"||
      host == "outlook.office.com"||
      host == "outlook.cloud.microsoft"
  ){
      return "PROXY proxy.test.123.sb.jp:8080";
  }

  return "DIRECT";
}
