document.getElementById("demo").innerHTML = "Always here to help you";
document.getElementById("dem").innerHTML = "Ready to get started?"
document.getElementById("par").innerHTML = "Your personal informations will not be publish"
document.getElementById("para").innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odio
          consequuntur maxime neque accusantium! Porro voluptatibus inventore
          libero ad perferendis? Autem vero maxime laudantium sint voluptate,
          aut a cum nulla.`

const car = [
  {
    icon: `<i class="fa-solid fa-location-dot"></i>`,
    title: `Location`,
    desc: `12, Ayegbaju close`,
  },
  {
    icon: `<i class="fa-solid fa-phone"></i>`,
    title: `Contact`,
    desc: ` +234 812 722 1696`,
  },
  {
    icon: `<i class="fa-solid fa-envelope"></i>`,
    title: `E-mail`,
    desc: `adeoyeaisha533@gmail.com`,
  },
  {
    icon: `<i class="fa-solid fa-clock"></i>`,
    title: `Hours of operation`,
    desc: `2 hrs/day`
  },
];

let cars = car
 .map((item) => `
        <div class="flex py-1">
            <p class="border-2 rounded-full border-stone-200 bg-stone-200 w-10 px-4 py-3 pr-8">${item.icon}</p>
            
            <div class="block pl-1">
            <h2 class="text-lg font-bold">${item.title}</h2>
            <p>${item.desc}</p>
            </div>

        </div>
 
 `

 )
 .join("")
 document.getElementById("location").innerHTML = cars