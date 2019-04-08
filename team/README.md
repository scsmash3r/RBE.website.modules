# RBE.team JS module

This module represents `team` entity within [resourcebasedeconomy.org](https://www.resourcebasedeconomy.org) website.
Current implementation of `team` entity is meant to be used in representation of "Meet the Team" section.

## Usage

After `.css` and `.js` being added, simply use `data-attr` on element:

```
<div data-js-module="RBE.team"></div>
```

## Data debug

When in Chrome Dev Console, type `RBE.team` and hit enter to see the current `team` entity structure and functions.
Initial version has 3 functions to work with:

* `init()` - function that runs the whole process of building and rendering "Meet the Team" section
* `positions` - a key/value array, where `key` is a shortcut abbreviation of position and `value` is a member's position in a human-readable formar
* `members` - a key/value array, holding all the data to nicely represent a `member` on a website in human-readable format
