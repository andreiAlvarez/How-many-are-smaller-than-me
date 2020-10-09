// solution 1

function smaller(arr) {
    var answer=[]; 
for(var i=0; i<arr.length; i++ ){
  var count=0;
  for(var j=i+1; j<arr.length; j++ ){
     if(arr[i]>arr[j]){
                count++;
     }
  } answer.push(count);
} return answer;
};



