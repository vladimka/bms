const emptySave = {
    version : '0.0.1',

    nickname : 'Vladimka',
    usdBalance : 0,
    btcBalance : 0,
    miners : []
}

function getSave(){
    return JSON.parse(localStorage.getItem('btc_mine_save')) || emptySave;
}

function setSave(_save){
    localStorage.setItem('btc_mine_save', JSON.stringify(_save));
}