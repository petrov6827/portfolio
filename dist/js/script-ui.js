$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 4000,
        values: [ 0, 3000 ],
        slide: function( event, ui ) {
        $( "#amount" ).val( "ОТ " + ui.values[ 0 ] + " ДО " + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "ОТ " + $( "#slider-range" ).slider( "values", 0 ) + " ДО " + $( "#slider-range" ).slider( "values", 1 ) );
} );