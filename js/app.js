const u=me();
if(!u.username) location="login.html";

const menu=document.querySelector(".side nav");
const side=document.querySelector(".side");
const admin=u.role==="admin";
const links=admin
?[
["dashboard.html","🏠 Dashboard"],["buku.html","📚 Buku"],["anggota.html","👥 Anggota"],
["peminjaman.html","📖 Peminjaman"],["pengembalian.html","🔄 Pengembalian"],["denda.html","💰 Denda"],
["laporan.html","📊 Laporan"],["notifikasi.html","🔔 Notifikasi"],["pengaturan.html","⚙️ Pengaturan"]
]
:[
["dashboard.html","🏠 Dashboard"],["buku.html","📚 Koleksi"],["peminjaman.html","📖 Peminjaman"],
["favorit.html","❤️ Favorit"],["notifikasi.html","🔔 Notifikasi"],["profil.html","👤 Profil"],["pengaturan.html","⚙️ Pengaturan"]
];

menu.innerHTML=links.map(x=>`<a href="${x[0]}">${x[1]}</a>`).join("");
const current=location.pathname.split("/").pop()||"dashboard.html";
menu.querySelectorAll("a").forEach(a=>{
  if(a.getAttribute("href")===current)a.classList.add("active");
  a.addEventListener("click",closeMenu);
});
document.querySelector(".avatar").textContent=u.username[0].toUpperCase();

const toggle=document.createElement("button");
toggle.className="mobile-menu";
toggle.setAttribute("aria-label","Buka menu");
toggle.textContent="☰";
document.body.appendChild(toggle);

const overlay=document.createElement("div");
overlay.className="menu-overlay";
document.body.appendChild(overlay);

function openMenu(){side.classList.add("open");overlay.classList.add("show");toggle.textContent="✕"}
function closeMenu(){side.classList.remove("open");overlay.classList.remove("show");toggle.textContent="☰"}
toggle.onclick=()=>side.classList.contains("open")?closeMenu():openMenu();
overlay.onclick=closeMenu;
window.addEventListener("resize",()=>{if(innerWidth>1000)closeMenu()});
