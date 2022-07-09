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
![image](https://user-images.githubusercontent.com/75255909/178124971-47ebea97-8b0c-4cd3-9c0a-c555aeb2e47a.png)

Spannend. Mit der Form hatte ich zwei PictureBoxen geladen und die linke PictureBox ist mit einem Bild geladen.
Spannend ist, dass ein Eigentum der PictureBox ist das Zoom verwendet wird und das Bild wirklich nur mit dem

Format geladen ist das Verfügbar ist. Noch immer, jedesmal wenn ich den windows Texteditor verwende, drücke ich
erst die Entertste und dann die Tabulatortaste um ein gefühl dafür haben zu können, dass ich windows nicht

entwickelt habe.
Das was ich noch angeben möchte ist, dass das Bild nicht Formfüllend in der PictureBox geladen wurde.

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

    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles Me.Load
        WieErwartet.ZoomOut.Image = New Bitmap(Image.FromFile("C:\Users\plane\OneDrive\Bilder\expand.jpg"))
    End Sub
    End Class
