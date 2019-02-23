// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    let swapped = true;

    while(swapped){
        swapped = false;

        for(let i = 1; i < array.length; i++){
            if(array[i-1] > array[i]){
               let temp = array[i-1];
               array[i-1] = array[i];
               array[i] = temp;
              swapped = true;
            }
        }
    }
    return array;

}

module.exports = bubbleSort;
