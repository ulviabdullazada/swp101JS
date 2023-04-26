function sorting(arr) {
    for (let i = 0; i < arr.length; i++) {
        var minInd = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[minInd] > arr[j]) {
                minInd = j;
            }
        }
        var temp = arr[minInd]; // 0
        arr[minInd] = arr[i];
        arr[i] = temp;
    }
    console.log(arr);
}
sorting([4,6,7,2,0,16,3])
// [4,6,7,2,0,16,3]
// [0,6,7,2,4,16,3]
// [0,2,7,6,4,16,3]
// [0,2,3,6,4,16,7]
// [0,2,3,4,6,16,7]
// [0,2,3,4,6,7,16]