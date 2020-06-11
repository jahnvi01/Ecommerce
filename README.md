problem 1) go to src>>pages>>address.js

componentwillmount is calling get address api and while i console.log(res) on line 36, it is showing issue related to CORS policy in server.


problem 2) go to src>>pages>>index.js

here i have used 2 different apis to get blogs and banners in componentwillmount...but actually home data without login api should be used to get blogs and banners which is not working here..
