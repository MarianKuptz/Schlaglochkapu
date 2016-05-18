/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers
 */
 function register_event_handlers()
 {



        /* graphic button  #btnFoto */
    $(document).on("click", "#btnFoto", function(evt)
    {
        alert("test");
    });

    }

 document.addEventListener("app.Ready", register_event_handlers, false);
})();
