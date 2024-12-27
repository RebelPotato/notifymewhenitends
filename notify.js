javascript:(function() {
  /* Check if browser supports notifications and request permission if needed */
  if (!("Notification" in window)) {
      alert("This browser does not support notifications");
      return;
  }
  
  if (Notification.permission !== "granted") {
      Notification.requestPermission();
  }
  
  /* Function to create and show notification when video completes */
  function notifyVideoComplete(videoElement) {
      const title = videoElement.getAttribute('title') || 
                   videoElement.getAttribute('alt') || 
                   'Video';
                   
      new Notification(`Video Completed`, {
          body: `"${title}" has finished playing`,
          icon: videoElement.poster || '',
          silent: false
      });
  }
  
  /* Find and set up listeners for all existing videos */
  const videos = document.getElementsByTagName('video');
  
  for (const video of videos) {
      /* Remove existing listeners to prevent duplicates */
      video.removeEventListener('ended', () => notifyVideoComplete(video));
      /* Add fresh listener */
      video.addEventListener('ended', () => notifyVideoComplete(video));
  }
  
  /* Set up observer to handle dynamically added videos */
  const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
              if (node.nodeName === 'VIDEO') {
                  node.addEventListener('ended', () => notifyVideoComplete(node));
              }
          });
      });
  });
  
  /* Start observing the document */
  observer.observe(document.body, {
      childList: true,
      subtree: true
  });
  
  alert(`Notification handlers added to ${videos.length} videos on this page`);
})();