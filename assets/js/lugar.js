
							function actualizarCuentaRegresiva() {
								// Fecha del cumpleaños
								const fechaCumpleaños = new Date('2024-12-07T00:00:00');
								const ahora = new Date();
					
								// Calcular la diferencia en milisegundos
								const diferencia = fechaCumpleaños - ahora;
					
								if (diferencia > 0) {
									// Convertir la diferencia a días, horas, minutos y segundos
									const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
									const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
									const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
									const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
					
									// Mostrar la cuenta regresiva
									document.getElementById('countdown').innerHTML =
										`${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
								} else {
									// Cuando se llegue al cumpleaños
									document.getElementById('countdown').innerHTML = '¡Feliz cumpleaños!';
								}
							}
					
							// Actualizar la cuenta regresiva cada segundo
							setInterval(actualizarCuentaRegresiva, 1000);
