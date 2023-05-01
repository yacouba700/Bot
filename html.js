module.exports = (name, price, frais, leval, status) => {
  const today = new Date();
  return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .title{
               width:150px;
               height:150px;
               border-radius: 75px;
               text-align: center;
               justify-content: center;
               align-self: center;

               
               
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
             .title-text1{
               text-align : center;
               font-weight: bold;
               

             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">

                <h2 class="title-text1">FICHE D'INSCRIPTION<h2/>
                   <td colspan="2">
                      <table>
                         <tr>
                            <td class="title"><img  class="title" src="https://thumbs.dreamstime.com/b/fermez-vous-vers-le-haut-du-jeune-homme-africain-beau-92170914.jpg"
                               style="width:100%; max-width:156px;"></td>
                            <td>
                               Date : ${`${today.getDate()} - ${
                                 today.getMonth() + 1
                               }- ${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                              Nom: ${name}
                            </td>
                            <td>
                               leval: ${leval}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="heading">
                   <td>Les Tarif:</td>
                   <td>Price</td>
                </tr>
               
                <tr class="item">
                   <td>Prix de la formation:</td>
                   <td>${price}F CFA</td>
                </tr>
                <tr class="item">
                <td>Frais d'inscription:</td>
                <td>${frais}F CFA</td>
             </tr>
                <tr class="item">
                   <td>Status:</td>
                   <td>${status}</td>
                </tr>
             </table>
             <br />
             <h1 class="justify-center">Total a payer: ${
               parseInt(price) + parseInt(frais)
             }F CFA</h1>
          </div>
       </body>
    </html>
    `;
};
