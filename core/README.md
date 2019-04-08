# RBE.core JS module

This module represents `core` entity within [resourcebasedeconomy.org](https://www.resourcebasedeconomy.org) website.
Current implementation of `core` entity is meant to be used globally over the website in order for other modules to have access to this general functions and variables. At this time, `core` is trying to deal with overall website layout.

This entity has no visual representation and is meant to be used as a 'helping utilities belt' to interconnect every other modules. Think of `underscore.js`, but for RBE needs.

## Usage

Needs to be inlcuded, having the highest priority over other modules. That means if you're including `.js` files into your page, every file that goes in `core` entity must be inlcuded first. In this case, order matters.

Example:
```
<script src="../core/RBE.utils.js"></script> <!-- Goes first -->
<script src="../core/RBE.<SomeOtherEntity>.js"></script>
<script src="../team/RBE.team.js"></script> <!-- Then goes everything else -->
<script src="../<SomeOtherEntity>/RBE.<SomeOtherEntity>.js"></script>
```
