'use strict'

const input = document.querySelectorAll('input'),
    btn = document.querySelector('button'),
    mainForm = document.querySelector('.mainForm'),
    invoice = document.querySelector('.invoice');

const data = document.querySelector('.data'),
        numberOfLot = document.querySelector('.numberofLot'),
        nameOfowner=document.querySelector('.name'),
        pass=document.querySelector('.passport'),
        yearMakeModel=document.querySelector('.yearmakemodel'),
        vin=document.querySelector('.vin'),
        countryOfOrigin = document.querySelector('.countryoforigin'),
        price=document.querySelector('.price'),
        shipping=document.querySelector('.shipping');




    btn.addEventListener('click', (e) => {
        e.preventDefault();
        

        let shipp = Number(shipping.value);
        let pricee = Number(price.value);
        let total =pricee+shipp;

       

            invoice.innerHTML = `<style>
            @page {
                margin: 0;
            }
        </style>
        
        
        <div class="content">
            <div class="container-table table-template-generate-invoice-wrap ">
                <table>
                    <tr class="w960">
                        <td rowspan="5" class="noBorder w480">
                            <span class="logo">
                                <img
                                    src="https://my.interlogisticllc.com/wp-content/themes/interlogisticllc/invoice/logo/dklogisticllc.png">
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td class="noBorder w320 larde" colspan="3">
                            <strong>DK Logistic LLC</strong>
                        </td>
                    </tr>
                    <tr>
                        <td class="noBorder w320" colspan="3">3111 N UNIVERSITY DR SUITE 105 CORAL SPRINGS, FL 33065 USA</td>
                    </tr>
                    <tr>
                        <td class="colTitle w160 ar">Date</td>
                        <td class="colTitle w160 ar">Due Date</td>
                        <td class="colTitle w160 ar">Number</td>
                    </tr>
                    <tr>
                        <td class="w160">${data.value}</td>
                        <td class="w160">${data.value}</td>
                        <td class="w160">${numberOfLot.value}</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td class="colTitle w960 ar">Bill to</td>
                    </tr>
                    <tr>
                        <td class="w480 large" style="padding: 30px 20px; line-height: 24px;">
                            Name:
                            <strong class="larde">${nameOfowner.value}</strong><br> Document:
                            <strong class="larde">${pass.value}</strong>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td class="w480 colTitle ar">Year Make Model</td>
                        <td class="w480 colTitle ar">VIN</td>
                    </tr>
                    <tr>
                        <td class="w480">${yearMakeModel.value}</td>
                        <td class="w480">${vin.value}</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td class="w480 colTitle ar">Description of Charges</td>
                        <td class="w160 colTitle ar">Quantity</td>
                        <td class="w160 colTitle ar">Price</td>
                        <td class="w160 colTitle ar">Amount</td>
                        <td class="w160 colTitle ar">Shipping</td>
                        <td class="w160 colTitle ar">Total</td>
        
                    </tr>
                    <tr>
                        <td class="w480">
                        ${yearMakeModel.value}, VIN : ${vin.value} <br>
                            <p>Country of origin: ${countryOfOrigin.value}</p>
                        </td>
                        <td class="w160">1.00</td>
                        <td class="w160">${price.value}</td>
                        <td class="w160">${price.value}</td>
                        <td class="w160">${shipping.value}</td>
                        <td class="w160">${total} USD</td>
                    </tr>
        
        
                </table>
        
                <div class="line small" style="">
                    To Ensure Proper Credit, Please Return This Portion With Payment
                </div>
        
                <div class="claerfix">
                    <div class="w60per">
                        <div style="text-transform: uppercase;margin-bottom: 15px;" class="ar">RETURN PORTION</div>
                        <div class="withBorder bottLeft claerfix">
                            <div class="ar">Payment Instruction</div>
                            <div class="w50per lh">
                                <em class="ar">For Int'l and Domestic Wire Transfers:</em><br>
                                <br>
                                <strong>BANK OF AMERICA</strong><br> DK Logistic LLC <br> 125 178th St.Sunny Isles,FL 33160, USA
                                <br> Account Number: 8981 0452 2900 <br> Routing: 026009593 <br> Swift: BOFAUS3N <br> INV ID:
                                02114, TRANS ID: U01336 payment for logistic services <br>
                                <em class="ar">Contact office for account information</em>
                            </div>
                            <div class="w50per lh">
                                <em class="ar">MAILING ADRESS</em><br>
                                <br>
                                <strong>DK Logistic LLC</strong><br> 3111 N UNIVERSITY DR SUITE 105 CORAL SPRINGS, FL 33065 USA
                                <br><br> For ACH PAYMENTS<br> Account Number: 8981 0452 2900<br> ACH Routing Number:
                                063100277<br> Title on Account: DK LOGISTIC LLC<br>
                                <!--<em class="ar">Contact Office for account information</em>-->
                            </div>
                        </div>
                    </div>
                    <div class="shtamp"><img
                            src="https://my.interlogisticllc.com/wp-content/themes/interlogisticllc/invoice/logo/shtamp.png"
                            style="width: 270px; height: 150px;"></div>
                </div>
            </div>
        
            <style type="text/css">
                .container-table.table-template-generate-invoice-wrap {
                    width: 960px;
                    margin: 0 auto;
                    font-size: 15px;
                    position: relative;
                    padding: 10px;
                    border: 1px solid #cccccc;
                    background-color: #ffffff;
                }
        
                .table-template-generate-invoice-wrap .ar {
                    font-family: Arial, "Open Sans", "sans-serif";
                    font-size: 0.8em;
                    color: #555555;
                }
        
                .table-template-generate-invoice-wrap .lh {
                    line-height: 1.7em;
                }
        
                .table-template-generate-invoice-wrap .shtamp {
                    content: '';
                    position: absolute;
                    width: 270px;
                    height: 150px;
                    bottom: -30px;
                    right: 5px;
                    background-size: contain;
                    opacity: .8;
                }
        
                .table-template-generate-invoice-wrap .larde {
                    font-size: 18px;
                }
        
                .table-template-generate-invoice-wrap .small {
                    font-size: 11px;
                    color: #777777;
                    text-align: justify;
                }
        
                .table-template-generate-invoice-wrap .right {
                    text-align: right;
                }
        
                .table-template-generate-invoice-wrap .w960 {
                    width: 960px;
                }
        
                .table-template-generate-invoice-wrap .w480 {
                    width: 480px;
                }
        
                .table-template-generate-invoice-wrap .w320 {
                    width: 320px;
                }
        
                .table-template-generate-invoice-wrap .w240 {
                    width: 240px;
                }
        
                .table-template-generate-invoice-wrap .w200 {
                    width: 200px;
                }
        
                .table-template-generate-invoice-wrap .w160 {
                    width: 160px;
                }
        
                .table-template-generate-invoice-wrap .w120 {
                    width: 120px;
                    font-size: 0.9em;
                }
        
                .table-template-generate-invoice-wrap .w140 {
                    width: 140px;
                }
        
                .table-template-generate-invoice-wrap .w100 {
                    width: 100px;
                }
        
                .table-template-generate-invoice-wrap .noBorder,
                .table-template-generate-invoice-wrap tr.noBorder td,
                .table-template-generate-invoice-wrap table.noBorder td {
                    border: none;
                }
        
                .table-template-generate-invoice-wrap table.noBorder td {
                    padding: 5px 10px;
                }
        
                .table-template-generate-invoice-wrap .colTitle {
                    background: #eeeeee;
                    font-weight: 600;
                    font-size: 0.8em;
                }
        
                .table-template-generate-invoice-wrap .logo {
                    padding: 10px;
                }
        
                .table-template-generate-invoice-wrap .logo img {
                    max-width: 100%;
                }
        
                .table-template-generate-invoice-wrap .line {
                    width: 100%;
                    height: 1px;
                    margin: 30px 0;
                    border-top: 1px dashed #555555;
                    ;
                    text-align: center;
                    padding-top: 5px;
                }
        
                .table-template-generate-invoice-wrap .w50per {
                    width: 50%;
                    float: left;
                }
        
                .table-template-generate-invoice-wrap .w60per {
                    width: 60%;
                    float: left;
                }
        
                .table-template-generate-invoice-wrap .w40per {
                    width: 40%;
                    float: right;
                }
        
                .table-template-generate-invoice-wrap .withBorder {
                    border: 1px solid #bbbbbb;
                }
        
                .table-template-generate-invoice-wrap table {
                    margin: 10px 0;
                }
        
                .table-template-generate-invoice-wrap td {
                    padding: 10px 10px;
                    border: 1px solid #eeeeee;
                }
        
                .table-template-generate-invoice-wrap .claerfix::after {
                    content: "";
                    clear: both;
                    display: table;
                }
        
                .table-template-generate-invoice-wrap .bottLeft,
                .table-template-generate-invoice-wrap .bottRight {
                    padding: 10px;
                }
        
                .table-template-generate-invoice-wrap .title {
                    margin-bottom: 15px;
                }
        
                .table-template-generate-invoice-wrap .red-text {
                    color: #f00;
                }
            </style>
            <script src="script.js"></script>
        </div>
            
        `
        mainForm.remove()



    
    })

