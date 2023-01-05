const {I} = inject();
  
  export = {
    /**
     * Verifies element is visible before clicking it
     * @author Anabel Curry
     */
     verifyAndClick: async function (element) {
        await I.seeElement(element);
        await I.click(element);
     }

  };