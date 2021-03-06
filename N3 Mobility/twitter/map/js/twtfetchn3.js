/*********************************************************************
*  #### Twitter Post Fetcher v17.0.2 ####
*  Coded by Jason Mayes 2015. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here:
*  http://www.jasonmayes.com/projects/twitterApi/
*  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
*  Updates will be posted to this site.
*********************************************************************/
(function (root, factory) { if (typeof define === 'function' && define.amd) { define([], factory); } else if (typeof exports === 'object') { module.exports = factory(); } else { factory(); } }(this, function () {
    var domNode = ''; var maxTweets = 20; var parseLinks = true; var queue = []; var inProgress = false; var printTime = true; var printUser = true; var formatterFunction = null; var supportsClassName = true; var showRts = true; var customCallbackFunction = null; var showInteractionLinks = true; var showImages = false; var useEmoji = false; var targetBlank = true; var lang = 'en'; var permalinks = true; var dataOnly = false; var script = null; var scriptAdded = false; function handleTweets(tweets) {
        if (customCallbackFunction === null) {
            var x = tweets.length; var n = 0; var tidt = 't' + n; var element = document.getElementById(domNode); var html = '<ul class="noclass">'; while (n < x) { html += '<li>' + tweets[n] + '</li>'; tidt = 't' + n; n++;    }
            html += '</ul>'; element.innerHTML = html; setClicks();
        } else { customCallbackFunction(tweets); }
    }
    function strip(data) { return data.replace(/<b[^>]*>(.*?)<\/b>/gi, function (a, s) { return s; }).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi, ''); }
    function targetLinksToNewWindow(el) { var links = el.getElementsByTagName('a'); for (var i = links.length - 1; i >= 0; i--) { links[i].setAttribute('target', '_blank'); } }
    function getElementsByClassName(node, classname) {
        var a = []; var regex = new RegExp('(^| )' + classname + '( |$)'); var elems = node.getElementsByTagName('*'); for (var i = 0, j = elems.length; i < j; i++) { if (regex.test(elems[i].className)) { a.push(elems[i]); } }
        return a;
    }
    function extractImageUrl(image_data) { if (image_data !== undefined && image_data.innerHTML.indexOf('data-srcset') >= 0) { var data_src = image_data.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0]; return decodeURIComponent(data_src).split('"')[1]; } }
    var twitterFetcher = {
        fetch: function (config) {
            if (config.maxTweets === undefined) { config.maxTweets = 20; }
            if (config.enableLinks === undefined) { config.enableLinks = true; }
            if (config.showUser === undefined) { config.showUser = true; }
            if (config.showTime === undefined) { config.showTime = true; }
            if (config.dateFunction === undefined) { config.dateFunction = 'default'; }
            if (config.showRetweet === undefined) { config.showRetweet = true; }
            if (config.customCallback === undefined) { config.customCallback = null; }
            if (config.showInteraction === undefined) { config.showInteraction = true; }
            if (config.showImages === undefined) { config.showImages = false; }
            if (config.useEmoji === undefined) { config.useEmoji = false; }
            if (config.linksInNewWindow === undefined) { config.linksInNewWindow = true; }
            if (config.showPermalinks === undefined) { config.showPermalinks = true; }
            if (config.dataOnly === undefined) { config.dataOnly = false; }
            if (inProgress) { queue.push(config); } else {
                inProgress = true; domNode = config.domId; maxTweets = config.maxTweets; parseLinks = config.enableLinks; printUser = config.showUser; printTime = config.showTime; showRts = config.showRetweet; formatterFunction = config.dateFunction; customCallbackFunction = config.customCallback; showInteractionLinks = config.showInteraction; showImages = config.showImages; useEmoji = config.useEmoji; targetBlank = config.linksInNewWindow; permalinks = config.showPermalinks; dataOnly = config.dataOnly; var head = document.getElementsByTagName('head')[0]; if (script !== null) { head.removeChild(script); }
                script = document.createElement('script'); script.type = 'text/javascript'; if (config.list !== undefined) {
                script.src = 'https://syndication.twitter.com/timeline/list?' + 'callback=__twttrf.callback&dnt=false&list_slug=' +
                    config.list.listSlug + '&screen_name=' + config.list.screenName + '&suppress_response_codes=true&lang=' + (config.lang || lang) + '&rnd=' + Math.random();
                } else if (config.profile !== undefined) { script.src = 'https://syndication.twitter.com/timeline/profile?' + 'callback=__twttrf.callback&dnt=false' + '&screen_name=' + config.profile.screenName + '&suppress_response_codes=true&lang=' + (config.lang || lang) + '&rnd=' + Math.random(); } else if (config.likes !== undefined) { script.src = 'https://syndication.twitter.com/timeline/likes?' + 'callback=__twttrf.callback&dnt=false' + '&screen_name=' + config.likes.screenName + '&suppress_response_codes=true&lang=' + (config.lang || lang) + '&rnd=' + Math.random(); } else {
                script.src = 'https://cdn.syndication.twimg.com/widgets/timelines/' +
                    config.id + '?&lang=' + (config.lang || lang) + '&callback=__twttrf.callback&' + 'suppress_response_codes=true&rnd=' + Math.random();
                }
                head.appendChild(script);
            }
        }, callback: function (data) {
            if (data === undefined || data.body === undefined) {
                inProgress = false; if (queue.length > 0) { twitterFetcher.fetch(queue[0]); queue.splice(0, 1); }
                return;
            }
            if (!useEmoji) { data.body = data.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g, ''); }
            if (!showImages) { data.body = data.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g, ''); }
            if (!printUser) { data.body = data.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g, ''); }
            var div = document.createElement('div'); div.innerHTML = data.body; if (typeof (div.getElementsByClassName) === 'undefined') { supportsClassName = false; }
            function swapDataSrc(element) { var avatarImg = element.getElementsByTagName('img')[0]; avatarImg.src = avatarImg.getAttribute('data-src-2x'); return element; }
            var tweets = []; var authors = []; var times = []; var images = []; var rts = []; var tids = []; var permalinksURL = []; var x = 0; if (supportsClassName) {
                var tmp = div.getElementsByClassName('timeline-Tweet'); while (x < tmp.length) {
                    if (tmp[x].getElementsByClassName('timeline-Tweet-retweetCredit').length > 0) { rts.push(true); } else { rts.push(false); }
                    if (!rts[x] || rts[x] && showRts) {
                        tweets.push(tmp[x].getElementsByClassName('timeline-Tweet-text')[0]); tids.push(tmp[x].getAttribute('data-tweet-id')); if (printUser) { authors.push(swapDataSrc(tmp[x].getElementsByClassName('timeline-Tweet-author')[0])); }
                        times.push(tmp[x].getElementsByClassName('dt-updated')[0]); permalinksURL.push(tmp[x].getElementsByClassName('timeline-Tweet-timestamp')[0]); if (tmp[x].getElementsByClassName('timeline-Tweet-media')[0] !== undefined) { images.push(tmp[x].getElementsByClassName('timeline-Tweet-media')[0]); } else { images.push(undefined); }
                    }
                    x++;
                }
            } else {
                var tmp = getElementsByClassName(div, 'timeline-Tweet'); while (x < tmp.length) {
                    if (getElementsByClassName(tmp[x], 'timeline-Tweet-retweetCredit').length > 0) { rts.push(true); } else { rts.push(false); }
                    if (!rts[x] || rts[x] && showRts) {
                        tweets.push(getElementsByClassName(tmp[x], 'timeline-Tweet-text')[0]); tids.push(tmp[x].getAttribute('data-tweet-id')); if (printUser) { authors.push(swapDataSrc(getElementsByClassName(tmp[x], 'timeline-Tweet-author')[0])); }
                        times.push(getElementsByClassName(tmp[x], 'dt-updated')[0]); permalinksURL.push(getElementsByClassName(tmp[x], 'timeline-Tweet-timestamp')[0]); if (getElementsByClassName(tmp[x], 'timeline-Tweet-media')[0] !== undefined) { images.push(getElementsByClassName(tmp[x], 'timeline-Tweet-media')[0]); } else { images.push(undefined); }
                    }
                    x++;
                }
            }
            if (tweets.length > maxTweets) { tweets.splice(maxTweets, (tweets.length - maxTweets)); authors.splice(maxTweets, (authors.length - maxTweets)); times.splice(maxTweets, (times.length - maxTweets)); rts.splice(maxTweets, (rts.length - maxTweets)); images.splice(maxTweets, (images.length - maxTweets)); permalinksURL.splice(maxTweets, (permalinksURL.length - maxTweets)); }
            var arrayTweets = []; var x = tweets.length; var n = 0; if (dataOnly) { while (n < x) { arrayTweets.push({ tweet: tweets[n].innerHTML, author: authors[n] ? authors[n].innerHTML : 'Unknown Author', author_data: { profile_url: authors[n] ? authors[n].querySelector('[data-scribe="element:user_link"]').href : null, profile_image: authors[n] ? authors[n].querySelector('[data-scribe="element:avatar"]').getAttribute('data-src-1x') : null, profile_image_2x: authors[n] ? authors[n].querySelector('[data-scribe="element:avatar"]').getAttribute('data-src-2x') : null, screen_name: authors[n] ? authors[n].querySelector('[data-scribe="element:screen_name"]').title : null, name: authors[n] ? authors[n].querySelector('[data-scribe="element:name"]').title : null }, time: times[n].textContent, timestamp: times[n].getAttribute('datetime').replace('+0000', 'Z').replace(/([\+\-])(\d\d)(\d\d)/, '$1$2:$3'), image: extractImageUrl(images[n]), rt: rts[n], tid: tids[n], permalinkURL: (permalinksURL[n] === undefined) ? '' : permalinksURL[n].href }); n++; } } else {
                while (n < x) {
                    if (typeof (formatterFunction) !== 'string') { var datetimeText = times[n].getAttribute('datetime'); var newDate = new Date(times[n].getAttribute('datetime').replace(/-/g, '/').replace('T', ' ').split('+')[0]); var dateString = formatterFunction(newDate, datetimeText); times[n].setAttribute('aria-label', dateString); if (tweets[n].textContent) { if (supportsClassName) { times[n].textContent = dateString; } else { var h = document.createElement('p'); var t = document.createTextNode(dateString); h.appendChild(t); h.setAttribute('aria-label', dateString); times[n] = h; } } else { times[n].textContent = dateString; } }
                    var op = ''; if (parseLinks) {
                        if (targetBlank) { targetLinksToNewWindow(tweets[n]); if (printUser) { targetLinksToNewWindow(authors[n]); } }
                        if (printUser) { op += '<div class="user">' + strip(authors[n].innerHTML) + '</div>'; }
                        twtContent = strip(tweets[n].innerHTML); getRouteMarkers(twtContent);
                        op += '<p id="' + setLon +',' + setLat + '" class="tweet" onclick="getID(this.id)" >' + strip(tweets[n].innerHTML) + '</p>';  if (printTime) {
                            if (permalinks) { op += '<p class="timePosted"><a href="' + permalinksURL[n] + '">' + times[n].getAttribute('aria-label') + '</a></p>'; } else {
                                op += '<p class="timePosted">' +
                                    times[n].getAttribute('aria-label') + '</p>';
                                alert('op');
                            }
                        }
                    } else {
                        if (tweets[n].textContent) {
                            if (printUser) { op += '<p class="user">' + authors[n].textContent + '</p>'; }
                            twtContent = strip(tweets[n].innerHTML); getRouteMarkers(twtContent);
                            op += '<p id="' + setLon + ',' + setLat + '" class="tweet" onclick="getID(this.id)" >' + tweets[n].textContent + '</p>'; if (printTime) { op += '<p class="timePosted">' + times[n].textContent + '</p>'; }
                        } else {
                            if (printUser) { op += '<p class="user">' + authors[n].textContent + '</p>'; }
                            op += '<p name="txt2" class="tweet">' + tweets[n].textContent + '</p>'; if (printTime) { op += '<p class="timePosted">' + times[n].textContent + '</p>'; }
                        }
                    }
                    if (showInteractionLinks) {
                        op += '<p class="interact"><a href="https://twitter.com/intent/' + 'tweet?in_reply_to=' + tids[n] + '" class="Icon Icon--reply TweetAction-icon Icon--replyEdge"' +
                            (targetBlank ? ' target="_blank">' : '>') + '</a><a href="https://twitter.com/intent/retweet?' + 'tweet_id=' + tids[n] + '" class="Icon Icon--retweet TweetAction-icon Icon--retweetEdge"' +
                        (targetBlank ? ' target="_blank">' : '>') + '</a>' + '<a href="https://twitter.com/intent/favorite?tweet_id=' +
                            tids[n] + '" class="Icon Icon--heart TweetAction-icon Icon--heartEdge"' +
                        (targetBlank ? ' target="_blank">' : '>') + '</a></p>';
                    }
                    if (showImages && images[n] !== undefined && extractImageUrl(images[n]) !== undefined) { op += '<div class="media">' + '<img src="' + extractImageUrl(images[n]) + '" alt="Image from tweet" />' + '</div>'; }
                    if (showImages) { arrayTweets.push(op); } else if (!showImages && tweets[n].textContent.length) { arrayTweets.push(op); }
                    n++;
                }
            }
            handleTweets(arrayTweets); inProgress = false; if (queue.length > 0) { twitterFetcher.fetch(queue[0]); queue.splice(0, 1); }
        }
    }; window.__twttrf = twitterFetcher; window.twitterFetcher = twitterFetcher; return twitterFetcher; 
}));

