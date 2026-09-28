"use strict";

// 1---------------------------------------------------

// function getByConditionNumber(m){
//     if(m>10 && m<30){
//         return m*2;
//     }
//     else
//     {
//         return m/2
//     }
// }

// function getByConditionNumber(m) {
//     if (m > 10 && m < 30) {
//         console.log(m * 2);
//     } else {
//         console.log(m / 2);
//     }
// }

// let getByConditionNumber = (m) => {
//     if (m > 10 && m < 30) {
//         return m * 2;
//     } else {
//         return m / 2;
//     }
// };

// let getByConditionNumber = (m) => {
//     if (m > 10 && m < 30) {
//         console.log(m * 2);
//     } else {
//         console.log(m / 2);
//     }
// };

// console.log(getByConditionNumber(15));
// getByConditionNumber(11);

// 2----------------------------------------------------------------

// function sumWithCondition (m,n){
//     if(m%2==1 || n%2==1){
//         let sum = m+n;
//         let res = sum**3;
//         return res
//     }
// }

// function sumWithCondition (m,n){
//     if(m%2==1 || n%2==1){
//         let sum = m+n;
//         let res = sum**3;
//         console.log(res);
//     }
// }

// let sumWithCondition = (m,n) => {
//     if(m%2==1 || n%2==1){
//         let sum = m+n;
//         let res = sum**3;
//         console.log(res);
//     }
// }

// let sumWithCondition = (m,n) => {
//     if(m%2==1 || n%2==1){
//         let sum = m+n;
//         let res = sum**3;
//         return res;
//     }
// }

// console.log(sumWithCondition(5,2));
// sumWithCondition(3,2);

// 3-------------------------------------------------------------

// function findSquare(m){
//     if (m<10) {
//         return m**2
//     }
//     else{
//         return m**3
//     }
// }

// function findSquare(m){
//     if (m<10) {
//         console.log(m**2);
//     }
//     else{
//         console.log(m**3);
//     }
// }

// let findSquare = (m) => {
//     if (m<10) {
//         console.log(m**2);
//     }
//     else{
//         console.log(m**3);
//     }
// }

// let findSquare = (m) => {
//     if (m<10) {
//         return m**2;
//     }
//     else{
//         return m**3;
//     }
// }

// console.log(findSquare(11));
// findSquare(11);

// 4-------------------------------------------------

// function multiply(m){
//     let start = 1;
//     let res = 1;
//     while(start<m){
//         res*=start
//         start++;
//     }
//     return res;
// }

// function multiply(m){
//     let start = 1;
//     let res = 1;
//     while(start<m){
//         res*=start
//         start++;
//     }
//     console.log(res);
// }

// let multiply = (m) => {
//     let start = 1;
//     let res = 1;
//     while(start<m){
//         res*=start
//         start++;
//     }
//     return res;
// }

// let multiply = (m) => {
//     let start = 1;
//     let res = 1;
//     while(start<m){
//         res*=start
//         start++;
//     }
//     console.log(res);
// }

// console.log(multiply(5));
// multiply(5);

// 5-----------------------------------------

// function sumBenweenNums(a,b){
//     let sum = 0;
//     for (let i = a +1; i < b; i++) {
//         sum+=i
//     }
//     return sum;
// }

// function sumBenweenNums(a,b){
//     let sum = 0;
//     for (let i = a +1; i < b; i++) {
//         sum+=i
//     }
//     console.log(sum);
// }

// sumBenweenNums = (a,b) =>{
//     let sum = 0;
//     for (let i = a +1; i < b; i++) {
//         sum+=i
//     }
//     console.log(sum);
// }

// sumBenweenNums = (a,b) =>{
//     let sum = 0;
//     for (let i = a +1; i < b; i++) {
//         sum+=i
//     }
//     return sum;
// }

// console.log(sumBenweenNums(5,10));
// sumBenweenNums(5,12);

// 6---------------------------------------------------

// function faktorial(m) {
//     let start = 1;
//     let res = 1;
//     while (start <= m) {
//         res *= start;
//         start++;
//     }
//     return res;
// }

