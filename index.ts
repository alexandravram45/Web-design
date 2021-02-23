export {};
const data = [
    { productName: "Leaf Rake", code: "gdn 0011", availableDate: "March 19", price: "$19,95", starRating: "4"},
    { productName: "Garden Cart", code: "gdn 0023", availableDate: "March 18", price: "$32,99", starRating: "5" },
    { productName: "Hammer", code: "tbx 0048", availableDate: "March 19", price: "$8,90", starRating: "3" },
    { productName: "Saw", code: "tbx 0022", availableDate: "March 19", price: "$11,55", starRating: "3"}
   
  ];


let menu = document.querySelector("nav > a");
let table = document.querySelector("table");
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
menu.addEventListener('click', function(){
    a1.style.visibility = "visible";
    a2.style.visibility = "visible";
});




function createTable () {
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
      btnDetails.innerHTML = "<i class=\"fas fa-pen\"></i><a href=\"#\">" + " Details";
      btnDelete.innerHTML = "<i class=\"fas fa-trash-alt\"></i><a href=\"#\">" + " Delete";
      row.insertCell();
      let lastCell = document.querySelector("tr:last-child");
      lastCell.appendChild(btnDelete);
      lastCell.appendChild(btnDetails);
      
      btnDelete.addEventListener('click', function() {
        data.splice(row.rowIndex - 1, 1);
        table.rows[row.rowIndex].remove();
       
      });
   });
      
};

window.onload = createTable;


 /*  Http request
 
 function req () {
  const request = new XMLHttpRequest();
  request.open('GET', 'localhost:3333/products');
 
  request.onload = function() {
    if(request.status === 200) {
        let text = JSON.parse(request.responseText);
          createTable;
        }
     else {
        console.log("Error loading groups: " + request.status + " - "+ request.statusText);
    }
};
  request.send(null);
}
req;
*/

 
 
    
    
        