// ###// ##### Advanced example #####
// An advance example to get latest 5 posts using hashtag #CrashUpdate and write to a
// HTML element with id "tweets2" without showing user details and using a
// custom format to display the date/time of the post, and does not show
// retweets.
var configCrashUpdate = {
    // "id": '345690956013633536',
    "id": '905548830090911747',
    "domId": 'tweetList',
    "maxTweets": 5,
    "enableLinks": false,
    "showUser": true,
    "showTime": true,
    "dateFunction": dateFormatter,
    "showRetweet": false
};

// For advanced example which allows you to customize how tweet time is
// formatted you simply define a function which takes a JavaScript date as a
// parameter and returns a string!
// See https://www.w3schools.com/jsref/jsref_obj_date.asp for properties
// of a Date object.
function dateFormatter(date) {
    return date.toDateString();
}

//twitterFetcher.fetch(config4);

var configN3TollRoute = {
    // "id": '345690956013633536', //@N3TollRoute
    "id": '905553129663602693',
    "domId": 'tweetList',
    "maxTweets": 5,
    "enableLinks": true,
    "showUser": true,
    "showTime": true,
    "dateFunction": dateFormatter,
    "showRetweet": false
};

// For advanced example which allows you to customize how tweet time is
// formatted you simply define a function which takes a JavaScript date as a
// parameter and returns a string!
// See https://www.w3schools.com/jsref/jsref_obj_date.asp for properties
// of a Date object.
function dateFormatter(date) {
    return date.toDateString();
}

