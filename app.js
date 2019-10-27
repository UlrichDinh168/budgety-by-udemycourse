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
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function (type, des, val) {
            let newItem, ID;

            //Create new ID, ID = lastID + 1
            //data.allItems[type] = array
            //[data.allItems[type].length - 1] = last item  

            
            
            //Create new item based on type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else {
                newItem = new Income(ID, des, val);
            }

            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            //push to data structure
            data.allItems[type].push(newItem);
            //return the new elements
            return newItem;
        },
        testing: function (){
            console.log("Test")
        }
    }
        

})();

let UIController = (() => {
    
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: () => {
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
    
    let setupEventListener = () => {
        let DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', (e) => {
        if(e.keyCode === 13 || e.which === 13){
            ctrlAddItem();
        }
    })
    }

    let ctrlAddItem = () => {
        let input, newItem;

        //Get the filled input data
        input = UICtrl.getInput();

        //Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

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