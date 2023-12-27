const btn=document.querySelector('.menu')
const menus=document.querySelector('article')

btn.addEventListener('click',()=>{
    menus.textContent = ''
    const items = document.createElement('div')
    items.className = 'items'
    const profile = document.createElement('h3')
    profile.textContent = 'Profile'
    const links = document.createElement('h3')
    links.textContent = 'Links'
    const settings = document.createElement('h3')
    settings.textContent = 'Settings'
    const about = document.createElement('h3')
    about.textContent = 'About'
    const dark = document.createElement('h3')
    dark.textContent = 'Dark'
    const log = document.createElement('h3')
   log.textContent = 'Log out'

   items.appendChild(profile)
   items.appendChild(links)
   items.appendChild(settings)
   items.appendChild(about)
   items.appendChild(dark)
   items.appendChild(log)
   menus.appendChild(items)
})