# Online-Dice:

![](https://img.shields.io/website-up-down-green-red/http/monip.org.svg)
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A really fun way to create your own Arbiter 😂 Change Player's name and find out who shall have The Last Bite.</br>
Here's an explanation to the source code. I've also provided images in images folder, if you wish to use images instead of making a dice of your own in CSS, you can use the following code explanation to help guide you.

### Check functionality [HERE](https://sanjanastyles.github.io/online-dice/)
# OR
[![Watch Video](https://cdn.discordapp.com/attachments/833716260696489984/996320473816244274/unknown.png)](https://res.cloudinary.com/upwork-fp/video/upload/c_scale,w_1000,q_auto/v1657611370/profile/portfolio/1546501955135127552/n58l6i1vyolozup8upxx.mp4)

<div>

## HTML
### Using Image folder

In this case we will display dice cubes as images, For which we will have to declare them as follows in the body tag of div `dice` 

```html
<img class="img" src="images/dice6.png" />
```

![](https://media.discordapp.net/attachments/947060629066354689/993820631034494996/unknown.png)


</div>

<div>

## JavaScript

### Using Image folder

<p>

We find random number to change our dice's value. As the dice's value will be in range of `1 to 6`.

```js
Math.floor(Math.random() * 6) + 1;
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

Now that we've got our image sources, all that's left is to change the source in HTML. To do the same we need to change the src of `<img class="img" src="images/dice6.png" />`

```js
document
  .querySelectorAll("img")
  [n - 1].setAttribute("src", randomImageSource - n);
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

When `useDark.matches` is true, i.e the user's OS is set t o dark mode it will call on to the function  `toggleDarkMode` to set the SCSS to `dark-mode`. 

```js
toggleDarkMode(useDark.matches);

function toggleDarkMode(state) {
  document.documentElement.classList.toggle("dark-mode", state);
}
```
You can further refer to [web.dev](https://web.dev/prefers-color-scheme/) for more information about `prefers color scheme`

<img src="https://cdn.discordapp.com/attachments/947060629066354689/993829602394918963/unknown.png" style="width: 45%;"/> <img src="https://cdn.discordapp.com/attachments/947060629066354689/993829715175538718/unknown.png" style="width: 45%;"/>

### Dice Result

<p> Random number is determined using the same steps as mentioned above. Here we use class to display our dice. </p>

```js
var ResultClass = "result-" + randomNumber;
```

<p>By removing `currentClass` we can keep showing random dice faces using classes, as we need to avoid class repetition, keeping confusion on bay. </p>

````js
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
````
</div>

<div>

## SCSS
I've used [Live Sass Complier](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass) make sure "watching" is turned on. 🤫 I forgot to turn it own many times and wonder why nothing would change.
</br><img src="https://cdn.discordapp.com/attachments/947060629066354689/993882750291550308/unknown.png" style="width: 30%">
```
Id: glenn2223.live-sass
Description: Compile Sass or Scss to CSS at realtime.
Version: 5.4.0
Publisher: Glenn Marks`
```

### Images Folder
<p>I hope you can figure styling for  dices using IMAGES FOLDER. But a PS: A survey states that most people like their images little less popped when using dark mode. A trick to do that is using the following in my opinion. Good Luck.</p>

```scss
img:not([src*='.svg']) {
  filter: var(--image-filter);
}
```

### Original Code

As we've seen in the JavaScript part, we are going to display the resulted dice face using a class namely `result- + random number`. To give a `3D` effect to or dices. 

```scss
transform-style: preserve-3d;
transform: translateZ(-100px);
  ```

</div>

Consider Following </br>
<a href="https://github.com/sanjanastyles"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
<a href="https://www.linkedin.com/in/sanjana-mondal-6b727b1aa/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
