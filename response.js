<html>
<head>
    <title>Merchant Check Out Page</title>
    <style>
        body {
            background-color: #ECEFF1;
            font-family: Helvetica;
        }
        .receipt {
            width: 400px;
            background-color: transparent;
            margin: 80px auto 80px auto;
        }
        .table-receipt {
            border-radius: 10px;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
            width: 100%;
            border-collapse: collapse;
            box-shadow: -20px 30px 50px 0px #8d8d8d;
            background-color: white;
        }
        .th-header {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            width: 100%;
            background-color: #3a903e;
            color: white;
            padding: 24px;
            font-size: 24px;
        }
        .td-title {
            font-size: 16px;
            font-weight: 700;
            color: #78909c;
            padding: 12px 8px 12px 8px;
            border-bottom: 1px solid #CFD8DC;
        }
        .td-content {
            font-size: 18px;
            text-align: right;
            padding: 12px 8px 12px 8px;
            border-bottom: 1px solid #CFD8DC;
        }
        .td-bottom {
            width: 100%;
            font-weight: 600;
            color: #3a903e;
            text-align: center;
            padding: 24px;
            font-size: 20px;
        }
        .button
        {
            background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
        }
    </style>
</head>
<body>
<div class="receipt">
    <!--    <% if (resultData == 'true') { %>
    <center><h1>validation succesfull</h1></center>
    <% }else
    { %>
    <center><h1>validation unsuccesfull</h1></center>
    <% } %>-->
    <table class="table-receipt">
        <thead>
        <tr>
            <th class="th-header"
                colspan="2">PAYMENT RECEIPT
            </th>
        </tr>
        </thead>
        <tbody>
      
       
        <tr>
            <td class="td-title">orderid</td>
            <td class="td-content">ORD399</td>
        </tr>
        <tr>
            <td class="td-title">MID</td>
            <td class="td-content">LEuwfW20127010084496</td>
        </tr>
        <tr>
            <td class="td-title">TXNAMOUNT</td>
            <td class="td-content">1.00</td>
        </tr>
        <tr>
            <td class="td-title">CURRENCY</td>
            <td class="td-content">INR</td>
        </tr>
        <tr>
            <td class="td-title">TXN_STATUS</td>
            <td class="td-content">success</td>
        </tr>
        <tr>
            <td class="td-bottom"
                colspan="2">Thank you!.
            </td>
        </tr>
        </tbody>
    </table>
    <button class="button">arrange zoom meeting</button>
</div>

</body>
</html>
