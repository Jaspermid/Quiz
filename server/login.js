/**
 * Created by Jasper on 07/08/14.
 */
Meteor.startup(function () {


    // first, remove configuration entry in case service is already configured
    Accounts.loginServiceConfiguration.remove({
        service: "facebook"
    });
    Accounts.loginServiceConfiguration.insert({
        service: "facebook",
        appId: "676904182383819",
        secret: "5008937926c629c874149a197fd4bd1f"
    });



});
