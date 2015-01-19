/**
 * Created by Jasper on 07/08/14.
 */
Meteor.methods({
    currentUser: function () {

        return Meteor.user().username || Meteor.user().profile.name
    }
})