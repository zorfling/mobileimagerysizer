var Density = window.Density = Ember.Application.create();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

Ember.Handlebars.helper('hdpi', function(value, options) {
    if (isNaN(value)) {
        return '';
    }

    return Math.ceil(value * 1.5);
});
Ember.Handlebars.helper('xhdpi', function(value, options) {
    if (isNaN(value)) {
        return '';
    }

    return Math.ceil(value * 2);
});
Ember.Handlebars.helper('xxhdpi', function(value, options) {
    if (isNaN(value)) {
        return '';
    }

    return Math.ceil(value * 3);
});
Ember.Handlebars.helper('xxxhdpi', function(value, options) {
    if (isNaN(value)) {
        return '';
    }

    return Math.ceil(value * 4);
});
