const { I } = inject();

export = {
    /* Landing page */

    inputSearchBar: '//input[@aria-label="Search"]',
    btnGoogleSearch: '//input[@aria-label="Google Search"]',

    /* Results page */

    // summary side bar
    summarySideBar: '//div[@role="complementary"]',
    btnSummarySideBarMore: '//span[text()="More"]',
    btnSummarySideBarEnergyAmount: '//span[text()="Energy Amount"]',
    dropdownBaconType: '//span[text()="Energy Amount"]/../../../following-sibling::div/div/div/div/div/div/div/div/div/div/div/select[@title="Bacon, pan-fried"]',
    defaultBaconType: '//div[@data-attrid="lab/title/Energy Amount"]/../../../div[2]/div/div/div/div/div/div/div/div/div/div/select/option[@selected="selected"]',
    servingSize: '//span[text()="Energy Amount"]/../../../following-sibling::div//span[text()="Amount Per"]/../span/following-sibling::span',
    calories: '//span[text()="Energy Amount"]/../../../following-sibling::div//span[text()="Calories"]//following-sibling::span',

    //results
    firstResultTitle: '(//div[@data-header-feature="0"])[1]/div/a/h3',
    firstResultUrl: '(//div[@data-header-feature="0"]/div/a)[1]',
};