// input [1, 2, 3, 4, 5, 6]
//output [1, 4, 9, 16, 25, 36]

export const Training = () => {

    const arr1 = [1, 2, 3, 4, 5, 6];

const arr1Out = arr1.map((num) => num ** 2);
console.log(arr1Out);

    const arr2 = ['aloce', 'ahmed', 'john', 'rico'];

    const arr2Out = arr2.map(name => ( name.charAt(0).toUpperCase() + name.slice(1)))
    console.log(arr2Out)


    const arr3 = ['BVulbasour', 'shalnder', 'bickatshu', 'digger'];
    const arr3Out = arr3.map(name => `<p>${name}</p>`)

    console.log(arr3Out)

}