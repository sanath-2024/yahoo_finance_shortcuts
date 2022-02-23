getTicker = () => document.getElementById('ticker').value;
createTab = (baseUrl, ticker, subUrl) => {
    window.open(`${baseUrl}/${ticker}/${subUrl}`, '_blank');
};
base = 'https://finance.yahoo.com/quote';
subUrls = [
    'key-statistics',
    'history',
    'profile',
    'financials',
    'balance-sheet',
    'cash-flow',
    'analysis',
    'options'
];
document.getElementById('quote').onclick = () => createTab(base, getTicker(), '');
for (const subUrl of subUrls) {
    document.getElementById(subUrl).onclick = () => createTab(base, getTicker(), subUrl);
}
document.getElementById('ticker').focus();