import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'text-animation',
    templateUrl: './textAnimation.html',
    styleUrls: ['./textAnimation.css']
})
export class textAnimationComponent implements OnInit {
    title = 'textproject';
    aText = 
        ["There are only 10 types of people in the worldasdsadsadsasd asd  dssadsa a asdasd sa ddsaasd a:"]
    iSpeed = 20; // time delay of print out
    iIndex = 0; // start printing array at this posision
    iArrLength = 0; // the length of the text array
    iScrollAt = 20; // start scrolling up at this many lines

    iTextPos = 0; // initialise text position
    sContents = ''; // initialise contents variable
    iRow; // initialise currents row
    constructor(){
        this.iArrLength =  this.aText[0].length;
    }

    ngOnInit() {
        this.typeAnimation();
    }


    typeAnimation= () => {
        this.sContents = ' ';
        this.iRow = Math.max(0, this.iIndex - this.iScrollAt);
        let destination = document.getElementById("typedtext");

        while (this.iRow < this.iIndex) {
            this.sContents += this.aText[this.iRow++] + '<br />';
        }
        destination.innerHTML = this.sContents + this.aText[this.iIndex].substring(0, this.iTextPos) + "_";
        if (this.iTextPos++ == this.iArrLength) {
            this.iTextPos = 0;
            this.iIndex++;
            if (this.iIndex != this.aText.length) {
                this.iArrLength = this.aText[this.iIndex].length;
                setTimeout(this.typeAnimation, 500);

            }
        } else {
            setTimeout(this.typeAnimation, this.iSpeed);
        }
    }



}
