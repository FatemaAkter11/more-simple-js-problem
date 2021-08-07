const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
    { name: 'walton m32', price: 55000, camera: 7, storage: 8 },
    { name: 'shaomi m3', price: 12000, camera: 6, storage: 16 },
    { name: 'oppo a2', price: 17000, camera: 12, storage: 32 },
    { name: 'htc h81', price: 25000, camera: 8, storage: 16 },
    { name: 'nokia n95', price: 8000, camera: 5, storage: 4 }
];

let cheapest = phones[0];
for (const phone of phones) {
    // compare price only
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);