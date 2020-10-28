package com.tsoft.bot.frontend.utility;

import com.mongodb.Cursor;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;

public class CallerJSON_MiMovistarRecarga {

    private static final String EXCEL_WEB = "excel/MiMovistar_Recargas.xlsx";
    private static final String RECARGAS_WEB = "Recargas";
    private static final String COLUMNA_URL = "URL";
    private static final String COLUMNA_TELEFONO = "TELEFONO";
    private static final String COLUMNA_SERVER = "SERVER";

    public static void API_API_TEST_recargas(){
        try {
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder bulider = factory.newDocumentBuilder();
            Document doc = bulider.parse("C:\\Users\\Abraham Rivera\\Desktop\\DALE\\Demo_Pipeline\\src\\main\\resources\\config\\server.xml");
            NodeList ip2 = doc.getElementsByTagName("student");
            String Yeah = null;
            for (int i = 0; i < ip2.getLength(); i++) {
                Node n = ip2.item(i);
                Element e = (Element) n;
                Yeah = (e.getElementsByTagName("ip").item(0).getTextContent());
            }
            String result = blockIP(Yeah);
            System.out.println(result);
        } catch (IOException | ParserConfigurationException | SAXException e) {
            System.out.println(e.toString());
        }
    }

    private List<HashMap<String, String>> getData() throws Throwable {
        return ExcelReader.data(EXCEL_WEB, RECARGAS_WEB);
    }

    public static void main(String[] args){
        try {
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder bulider = factory.newDocumentBuilder();
            Document doc = bulider.parse("C:\\Users\\Abraham Rivera\\Desktop\\DALE\\Demo_Pipeline\\src\\main\\resources\\config\\server.xml");
            NodeList ip2 = doc.getElementsByTagName("student");
            String Yeah = null;
            for (int i = 0; i < ip2.getLength(); i++) {
                Node n = ip2.item(i);
                Element e = (Element) n;
                Yeah = (e.getElementsByTagName("ip").item(0).getTextContent());
            }
            String result = blockIP(Yeah);
            System.out.println(result);
        } catch (IOException | ParserConfigurationException | SAXException e) {
            System.out.println(e.toString());
        }


    }

    private static String blockIP(String ip) throws IOException {

        String result;

        HttpPost post = new HttpPost("https://api.us-east.apiconnect.ibmcloud.com/telefonica-del-peru-development/topen/webviews/v1/users/me/phone-numbers/920957951/webviews/account_topup_external_payment");
        post.addHeader("Content-Type", "application/json");
        post.addHeader("X-IBM-Client-Id", "e70e694e-46e7-4de2-82ce-e98fd25c4ff0");
        post.addHeader("X-IBM-Client-Secret", "J6hQ2tM0cW2xB6nW6bB7jJ3dU1eT4lQ0aV6rJ4nH7tX3rF8sU2");
        post.addHeader("x-user-id", "5435");
        post.addHeader("x-client-id", "43543");
        post.addHeader("x-scope", "4535");
        post.addHeader("x-identifier-bound-scope", "435443");
        post.addHeader("x-consents", "4334");
        post.addHeader("x-purpose", "343345");
        post.addHeader("x-authorization-id", "43");
        post.addHeader("x-device-id", "23432");
        post.addHeader("x-activated-roles", "3242");
        post.addHeader("x-token-info", "453443");

        String block = "{\"target\":\"ip\",\"value\":\"" + ip + "\"}";

        StringBuilder entity = new StringBuilder();
        entity.append("{");
        entity.append("\"callback_url\": \"https://novum.com/endtest?state=2\",");
        entity.append("\"nonce\": \"4zg86i78-7060-4590-9f9-4d967f79bf143\",");
        entity.append("\"payload\": {\n" +
                "        \"msisdn\": \"51920954470\"\n" +           //51920954470 tarjeta           //51920953950 normal
                "    }");
        entity.append("}");

        // send a JSON data
        post.setEntity(new StringEntity(entity.toString()));

        try (CloseableHttpClient httpClient = HttpClients.createDefault();
             CloseableHttpResponse response = httpClient.execute(post)) {

            result = EntityUtils.toString(response.getEntity());
        }
        String url = result;
        ExcelReader.writeCellValue(EXCEL_WEB, RECARGAS_WEB, 1, 1, url.substring(8, url.length() -2));
        return url;
        
    }

}