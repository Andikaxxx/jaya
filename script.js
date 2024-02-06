alert("GAME TEBAK ANGKA \n Pilih angka 1-10 \n Kamu punya 3 kesempatan");

const angkabenar = Math.floor(Math.random() * 10) + 1;

for (let nyawa = 3; nyawa >= 1; nyawa--) {



const tebakanuser = prompt("masukan tebakan angka");

if (tebakanuser == angkabenar) {
    alert(`tebakan anda benar! \n Angka yang benar adalah ${angkabenar}`);
    break;
} else if (tebakanuser > angkabenar) {
    alert(`tebakan anda terlalu TINGGI \n Anda masih punya ${nyawa - 1} kesempatan`);
} else if (tebakanuser < angkabenar) {
    alert(`tebakan anda terlalu RENDAH \n Anda masih punya ${nyawa - 1} kesempatan`);
 }

 if (nyawa == 1) {
    alert(`anda gagal! \n Angka yang benar adalah ${angkabenar}`);
 }
}