# RBE modules

Each folder represents an active entity, that in some way related to the [resourcebasedeconomy.org](https://www.resourcebasedeconomy.org) website.
To get more information on each entity, read `README.md` file inside.

## Contributing

If you want to suggest some features, feel free to do a pull request. Please notice that in this modules the aim is to work with structure representation and not with JSON data (i.e. `positions` variable in `RBE.team.js` file). Do not suggest new entries to the existing dynamic data. Instead, try to suggest some additions to the overall structure and data representation.

## Misc.

* When working with files in Atom IDE, it is recommended to install [symbols-list](https://github.com/7ute/symbols-list) package for better navigation within files structure.

* You can use [stackedit.io](https://stackedit.io) while working with `.md` files - it has live preview, so you won't mess with markup.

* When working with entities structure, you can rely on schemes. For general schemes see [schema.org](https://schema.org/docs/schemas.html) types, for JSON ones visit [json-schema.org](https://json-schema.org/).

## TODO

1. Proper markup for website is needed in order to be able to create hooks on elements (i.e. for reactive data change)
2. Bare minimum tags can be left on original text (this is needed for translation). I.e. linked elements can simply be left as `Hey, <a>I am some link</a>`, and in related links array we can wrap up this element, based on its auto-index.
