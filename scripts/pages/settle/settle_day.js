function settleDayPage(selected = false) {
    return page(
        selected,
        "settle_day",
        "Settle Day - Group Split: Ongoing<br>(RR; BF; JS)",
        [],
        "",
        settleDashboard() +
        div("day row",
            label("",
                stack(
                    spread(
                        text("0 Expenses - Monday 12/12/2022") +
                        actionItem("show")
                    ) +
                    rack(
                        text("Starting Balance (carried forward from the previous day):") +
                        amount(0)
                    ) +
                    div("add-expense",
                        label("add-expense-label",
                            rack(
                                actionItem("add", "expense", "", "Add with Details", "black") +
                                actionItem("settings", "expense", "", "Configure", "black")
                            ) +
                            rack(
                                input("expense-name", "text", `placeholder="Expense"`) +
                                input("expense-amount", "text", `placeholder="$0.00"`) +
                                button("Add", `onclick="onAddExpense(this)"`)
                            ) +
                            rack(
                                stack(
                                    amount(0) +
                                    text("You<br>(your turn)")
                                ) +
                                stack(
                                    amount(0) +
                                    text("BF")
                                ) +
                                stack(
                                    amount(0) +
                                    text("JS")
                                )
                            )
                        )
                    ) +
                    div("breakdown",
                        stack(
                            rack(
                                stack(
                                    text("Breakdown for the day:") +
                                    rack(
                                        stack(
                                            amount(0) +
                                            text("You")
                                        ) +
                                        stack(
                                            amount(0) +
                                            text("BF")
                                        ) +
                                        stack(
                                            amount(0) +
                                            text("JS")
                                        )
                                    )
                                ) +
                                stack(
                                    text("Balance") +
                                    rack(
                                        stack(
                                            amount(0) +
                                            actionItem("settle", "", "", "Settle", "black")
                                        )
                                    )
                                )
                            )
                        )
                    ) +
                    div("expense-list",
                        "No Expenses"
                    )
                )
            )
        ),
        "", "settle"
    );
}

const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2, 
    roundingIncrement: 5
  });

  function currency(n){
    return currencyFormat.format(n);
  };
  
  function expenseRecord(name="", amount=0){
      return {
          name:name, 
          amount:amount
      };
  }
  
  function expenseElement(record={}, index=0){
      return `
          <div class="expense-item" data-index="${index}">
              ${record.name}
              ${currency(record.amount)}
          </div>
      `
  }
  
  let expenseRecordList = [];
  
  function getTotal(){
    return expenseRecordList.reduce((c,i)=>i.amount+c,0);
  }

  function updateTotal(e){
    e.innerHTML = currency(getTotal());
  }
  
  function renderExpenseList(listElement){
      listElement.innerHTML = expenseRecordList.map(expenseElement).join("");
  }
  
  function onAddExpense(e){
      try{
          const parentElement = e.closest(".day");
          const nameElement = parentElement.querySelectorAll(".expense-name")[0];
          const amountElement = parentElement.querySelectorAll(".expense-amount")[0];
          const amount = parseFloat(amountElement.value)
          const name = nameElement.value;
          console.log(name, amount)
          console.log(amountElement.value)
          if (name.length < 1 || isNaN(amount)){
            return;
          }
          expenseRecordList.push(
              expenseRecord(
                  name,
                  amount
              )
          );
      
          nameElement.value="";
          amountElement.value ="";
          nameElement.focus();
          
          renderExpenseList(
              parentElement.querySelectorAll(".expense-list")[0]
          );
        
          updateTotal(parentElement.querySelectorAll(".amount.green ")[1]);
              
      } catch (error) {
        console.error(error);
          return;
      }
  
  }
  
  window.addEventListener("DOMContentLoaded",()=>{
      document.querySelectorAll(".expense-name")[0].focus();
  });
  
  window.addEventListener("keyup", e => {
    if (e.key === "Enter") {
      document.querySelector("button").click();
    }
  });