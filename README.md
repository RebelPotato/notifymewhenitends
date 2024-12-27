# Notify me when it ends

A [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) that notifies you when a video on the page ends.

Created in 10 minutes with Claude-3.5-sonnet.

## Usage

1. Save <a href='javascript:!function(){if(!("Notification"in window))return void alert("This browser does not support notifications");function e(e){const t=e.getAttribute("title")||e.getAttribute("alt")||"Video";new Notification("Video Completed",{body:`"${t}" has finished playing`,icon:e.poster||"",silent:!1})}"granted"!==Notification.permission&&Notification.requestPermission();const t=document.getElementsByTagName("video");for(const i of t)i.removeEventListener("ended",(()=>e(i))),i.addEventListener("ended",(()=>e(i)));new MutationObserver((t=>{t.forEach((t=>{t.addedNodes.forEach((t=>{"VIDEO"===t.nodeName&&t.addEventListener("ended",(()=>e(t)))}))}))})).observe(document.body,{childList:!0,subtree:!0}),alert(`Notification handlers added to ${t.length} videos on this page`)}();'></a> as a bookmark
  Alternatively, create a bookmark with the code in "notify.js" as the URL (!) and save it
2. Click it
3. Allow notifications

Enjoy!
