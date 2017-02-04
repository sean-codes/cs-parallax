test = function(){
    var div = document.body;
    var scrollers = document.getElementsByClassName('scroller');
    div.onscroll = function() {
        checkScrollers();
    }
    console.log('Detected Scrollers: ' + scrollers);
    checkScrollers = function() {
        var y = 0;
        for (var i = 0; i < scrollers.length; i++) {
            y += scrollers[i].offsetHeight;
            bg = scrollers[i].getElementsByClassName('parallax')[0];
            console.log(i + 1);
            if (scrollers[i + 1])
                bg2 = scrollers[i + 1].getElementsByClassName('parallax')[0];
            if (div.scrollTop < y)
                break;
        }
        var percent = Math.floor((1 - (y - div.scrollTop) / scrollers[i].offsetHeight) * 100);
        console.log('Percent of scroller: ' + i + ' - ' + percent);

        bg.style.transform = 'translateY(-' + percent*2 + 'px)';
        bg.style.marginBottom = -percent*2 + 'px';

        if (bg2) {
            bg2.style.transform = 'translateY(0)';
            bg2.style.marginBottom = '0px';
        }
    }
}
