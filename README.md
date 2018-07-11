# Flickr Public Feed in React

Consume the Flickr public feed using React.

## Installation

Clone the repository into your directory of choice:

```sh
git clone https://github.com/alexmccabe/flickr-public-feed-react.git .
```

Then install the dependencies:

```sh
yarn install
```

```
npm install
```

## Running the application

```sh
yarn start
```

```sh
npm run start
```

## Building the application

```sh
yarn build
```

```sh
npm run build
```

## What does it do?

-   Consumes the latest images from the Flickr public feed and displays them, allowing you to view more details about one

-   Allows you to search the latest images by a given search term

-   Visit the Authors profile on Flickr

-   Visit tags on Flickr

-   View the image on Flickr

## What it doesn't do

-   Allow you to view historic images, sorry

-   View higher resolution images (a limitation of the public feed)

## What I would improve

-   I would use Redux to store data. Currently, there is a rather difficult and obscure method of getting the data. It's stored in the `Route` component. I do not like this. I did try the new `Context API` to clean it up, but this does not currently work with `react-router`.

-   Better error handling, it's rather crude currently

-   Implement the ability to view historic images (older than the default feed that Flickr provides)

-   The design is rather minimal and lacking flair

-   Higher quality images, if possible

-   Social sharing, there are some lovely images and I'd like people to see them
