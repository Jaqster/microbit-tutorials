# Barcelona Tourist!

## Introduction @showdialog

🎉 Welcome to Barcelona! Use this tutorial to create a micro:bit program to help you tour this beautiful city! 🏰

![Barcelona](https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Badalona_-_La_Rambla.jpg/330px-Badalona_-_La_Rambla.jpg)

## Welcome message

First, let's welcome the user with a nice message. 👋

From the ``||basic:Basic||`` Toolbox category, drag a ``||basic:show string||`` block onto the Workspace and drop into the ``||basic(noclick):on start||`` block.

```blocks
    // @highlight
    basic.showString("Hola")
```

```blockconfig.local
    basic.showString("Hola")
```

## Shake things up!

Pick a place 📌 to visit by shaking the micro:bit.

From the ``||input:Input||`` Toolbox category, drag a ``||input:on shake||`` block onto the Workspace - you can put it anywhere.

```blocks
    input.onGesture(Gesture.Shake, function () {

})
```

## Create a variable

Let's create a variable 🔢 to hold a random number.

Open the ``||variables:Variables||`` Toolbox menu, click on **Make a Variable**, name it **_random_** and click Ok.

From the ``||variables:Variables||`` Toolbox, drag a ``||variables:set random||`` block out and drop into the ``||input(noclick):on shake||`` block.

```blocks
    input.onGesture(Gesture.Shake, function () {
       // @highlight
       random = 0
})
```

## Pick a random number

Use a function to return a random number between 1 and 3.

Open the ``||math:Math||`` category and drag out a ``||math:pick random||`` block and drop into the ``||variables(noclick):set random||`` block replacing the **0**.

```blocks
    input.onGesture(Gesture.Shake, function () {
        // @highlight
        random = randint(1, 3)
})
```

```blockconfig.local
    randint(1, 3)
```

## Press a button to show destination

When the user presses a button 🟢, let's show the place to visit.

Open the ``||input:Input||`` Toolbox category, drag an ``||input:on button A pressed||`` block onto the Workspace.

```blocks
    input.onButtonPressed(Button.A, function () {

})
```

## Check the random number

Now let's add a conditional statement to see what option to show.

Open the ``||logic:Logic||`` category and drag a ``||logic:if true then else||`` block into the ``||input(noclick):on button A pressed||`` block.

Press the plus **(+)** icon on the block to expand it to add an ``||logic(noclick):else if||`` clause.

```blocks
input.onButtonPressed(Button.A, function () {
    // @highlight
    if (true) {

    } else if (true) {

    } else {

    }
})
```

## Add a comparison operator

From the ``||logic:Logic||`` category again, drag two ``||logic:equals||`` comparison blocks and drop one into the first ``||logic(noclick):if||`` and the second into the ``||logic(noclick):else if||`` replacing the true and false values.

From the ``||variables:Variables||`` Toolbox, drag two ``||variables:random||`` variable blocks out and drop into the first field of the ``||logic(noclick):equals||`` blocks.

Then type the number **1** and **2** into the second fields of the ``||logic(noclick):equals||`` comparison blocks.

```blocks
input.onButtonPressed(Button.A, function () {
    // @highlight
    if (random == 1) {

    } else if (random == 2) {

    } else {

    }
})
```

## Show the destinations

From the ``||basic:Basic||`` category, drag three ``||basic:show string||`` blocks out and place one in each of the ``||logic(noclick):if, else if, else||`` clauses.

In the ``||basic(noclick):show string||`` blocks, type a different tourist destination to visit! 🗺️

```blocks
input.onButtonPressed(Button.A, function () {
    if (random == 1) {
        // @highlight
        basic.showString("Sagrada")
    } else if (random == 2) {
        // @highlight
        basic.showString("Olympics")
    } else {
        // @highlight
        basic.showString("Ramblas")
    }
})
```

## Ve a visitar Barcelona!

Now you're ready to go visit Barcelona! 🤩 Download this program and let your micro:bit be your guide!

```blocks
let random = 0
basic.showString("Hola")
input.onGesture(Gesture.Shake, function () {
    random = randint(1, 3)
})
input.onButtonPressed(Button.A, function () {
    if (random == 1) {
        basic.showString("Sagrada")
    } else if (random == 2) {
        basic.showString("Olympics")
    } else {
        basic.showString("Ramblas")
    }
})
```

```template
//
```