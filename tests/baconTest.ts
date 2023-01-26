import googlePage from "../pages/googlePage";
import wikipediaPage from "../pages/wikipediaPage";
import generalSteps from "../steps/generalSteps";

Feature('Google Search');

Scenario('Verify bacon search side panel details', async ({ I }) => {
    await I.amOnPage('/');

    // Search for "bacon"
    await generalSteps.searchGoogle('bacon');

    // Verify information summary sideBar, expand if more btn present and then expand energy summary
    await I.seeElement(googlePage.summarySideBar);
    await generalSteps.clickSideBarMoreBtnIfPresent();
    await generalSteps.verifyAndClick(googlePage.btnSummarySideBarEnergyAmount);

    // Verify default bacon type has correct serving size and calorie value
    const defaultBaconType = await I.grabTextFrom(googlePage.defaultBaconType);
    await I.assertEqual(defaultBaconType, "Bacon, pan-fried");
    const panFriedServingSize = await I.grabTextFrom(googlePage.servingSize);
    await I.assertEqual(panFriedServingSize, "1 slice cooked (8 g)");
    const panFriedCalories = await I.grabTextFrom(googlePage.calories);
    await I.assertEqual(panFriedCalories, 43);

    // Verify updating bacon type updates serving size and calories
    await I.click(googlePage.dropdownBaconType);
    await I.selectOption(googlePage.dropdownBaconType, 'Canadian bacon, unheated');
    const canadianServingSize = await I.grabTextFrom(googlePage.servingSize);
    await I.assertEqual(canadianServingSize, "2 slices (6 per 6-oz pkg.) (57 g)");
    const canadianCalories = await I.grabTextFrom(googlePage.calories);
    await I.assertEqual(canadianCalories, 89);

    // Verify first result is wikipedia page for bacon the food and not for Sir Francis Bacon
    await I.seeElement(googlePage.firstResultTitle);
    const firstResultTitle = await I.grabTextFrom(googlePage.firstResultTitle);
    await I.assertEqual(firstResultTitle, "Bacon - Wikipedia");
    await I.assertNotEqual(firstResultTitle, "Francis Bacon - Wikipedia")
    const firstResultURL = await I.grabAttributeFrom(googlePage.firstResultUrl, 'href');
    await I.assertEqual(firstResultURL, "https://en.wikipedia.org/wiki/Bacon");

    // Visit first result URL and verify wikipedia page is for bacon the food
    await generalSteps.verifyAndClick(googlePage.firstResultUrl);
    await I.seeInCurrentUrl('wikipedia');
    await I.seeInCurrentUrl('/Bacon');
    const articleTitle = await I.grabTextFrom(wikipediaPage.articleTitle);
    await I.assertEqual(articleTitle, "Bacon");
    await I.seeElement(wikipediaPage.baconArticleSubjectClarification);
}).tag('@sidePanel');

Scenario('Verify first bacon search result is wikipedia and visit link', async ({ I }) => {
    await I.amOnPage('/');

    // Search for "bacon"
    await generalSteps.searchGoogle('bacon');

    // Verify first result is wikipedia page for bacon the food and not for Sir Francis Bacon
    await I.seeElement(googlePage.firstResultTitle);
    const firstResultTitle = await I.grabTextFrom(googlePage.firstResultTitle);
    await I.assertEqual(firstResultTitle, "Bacon - Wikipedia");
    await I.assertNotEqual(firstResultTitle, "Francis Bacon - Wikipedia")
    const firstResultURL = await I.grabAttributeFrom(googlePage.firstResultUrl, 'href');
    await I.assertEqual(firstResultURL, "https://en.wikipedia.org/wiki/Bacon");

    // Visit first result URL and verify wikipedia page is for bacon the food
    await generalSteps.verifyAndClick(googlePage.firstResultUrl);
    await I.seeInCurrentUrl('wikipedia');
    await I.seeInCurrentUrl('/Bacon');
    const articleTitle = await I.grabTextFrom(wikipediaPage.articleTitle);
    await I.assertEqual(articleTitle, "Bacon");
    await I.seeElement(wikipediaPage.baconArticleSubjectClarification);
}).tag('@wikipedia');
