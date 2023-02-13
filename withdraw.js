document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = withdrawField.value;
    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotalElement.innerText;

    const currentWithdrawAmount = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);

    withdrawTotalElement.innerText = currentWithdrawAmount;

    const balanceTotalElement = document.getElementById('balance-total');
    const BalanceTotal = balanceTotalElement.innerText;

    const currentBalanceTotal = parseFloat(BalanceTotal) - parseFloat(newWithdrawAmount);

    balanceTotalElement.innerText = currentBalanceTotal;
})