# Fursona Vouch Network

This repo will contain the core of what you will need in order to implement a mini vouching network on your website, so you can begin building out your own network of furs to promote!

## What is this for?

The Fursona Vouch Network is an extension of two schemas: [human.json]() and [fursona schema]().

### Human.json

[human.json's]() goal is to allow users to assert that they are, in fact, real people managing and creating their site content. Its vouching system allows you to create a network of other creators that you can personally vouch for as real people.

### Fursona Schema

[fursona schema]() is a schema designed for you to provide your fursonas' data into an easily parsible data structure. It's a simple method that allows someone to ping a user's site for their fursona information.

## How does it work?

1. Using [human.json](), you create a list of websites of friends you personally vouch for as real, actual people you want to support.
2. Using [fursona.schmea](), you can make your fursona's information publically available for others to view.
3. Combining both allows you to implement a system to pull your friends' fursona information and display it on your website, sharing your friends' websites with others automatically!

## Why use two schemas?

 I didn't want to create yet another system for vouching when one already existed, and I didn't want to create another system for sharing fursonas when that also existed. Instead of fracturing people further by creating another schema, I decided to utilize these to create the system I wanted!

## How do I use it?

1. Create your human.json file and add it to your `.well-known` folder

Example Human.json (pulled right from their example):

```json
{
  "version": "0.1.1",
  "url": "https://example.com/~alice",          // Your home page
  "vouches": [
    {
      "url": "https://bob.example.com",         // Website landing of the person you're vouching for
      "vouched_at": "2026-01-15"
    },
    {
      "url": "https://john.example.com",
      "vouched_at": "2026-01-15"
    },
    // Add as many as you wish to vouch
  ]
}
```

2. Create your fursona schema and add it to your `.well-known` folder. In this example we will be creating a `fursona.json` file. I'll use Deckard as the example.

```json
{
  "sonas": [
    {
      "name": "Deckard Holiday",
      "pronouns": "he/him",
      "gender": "male",
      "species": "Elk-Moose Hybrid",
      "description": "A chill, gentle and goofy Elk-Moose hybrid who enjoys reading, writing, and the outdoors.",

      "ref": "Direct image link to your ref sheet",
      "refAlt": "Reference sheet of Deckard, an elk-moose hybrid",
      "refAttribution": "Add artist/design/etc credits here",

      "avatar": "This is your profile image. The image you prefer people use when displaying your badge",
      "avatarAlt": "Alt text for that image",
      "avatarAttribution": "Add artist/design/etc credits here",

      "age": 33,
      "birthdate": "1990-01-01",

    // A list of the colors used in your character's design
      "colors": [
        "#A79D9A",
        "#807674",
        "#D7D0CE",
        "#665F5F",
        "#3A3535",
        "#4B5158",
        "#393C45",
        "#D9BDA6",
        "#AE815F",
        "#714B3A",
        "#CD7E73",
        "#7E5143",
        "#A45A50",
        "#88DDEB"
      ],

        // Add a few images for the gallery!
      "gallery": [
        {
          "image": "Image URL",
          "imageAlt": "alt text for the image",
          "imageAttribution": "Add artist/design/etc credits here",
          "description": ""
        }
      ]
    }
  ]
}
```

3. Make your `human.json` file accessible at `https://your_website.com/human.json`
4. Make your `fursona.json` file accessible at `https://your_website.com/fursona.json`

5. That's it! You're all set up.

## Ok I'm set up, now how do I display my friends?

View example.js to see a method you can use to fetch your vouchiees' data and display it on your page!