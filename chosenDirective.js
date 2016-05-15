angular.module('MarkChosen', []).
directive('chosen', function() {
  return {
    link: chosenLinker,
    restrict: 'A',
    replace: false
  }

  function chosenLinker(scope, element, attribute) {
    var groupname = attribute.chosen;
    var parentname = attribute.namespace && typeof attribute.namespace == 'string' && attribute.namespace.length > 0 
                      ? '.' + attribute.namespace + ' ' : '';
    var query = parentname + '[chosen=' + groupname + ']';
    element.bind('click', function() {
      var elements = document.querySelectorAll(query);
      for (var i = 0; i < elements.length; i++) {
        var item = elements[i];
        item.classList.remove('chosen');
      }
      this.classList.add('chosen');
    })
  }
})
