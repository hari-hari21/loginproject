$(document).ready(function () {
    $('#mail').on('input', function () {
        checkemail();
    });
    $('#pass').on('input', function () {
        checkpass();
    });
    $('#cpass').on('input', function () {//m_submitbtn
        checkcpass();
    });
    
    
    $('#register').submit(function(event) {
        event.preventDefault();
      });
    $('#submitbtn').click(function () {
        if (!checkemail() && !checkmobile() && !checkpass() && !checkcpass() && !checkdob()) {
            $("#message").html(`<div class="alert alert-warning">Please fill all required field</div>`);
        } else if (!checkemail() || !checkmobile() || !checkpass() || !checkcpass() || !checkdob()) {
            $("#message").html(`<div class="alert alert-warning">Please fill all required field</div>`);
        }
        else {
            $("#message").html("");
            const element = document.getElementById("register");
            const data = new FormData(element);
            const form = Array.from(data.entries());
            console.log("ok");
            $.ajax({
                type: 'POST',
                url:'./php/Register.php',
                data: {data1 : form},
                dataType: 'json',
                encode: true,
                success: function (data) {
                    $('#message').html(data);
                },
                complete: function () {
                    setTimeout(function () {
                        window.location = "http://localhost/TheEvent/login.html";
                    }, 5000);
                }
            })
        }
        
    });
});

function checkemail() {
    var pattern1 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $('#mail').val();
    var validemail = pattern1.test(email);
    if (email == "") {
        $('#mail_err').html('required field');
        return false;
    } else if (!validemail) {
        $('#mail_err').html('invalid email');
        return false;
    } else {
        $('#mail_err').html('');
        return true;
    }
}
function checkpass() {
    var pattern2 = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    var pass = $('#pass').val();
    var validpass = pattern2.test(pass);
    if (pass == "") {
        $('#pass_err').html('password can not be empty');
        return false;
    } else if (!validpass) {
        $('#pass_err').html('Minimum 5 and upto 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character:');
        return false;

    } else {
        $('#pass_err').html('');
        return true;
    }
}
function checkcpass() {
    var pass = $('#pass').val();
    var cpass = $('#cpass').val();
    if (cpass == "") {
        $('#cpass_err').html('confirm password cannot be empty');
        return false;
    } else if (pass !== cpass) {
        $('#cpass_err').html('confirm password did not match');
        return false;
    } else {
        $('#cpass_err').html('');
        return true;
    }
}



function password_show_hide() {
    console.log('ok');
    var x = document.getElementById("pass");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
        x.type = "text";
        show_eye.style.display = "none";
        hide_eye.style.display = "block";
    } else {
        x.type = "password";
        show_eye.style.display = "block";
        hide_eye.style.display = "none";
    }
}