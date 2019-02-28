var people = {};
var makeppl = function(name,age,gender){
  return{
    name:name,
    age:age,
    gender: gender
  }
};
var data = [makeppl("Kristen",19,"female"),makeppl("Arsenio",21,"male"),makeppl("Becky",12,"female"),makeppl("Christian",20,"male"),makeppl("Steve",26,"male")];
var table = d3.select(".box").append("table");
var rows = table.selectAll('tr')
                .data(data)
                .enter()
                .append("tr");
rows.append("td")
    .text(function(d){return d.name});
rows.append("td")
        .text(function(d)
        {
        return d.age
      })
.style("color",function(d){
  if(d.age < 20){
    return "red";
  }
  else{
    return "blue";
  }
});



rows.append("td")
        .text(function(d){return d.gender});
