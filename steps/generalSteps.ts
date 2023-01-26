import googlePage from "../pages/googlePage";

const {I} = inject();
  
  export = {
    /**
     * Verifies element is visible before clicking it
     * @param element
     * @author Anabel Curry
     */
     verifyAndClick: async function (element) {
        await I.seeElement(element);
        await I.click(element);
     },
     /**
      * 
      * @param searchTerm 
      */
      searchGoogle: async function (searchTerm) {
         await this.verifyAndClick(googlePage.inputSearchBar);
         await I.fillField(googlePage.inputSearchBar, searchTerm);
         await this.verifyAndClick(googlePage.btnGoogleSearch);
     },
     /**
      * Verifies if google side bar more button is present and if it is, clicks to expand side bar
      * @author Anabel Curry
      */
     clickSideBarMoreBtnIfPresent: async function () {
      const btnSideBarMoreCount = await I.grabNumberOfVisibleElements(
         googlePage.btnSummarySideBarMore
      );
      
      if (btnSideBarMoreCount > 0 ) {
         await this.verifyAndClick(googlePage.btnSummarySideBarMore)
      } else {
         return;
      }
     }
  };