#include <graphics.h>
#include <stdlib.h>
#include <stdio.h>
#include <conio.h>
#include<dos.h>
int main(void)
{
/* request auto detection */
int gdriver = DETECT, gmode, errorcode;
// int xmax, ymax;
 
/* initialize graphics and local variables */
initgraph(&gdriver, &gmode, “”);
 
/* read result of initialization */
errorcode = graphresult();
/* an error occurred */
if (errorcode != grOk)
{
printf(“Graphics error: %s\n”, grapherrormsg(errorcode));
printf(“Press any key to halt:”);
getch();
exit(1);
}
 
/* setcolor(getmaxcolor());
xmax = getmaxx();
ymax = getmaxy();
 
draw a diagonal line */
// int j=0;
for(int i=0;i<1000;i=i+10)
{
line(300+i, 150, 300+i, 100);
line(100+i, 100, 300+i, 100);
line(300+i, 150, 100+i, 150);
line(100+i, 100, 100+i, 150);
for(int j=0;j<300;j=j+30)
{ setcolor(5);
arc(100+i,170,0+j,180+j,20);
arc(300+i,170,0+j,180+j,20);
setcolor(6);
arc(100+i,170,180+j,360+j,20);
arc(300+i,170,180+j,360+j,20);
delay(50);
// cleardevice();
// circle(300+i,170,20);
}
// setcolor
delay(50);
cleardevice();
 
}
/* for(int i=0;i<1000;i=i+10)
{
line(300+i, 150, 300+i, 100);
line(0+i, 100, 300+i, 100);
line(300+i, 150, 0+i, 150);
line(0+i, 100, 0+i, 150);
circle(0+i,170,20);
circle(300+i,170,20);
delay(100);
cleardevice();
} */
 
/* clean up */
getch();
closegraph();
return 0;
}