// function faktorial(m){
//     let start = 1;
//     let res = 1;
//     while(start<=m){
//         res*=start
//         start++;
//     }
//     console.log(res);
// }

// let faktorial = (m) => {
//     let start = 1;
//     let res = 1;
//     while(start<=m){
//         res*=start
//         start++;
//     }
//     return res;
// }

// let faktorial = (m) => {
//     let start = 1;
//     let res = 1;
//     while(start<=m){
//         res*=start
//         start++;
//     }
//     console.log(res);
// }

// console.log(faktorial(5));
// faktorial(5);

// 7------------------------------------------------------

// function multiplyNegative(m, n) {
//     let res = 1;
//     for (let i = m; i < n; i++) {
//         if (i < 0) {
//             if (i % 2 == -1) {
//                 res *= i;
//             }
//         }
//     }
//     return res;
// }

// function multiplyNegative(m, n) {
//     let res = 1;
//     for (let i = m; i < n; i++) {
//         if (i < 0) {
//             if (i % 2 == -1) {
//                 res *= i;
//             }
//         }
//     }
//     console.log(res);
// }

// let multiplyNegative = (m,n) => {
//     let res = 1;
//     for (let i = m; i < n; i++) {
//         if (i < 0) {
//             if (i % 2 == -1) {
//                 res *= i;
//             }
//         }
//     }
//     console.log(res);
// };

// // let multiplyNegative = (m,n) => {
// //     let res = 1;
//     for (let i = m; i < n; i++) {
//         if (i < 0) {
//             if (i % 2 == -1) {
//                 res *= i;
//             }
//         }
//     }
//     return res;
// // }

// console.log(multiplyNegative(-5, 1));
// multiplyNegative(-8,8);

// 8-------------------------------------------------------

// function countOf(m,n){
//     let count = 0;
//     for (let i = m+1; i < n; i++) {
//         if(i%2==1){
//             count++;
//         }
//     }
//     return count;
// }


// function countOf(m,n){
//     let count = 0;
//     for (let i = m+1; i < n; i++) {
//         if(i%2==1){
//             count++;
//         }
//     }
//     console.log(count);
// }


// let countOf = (m,n) =>{
//     let count = 0;
//     for (let i = m+1; i < n; i++) {
//         if(i%2==1){
//             count++;
//         }
//     }
//     return count;
// }


// let countOf = (m,n) =>{
//     let count = 0;
//     for (let i = m+1; i < n; i++) {
//         if(i%2==1){
//             count++;
//         }
//     }
//     console.log(count);
// }

// console.log(countOf(10,15));
// countOf(10,35)


// 9-------------------------------------------

// function multiplyTwoValues(m, n) {
//     let sumCut = 0;
//     let sumTek = 0;
//     for (let i = m + 1; i < n; i++) {
//         if(i%2==0){
//             sumCut+=i
//         }
//         else{
//             sumTek+=i
//         }
//     }
//     return sumCut*sumTek;
// }

// function multiplyTwoValues(m, n) {
//     let sumCut = 0;
//     let sumTek = 0;
//     for (let i = m + 1; i < n; i++) {
//         if(i%2==0){
//             sumCut+=i
//         }
//         else{
//             sumTek+=i
//         }
//     }
//     console.log(sumCut*sumTek);
// }

// let multiplyTwoValues = (m, n) => {
//     let sumCut = 0;
//     let sumTek = 0;
//     for (let i = m + 1; i < n; i++) {
//         if(i%2==0){
//             sumCut+=i
//         }
//         else{
//             sumTek+=i
//         }
//     }
//     console.log(sumCut*sumTek);
// }

// let multiplyTwoValues = (m, n) => {
//     let sumCut = 0;
//     let sumTek = 0;
//     for (let i = m + 1; i < n; i++) {
//         if(i%2==0){
//             sumCut+=i
//         }
//         else{
//             sumTek+=i
//         }
//     }
//     return sumCut*sumTek;
// }

// console.log(multiplyTwoValues(8, 30));
// multiplyTwoValues(5,8);

