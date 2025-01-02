document.getElementById('cta-form').addEventListener('click', function() {
    document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
  });
  
  function presionarBoton() {
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('message').value;
  
    if (!nombre || !email || !mensaje) {
      alert('Por favor, complete todos los campos.');
      return;
    }
    
  
    alert('¡Gracias por tu mensaje! Revisa la consola para más detalles.');
    console.log({ nombre, email, mensaje });
  
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }