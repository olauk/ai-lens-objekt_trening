// Trykk knapp A for å trene kamera. Skjermen på microbit viser hvilken objekt-id du trener.
input.onButtonPressed(Button.A, function () {
    if (Objekt_ID == 1) {
        basic.showNumber(Objekt_ID)
        PlanetX_AILens.cameraImage()
        PlanetX_AILens.learnObject(PlanetX_AILens.learnID.ID1)
    } else if (Objekt_ID == 2) {
        basic.showNumber(Objekt_ID)
        PlanetX_AILens.cameraImage()
        PlanetX_AILens.learnObject(PlanetX_AILens.learnID.ID2)
    } else if (Objekt_ID == 3) {
        basic.showNumber(Objekt_ID)
        PlanetX_AILens.cameraImage()
        PlanetX_AILens.learnObject(PlanetX_AILens.learnID.ID3)
    } else if (Objekt_ID == 4) {
        basic.showNumber(Objekt_ID)
        PlanetX_AILens.cameraImage()
        PlanetX_AILens.learnObject(PlanetX_AILens.learnID.ID4)
    } else if (Objekt_ID == 5) {
        basic.showNumber(Objekt_ID)
        PlanetX_AILens.cameraImage()
        PlanetX_AILens.learnObject(PlanetX_AILens.learnID.ID5)
    } else {
        basic.showString("Feil")
        Objekt_ID = 1
    }
})
// Denne blokken brukes for å kalibrere servoen, slik at vi kan justere pilen på visningsbrettet. Når knapp A+B trykkes så vises pil mot øst (høyre) og servomotoren settes til 10 grader (peker mot høyre på visningsbrettet)
input.onButtonPressed(Button.AB, function () {
    PlanetX_AILens.ClearlearnObject()
})
// Trykk knapp B for å veksle mellom hvilke 5 objekter du vil trene kameraet til å kjenne igjen.
input.onButtonPressed(Button.B, function () {
    if (Objekt_ID < 5) {
        Objekt_ID += 1
    } else {
        Objekt_ID = 1
    }
})
let Objekt_ID = 0
PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Things)
Objekt_ID = 1
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID1)) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 10)
        basic.pause(100)
    } else if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID2)) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 45)
        basic.pause(100)
    } else if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID3)) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90)
        basic.pause(100)
    } else if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID4)) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 135)
        basic.pause(100)
    } else {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 170)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
