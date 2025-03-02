# Project structure

## App
- `app`
  - The folder to hold the app routing logic, page templates and stylesheets.
- `app/layout.js` is responsible for:
    - Setting up the HTML structure for the website, including `<html>`, `<head>` and `<body>`.
    - Styling (through imported `globals.css`).
    - Setting default metadata (title and description) for SEO.
    - Fetching and using site-wide settings from Contentful.
    - Rendering common UI elements like the Header and the Footer.
    - Defining the area where page-specific content will be inserted ({children}).
- `app/page.js`
  - The front page template. Displays the page title and components. Doesn't have any dynamic sections, so the data is generated automatically.
- `app/[slug]/page.js`
  - Template for all the other pages where the routing is based on the slug. Because the slugs are dynamic (can be anything), they need to be fetched from Contentful before the build can run. This happens in the `generateStaticParams()` function, where we first get all the pages from Contentful, and then return all the page slugs.

## Components
Components hold all the components used to build the pages. On the Page content model in Contentful we specify a reference field which accepts content entries (Rich text and Image). Then in the page template we get the id's of these components, and retrieve each components' data. The component data is then displayed by passing the data to the Components component, which then picks the correct component to render.

- `components/RichText.js`
  - Uses [@contentful/rich-text-react-renderer](https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer) to render the richtext JSON from Contentful.
- `components/Image.js`
    - Uses [next/image](https://nextjs.org/docs/app/api-reference/components/image) to display images. Note: doesn't use any optimisation at the moment, such as srcsets. The optimisation flag is set in [next.config.mjs](next.config.mjs).
- `components/Navigation.js`
  - Navigation is built around Navigation content model, which accepts Pages as references. The specified Navigation entry is then fetched on the page, and the links created based on the data.

## Lib

Lib is where all the api functions reside, and where we connect to Contentful and fetch data using the GraphQL queries.

- `lib/contentful.js`
  - Connecting to Contentful using the `graphql-request` library and specifying `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN` in `.env`.
- `getPageBySlug.js` is where most of the magic happens. The function accepts a slug as input (a string), which then is used to make a graphql query. 

```js
const query = gql`
  query ($slug: String!) { // Specify the input variable
    pageCollection( // We're querying the pageCollection that has all the pages with the content type Page
      where: { slug: $slug }, limit: 1 ) { // Find just the pages with this slug, limit to 1 result
      items { // fetch the items, and the following properties
        sys { id }
        title
        description
        slug
        componentsCollection { // fetch the componentsCollection, and the following properties
          items {
            ...Image
            ...RichText
          } 
        }
      }
    }
  }
```
For better readability, the componentsCollection query is using fragments, which are like reusable parts of a query. Here were are only fetching the id's for the components to keep the query from being too complex.
```js
fragment Image on Image {
  sys { id }
}
```
