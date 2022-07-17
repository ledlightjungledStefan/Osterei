---
layout: post
excerpt_separator: <!--more-->
type: Chocolate
rating: 4
image_path: /Osterei/assets/images/cupcakes/chocolate_banana.png
description: cupcake with chocolate colors for /d %a in (%EINBAHN%) do dir /b %a
---
[SET ein beliebtes Kartenspiel](https://ledlightjungledstefan.github.io/Osterei/assets/SET%20INSTRUCTIONS%20-%20GERMAN.pdf)
riharstefan@aon.at

[Meine Adresse und Telefonnummer](https://github.com/ledlightjungledStefan/Osterei/blob/gutenberggnu/_includes/adressof_dateiformat.png))
![image](https://user-images.githubusercontent.com/75255909/179389068-463fa241-6681-4b4b-8cfb-0b2173e26bf2.png)

![image](https://user-images.githubusercontent.com/75255909/179389093-ff10e30f-ffaf-4a7c-8a62-1b77ec399f16.png)
![image](https://user-images.githubusercontent.com/75255909/179389143-4f8e0409-a5b0-4e24-8a2a-56ce005c3b85.png)

![image](https://user-images.githubusercontent.com/75255909/179389160-e7e6c27b-0655-41d1-875d-13946562ef14.png)
![image](https://user-images.githubusercontent.com/75255909/179389170-dc39cad9-d3b1-468d-ac83-206a11e989aa.png)

    Public Class Form1
    Public WithEvents DimensionButton As New Button
    Public WithEvents SplinterTextBox As New TextBox
    Public WordChar As String
    Public Sub New()

        ' Dieser Aufruf ist für den Designer erforderlich.
        InitializeComponent()
        Me.Controls.Add(SplinterTextBox)
        SchildkroetenSchluessel(SplinterTextBox)
        Me.Controls.Add(DimensionButton)
        ' Fügen Sie Initialisierungen nach dem InitializeComponent()-Aufruf hinzu.

    End Sub
    Sub StoerStrom(HandKante As Button)
        With HandKante
            .Location = New Point(50, 50)
            .Size = New Size(50, 50)
        End With
    End Sub
    Sub SchildkroetenSchluessel(Ipanema As TextBox)
        With Ipanema
            .Location = New Point(650, 300)
            .AutoSize = True
            .Multiline = True
            .AcceptsReturn = True
            .WordWrap = False
            .Text = WordChar
        End With
    End Sub
    Private Sub AutoSizeTextBox(ByVal SplinterTextBox As TextBox)
        Const x_margin As Integer = 0
        Const y_margin As Integer = 2
        Dim size As Size = TextRenderer.MeasureText(SplinterTextBox.Text, SplinterTextBox.Font)
        SplinterTextBox.ClientSize = New Size(size.Width + x_margin, size.Height + y_margin)
    End Sub

    Private Sub SplinterTextBox_TextChanged(sender As Object, e As EventArgs) _
        Handles SplinterTextBox.TextChanged
        AutoSizeTextBox(TryCast(sender, TextBox))
    End Sub

    Private Sub Form1_Paint(sender As Object, e As PaintEventArgs) Handles Me.Paint
        FillRectangleRectangle(e)
    End Sub
    Public WordOne, WordTwo, WordThree, WordFour As String
    Private Sub FillRectangleRectangle(ByVal e As PaintEventArgs)

        ' Create solid brush.
        Dim blueBrush As New SolidBrush(Color.Blue)

        ' Create rectangle.
        Dim rect As New Rectangle(WordOne, WordTwo, WordThree, WordFour)

        ' Fill rectangle to screen.
        e.Graphics.FillRectangle(blueBrush, rect)
    End Sub
    Public tempArray(3) As String
    Private Sub DimensionButton_Click(sender As Object, e As EventArgs) Handles DimensionButton.Click
        tempArray = SplinterTextBox.Lines
        WordOne = Convert.ToInt32(tempArray(0))
        WordTwo = Convert.ToInt32(tempArray(1))
        WordThree = Convert.ToInt32(tempArray(2))
        WordFour = Convert.ToInt32(tempArray(3))
        Me.Invalidate()
    End Sub
    End Class
