// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("todoList").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = function () {
        const div = this.parentElement;
        div.style.display = "none";
    };
    li.addEventListener("click", function (ev) {
        if (ev.target.tagName === 'LI') {
            console.log("clicked");
            ev.target.classList.toggle('checked');
        }
    }, false);
}

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll("ul#todoList li").forEach(function (li) {
        li.addEventListener("click", function (ev) {
            if (ev.target.tagName === 'LI') {
                console.log("clicked");
                ev.target.classList.toggle('checked');
            }
        }, false);
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        span.onclick = function () {
            console.log("clicked");
            const div  = this.parentElement;
            div.style.display = "none";
        };
    })
})

function search() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
