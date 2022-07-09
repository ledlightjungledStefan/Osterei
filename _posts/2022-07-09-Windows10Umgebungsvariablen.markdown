---
layout: post
excerpt_separator: <!--more-->
type: Chocolate
rating: 4
image_path: /Osterei/assets/images/cupcakes/chocolate_banana.png
description: cupcake with chocolate colors for /d %a in (%EINBAHN%) do dir /b %a
---
![image](https://user-images.githubusercontent.com/75255909/178091603-082e0afc-2138-4e67-82eb-c38e56529574.png)
Das ist ein Arduino

![image](https://user-images.githubusercontent.com/75255909/178091626-0c200fa1-df83-4180-9e16-32e51a81bdb8.png)
![image](https://user-images.githubusercontent.com/75255909/178091748-bab24742-78cf-48d0-845b-0279df2e330b.png)

https://www.youtube.com/watch?v=D29ZfSasjVk
![image](https://user-images.githubusercontent.com/75255909/178091777-8799611c-73c4-42af-88dd-3e429c409e93.png)

    Public Class Form1
    Public TheeasiestWay As New MyButtons
    Public WieErwartet As New MyPictureBoxes
    Public InsOffeneMesser As New MyLabel
    Public Sub New()

        ' Dieser Aufruf ist für den Designer erforderlich.
        InitializeComponent()
        MethodThree()
        MethodTwo()
        MethodOne()
        ' Fügen Sie Initialisierungen nach dem InitializeComponent()-Aufruf hinzu.
        With Me
            .Location = New Point(100, 100)
            .Size = New Size(1100, 700)
        End With
    End Sub
    Sub MethodThree()
        InsOffeneMesser.KontaijnerGaeng(InsOffeneMesser.GerundBindung)
        Controls.Add(InsOffeneMesser.GerundBindung)
    End Sub
    Sub MethodTwo()
        WieErwartet.BildKisteZwei(WieErwartet.ZoomOut)
        WieErwartet.BildKisteEins(WieErwartet.StreamFight)
        Controls.AddRange({WieErwartet.ZoomOut, WieErwartet.StreamFight})
    End Sub
    Sub MethodOne()
        TheeasiestWay.KnopfDrei(TheeasiestWay.UkeViolent)
        TheeasiestWay.KnopfZwei(TheeasiestWay.AimedSteam)
        TheeasiestWay.KnopfEins(TheeasiestWay.StummbleUpon)
        Controls.AddRange({TheeasiestWay.StummbleUpon, TheeasiestWay.AimedSteam, TheeasiestWay.UkeViolent})
    End Sub
    End Class
