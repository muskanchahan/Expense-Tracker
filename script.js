const form = document.getElementById('expense-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const expenses = document.getElementById('expenses');
  const type = document.getElementById('type').value;
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const amount = document.getElementById('amount').value;

  
  const userDetails={name,date,amount,type};
  // Create a new list item (LI) element for the expense
  const li = document.createElement('li');

  // Construct the expense text with placeholders for editing
  const liText = document.createTextNode(`On ${date}, we paid ${amount} for ${type} on ${name} `);
  li.appendChild(liText);
  li.style.backgroundColor = 'lightblue';
  li.style.margin = '15px';
  expenses.appendChild(li);
  localStorage.setItem("UserDetails", JSON.stringify(userDetails));
  
  
  const deleteBtn=document.createElement('button');
  const deleteBtnText=document.createTextNode('Delete');
  deleteBtn.appendChild(deleteBtnText);
  li.appendChild(deleteBtn);
  
  deleteBtn.addEventListener('click',function(event){
    const listItem=event.target.parentElement;
    listItem.remove();
    localStorage.removeItem("UserDetails");
  })
  
  const editBtn=document.createElement('button');
  const editBtnText=document.createTextNode('Edit');
  editBtn.appendChild(editBtnText);
  li.appendChild(editBtn);
  
  const editForm=document.createElement('form');
  editForm.style.display='none';
  
  const editType=document.createElement('input');
  editType.type='text';
  editType.value=type;
   editForm.appendChild(editType);
  
  const editName=document.createElement('input');
  editName.type='text';
  editName.value=name;
  editForm.appendChild(editName);
  
  const editDate=document.createElement('input');
  editDate.type='date';
  editDate.value=date;
  editForm.appendChild(editDate);
  
  const editAmount=document.createElement('input');
  editAmount.type='number';
  editAmount.value=amount;
  editForm.appendChild(editAmount);
  
  const editSubmitBtn=document.createElement('button');
  const editSubmitText=document.createTextNode('Save');
  editSubmitBtn.appendChild(editSubmitText);
  editForm.appendChild(editSubmitBtn);
  
  const editCancelBtn=document.createElement('button');
  const editCancelText=document.createTextNode('Cancel');
  editCancelBtn.appendChild(editCancelText);
  editForm.appendChild(editCancelBtn);
  
  li.appendChild(editForm);
  expenses.appendChild(li);
  
  
  editBtn.addEventListener('click',function(event){
    editForm.style.display=editForm.style.display==='none'?'block':'none';
    //editType.focus();
  })
  editSubmitBtn.addEventListener('click', function(event) {
  event.preventDefault();

  li.textContent = `On ${editDate.value}, we paid ${editAmount.value} for ${editType.value} on ${editName.value} `;

  const editUserDetails = {
    amount: editAmount.value,
    date: editDate.value,
    type: editType.value,
    name:editName.value
  };
  localStorage.removeItem("UserDetails");
  localStorage.setItem("editUserDetails", JSON.stringify(editUserDetails));
});
editCancelBtn.addEventListener('click', function(event) {
  event.preventDefault();
  editForm.style.display = 'none'; // Corrected indentation
   localStorage.setItem("UserDetails",  JSON.stringify(UserDetails))
});
});
