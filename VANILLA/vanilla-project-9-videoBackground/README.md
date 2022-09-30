# Video Background

This project goal is to have a video playing on the background, this project will have a pre-loader funcionality, given that videos are large assets that require time to load,  and a button that pauses the video background as well as a background overlay.

### Basic Steps

> - `HTML` Layout the Video container with the <video> tag and nest its source into a <source> tag, the video tag needs to `muted` `autoplay` `loop` attributes, the `controls` attribute is not used.
> 
> - `CSS` The background overlay is usually set on the video container parent with an `:after` selector that occupies its whole width and uses `rgba(0,0,0,0.7)` to apply the transparent filter
> 
> - `HTML` Add a switch button that uses a class to toggle its position from left to right.
> 
> - `JS` Add an event listener to the toggle button, use `if->else` instead of `element.toggle` since there has to be a condition to stop the video or play the video whenever the toggle class is applied.
> 
> - `JS` Attach an event listener to the window and use the `load` event,  do not use `DOMContentLoaded` as it doesn't consider the images, and media being downloaded whereas `load` considers these elements, use the Network Tab to simulate low connection speed.

### Functions

```js
document.querySelector()
// Get Data when page loads
element.classlist.contains()
element.classlist.add()
element.classlist.remove()
videoContainer.play()
videoContainer.pause()
window.addEventListener("load", hidePreloader)
```

#### Simulate Low Connection Speed

Use the developer options, Regular 2G to simulate slow bandwith, hence delaying the download of resources and visualizing the preloader

<img src="file:///C:/Users/wbennett/AppData/Roaming/marktext/images/2022-09-30-14-40-21-image.png" title="" alt="" width="607">
