var str = `<div class="side-col"></div><div class="main-col">`;
for (var i = 0; i < data.length; i++)
    {
        str +=
`<div class="gallery">
    <a href="#id${i}">
        <img src="img/${i}/cover.jpg" width="600">
    </a>
    <div class="text">${data[i].name}</div>
</div>`;
    }

str += `</div><div class="side-col"></div>`;

for (var i = 0; i < data.length; i++)
    {
        var innerStr = 
`<table>
    <tr>
        <th></th>
        <th></th>
        <th>Purchased</th>
    </tr>
`;
        for (var j = 0; j < data[i].list.length; j++)
            {
                innerStr +=
`<tr>
    <td><img src="img/${i}/${j}.jpg" width="100"</td>
    <td>${data[i].list[j].name}</td>
    <td>${data[i].list[j].purchased ? "Yes" : "No"}
</tr>`
            }
        
        innerStr += '</table>';

        str +=
`<div class="main-col">
    <button type="button" id="id${i}" class="collapsible">${data[i].name}</button>
        <div class="content">
            ${innerStr}
    </div>
</div>
<div class="side-col"></div>`;
    }

document.getElementById("main").innerHTML = str;

var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener(
    "click", function()
    {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block")
        {
            content.style.display = "none";
        }
        else
        {
            content.style.display = "block";
        }
    });
}
