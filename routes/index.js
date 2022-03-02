var express = require('express');
var router = express.Router();

var cssFiles = [ { path: "vendors/bootstrap/dist/css/bootstrap.min.css", integrity: "", crossorigin: "anonymous"},
                
                { path: "/stylesheets/style.css" } ];

var jsFiles = [ { path: "/vendors/jquery/dist/jquery.min.js", integrity: "", crossorigin: "anonymous"},
                { path: "vendors/bootstrap/dist/js/bootstrap.min.js", integrity: "", crossorigin: "anonymous"},
                { path: "//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"},
                { path: "https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js", integrity: "sha512-7x3zila4t2qNycrtZ31HO0NnJr8kg2VI67YLoRSyi9hGhRN66FHYWr7Axa9Y1J9tGYHVBPqIjSE1ogHrJTz51g==", crossorigin: "anonymous"},
                { path: "/javascripts/scripts.js" },
               // { path: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDclOTN6atlvU0tnuP95hhawR27bh2ZDv4&callback=initMap&v=weekly&libraries=places" },
                 ];
                               
/* GET home page. */
router.get('/', function(req, res, next) {
  try {
    res.render('index', { jsFiles: jsFiles, cssFiles: cssFiles });
  } catch ( e ) {
    console.log( e );
  }
});

module.exports = router;
