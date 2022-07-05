# Online-Dice: 
![](https://img.shields.io/website-up-down-green-red/http/monip.org.svg)
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A really fun way to create your own Arbiter 😂 </br>
Here's an explanation to the source code. I've also provided images in images folder, if you wish to use images instead of making a dice of your own in CSS, you can use the following code explanation to help guide you. 
### Check functionality [HERE](https://sanjanastyles.github.io/online-dice/)
<div>

## JavaScript
### Using Image folder
<p>

We find random number to change our dice's value. As the dice's value will be in range of `1 to 6`. 
```js
Math.floor(Math.random() * 6) + 1
```
we use `Math.floor()` method which rounds a number DOWN to the nearest integer, as we need to avoid getting random non-integer numbers.
</p>
<p>

As we use the following as our image source, to cut down the complexity of our code. And hence we save our images as `"dice(number).png"`.
```js
"images/dice" + randomNumber + ".png";
```
</p>
<p>

Now that we've got our image sources, all that's left is to change the source in HTML. To do the same we need to change the src of  `<img class="img" src="images/dice6.png" />` 
```js
document.querySelectorAll("img")[n-1].setAttribute("src", randomImageSource-n);
```
</p>
combine them all to get:

![JavaScript Alternative Code](https://cdn.discordapp.com/attachments/947060629066354689/993809785197703288/unknown.png)

### The Original Code
#### Theme Alter 

```js
useDark.addListener((evt) => toggleDarkMode(evt.matches));
```
Determines the user's color preference even before they switch their website's theme using the `theme` button.
<img src="https://cdn.discordapp.com/attachments/947060629066354689/993829602394918963/unknown.png" alt="my caption" style="width: 45%;"/> <img src="https://cdn.discordapp.com/attachments/947060629066354689/993829715175538718/unknown.png" alt="my caption" style="width: 45%;"/>
</div>


