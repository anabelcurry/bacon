const { I } = inject();

export = {
    //landing page
    inputSearchBar: '//input[@aria-label="Search"]',
    btnGoogleSearch: '//input[@aria-label="Google Search"]',

    //results page
    informationSummarySideBar: '//div[@role="complementary"]',
    firstResult: '(//div[@data-header-feature="0"])[1]',
    firstResultUrl: '(//div[@data-header-feature="0"]/div/a)[1]',
};