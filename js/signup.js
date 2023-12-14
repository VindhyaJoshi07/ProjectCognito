
$(document).ready(function () {
  /**
   * It will crate a user in userpool in Amazon Cognito
   */
  $("#createAccount").click(function () {
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var username = $("#username").val();
    var password = $("#password").val();
    var userAttribute = new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "email",
      Value: $("#email").val(),
    });

  
    userPool.signUp(username, password, [userAttribute], null, function (err, result) {
      if (err) {
        alert("Incorrect credentials or unconfirmed account, please try creating account with different email address");
      } else {
        alert("Successful!!!!!");
      }
    });
  });

  
});