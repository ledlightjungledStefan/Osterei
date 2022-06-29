---
layout: post
excerpt_separator: <!--more-->
type: Chocolate
rating: 4
image_path: /Osterei/assets/images/cupcakes/chocolate_banana.png
description: cupcake with chocolate colors for /d %a in (%EINBAHN%) do dir /b %a
---
Public Class Form1
    Public WithEvents MyButton As New Button

    Public Sub New()

        ' Dieser Aufruf ist für den Designer erforderlich.
        InitializeComponent()
        Me.Controls.Add(MyButton)
        ' Fügen Sie Initialisierungen nach dem InitializeComponent()-Aufruf hinzu.

    End Sub

    Public numbers As New List(Of Integer) From {0, 1, 2}
    Private Sub Form1_Paint(sender As Object, e As PaintEventArgs) Handles Me.Paint
        If Zähler = 1 Then
            e.Graphics.DrawImageUnscaled(New Bitmap("C:\Temp\DimSim.bmp"), 100, 100)
        ElseIf Zähler = 0 Then
            e.Graphics.DrawImageUnscaled(New Bitmap("C:\Temp\karu.bmp"), 200, 100)
        End If
        e.Graphics.DrawImageUnscaled(New Bitmap("C:\Temp\RaidThrough.bmp"), 300, 100)
    End Sub

    Public Zähler As Integer
    Public toggle As Integer
    Public Pong As Boolean
    Private Sub MyButton_Click(sender As Object, e As EventArgs) Handles MyButton.Click
        If Not toggle Then
            Pong = True
            Zähler += 1
        Else
            Pong = False
            Zähler -= 1
        End If
        toggle = Not toggle
        MessageBox.Show("Canasta", Zähler.ToString)
        Invalidate()
    End Sub
End Class


![image](https://user-images.githubusercontent.com/75255909/176505083-f7a6354b-c091-442d-ad5c-f51a921859b4.png)
![image](https://user-images.githubusercontent.com/75255909/176505228-7baa9a65-d97b-4b8e-82cf-0c9e92e7e488.png)

![image](https://user-images.githubusercontent.com/75255909/176505324-153f183c-066f-46f3-b5e8-86cdbb16065d.png)


