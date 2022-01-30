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

When the user visits the home page they are greeted with a UI similar to the Sandals Website. When the user clicks on the latest video it takes them to a dynamically rendered page. This can be found in **pages>watch>[slug]**

I have created a **slugify** function which can be found in the **functions** directory. It takes the title retrieved from the API and slugifies it. That slug is then used to make a dynamic page with the slug in the url. This page renders the video along with details such as title, date, description etc just as the current sandals website operates.

### HLS Video

In order to render the video which is in HLS format I used a library called [React HLS Player](https://www.npmjs.com/package/react-hls-player). This can be seen in the dynamic page **pages>watch>[slug]**. The component comes with useful props that can set the height/width, autoplay and controls. In order to render an image before the user clicks play, you can set a propert called **poster** to an image. I used the hd image from the API as a poster for the video.

### Share Buttons

Under the video player I have added the ability to share the page to facebook or twitter using an npm package called [react-share](https://www.npmjs.com/package/react-share)

### Data Fetching

NextJS offers sevral ways to fetch data. I have used [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) which runs on server-side when the page is requested. Upon request, the data is fetched and the page is pre-rendered. Fetch is used in the function and then it returns the data which can be passed into the component as props.

Unfortunately there is no dedicated way to share data between pages. There is a work-around by passing data in query params of the [NextJS router](https://nextjs.org/docs/api-reference/next/router) but it then polutes the URL with the data. You can use an "as" property for the NextJS router which is a decorator that allows you to change what the URL says but then you cannot bookmark the URL. With bookmarking and sharing the video page being a high priority, making an API call for each page was implimented.
