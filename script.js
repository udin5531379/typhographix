const theme_container_id = document.getElementById('theme-container-id')

function darkMode() {
    theme_container_id.children[0].classList.replace('fa-sun', 'fa-moon')
    

}

function lightMode(){
    theme_container_id.children[0].classList.replace('fa-moon', 'fa-sun')
    
}

function switchTheme() {
    const data_theme = document.documentElement.getAttribute('data-theme')

    const theme_name_id = document.getElementById('theme-name-id')
    theme_name_id.classList.remove('text-shown')
    theme_name_id.addEventListener('transitionend', onTransitionEnd)
    

    function onTransitionEnd(){
        theme_name_id.removeEventListener('transitionstart', onTransitionEnd)
        theme_name_id.classList.add('text-shown')
    }

    const text_content = theme_container_id.children[1].textContent === 'Light' ? 'Dark' : 'Light'
    theme_container_id.children[1].innerHTML = text_content
    
    

    if(!data_theme || data_theme === "light"){
        document.documentElement.setAttribute('data-theme', 'dark')
        darkMode()
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        lightMode()
    }
 
}

theme_container_id.addEventListener('click', switchTheme)