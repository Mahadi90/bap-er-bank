document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeField = document.getElementById('deposite-field');
    const NewDepositeAmount = depositeField.value;

    depositeField.value = '';

    const depositeTotalElement = document.getElementById('desposite-total');
    const previousDepositeTotal = depositeTotalElement.innerText;
    
    const currentDepositeTotalAmount = parseFloat(previousDepositeTotal) + parseFloat(NewDepositeAmount);

    depositeTotalElement.innerText = currentDepositeTotalAmount;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = balanceTotalElement.innerText;

    const currentBalanceTotal = parseFloat(balanceTotal) + parseFloat(NewDepositeAmount);

    balanceTotalElement.innerText = currentBalanceTotal;
})