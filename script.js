
document.addEventListener('DOMContentLoaded', function() {
    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true
    });
});



new fullpage('#fullpage', {
    anchors:['firstPage', 'fall', 'winter', 'spring', 'summer']
});