const usdBalanceEl = document.getElementById('usd_balance');
const btcBalanceEl = document.getElementById('btc_balance');
const minersCountEl = document.getElementById('miners_count');
const hashrateEl = document.getElementById('hashrate');

const save = getSave();

function updateUI(){
    usdBalanceEl.innerText = `USD: ${save.usdBalance.toFixed(2)}$`;
    btcBalanceEl.innerText = `BTC: ${save.btcBalance.toFixed(6)}`;
    minersCountEl.innerText = `Miners Count: ${save.miners.length}`;
    hashrateEl.innerText = `Hashrate: ${getHashrate()}`
}

function getHashrate(){
    let hr = 0;
    save.miners.forEach(miner => hr += miner.hashrate);
    return hr + 'H/s';
}

setInterval(updateUI, 1e2);