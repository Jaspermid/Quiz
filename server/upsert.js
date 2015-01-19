/**
 * Created by Jasper on 18/06/14.
 */
Meteor.methods({
    scoreUpsert: function( id, doc ){
        Score.upsert( id, doc );
    }
});