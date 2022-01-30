# Sandals Church - Latest Sermon

A simple web page that fetches the lastest sermon from the Sandals API and displays it.

## Tech

- React
- NextJS
- TailwindCSS

# Project Documentation

### Routing

In NextJS routing is file based. Pages for this website are located in the **pages** directory. In the pages directory the **index.js** is the home page of the site.

**\_app.js** is used to initialize pages and **\_document.js** is used to make changes to the HTML and Body tags.

When the user visits the home page they are greeted with a UI similar to the Sandals Website. When the user clicks on the latest video it takes them to a dynamically rendered page. This can be found in **pages>watch>[slug]** The page url is dynamically generated using a slug created with the video title.

I have created a **slugify** function which can be found in the **functions** directory. It takes the title retrieved from the API and slugifies it. This page renders the video along with details such as title, date, description, length etc just as the current sandals website operates.

### HLS Video

In order to render the video which is in HLS format I used a library called [React HLS Player](https://www.npmjs.com/package/react-hls-player). This can be seen in the dynamic page **pages>watch>[slug]**. The component comes with useful props that can set the height/width, autoplay and controls. In order to render an image before the user clicks play, you can set a property called **poster** to an image url. I used the hd image from the API as a poster for the video.

### Share Buttons

Under the video player I have added the ability to share the page to facebook or twitter using an npm package called [react-share](https://www.npmjs.com/package/react-share)

### Data Fetching

NextJS offers sevral ways to fetch data. I have used [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) which is used on the page level and runs on server-side when the page is requested. Upon request, the data is fetched and the page is pre-rendered. Fetch is used in the function and then it returns the data which can be passed into the component as props.

The dynamically rendered pages can be bookmared and shared.

### Data Directory

This folder contains files for navbar links and service times. This enables me to clean up some of the HTML by storing the information there and then iterating over the data to render the HTML.

### TailwindCSS

Some love it, others hate it! It can make your HTML look a little crazy and there are ways to mitigate that but its a great tool to put together a website rather quickly. If this project was meant for production and I still wanted to use TailwindCSS I would create custom classes to help clean up the css classes in HTML dramatically. My next choice would be styled components.
