// ==UserScript==
// @name        CCTV13-Pro
// @namespace   Violentmonkey Scripts
// @match       https://tv.cctv.com/live/cctv13/
// @require     https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js
// @version     1.2
// @author      ZSZX
// @description 2022/3/12 15:36:33
// ==/UserScript==

(function() {
    'use strict';

    $(()=>{
        console.log("引入完成-jquery运作");
        setTimeout(() => {
            $("#player_fullscreen_player")[0].click();
        },3000);
    })
})();