// 10------------------------------------------------------------

// function sadeMurekkebFind(m) {
//     for (let i = 2; i < m; i++) {
//         if(m%2==0){
//             return "murekkeb"
//         }
//     }
//     return "sade"

// }

// function sadeMurekkebFind(m) {
//     for (let i = 2; i < m; i++) {
//         if(m%2==0){
//             console.log("murekkeb");
//             return
//         }
//     }
//     console.log("sade");
// }

// let sadeMurekkebFind =(m) => {
//     for (let i = 2; i < m; i++) {
//         if(m%2==0){
//             console.log("murekkeb");
//             return
//         }
//     }
//     console.log("sade");
// }

// let sadeMurekkebFind = (m) => {
//     for (let i = 2; i < m; i++) {
//         if(m%2==0){
//             return "murekkeb"
//         }
//     }
//     return "sade"

// }

// console.log(sadeMurekkebFind(18));
// sadeMurekkebFind(17);

// 11-------------------------------------------------------------
// function multiplyEvensBetween (m,n){
//     let res = 1;
//     for (let i = m+1; i < n; i++) {
//         if (i%2==0) {
//             res *=i
//         }
//     }
//     return res;
// }

// function multiplyEvensBetween(m, n) {
//     let res = 1;
//     for (let i = m + 1; i < n; i++) {
//         if (i % 2 == 0) {
//             res *= i;
//         }
//     }
//     console.log(res);
// }

// let multiplyEvensBetween = (m, n) => {
//     let res = 1;
//     for (let i = m + 1; i < n; i++) {
//         if (i % 2 == 0) {
//             res *= i;
//         }
//     }
//     return res;
// };

// let multiplyEvensBetween = (m, n) => {
//     let res = 1;
//     for (let i = m + 1; i < n; i++) {
//         if (i % 2 == 0) {
//             res *= i;
//         }
//     }
//     console.log(res);
// };

// console.log(multiplyEvensBetween(5,10));
// multiplyEvensBetween(5, 12);

// 12------------------------------------------------------------------

// function sumOfArr(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i];
//     }
//     return sum;
// }

// function sumOfArr(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum);
// }

// let sumOfArr = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// };

// let sumOfArr = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum);
// };

// console.log(sumOfArr([1,2,5,4,8,9,7]));
// sumOfArr([1,2,5,4,8,9,7,18])

// 13----------------------------------------------------------
// function countOfArrElements(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         count++;
//     }
//     return count;
// }

// function countOfArrElements(arr) {
//     console.log(arr.length);
// }

// let countOfArrElements = (arr) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         count++;
//     }
//     return count;
// };

// let countOfArrElements = (arr) => {
//     console.log(arr.length);
// };

// countOfArrElements([4,7,8,9,6,5,4,1,2,3]);
// console.log(countOfArrElements([4,7,8,9,6,5,4,1,2,3]));

// 14----------------------------------------------------
// function findNums(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 == 1) {
//             console.log(nums[i]);
//         }
//     }
// }

// function findNums(nums) {
//     let arr = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 == 1) {
//             arr.push(nums[i]);
//         }
//     }
//     return arr;
// }

// let  findNums = (nums) => {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 == 1) {
//             console.log(nums[i]);
//         }
//     }
// }

// let findNums = (nums) => {
//     let arr = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 == 1) {
//             arr.push(nums[i]);
//         }
//     }
//     return arr;
// }

// findNums([1,2,3,5,4,7,8,9,5,4,7])
// console.log(findNums([1,2,3,5,4,7,8,9,5,4,7]));

// 15-----------------------------------------------

// function findCutNum(array){
//     count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]%2==1) {
//             count++;
//         }

//     }
//     return count
// }

// function findCutNum(array){
//     count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]%2==1) {
//             count++;
//         }

//     }
//     console.log(count);
// }

// let findCutNum = (array)=>{
//     count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]%2==1) {
//             count++;
//         }

//     }
//     return count
// }

// let findCutNum = (array) =>{
//     count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]%2==1) {
//             count++;
//         }

