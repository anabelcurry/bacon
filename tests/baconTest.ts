import { assert } from "console";
import googleLandingPage from "../pages/googleLandingPage";
import wikipediaPage from "../pages/wikipediaPage";
import generalSteps from "../steps/generalSteps";

Feature('search');

Scenario('Search bacon', async ({ I }) => {
    await I.amOnPage('/');

    // Search for "bacon"
    await generalSteps.verifyAndClick(googleLandingPage.inputSearchBar);
    await I.fillField(googleLandingPage.inputSearchBar, 'bacon');
    await generalSteps.verifyAndClick(googleLandingPage.btnGoogleSearch);

    // Verify information summary sideBar
    await I.seeElement(googleLandingPage.summarySideBar);
    await generalSteps.verifyAndClick(googleLandingPage.btnSummarySideBarMore);
    await generalSteps.verifyAndClick(googleLandingPage.btnSummarySideBarEnergyAmount);

    // Verify default bacon type has correct serving size and calorie value
    const defaultBaconType = await I.grabTextFrom(googleLandingPage.defaultBaconType);
    await I.assertEqual(defaultBaconType, "Bacon, pan-fried");
    const panFriedServingSize = await I.grabTextFrom(googleLandingPage.servingSize);
    await I.assertEqual(panFriedServingSize, "1 slice cooked (8 g)");
    const panFriedCalories = await I.grabTextFrom(googleLandingPage.calories);
    await I.assertEqual(panFriedCalories, 43);

    // Verify updating bacon type updates serving size and calories
    await I.click(googleLandingPage.dropdownBaconType);
    pause();
    await generalSteps.verifyAndClick(googleLandingPage.canadianBaconType);
    const canadianServingSize = await I.grabTextFrom(googleLandingPage.servingSize);
    await I.assertEqual(canadianServingSize, "2 slices (6 per 6-oz pkg.) (57 g)");
    const canadianCalories = await I.grabTextFrom(googleLandingPage.calories);
    await I.assertEqual(canadianCalories, 89);

    // Verify first result is wikipedia page for bacon
    await generalSteps.verifyAndClick(googleLandingPage.firstResultUrl);
    await I.seeInCurrentUrl('wikipedia');
    await I.seeInCurrentUrl('/Bacon');

    // Verify wikipedia page is for bacon the food
    const articleTitle = await I.grabTextFrom(wikipediaPage.articleTitle);
    await I.assertEqual(articleTitle, "Bacon");
    await I.seeElement(wikipediaPage.baconArticleSubjectClarification);
});
