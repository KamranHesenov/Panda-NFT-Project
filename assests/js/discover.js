// Keywords input search
const storeItems = document.querySelectorAll('.store-item');

//function to filter items
function filterItems(selectedFilter){
  const filter = selectedFilter.dataset.filter;

  storeItems.forEach(function(storeItem){
    if (filter === "all" || filter === storeItem.dataset.item){
      storeItem.style.display = "block"
    }
    else {
      storeItem.style.display = "none"
    }
  })
}

//function to search items
function searchItems(){
  let input = document.getElementById("search-item");
  searchText = input.value;
  storeItems.forEach(function(item){
    let itemName=item.dataset.item;
    if (itemName.includes(searchText)){
      item.style.display="block"
    }
    else {
      item.style.display="none"
    }
  })
}


// CountDownTimer
$('.future_date').countdowntimer({
  dateAndTime: "2023/09/17 20:00:00",
});