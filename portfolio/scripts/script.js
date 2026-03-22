document.getElementById("lorem").addEventListener("click", displayLorem);
document.getElementById("loremExt").addEventListener("click", displayLoremExt);
document.getElementById("crab").addEventListener("click", displayCrab);


function displayLorem() {
    target = document.getElementById("descbox");
    document.getElementById("prjdescription").innerHTML = "<h1> Lorem Scriptum Compiler </h1> <p> A <b>compiled Esolang</b> that is based on Latin. All <b>types</b> are in latin, <b>integers</b> are represented via roman numerals (spanning from -3999 to +3999), <b>control structures</b> via mathematical symbols.</p> <p>Compiler also has an integrated an <b>error handler</b>, which points to possible mistakes. </p><p>Compiler itself is written in <b>C++</b>. Codegen via <b>LLVM</b>! Compiled code runs on <b>windows</b> and <b>linux</b>.</p><a href=\"https://github.com/vbielov/LoremScriptumCompiler\" target=\"_blank\"><img src=\"./assets/icons/GitHub_Invertocat_White.svg\" width=\"50px\" alt=\"github repo link\">";
    
    target.classList.remove("show");  
    void target.offsetWidth; //sketchy way to reset css
    target.classList.add("show");
}

function displayLoremExt() {
    target = document.getElementById("descbox");
    document.getElementById("prjdescription").innerHTML = "<h1> Lorem Scriptum Extension </h1> <p> The main goal of the extension is to mitigate the biggest annoyance with writing in lorem. </p><p> That being, having to copy paste the unicode characters and struggeling to find missing brackets. </p><p> Basically the extension <b>highlights code, brackets</b> and replaces <b>latex style expressions</b> into the <b>equivalent unicode</b> (either on file save or via manual trigger).</p><p> Also most VS-Code QOL features relating to brackets should work, just without autocomplete and having the compiler/runner preconfigured.  </p><a href=\"https://github.com/BearWithMePlease/LoremScriptumExtension\" target=\"_blank\"><img src=\"./assets/icons/GitHub_Invertocat_White.svg\" width=\"50px\" alt=\"github repo link\"> &nbsp;&nbsp;&nbsp;&nbsp; <a href=\"https://marketplace.visualstudio.com/items?itemName=BackBencher.loremscriptum\" target=\"_blank\"><img src=\"./assets/icons/webicon2.png\" width=\"50px\" alt=\"github repo link\"></a>";
    document.getElementById("descbox").className="DescriptionBox show";

    target.classList.remove("show");
    void target.offsetWidth;
    target.classList.add("show");
}

function displayCrab() {
    target = document.getElementById("descbox");
    document.getElementById("prjdescription").innerHTML = "<h1> CrabTrades </h1> <p>A <b>Google Cloud</b> hosted AI-Trading bot. </p><p> The AI part of it runs on <b>TensorFlow</b> and to simulate the trades we used <b>Alpaca</b> as the trading API. </p><p> Persistant data such as trading decisions were stored via <b>Firebase</b>! </p> <a href=\"https://github.com/Nenthor/CrabTrades\" target=\"_blank\"><img src=\"./assets/icons/GitHub_Invertocat_White.svg\" width=\"50px\" alt=\"github repo link\"></a> &nbsp;&nbsp;&nbsp;&nbsp; <a href=\"https://crabtrades.nentwich.dev/\" target=\"_blank\"><img src=\"./assets/icons/webicon2.png\" width=\"50px\" alt=\"github repo link\"></a>";
    document.getElementById("descbox").className="DescriptionBox show";

    target.classList.remove("show");
    void target.offsetWidth;
    target.classList.add("show");
}