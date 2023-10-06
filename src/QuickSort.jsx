import waitforme from './waitforme';
async function partition(arr,low,high,setarray,delay){
    let pivot=low;
    let pid=document.getElementById(pivot);
    pid.style.backgroundColor="yellow";
    await waitforme(delay);
    pid.style.backgroundColor="red";
    while(low<high){
        while(arr[low]<=arr[pivot])
            low++;
        while(arr[high]>arr[pivot])
            high--;
        if(low<high){
            let temp=arr[low]
            arr[low]=arr[high];
            arr[high]=temp;
        }
    }
    let temp=arr[high]
    arr[high]=arr[pivot];
    arr[pivot]=temp;
    setarray([...arr]);
    let id=document.getElementById(high);
    id.style.backgroundColor="green";
    await waitforme(delay);
    id.style.backgroundColor="red";
    return high;
}

async function quick(arr,low,high,setarray,delay){
    if(low<high){
        let pi=await partition(arr,low,high,setarray,delay);
        await quick(arr,low,pi-1,setarray,delay);
        await quick(arr,pi+1,high,setarray,delay);
    }
}

const QuickSort = (arr,setarray,delay,setsorted) => {
    let n=arr.length;
    quick(arr,0,n-1,setarray,5*delay);
    setsorted(false);
}

export default QuickSort
