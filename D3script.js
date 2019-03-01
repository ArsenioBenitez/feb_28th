
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
    .text(function(d){return d.name})
    .style("color",function(d){
              if(d.gender == "male"){
                return "pink";
              }
              else{
                return "green";
              }
            });
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

var t = "If a peron's age is less than 20, the age appears in red font, if not, it appears in blue font. Male's names appear in pink font while female's names appear in blue font.";
var da = [1];
d3.select("body").selectAll('p')
             .data(da)
             .enter()
             .append('p')
             .text(t);
