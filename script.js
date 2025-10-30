const toggle = document.getElementById('themeToggle')
const currentTheme = localStorage.getItem('theme')
if (currentTheme) document.body.classList.add(currentTheme)
else document.body.classList.add('dark')
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    document.body.classList.toggle('light')
    const theme = document.body.classList.contains('dark') ? 'dark' : 'light'
    localStorage.setItem('theme', theme)
})
