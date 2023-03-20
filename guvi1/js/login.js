$(document).ready(function () {
    $('#mail').on('input', function () {
        checkemail();
    });
    $('#pass').on('input', function () {
        checkpass();
    });
    $('#login').submit(function(event) {
        event.preventDefault();
      });
    $('#submitbtn').click(function () {
        if (!checkemail() && !checkpass()) {
            $("#message").html(`<div class="alert alert-warning">Please fill all required field</div>`);
        } else if (!checkemail() || !checkpass()) {
            $("#message").html(`<div class="alert alert-warning">Please fill all required field</div>`);
        }
        else {
            $("#message").html("");
            const element = document.getElementById("login");
            const data = new FormData(element);
            const form = Array.from(data.entries());
            $.ajax({
                type: 'POST',
                url:'./php/Login.php',
                data: {data1 : form},   
                dataType: 'json',
                encode: true,
                success: function (data) {
                    $('#message').html(data);
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
        $('#pass').html('password can not be empty');
        return false;
    } else if (!validpass) {
        $('#pass_err').html('Minimum 5 and upto 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character:');
        return false;

    } else {
        $('#pass_err').html('');
        return true;
    }
}