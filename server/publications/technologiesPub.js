Meteor.publish('technologies', function() {
  return Technologies.find();
});