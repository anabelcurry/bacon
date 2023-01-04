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
    await I.seeElement(googleLandingPage.informationSummarySideBar);


    // Verify first result is /wikipedia
    await generalSteps.verifyAndClick(googleLandingPage.firstResultUrl);
    await I.seeInCurrentUrl('wikipedia');
    await I.seeInCurrentUrl('/Bacon');

    // Verify wikipedia page is for bacon the food
    const articleTitle = await I.grabTextFrom(wikipediaPage.articleTitle);
    await I.assertEqual(articleTitle, "Bacon");
    await I.seeElement(wikipediaPage.baconArticleSubjectClarification);
});
