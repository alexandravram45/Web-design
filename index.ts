
const data = [
    { productName: "Leaf Rake", code: "gdn 0011", availableDate: "March 19", price: "$19,95", starRating: "4"},
    { productName: "Garden Cart", code: "gdn 0023", availableDate: "March 18", price: "$32,99", starRating: "5" },
    { productName: "Hammer", code: "tbx 0048", availableDate: "March 19", price: "$8,90", starRating: "3" },
    { productName: "Saw", code: "tbx 0022", availableDate: "March 19", price: "$11,55", starRating: "3"}
   
  ];

 window.onload = function () {
    const table = document.querySelector("tbody");
    data.forEach(prod => {
      const row = document.createElement("tr");
      Object.values(prod).forEach(element => {
        const cell = document.createElement("td");
        const textNode = document.createTextNode(element);
        cell.appendChild(textNode);
        row.appendChild(cell);
       
      });
      table.appendChild(row);
      
      let btnDelete = document.createElement("button") as HTMLButtonElement; 
      let btnDetails = document.createElement("button") as HTMLButtonElement;
      btnDetails.innerHTML = "<i class=\"fas fa-pen\"></i><a href=\"#\">" + "Details";
      btnDelete.innerHTML = "<i class=\"fas fa-trash-alt\"></i><a href=\"#\">" + "Delete";
      row.insertCell();
      let lastCell = document.querySelector("tr:last-child");
      lastCell.appendChild(btnDelete);
      lastCell.appendChild(btnDetails);
      
      btnDelete.addEventListener('click', function() {
        let index = row.rowIndex;
        data.splice(index - 1, 1);
        console.log(data);
        table.rows[index].remove();
       
      });
   });
      
 };
 


 
 
    
    
        