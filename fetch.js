document.getElementById('Jimmynoveash').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission
    
    const registerAPI = 'https://uwuniformes-lhpc.onrender.com/uwuniformes/v1/users/add';

    alert('fetching...' + registerAPI);

    const body = {
        usu_nombre: document.getElementById('wf-sign-up-name').value,
        usu_email: document.getElementById('wf-sign-up-email').value,
        usu_pass: document.getElementById('wf-sign-up-password').value,
        usu_direccion: document.getElementById('direccion').value,
        usu_telefono: document.getElementById('telefono').value
    };

    try {
        const response = await fetch(registerAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error('Error submitting form'); // Throw error if response is not ok
        }

        Swal.fire({
            title: "Éxito!",
            text: "Usuario registrado correctamente.",
            icon: "success"
        });

    } catch (error) {
        console.error('Error submitting form:', error.message);
        // Handle error, show message to the user, etc.
    }
});
