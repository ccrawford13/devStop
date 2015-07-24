Meteor.startup(function() {
  if (Technologies.find().count() === 0) {

    var technologies = [{
      'name': 'Angular',
      'language': 'Javascript',
      'classification': 'MVC Framework'
    }, {
      'name': 'Meteor',
      'language': 'Javascript',
      'classification': 'Full-Stack MVC'
    }, {
      'name': 'Ruby on Rails',
      'language': 'Ruby',
      'classification': 'Full-Stack MVC'
    }, {
      'name': 'Javascript',
      'language': 'Javascript',
      'classification': 'Language'
    }, {
      'name': 'PHP',
      'language': 'PHP',
      'classification': 'Full-Stack MVC'
    }, {
      'name': 'jQuery',
      'language': 'Javascript',
      'classification': 'DOM Manipulation Library'
    }];

    for (var i = 0; i < technologies.length; i++) {
      Technologies.insert(technologies[i]);
    }
  }
});