let dark_mode_toggle = document.querySelector('.dark-mode-switch')

dark_mode_toggle.onclick = () => {
    document.querySelector('.wrapper').classList.toggle('light')
    document.querySelector('.wrapper').classList.toggle('dark')
}