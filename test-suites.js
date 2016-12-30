casper.test.begin('Testing Login on Backoffice', 4, function(test){
    casper.start('http://localhost:8080/MyApp');

    casper.then(function(){
    	test.assertUrlMatch(this.getCurrentUrl(),'http://localhost:8080/MyApp/login.jsp');
        test.assertTitle('Login', 'The Web Site has correct title');
    });

    casper.wait(1500, function(){
        this.sendKeys('input[name="j_username"]', 'user');
        this.sendKeys('input[name="j_password"]', 'userpwd');
    });

    casper.then(function(){
       this.click(".isubmit");
    });

    casper.wait(3000, function(){
        test.assertHttpStatus(200);
        test.assertTitle('Backoffice Page', 'The user is logged in');
    });

    casper.run(function(){
        test.done();
    })
});