var configCrash = {
    // "id": '345690956013633536', //@N3TollRoute
    "id": '906246494965170177', 
    "domId": 'tweetList',
    "maxTweets": 5,
    "enableLinks": true,
    "showUser": true,
    "showTime": true,
    "dateFunction": dateFormatter,
    "showRetweet": false
};

// For advanced example which allows you to customize how tweet time is
// formatted you simply define a function which takes a JavaScript date as a
// parameter and returns a string!
// See https://www.w3schools.com/jsref/jsref_obj_date.asp for properties
// of a Date object.
function dateFormatter(date) {
    return date.toDateString();
}

//twitterFetcher.fetch(configN3TollRoute);

//twitterFetcher.fetch(configCrashUpdate);
twitterFetcher.fetch(configCrash);

var txtTwtGet;
function setClicks() {
    $("p").click(function () {

       // var coords = id;
       // $(this.id).node.
       // console.log(coords);
        var txtTwt = $(this).text();
        
      //  document.getElementById("put").innerHTML = txt + 'lonLat' + coords;
       
        
    });
}
var getLonLat;

function getID(id) {
   // document.getElementById("put").innerHTML = id;
    getLonLat = id;
    var res = getLonLat.split(",");
    setLon = res[0];
    setLat = res[1];
    txtTwtGet = document.getElementById(getLonLat).innerText;
   // txtTwt = $(this).text();
   // alert(txtTwt);
    getDistance();
    addMarker2(txtTwtGet);
   // addMarkerCheck();
}
var TwtFeed = '';
function setTwtcode() {

    TwtFeed = document.getElementById("selectTwt").value;
    setTwtMarker();

    var setConfigs = {
        "id": TwtFeed, 
    "domId": 'tweetList',
     "maxTweets": 5,
      "enableLinks": true,
          "showUser": true,
           "showTime": true,
             "dateFunction": dateFormatter,
               "showRetweet": false
    };
    localStorage.setItem("myLastTwtfeed", TwtFeed);

    

    twitterFetcher.fetch(setConfigs);

}

