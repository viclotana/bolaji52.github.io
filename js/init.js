(function($){
    $(function(){
      
      var elem = document.querySelector('.collapsible.expandable');
      var instance = M.Collapsible.init(elem, {
      accordion: false
      });

      $('.sidenav').sidenav();
      $('.slider').slider();
  
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space
  