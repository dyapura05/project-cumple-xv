
							function openModal() {
								document.getElementById('modal').style.display = 'block';
								document.getElementById('overlay').style.display = 'block';
							}
					
							function closeModal() {
								document.getElementById('modal').style.display = 'none';
								document.getElementById('overlay').style.display = 'none';
							}
					
							document.getElementById('comprobante').addEventListener('change', function () {
								const link = document.getElementById('whatsappLink');
								const mensaje = encodeURIComponent("Hola, adjunto el comprobante para el regalo de Juan Pérez.");
								const numero = "3875899078"; // Cambia este número por tu WhatsApp
								link.href = `https://wa.me/${numero}?text=${mensaje}`;
							});