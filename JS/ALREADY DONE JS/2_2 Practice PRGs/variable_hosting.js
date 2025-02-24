// variable hoisting means, when we declare any variable in the global scope, it is automatically moved to the top of the scope. it is not matters it is initialized at that time or not, but the variable declaration is moved to the top of the scope and the initialization will stay as it is.

// below we can see, the declaration we have done at the bottom of the code scope, initialization we have done at the top of the scope and the displaying task of their sum is also done before declaration, even after it is shows us the sum value because the declaration is moved to the top of the scope when it is executing by the interpreter...

a = 20, b = 20, sum = a+b;
console.log(sum);

var a,b,sum;