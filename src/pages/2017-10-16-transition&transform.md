---
title: For show external CSS file, image and syntax highlight
subtitle: About CSS3 transition & transform.
date: 2017-10-16 00:00:00 +8
externalCSS: transition-transform
tags:
  - CSS3
---

![TimingFunction](/img/TimingFunction.png)

```css
.test {
  /*各个浏览器下的写法*/
  /*@prop 过渡效果作用的属性*/
  /*@time 过渡效果持续的时间，单位为 s 或者 ms */
  -webkit-transition: prop time; /*Chrome and Safari*/
  -moz-transition: prop time; /*FireFox*/
  -ms-transition: prop time; /*IE*/
  -o-transition: prop time; /*Opera*/
  transition: prop time; /*标准写法*/
}
```

<div class="test-container">
    <div class="contents test"></div>
</div>

```css
.test {
  background-color: darksalmon;
  transition: all 2s;
}

.test:hover {
  background-color: violet;
  width: 300px;
}
```

```css
transition: [<transition-property> || <transition-duration>
        || <transition-timing-function> || <transition-delay>]
        [, [<transition-property> || <transition-duration>
        || <transition-timing-function> || <transition-delay>]]*);
```

<div class="test-container">
    <div class="contents test-prop"></div>
</div>

```css
.test-prop {
  background-color: grey;
  transition: background-color 1s;
}

.test-prop:hover {
  background-color: #269abc;
  width: 300px;
}
```

<div class="test-container">
    <div class="contents test-dura-1s"></div>
</div>
<div class="test-container">
    <div class="contents test-dura-5s"></div>
</div>

```css
.test-dura-1s {
  background-color: skyblue;
  transition: all 1s;
}

.test-dura-1s:hover {
  background-color: yellowgreen;
  width: 300px;
}

.test-dura-5s {
  background-color: skyblue;
  transition: all 5s;
}

.test-dura-5s:hover {
  background-color: yellowgreen;
  width: 300px;
}
```

<div class="test-container">
    <div class="contents test-linear">linear</div>
</div>

<div class="test-container">
    <div class="contents test-ease">ease</div>
</div>

<div class="test-container">
    <div class="contents test-ease-in two-line">ease<br>in</div>
</div>

<div class="test-container">
    <div class="contents test-ease-out two-line">ease<br>out</div>
</div>

<div class="test-container">
    <div class="contents test-ease-in-out two-line">ease<br>in-out</div>
</div>

```css
.test-linear {
  background-color: pink;
  transition: all 2s linear;
}

.test-linear:hover {
  background-color: rebeccapurple;
  width: 300px;
  color: white;
}

.test-ease {
  background-color: pink;
  transition: all 2s ease;
}

.test-ease:hover {
  background-color: rebeccapurple;
  width: 300px;
  color: white;
}

.test-ease-in {
  background-color: pink;
  transition: all 2s ease-in;
}

.test-ease-in:hover {
  background-color: rebeccapurple;
  width: 300px;
  color: white;
}

.test-ease-out {
  background-color: pink;
  transition: all 2s ease-out;
}

.test-ease-out:hover {
  background-color: rebeccapurple;
  width: 300px;
  color: white;
}

.test-ease-in-out {
  background-color: pink;
  transition: all 2s ease-in-out;
}

.test-ease-in-out:hover {
  background-color: rebeccapurple;
  width: 300px;
  color: white;
}
```

<div class="test-container">
    <div class="contents test-steps two-line">steps<br>5</div>
</div>

```css
.test-steps {
  background-color: pink;
  transition: all 1s steps(5);
}

.test-steps:hover {
  background-color: rebeccapurple;
  width: 300px;
  color: white;
}
```

<div class="test-container">
    <div class="contents test-delay-0s two-line">delay<br>0s</div>
</div>

<div class="test-container">
    <div class="contents test-delay-2s two-line">delay<br>2s</div>
</div>

```css
.test-delay-0s {
  background-color: orangered;
  transition: all 2s ease;
}
.test-delay-0s:hover {
  background-color: blueviolet;
  width: 300px;
  color: white;
}

.test-delay-2s {
  background-color: orangered;
  transition: all 1s ease 2s;
}
.test-delay-2s:hover {
  background-color: blueviolet;
  width: 300px;
  color: white;
}
```

<div class="test-container-big">
    <div class="contents test-transform"></div>
</div>

<div class="test-container">
    <div class="contents test-transform-back"><div class="fill two-line">ROTATE</div></div>
    <div class="contents test-transform-back second"><div class="fill two-line">SCALE</div></div>
    <div class="contents test-transform-back third"><div class="fill two-line">TRANSLATE</div></div>
</div>

<div class="test-container second height-plus">
    <div class="contents test-transform-back"><div class="fill two-line">ROTATE-X</div></div>
    <div class="contents test-transform-back second"><div class="fill two-line">ROTATE-Y</div></div>
    <div class="contents test-transform-back third"><div class="fill two-line">ROTATE(O)</div></div>
</div>

```css
/*通用的容器设定*/
.test-transform-back .fill {
  background-color: #5bdaff;
  transition: all 0.3s ease;
  opacity: 0.5;
}

/*ROTATE*/
.test-transform-back:hover .fill {
  transform: rotate(45deg);
}

/*SCALE*/
.test-transform-back.second:hover .fill {
  transform: scale(2);
}

/*TRANSLATE*/
.test-transform-back.third:hover .fill {
  transform: translate(15px, 15px);
}
```

```css
/*通用容器追加透视属性*/
.test-container.second .test-transform-back {
  perspective: 100px;
}

/*ROTATE-X*/
.test-container.second .test-transform-back:hover .fill {
  transform: rotateX(45deg);
}

/*第二个和第三个效果的圆心定位*/
.test-container.second .test-transform-back.second .fill,
.test-container.second .test-transform-back.third .fill {
  transform-origin: 0 100% 0;
}

/*ROTATE-Y*/
.test-container.second .test-transform-back.second:hover .fill {
  transform: rotateY(-45deg);
}

/*ROTATE(O)*/
.test-container.second .test-transform-back.third:hover .fill {
  transform: rotate(45deg);
}
```
