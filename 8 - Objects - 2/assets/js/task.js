function MyArray(){
    var arr = [];
    this.add = function(number){
        arr[arr.length++] = number;
        return arr;
    }
}

var arr1 = new MyArray();
var arr2 = new MyArray();

console.log(arr1.add(23));
console.log(arr1.add("Ayten"));