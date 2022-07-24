const init = function(){
    document.getElementById('submitter').addEventListener('click', send);
}

const send = function(ev){
    ev.preventDefault(); 

    let github = "6Lf8BxchAAAAAPMf8CudONb27q7xG0JNVf8XJ_5s";
    let local = "6LdbHxchAAAAAEIvs1veXP29esIR2Cz_YRCSXLj_";

    document.getElementByClassName('g-recaptcha').setAttribute("data-sitekey", github);

    if (grecaptcha.getResponse().length === 0){
        document.getElementById('recaptcha-error').innerHTML = '<span style="color:red;">You must verify the captcha</span>';
        return;
    }

    const form = document.getElementById('form');

    const name = form.elements.namedItem('name').value;
    const email = form.elements.namedItem('email').value;
    const message = form.elements.namedItem('message').value;

    if (email === '' || message === ''){
        alert('Please fill in the required fields');
    } else {


        Email.send({
            SecureToken : "acb28ec1-b43c-4892-875f-43fd3475d019",
            To : "guido.dinello@gmail.com",
            From : "guidoobolso@gmail.com",
            Subject : "Website Contact Form",
            Body : name + "<br>" + email + "<br>" + message
        });

        alert("Thank you for your message " + name + ", I will reach out to you as soon as possible.");

        grecaptcha.reset();
        form.reset();
    }
}

function recaptcha_callback(){
    document.getElementById('recaptcha-error').innerHTML = '';
}


document.addEventListener('DOMContentLoaded', init);