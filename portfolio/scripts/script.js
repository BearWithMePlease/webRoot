document.getElementById("lorem").addEventListener("click", displayLorem);
document.getElementById("loremExt").addEventListener("click", displayLoremExt);
document.getElementById("crab").addEventListener("click", displayCrab);


function displayLorem() {
    target = document.getElementById("descbox");
    document.getElementById("prjdescription").innerHTML = "<h1> test </h1> <p> subtext </p>";
    
    target.classList.remove("show");  
    void target.offsetWidth; //sketchy way to reset css
    target.classList.add("show");
}

function displayLoremExt() {
    target = document.getElementById("descbox");
    document.getElementById("prjdescription").innerHTML = "<h1> test2 </h1> <p> subtext2 </p>";
    document.getElementById("descbox").className="DescriptionBox show";

    target.classList.remove("show");
    void target.offsetWidth;
    target.classList.add("show");
}

function displayCrab() {
    target = document.getElementById("descbox");
    document.getElementById("prjdescription").innerHTML = "<h1> test3 </h1> <p> subtext3 </p>";
    document.getElementById("descbox").className="DescriptionBox show";

    target.classList.remove("show");
    void target.offsetWidth;
    target.classList.add("show");
}