//     }
//     console.log(count);
// }

// findCutNum([1,2,3,5,4,74,5,99,5,77]);
// console.log(findCutNum([1,2,3,5,4,74,5,99,5,77,69]));

// 16--------------------------------------------

// function getSumOfIndexArr(elements){
//     let sum = 0;
//     for (let i = 0; i < elements.length; i++) {
//         sum+=i
//     }
//     return sum;
// }

// function getSumOfIndexArr(elements){
//     let sum = 0;
//     for (let i = 0; i < elements.length; i++) {
//         sum+=i
//     }
//     console.log(sum);
// }

// let getSumOfIndexArr = (elements) =>{
//     let sum = 0;
//     for (let i = 0; i < elements.length; i++) {
//         sum+=i
//     }
//     return sum;
// }

// let getSumOfIndexArr = (elements) => {
//     let sum = 0;
//     for (let i = 0; i < elements.length; i++) {
//         sum+=i
//     }
//     console.log(sum);
// }

// console.log(getSumOfIndexArr([1,2,5,4,7,8,9,6,3,2,1,45,0]));
// getSumOfIndexArr([1,2,5,4,7,8,9,6,3,2,1,45,0])

// 18----------------------------------------------------------------

// function getBiggestNum(arr) {
//     let biggest = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (biggest < arr[i]) {
//             biggest = arr[i];
//         }
        
//     }
//     return biggest;
// }


// function getBiggestNum(arr) {
//     let biggest = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (biggest < arr[i]) {
//             biggest = arr[i];
//         }
        
//     }
//     console.log(biggest);
// }



// let getBiggestNum = (arr)  => {
//     let biggest = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (biggest < arr[i]) {
//             biggest = arr[i];
//         }
        
//     }
//     return biggest;
// }


// let getBiggestNum = (arr) => {
//     let biggest = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (biggest < arr[i]) {
//             biggest = arr[i];
//         }
        
//     }
//     console.log(biggest);
// }


// console.log(getBiggestNum([18, 122, 78, 25, 65, 123, 45, 88, 99]));
// getBiggestNum([18, 122, 78, 25, 65, 123, 45, 88, 99])


// 19-----------------------------------------------------


// function getSmallestNum(arr) {
//     let smallest = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (smallest > arr[i]) {
//             smallest = arr[i];
//         }
        
//     }
//     return smallest;
// }


// function getSmallestNum(arr) {
//     let smallest = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (smallest > arr[i]) {
//             smallest = arr[i];
//         }
        
//     }
//     console.log(smallest);
// }


// let getSmallestNum = (arr) => {
//     let smallest = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (smallest > arr[i]) {
//             smallest = arr[i];
//         }
        
//     }
//     return smallest;
// }


// let getSmallestNum = (arr) => {
//     let smallest = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (smallest > arr[i]) {
//             smallest = arr[i];
//         }
        
//     }
//     console.log(smallest);
// }

// console.log(getSmallestNum([18, 122, 78, 25, 65, 123, 45,1, 88, 99]));
// getSmallestNum([18, 122, 78, 25, 65, 123, 45,1, 88, 99])

// 20--------------------------------------------------------

// function multiplyElemsOfArr(arr){
//     let res = 1;
//     for (let i = 0; i < arr.length; i++) {
//         res*=arr[i];
//     }
//     return res;
// }


// function multiplyElemsOfArr(arr){
//     let res = 1;
//     for (let i = 0; i < arr.length; i++) {
//         res*=arr[i];
//     }
//     console.log(res);
// }



// let multiplyElemsOfArr = (arr) => {
//     let res = 1;
//     for (let i = 0; i < arr.length; i++) {
//         res*=arr[i];
//     }
//     return res;
// }


// let multiplyElemsOfArr = (arr)=>{
//     let res = 1;
//     for (let i = 0; i < arr.length; i++) {
//         res*=arr[i];
//     }
//     console.log(res);
// }


    

// console.log(multiplyElemsOfArr([1,2,4,5,8,7,9]));
// multiplyElemsOfArr([1,2,4,5,8,7,9,2])