function calculateMaturityamount(){

    const amount=parseFloat(document.getElementById('amount').value);
    const interest=parseFloat(document.getElementById('interest').value);
    const time=parseFloat(document.getElementById('time').value);

    const interestamount=(amount*interest*time)/100;
    const maturityamount=amount+interestamount;
    
    document.getElementById('result').innerText=`Maturity amount:${maturityamount.toFixed(2)}`;
    document.getElementById('interestamnt').innerText=`Interset amount:${interestamount.toFixed(2)}`;

}
document.getElementById('sumbit-btn').addEventListener('click',calculateMaturityamount);