# Bacon Google Search Test Assignment

This repository contains a test for searching 'bacon' on google.com and verify UI interactions.

Assignment: In a language of your choice, please automate the following use cases.

- Perform a Google search for the word “bacon” and validate that the first result is a Wikipedia page for bacon, the food.
- Validate that the first result of a Google search for bacon is not for Sir Francis Bacon.
- On a Google search results page for bacon (on a desktop browser), verify the presence of an information summary right rail module about bacon, and verify that the right rail summary includes an “Energy Amount” section.
- Expand the “Energy Amount” section and verify that the default bacon type shown is “Bacon, pan-fried”, the default serving size is “1 slice cooked”, and the calorie value is 43.
- Verify that changing the type of bacon to “Canaditn bacon, unheated” and the serving size to 1 6 ounce package updates the Calorie value shown to 267.

## Installing and Running Tests

### Getting Started

Run `git clone https://github.com/anabelocurry/bacon.git && cd bacon && npm install`
This will clone the repository, download codeceptjs, navigate your terminal to the new repository folder and install node package manager locally

### Running Tests Locally

The default helper for this repo is playwright.

Use codecept.conf.js to run tests with Playwright:

#### Examples

Run _everything_:

`npx codeceptjs run`

Run _everything_ in paralell:

`npx codeceptjs run-workers 3`

Run everthing with debug logging:

`npx codeceptjs run --debug`

Run everything with verbose logging:

`npx codeceptjs run --verbose`

## Credits

Created as a 4 hour timeboxed test. By Anabel Curry.
