(function () {

    function typeInitialize(element) {
        var counter;
        counter = 0;
        elementArray = element.innerHTML.split('');
        element.innerHTML = "";
        element.style.display = "block" // show
        typeWrite();

        function typeWrite() {
            if (counter < elementArray.length) {
                element.innerHTML += elementArray[counter];
                counter++;
                setTimeout(function () {
                    typeWrite();
                }, 75);
            } else {
              setTimeout(function() {
                $(".author").fadeIn(500);
                // $(element).html($(element).html().replace(/ten\sthousand\shours/gi, '<span class="transition">$&</span>'));
              }, 300);
            }
        }
    }

    var text = document.getElementById("typewriter");
    typeInitialize(text);
})();