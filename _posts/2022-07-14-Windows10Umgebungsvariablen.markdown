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

Nachdem Set eine beliebige Stelle sein kann währe Get eine Funktionsgleichung und in Windows gab es nicht schon alle Beispiele.
Der zweite nachfolgende Link ist nicht mit einer Funktionsgleichung und außerdem mit nicht mit Operatorenzeichen.

Das Beispiel das ich zusammenstellte ist folgendermassen:

    Public Class Form1
    Dim FirstName, LastName As String
    Property FullName() As String
        Get
            If LastName = "" Then
                Return FirstName
            Else
                Return FirstName & " " & LastName
            End If

        End Get
        Set(ByVal Value As String)
            Dim Space As Integer = Value.IndexOf(" ")
            If Space < 0 Then
                FirstName = Value
                LastName = ""
            Else
                FirstName = Value.Substring(0, Space)
                LastName = Value.Substring(Space + 1)
            End If
        End Set
    End Property
    Function StringBrowser()
        Return "MyFirstName MyLastName"
    End Function
    Dim StrangeOdds As String

    Public Sub New()
        StrangeOdds = StringBrowser()
        MsgBox(StrangeOdds)
        ' Dieser Aufruf ist für den Designer erforderlich.
        InitializeComponent()

        ' Fügen Sie Initialisierungen nach dem InitializeComponent()-Aufruf hinzu.

    End Sub
    End Class

dER aUSDRUCK IST
![image](https://user-images.githubusercontent.com/75255909/179172075-0158474b-87ae-49e5-b277-bd6186b699ae.png)

[Isolation - Mind Field (Ep 1) - YouTube](https://www.youtube.com/watch?v=iqKdEhx-dD4)
[SET ein beliebtes Kartenspiel](https://ledlightjungledstefan.github.io/Osterei/assets/SET%20INSTRUCTIONS%20-%20GERMAN.pdf)

[GET oder SET in Windows](https://docs.microsoft.com/de-at/dotnet/visual-basic/programming-guide/language-features/procedures/how-to-create-a-property)
Ich empfehle noch zusätzlich den Link

[Ausgaben von Funktionen müssen nicht in sich geschlossen sein](https://docs.microsoft.com/en-us/dotnet/visual-basic/programming-guide/language-features/procedures/function-procedures)

Ist in Arbeit!
