# PixelBot GUI
PixelBot GUI is a GUI app designed to help people create simple shapes, such as flags, in PixelCanvas.io. The bot is not helpful if you want to draw stuff with multiple colors or shapes that aren't squares. It allows you to choose 2 pixels on the canvas, and it will fill the area in with a chosen color, or with a randomly chosen color for each pixel.
![alt text](https://i.imgur.com/hBysGm0.png "GUI")

# Installation
## Windows Installer
1. Go to https://github.com/WastefulNick/pcbotgui/releases
2. Download the newest version of pcbotgui.msi 
3. Run pcbotgui.msi and follow the steps
4. You can now search for PixelBot GUI and run it!

## Compiling with electron
1. If you do not have git get it installed from https://git-scm.com/downloads
2. Open a command window and clone the project with `git clone https://github.com/WastefulNick/pcbotgui.git`
3. Run `cd pcbotgui`
4. Run `npm package-mac` if you're using mac, `npm package-win` for windows and `npm package-linux` for linux.
5. Navigate to the release-builds folder and run your exe

# How to use
## Choosing the area
To choose an area you have to get 4 numbers, the x and y coordinates of the top left pixel, and the x and y coordinates of the bottom right pixel. It's important that the first pixel is in the top left of your chosen area, and that the second pixel is in the bottom right.
![alt text](https://i.imgur.com/cQfG5TX.png "x1 and y1 must be the top left pixel")
![alt text](https://i.imgur.com/OSv6nI8.png "x2 and y2 must be the bottom right pixel")
![alt text](https://i.imgur.com/nRrhRXX.png "All completed")

## Choosing color
In the application you can input the color you want to use, the colors are the number 0-15, the color 0 is white, 15 is purple and 4 is pink. If you for example want to use yellow count from the start and you get 8, therefore if you want to use yellow you type 8. You can also type 'r' and it will use a random color for every pixel.
![alt text](https://imgur.com/tN62d85 "The colors are 0-15")

## Getting your fingerprint
1. Go to http://pixelcanvas.io
2. pPress F12 or right click -> Inspect element
3. Open the network tab
4. In filter input paste 'pixel'
5. Place a pixel anywhere on the website
6. Click request name pixel
7. Open the headers tab
8. Your fingerprint is under Request Playload
![alt text](https://user-images.githubusercontent.com/12828465/28237968-24ca07cc-694a-11e7-9df3-32b4d737b44e.png "Thanks to RogerioBlanco for the guide and picture!")

## Run
When everything is filled out simply hit run and you should get a screen that looks something like this, and you should see the pixels getting filled in on the wesbite.
![alt text](https://i.imgur.com/gNFd9ig.png "Done!")

# Thanks to
RogerioBlanco's bot for helping me find how the wasabi is calculated, saved me some time. I also used a bit of his guide (getting your fingerprint).
https://github.com/RogerioBlanco/PixelCanvasBot/blob/master/src/pixelcanvasio.py