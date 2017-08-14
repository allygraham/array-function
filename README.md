# Array Split Function

The purpose of this function:


>Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N equally sized arrays.
>Where the size of the original array cannot be divided equally by N, the final part should have length equal to the remainder.


### Install Mocha

This function is fully unit tested with Mocha. To install Mocha on your machine, open a terminal and type:

```
npm install mocha -g --save-dev
```

More info: [http://mochajs.org/#installation](http://mochajs.org/#installation)


### Clone the project

Clone the project onto your machine:

```
git clone git@github.com:allygraham/array-function.git
```

### Run tests

By typing the command __mocha__ in your terminal while in the project folder, the tests will run.

```
mocha
```


## How it works

The function takes an initial array and the integer. It creates a new empty array for the output as the use of `.splice()` means that items are removed from the initial array. `.splice()` also assists with the while loop as the condition for the while loop is the length of the initial array, as it iterates through `.splice()` makes the length smaller until the initial array is empty. Each iteration also had a `.push()` which moved the removed contents into the output array within it's own array.

Also, for the `.splice()` function to work I had to pass in the number of items I wanted removed from the array in each iteration. To do this I divided the length of the input array by the integer amount to determine how many items should be removed during each iteration for the sub arrays. I rounded this number up with `Math.ceil()` to the nearest whole integer.

