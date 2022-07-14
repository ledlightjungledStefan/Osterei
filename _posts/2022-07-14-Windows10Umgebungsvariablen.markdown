---
layout: post
excerpt_separator: <!--more-->
type: Chocolate
rating: 4
image_path: /Osterei/assets/images/cupcakes/chocolate_banana.png
description: cupcake with chocolate colors for /d %a in (%EINBAHN%) do dir /b %a
---
    Public Class Form1
    Public WorkOut As New PapierStreifen
    Public WithEvents MyButton As New Button
    Public WaehrendDemEinAusAtmen As New SchnittFlaechen
    Public WithEvents MyListBox As New ListBox
    Public Sub New()

        ' Dieser Aufruf ist für den Designer erforderlich.
        InitializeComponent()

        Controls.Add(MyButton)
        WorkOut.Ergonomisch(MyButton)

        Controls.Add(MyListBox)
        WaehrendDemEinAusAtmen.HerzGibtUndNimmt(MyListBox)
        WaehrendDemEinAusAtmen.UnExpected(MyListBox)
        ' Fügen Sie Initialisierungen nach dem InitializeComponent()-Aufruf hinzu.

    End Sub
    Public ToggleSwitch As Integer
    Public KannIch_BuBi As String = Nothing 'Buchstaben_Bilden für meinen MaßStab?
    Private Sub MyButton_Click(sender As Object, e As EventArgs) Handles MyButton.Click
        If Not ToggleSwitch Then
            MyButton.Text = "Status: OFF"
            MyListBox.Items.RemoveAt(0)
        Else
            MyButton.Text = "Status: ON"
            MyListBox.Items.Add(InputBox(KannIch_BuBi))
        End If
        ToggleSwitch = Not ToggleSwitch
    End Sub
    End Class

![image](https://user-images.githubusercontent.com/75255909/179050212-72feffb5-0dfe-451c-b347-3b25c79dc683.png)

    Public Class PapierStreifen
    Inherits Button
    Sub Ergonomisch(LosLassen As Button)
        With LosLassen
            .Location = New Point(100, 100)
            .Size = New Size(100, 100)
            .Text = "Status: ON"
        End With
    End Sub
    End Class

Den wievielten Atest hatten wit heute?

    Public Class SchnittFlaechen
    Inherits ListBox
    Sub HerzGibtUndNimmt(Frequenz As ListBox)
        With Frequenz
            .Location = New Point(300, 70)
            .Size = New Point(200, 50)
        End With
    End Sub
    Public dinosaurs As New List(Of String)
    Public tokotronik, wirhielten As String
    Sub UnExpected(Frequenz As ListBox)
        tokotronik = "nichtmeinlied"
        wirhielten = "registriert"
        dinosaurs.Add($"{tokotronik}")
        dinosaurs.Add($"{wirhielten}")
        With Frequenz
            For Each TaoTaoPanda As String In dinosaurs
                .Items.Add(TaoTaoPanda)
            Next
        End With
    End Sub
    End Class

![image](https://user-images.githubusercontent.com/75255909/179051085-422be465-07e3-4d9b-8b40-1927819d9f7d.png)

Und last but not least:

![image](https://user-images.githubusercontent.com/75255909/179051246-1fa93505-31cb-435f-9ebc-89123587c0ef.png)
![image](https://user-images.githubusercontent.com/75255909/179055606-dd50324b-6162-43b8-adeb-3e6807ae8523.png)

Ist in Arbeit!
