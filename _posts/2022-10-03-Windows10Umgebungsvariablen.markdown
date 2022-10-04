---
layout: post
excerpt_separator: <!--more-->
type: Chocolate
rating: 4
image_path: /Osterei/assets/images/cupcakes/chocolate_banana.png
description: cupcake with chocolate colors for /d %a in (%EINBAHN%) do dir /b %a
---
° {::comment} ://ledlightjungledstefan.github.io/Osterei/blog {:/comment}
<br>
° {::comment} ://ledlightjungledstefan.github.io/Osterei/ {:/comment}
<br>
° RukolaSeiteEins
<br>
° solarplexus
<br>
° index

Jaz sem sam. Inzerum. Inn the room.
![image](https://user-images.githubusercontent.com/75255909/193558846-d34c296f-3cbe-4566-9606-21305235cf31.png)

![image](https://user-images.githubusercontent.com/75255909/193559632-14f0cf35-3417-4bdf-a505-685634ea8ce4.png)
Kumul-Dattel
<br>

![image](https://user-images.githubusercontent.com/75255909/193556849-671685b7-aa5c-4994-8633-4ca0d7457d38.png)
![image](https://user-images.githubusercontent.com/75255909/193557449-d51498da-e02c-45a9-ba3c-2dcda80a95db.png)

Hallo? "A creators dilema".
'MessageBox.Show("")

If the MessageBox is not in a form click event
it is possible that a MessageBox in a keyupevent

is shown. 
The two main spots are with a contextmenu choice for

example with a textfile called "Eigenschaften" the
"Kartekartenreitereintrag" "Sicherheit" in use

has the possibility to mark the path. The not obvious
part is that below the marked path i can click

on the empty "label" and the marking does not vanish.
I ahve to click on the marked text to unmark it.

Or because i do not speak english to undo the mark.
The second spot related to the above possibilty is

from my point of view that "entweder" the MessageBox
in THE CLICK EVENT is not a comment

or the MessageBox in the KEYUP EVENT is not a comment.
So for you is aiming something between puppet and bread

and for me the missing background labelcolour
and maybe the labeltext is not refreshed.

So if the storage units are proofed still the so
called "abhören" is active and i do not know why?

        Imports System.Enum
        Imports System.ComponentModel
        Imports System.Drawing.Text
        Imports System.IO
        Public Class Form1
            Public WithEvents Tortenheber As New Label
            Public WithEvents PflanzlichesGele As New ListBox
            Public WithEvents Yoghurtarten As New ListBox
            Public FontObjList As New ArrayList
            Public ColorObjList As New ArrayList
            Public Family As FontFamily
            Public InstalledFonts As New InstalledFontCollection
            Public ColorNames(), ColorName As String
            Public cnvrt As TypeConverter = TypeDescriptor.GetConverter(GetType(KnownColor))
            Public message As String = Nothing
            Public path As String = "C:\Users\plane\OneDrive\Desktop\RadischienSalat\EmptyScript.txt"

            'Dim ColorNames(), ColorName As String
            '    ColorNames = System.Enum.GetNames(GetType(KnownColor))
            '    Dim cnvrt As TypeConverter = TypeDescriptor.GetConverter(GetType(KnownColor))

            'For Each ColorName In ColorNames
            '        ColorObjList.Add(Color.FromKnownColor(cnvrt.ConvertFromString(ColorName)))
            '    Next

            '    SmoothieMixer.DataSource = ColorObjList

            Public Sub New()

                ' Dieser Aufruf ist für den Designer erforderlich.
                InitializeComponent()

                ' Fügen Sie Initialisierungen nach dem InitializeComponent()-Aufruf hinzu.
                Me.Controls.AddRange({Tortenheber, PflanzlichesGele, Yoghurtarten})
                BrecherWerte(PflanzlichesGele)
                BifidusKulturen(Yoghurtarten)
                HekelPapier(Tortenheber)
            End Sub

            Sub BrecherWerte(KoordinatenSystem As ListBox)
                For Each Family In InstalledFonts.Families
                    Try
                        FontObjList.Add(New Font(Family, 12))
                    Catch

                    End Try
                Next
                With KoordinatenSystem
                    .Location = New Point(100, 100)
                    .Size = New Size(300, 150)
                    .DataSource = FontObjList
                    .DisplayMember = "Name"
                End With
            End Sub
            Sub BifidusKulturen(LuftfeuchtigkeitsWerte As ListBox)
                ColorNames = GetNames(GetType(KnownColor))
                For Each ColorName In ColorNames
                    ColorObjList.Add(Color.FromKnownColor(cnvrt.ConvertFromString(ColorName)))
                Next
                With LuftfeuchtigkeitsWerte
                    .Location = New Point(450, 100)
                    .Size = New Size(300, 150)
                    .DataSource = ColorObjList
                    .DisplayMember = "Name"
                End With
            End Sub
            Sub HekelPapier(SchriftArten As Label)
                Dim reader = My.Computer.FileSystem.ReadAllText(path & message)
                With SchriftArten
                    .Location = New Point(200, 300)
                    .Size = New Size(450, 100)
                    .Text = reader
                    .DataBindings.Add("ForeColor", ColorObjList, "")
                    .DataBindings.Add("Font", FontObjList, "")
                End With
            End Sub
            Async Sub KlasseStattMasse(message)
                Dim secondletter As Char = "B"
                Using writer As StreamWriter = File.CreateText(message)
                    Await writer.WriteAsync(secondletter)
                End Using

            End Sub
            Private Sub Form1_Click(sender As Object, e As EventArgs) Handles Me.Click
                Me.ActiveControl = Nothing
                'MessageBox.Show("")
            End Sub
            Private Sub Form1_KeyUp(sender As Object, e As KeyEventArgs) Handles Me.KeyUp
                Select Case e.KeyCode
                    Case Keys.Space
                        MessageBox.Show("rEGRETED")
                        'KlasseStattMasse(message)
                        Tortenheber.Text = "Text Changed"
                End Select
            End Sub
        End Class
