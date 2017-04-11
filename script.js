// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here
    //capture images into variables
    //functions for wrap
    var wrap = document.getElementById("wrap");
    var wrapTip = document.getElementById('wrapTip');
    var tipTimer;

    wrap.addEventListener('mouseover', function() {
        console.log('mouseover on wrap');
        wrap.src = "images/wrapHover.png";
    });

    wrap.addEventListener('mouseout', function() {
        console.log('mouseout on wrap');
        clearTimeout(tipTimer);
        wrapTip.style.opacity = 0;
        wrap.src = "images/wrap.png";
    });

    wrap.addEventListener('click', function() {
        console.log('click on wrap');
        wrap.src = "images/wrapClick.png";
    });

    wrap.addEventListener('dblclick', function() {
        console.log('double click on wrap');
        tipTimer = setTimeout(showWrapTip, 100);
    });

    function showWrapTip() {
        console.log('showing msg');
        wrapTip.style.opacity = .95;
        wrapTip.style.transition = 'all .5s';
    }

    //functions for french
    var french = document.getElementById("french");

    french.addEventListener('mouseover', function() {
        console.log('mouseover on french');
        french.src = "images/frenchHover.png";
    });

    french.addEventListener('mouseout', function() {
        console.log('mouseout on french');
        clearTimeout(tipTimer);
        frenchTip.style.opacity = 0;
        french.src = "images/french.png";
    });

    french.addEventListener('click', function() {
        console.log('click on french');
        french.src = "images/frenchClick.png";
    });

    french.addEventListener('dblclick', function() {
        console.log('double click on french');
        tipTimer = setTimeout(showFrenchTip, 100);
    });

    function showFrenchTip() {
        console.log('showing msg');
        frenchTip.style.opacity = .95;
        frenchTip.style.transition = 'all .5s';
    }

    //function for electic
    var electic = document.getElementById("electic");

    electic.addEventListener('mouseover', function() {
        console.log('mouseover on electic');
        electic.src = "images/electicHover.png";
    });

    electic.addEventListener('mouseout', function() {
        console.log('mouseout on electic');
        clearTimeout(tipTimer);
        electicTip.style.opacity = 0;
        electic.src = "images/electic.png";
    });

    electic.addEventListener('click', function() {
        console.log('click on electic');
        electic.src = "images/electicClick.png";
    });

    electic.addEventListener('dblclick', function() {
        console.log('double click on electic');
        tipTimer = setTimeout(showElecticTip, 100);
    });

    function showElecticTip() {
        console.log('showing msg');
        electicTip.style.opacity = .95;
        electicTip.style.transition = 'all .5s';
    }

});
