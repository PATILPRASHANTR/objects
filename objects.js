//1. Create a Function

function Check(obj1){
    obj1.setter = function(){
      console.log(obj1.name);
    } 
  }

//2. Delete a Property

function Check(obj1) {
    delete obj1.rollno ;
    return obj1;
 }

//3. Check whether the package is dream package or not

function Check(obj1) {
    if(obj1.salary >= 500000){
      return "Dream";
    }  
    else{
      return "NotDream"
    }
  }

//4. Check whether the Object has a parameter or not

function Check(obj1) {
    let obj=Object.keys(obj1);
    if(obj.length===0){
      return "false";
    }else{
      return"true";
    }
}

//5. Merge the Objects

function Check(obj1,obj2) {
    let merge = Object.assign(obj1,obj2);
    return merge;  
  }

//6.  Object Multiplyer

function Check(a,obj1) {
    obj1.id=a*obj1.id;
    obj1.houseno=a*obj1.houseno;
    return obj1;
}

//7. Find the sum of data numbers

function Check(obj1) {
    return (obj1.p1+obj1.p2+obj1.p3);  
  }

//8. Check whether objects are same or not

function check(obj1,a,b) {
    if(obj1.name === a && obj1.id === b) {
        return true;
      }
      return false;  
  }