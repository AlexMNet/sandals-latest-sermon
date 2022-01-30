# Project Documentation

### Routing

In NextJS routing is file based. Pages for this website are located in the **pages** directory. In the pages directory the **index.js** is the home page of the site.

**\_app.js** is used to initialize pages and **\_document.js** is used to make changes to the HTML and Body tags.

When the user visits the home page they are greeted with a UI similar to the Sandals Website. When the user clicks on the latest video it takes them to a dynamically rendered page. This can be found in **pages>watch>[slug]**

I have created a **slugify** function which can be found in the **functions** directory. It takes the title retrieved from the API and slugifies it. That slug is then used to make a dynamic page with the slug in the url. This page renders the video along with details such as title, date, description etc just as the current sandals website operates.

### HLS Video

In order to render the video which is in HLS format I used a library called [React HLS Player](https://www.npmjs.com/package/react-hls-player). This can be seen in the dynamic page **pages>watch>[slug]**. The component comes with useful props that can set the height/width, autoplay and controls. In order to render an image before the user clicks play, you can set a propert called **poster** to an image. I used the hd image from the API as a poster for the video.

### Share Buttons

Under the video player I have added the ability to share the page to facebook or twitter using an npm package called [react-share](https://www.npmjs.com/package/react-share)