function setTwtMarker() {

   // var twtCode = document.getElementById("selectTwt").value;
    //twtMarker = '../../img/pin/alert-sign1.png';

    switch (TwtFeed) {
        case '906246494965170177' :
            twtMarker = '../../img/pin/crash-sign1.png'; //Crash
            break;
        case '906247040409231360' :
            twtMarker = '../../img/pin/alert-sign2.png'; // Obstruction
            break;
        case '905548830090911747':
            twtMarker = '../../img/pin/crash-update1.png'; //crash update
            break;
        case '906239110473543680' :
            twtMarker = '../../img/pin/traffic-sign1.png'; // traffic voliume
            break;
        case '905553129663602693' :
            twtMarker = '../../img/pin/alert-sign1.png'; //n3 toll route
            break;
        case '906619620957749248':
            twtMarker = '../../img/pin/weather-sign1.png';
            break;
        case '906242695827513345' :
            twtMarker = '../../img/pin/test-sign1.png'; //pv crash
    }
};

//get position

function getDistance() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, errorGettingPosition);


    } else {
        // document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
        alert("Please enable your GPS on your device");
    }

    function showPosition(position) {

        mylat = position.coords.latitude;
        mylon = position.coords.longitude;
        // alert(mylat + mylon + "tracking onm");
        //  document.getElementById("gpsout").innerHTML = "Lat: " + mylat + "  Lon: " + mylon;
        // map.setCenter([mylon, mylat]);
        distCalc();
    }


    function errorGettingPosition(err) {
        return err;
        if (err.code == 1) {
            //alert("User denied geolocation.");
            // document.getElementById("gpsout").innerHTML += "Cannot detect GPS. Please enable your GPS location feature" + "<br><div onClick='gpsEnabled()' style=' background-color: #4b80ac; display:inline-block; padding: 5px;  border-radius: 50px; margin: 15px; border: solid 1px #fff;'>MY GPS IS NOW ENABLED</div><div onClick='gpsIgnore()' style=' background-color: #4b80ac; display:inline-block; padding: 5px;  border-radius: 50px; margin: 15px; border: solid 1px #fff;'>IGNORE GPS</div>";
        }
        else if (err.code == 2) {
            //alert("Position unavailable.");
            //  document.getElementById("gpsout").innerHTML += "<br>" + "Position unavailable";
        }
        else if (err.code == 3) {
            alert("Timeout expired.");
        }
        else {
            alert("ERROR:" + err.message);
            //  document.getElementById("gpsout").innerHTML = err.message;

        }
    };
    //end location get

}

//distance calculation

function distCalc() {
    resultcalc = 0;
    dist = 0;
    var lat1 = mylat;
    var lon1 = mylon;
     lat2 = setLat;
     lon2 = setLon;
    
    


    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var radlon1 = Math.PI * lon1 / 180;
    var radlon2 = Math.PI * lon2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
   // dist = dist * 1.609344
    dist = dist * 0.8684 
    //if (unit=="N") { dist = dist * 0.8684 }
    //return dist;
   // resultcalc = prox - dist;
   // resultcalc = dist;

    //dist calc end ////////////////////////
}

function iterateTweets() {


}