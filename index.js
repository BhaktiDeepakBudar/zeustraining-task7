var app = new Vue({
    el: '#pwd',
    methods: {
        show: function () {
            var p = document.getElementById("password");
            if(p.type === "password")
            {
                p.type = "text";
            }
            else
            {
                p.type = "password";
            }
        }
    }
})

var app1 = new Vue({
    el: '#login',
    methods: {
        radio: function () {
            var checkRadio = document.querySelector('input[name="school"]:checked');
            if (checkRadio == null)
            {
                alert("Please select one radio button");
                return false;
            }
            return true;
        },
        state: function () {
            var select = document.getElementById('state-name');
            var checkState = select.options[select.selectedIndex].value;
            if(checkState == "none")
            {
                alert("Please select your state");
                return false;
            }
            return true;
        },
        district: function () {
            var select = document.getElementById('district-name');
            var checkDistrict = select.options[select.selectedIndex].value;
            if(checkDistrict == "none")
            {
                alert("Please select your district");
                return false;
            }
            return true;
        },
        username: function () {
            var checkUsername = document.getElementById("username").value;
            if(checkUsername == "")
            {
                alert("Please enter username");
                return false;
            }
            return true;
        },
        password: function () {
            var checkPassword = document.getElementById("password").value;
            if(checkPassword == "")
            {
                alert("Please enter password");
                return false;
            }
            if(checkPassword.length < 8) {  
                alert("Password length must be atleast 8 characters");  
                return false;  
            }
            if(checkPassword.length > 15) {  
                alert("Password length must not exceed 15 characters");  
                return false;  
            }
            return true;
        },
        login: function () {
            if(this.radio() && this.state() && this.district() && this.username() && this.password())
            {
                alert("Login successful");
                document.getElementById("district").checked = false;
                document.getElementById("independent").checked = false;
                document.getElementById("state-name").value = 'none';
                document.getElementById("district-name").value = 'none';
                document.getElementById("username").value = '';
                document.getElementById("password").value = '';
                document.getElementById("remember").checked = false;
            }
        }
    }
})