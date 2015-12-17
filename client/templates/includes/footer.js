Template.footer.helpers({
  errors: function() {
    return Footer.find();
  }
});

Template.footer.rendered = function() {
  var footer = this.data;
  Meteor.setTimeout(function () {
    Footer.remove(footer._id);
  }, 3000);
};
