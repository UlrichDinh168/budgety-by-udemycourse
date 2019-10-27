//modules are to keep pieces of codes that related to one another together,
//inside of one separated, independent and organized unit.
//Each modules are private

let budgetController = (() => {
    //create function constructor for Expense and Income
    let Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    let data = {
        allItems: {
            expense: [],
            income: []
        },
        totals: {
            expense: 0,
            income: 0
        }
    };

})();

let UIController = (() => {
    
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getIput: () => {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstrings: () => {
            return DOMstrings;
        }
    }
})(); 

let controller = ((budgetCtrl, UICtrl) => {
    
    var setupEventListener = () => {
        let DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', (e) => {
        if(e.keyCode === 13 || e.which === 13){
            ctrlAddItem();
        }
    })
    }

    let ctrlAddItem = () => {
        //Get the filled input data
        let input = UICtrl.getIput();
        //Add the item to the budget controller
        //Add the item to the UI
        //Calculate the budget
        //Display the budget on the UI
    }

    return {
        init: () => {
            console.log('App has started');
            setupEventListener();
        }
    }
})(budgetController, UIController);

controller.init();