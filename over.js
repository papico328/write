window.addEventListener(`DOMContentLoaded`, function() {
    ["home-icon", "home-menu"].forEach((string) => {
        document.getElementsByClassName(string)[0].addEventListener("mouseover", function() {
            document.getElementsByClassName("home-menu")[0].style.display = 'block';
        }, false);

        document.getElementsByClassName(string)[0].addEventListener("mouseout", function() {
            document.getElementsByClassName("home-menu")[0].style.display = 'none';
        }, false);
    })

    // 　　↑の正式な書き方
    // 　　let arr = document.getElementsByClassName("home-icon")[0];arr[0].addEventListener("mouseover", function(){
    //         document.getElementsByClassName("home-menu")[0].style.display = 'block';
    // 　　}, false);

    //     ↑がまとめたもの
    //     document.getElementsByClassName("home-icon")[0].addEventListener("mouseover", function(){
    //         document.getElementsByClassName("home-menu")[0].style.display = 'block';
    //     }, false);

    //     document.getElementsByClassName("home-icon")[0].addEventListener("mouseout", function(){
    //         document.getElementsByClassName("home-menu")[0].style.display = 'none';
    //     }, false);

    //     document.getElementsByClassName("home-menu")[0].addEventListener("mouseover", function(){
    //         document.getElementsByClassName("home-menu")[0].style.display = 'block';
    //     }, false);

    //     document.getElementsByClassName("home-menu")[0].addEventListener("mouseout", function(){
    //         document.getElementsByClassName("home-menu")[0].style.display = 'none';
    //     }, false);
    // }
})

window.addEventListener(`DOMContentLoaded`, function() {
    ["page-icon", "page-menu"].forEach((pagestring) => {
        document.getElementsByClassName(pagestring)[0].addEventListener("mouseover", function() {
            document.getElementsByClassName("page-menu")[0].style.display = 'block';
        }, false);

        document.getElementsByClassName(pagestring)[0].addEventListener("mouseout", function() {
            document.getElementsByClassName("page-menu")[0].style.display = 'none';
        }, false);
    })
})

window.addEventListener(`DOMContentLoaded`, function() {
    document.addEventListener('click', (e) => {
        console.log(e.target.className);
        if(e.target.className === "fa fa-search search-gray fa-lg" || e.target.className === "search-click") {
            // 上記と重複する処理　document.getElementsByClassName("search-area")[0].addEventListener("click", function() {
                document.getElementsByClassName("search-click")[0].style.display = 'block';
            // }
        } else {
            // 上記と重複する処理　document.getElementsByClassName("search-area")[0].addEventListener("click", function() {
                document.getElementsByClassName("search-click")[0].style.display = 'none';
                document.getElementsByClassName("search-area")[0].style.display = 'block';
                document.getElementsByClassName("fa-search")[0].style.display = 'inline-block';
            // }
        }
    })   
})

// window.addEventListener(`DOMContentLoaded`, function() {
//     document.getElementsByClassName("search-area")[0].addEventListener("click", function() {
//         document.getElementsByClassName("search-click")[0].style.display = 'block';
//     })
// })

// クリックしてる間に検索フィールドの横に虫眼鏡を表示させないようにするためのもの
window.addEventListener(`DOMContentLoaded`, function() {
    document.getElementsByClassName("search-area")[0].addEventListener("click", function() {
        document.getElementsByClassName("fa-search")[0].style.display = 'none';
    })
})
