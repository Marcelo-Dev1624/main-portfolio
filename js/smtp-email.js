const nombre = document.getElementById('sender-name');
const sender = document.getElementById('email-sender');
const msg = document.getElementById('email-form-txt');
const submit = document.getElementsByClassName('email-form')[0];


submit.addEventListener('submit',(e) =>{
    e.preventDefault

    let ebody = `
    <b>Name: </b> ${nombre.value}
    <br>
    <b>Email: </b> ${sender.value}
    <br>
    <b>Message: </b> ${msg.value}
    <br>
    `

     Email.send({
        SecureToken: "b236773e-c65e-4b02-a5f6-1c5ad21874fc",
        To: 'marcelodev1624@gmail.com',
        From: 'marcelodev1624@gmail.com',
        Subject: "New contact from inquiry from: " + sender.value,
        Body: ebody,
    }).then(
        message => alert(message)
    );
}) 