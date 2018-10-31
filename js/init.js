(function($){
    $(function(){
      
      var elem = document.querySelector('.collapsible.expandable');
      var instance = M.Collapsible.init(elem, {
      accordion: false
      });

      $(".dropdown-trigger").dropdown(
        {hover: true}
      );
      $('.sidenav').sidenav();
      $('.slider').slider();
      $('select').formSelect();
  
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space
  
